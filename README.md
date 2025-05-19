# Debugging & Testing the Login Component

## 🐛 Discovering the Bug

After spending some time going through the component, I realized something important was missing — the form wasn’t actually listening for the `onSubmit` event. That meant that even though the `onLogin` prop was passed in (which handles redirection), it was never getting called!

To fix this, I added a dedicated submit handler function to the component that would invoke `onLogin` when the form was submitted.

This small oversight reminded me how easy it is to forget glue code that connects UI behavior with actual logic.

## 🤖 How ChatGPT Helped

Once I got the component working, I turned my attention back to the test suite. I had written a basic version of it, but I wanted to make sure it followed best practices in terms of readability, structure, and scalability.

I pasted in the raw test file I had written, and ChatGPT returned a much cleaner, scalable version of the test suite.

---
prompt Used: Please optimize, organize, and structure the following Cypress test code for a React component. Use best practices for readability, maintainability, and scalability. Group related tests properly, reduce redundancy, and improve naming conventions where appropriate. Here's the code:

---

## ✅ Final Cypress Test Structure

Here’s what the improved code looked like:

```js
/// <reference types="cypress" />

// cypress/support/commands.js
Cypress.Commands.add('fillLoginForm', ({ username, password }) => {
  cy.findByRole('textbox', { name: /username/i }).clear().type(username);
  cy.findByLabelText(/password/i).clear().type(password);
});

// cypress/e2e/login.cy.js
describe('Login component', () => {
  const credentials = { username: 'Michael', password: 'password' };

  beforeEach(() => {
    cy.visit('/');
  });

  context('Initial render', () => {
    it('shows username & password inputs and a disabled submit button', () => {
      cy.findByRole('textbox',  { name: /username/i }).should('be.visible');
      cy.findByLabelText(/password/i).should('be.visible');
      cy.findByRole('button',   { name: /sign in/i }).should('be.disabled');
    });
  });

  context('Form validation', () => {
    it('enables the submit button only after both fields are filled', () => {
      cy.findByRole('button', { name: /sign in/i }).as('submit');

      cy.get('@submit').should('be.disabled');
      cy.findByRole('textbox', { name: /username/i }).type(credentials.username);
      cy.get('@submit').should('be.disabled');
      cy.findByLabelText(/password/i).type(credentials.password);
      cy.get('@submit').should('be.enabled');
    });
  });

  context('Successful submission', () => {
    it('logs the user in and shows the welcome message', () => {
      cy.fillLoginForm(credentials);
      cy.findByRole('button', { name: /sign in/i }).click();
      cy.contains(`Welcome, ${credentials.username}!`).should('be.visible');
    });
  });
});
