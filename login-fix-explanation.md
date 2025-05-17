## 🛠 Bug Explanation

The main issue was that the `onLogin` function was not being called when the form was submitted, and there was no `handleSubmit` function to handle the login logic. I fixed this by adding a `handleSubmit` function that calls `onLogin` with the correct parameters when the form is submitted.

For this challenge, I mainly relied on Copilot autocompletion since the solution was straightforward.

## ✅ Cypress Test

The test verifies:
- The login form is rendered correctly
- Filling in the form and clicking Login renders the welcome screen with a personalized greeting

Cypress test file: `cypress/e2e/login.cy.js`

## 🤖 AI Tool Usage

Used ChatGPT to:
- Craft initial Cypress test cases
