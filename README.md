# ✅ Junior Developer Challenge: Login Bug Fix + Cypress Tests

##  Bug Explanation

The login form was missing an `onSubmit` handler, so clicking the login button caused a full page reload, preventing the `onLogin` function from being called. I fixed this by adding a `handleSubmit` function to prevent the default behavior and properly call `onLogin(formData)`.

---

## What Was Done

- ✅ Bug fix: login redirect issue resolved
- ✅ CSS enhancements for Login and Welcome pages
- ✅ Cypress setup and test cases for login flow
- ✅ Added reusable Cypress custom commands

---

## Cypress Tests

Tests written in `cypress/e2e/login.cy.js`:
- Renders login form
- Simulates login with `cy.login()`
- Checks for welcome message
- Logs out with `cy.logout()`
- Verifies redirection back to login form

---

## Custom Cypress Commands

| Command | Type      | Purpose |
|---------|-----------|---------|
| `cy.login(name, password)` | Parent | Logs in with name/password |
| `cy.logout()`              | Parent | Clicks logout button |
| `.highlight()`             | Child  | Adds red border to an element |
| `.flash()`                 | Dual   | Temporarily flashes element or body |
| Overwritten `type()`       | Overwrite | Logs typed value |

Located in `cypress/support/commands.js`

---

##  How to Run Locally

```bash
npm install
npm start      # Starts the React app
npx cypress open  # Opens the Cypress test runner
