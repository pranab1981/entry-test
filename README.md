# 🧪 React Login App: Cypress Test + Bug Fix

This project is a simple login application built with React. It includes a basic login form and a welcome screen. The project also includes Cypress end-to-end (E2E) tests to ensure that the login flow works as expected.

---

## ✅ Bug Fix: Login Redirect Not Working

### 🔍 Problem

The login form did not redirect the user to the welcome screen after submitting valid input. Clicking "Login" did not cause any state change in the app.

### 🛠️ Fix

The form inside `LoginForm.jsx` was missing an `onSubmit` handler. This caused the `onLogin` callback (passed from the parent `App` component) to never execute.  
**Solution:** Added a `handleSubmit` function with `e.preventDefault()` to stop the form’s default submission behavior (page reload). This allows the `onLogin(formData)` function to execute properly, which updates the `isLoggedIn` state in `App.js` and conditionally renders the welcome screen.

---

## 🧪 Cypress Tests

Cypress test file is located at:
cypress/e2e/login.cy.js

## Cypress Test Overview

Cypress tests were written to cover the end-to-end login flow, including:

- Verifying that the login form renders correctly with empty inputs initially.
- Simulating user input into the name and password fields.
- Submitting the form and checking that the welcome screen appears with the correct user name.
- Testing the logout flow to ensure the app returns to the login form.

## 🤖 AI Tool Usage

I used **ChatGPT** to assist in generating the Cypress test cases. Specifically:

- I provided all three components: `LoginForm.jsx`, `Welcome.jsx`, and `App.js`.
- I asked ChatGPT to create **end-to-end (E2E) test scripts** that cover the login, welcome screen, and logout flow.
