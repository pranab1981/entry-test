# zipBoard Junior Position Test Project

This is a test repository for the zipBoard junior position application process. This project demonstrates a simple React application with a login form and Cypress testing setup.

## Important Note

This repository is for testing purposes only. Please fork this repository to your own account and do not modify this original repository. All your work should be done in your forked version.

## Required Technologies

To run this project locally, you need to have the following installed:

- Node.js (version 18 or higher)
- npm (comes with Node.js)
- Git

## Getting Started

1. Fork this repository to your own account
2. Clone your forked repository:
   ```bash
   git clone <your-forked-repo-url>
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```
   The application will be available at [http://localhost:3000](http://localhost:3000)

## Testing with Cypress

This project uses Cypress for end-to-end testing. To run the tests:

1. Make sure the development server is running (`npm start`)
2. In a new terminal, you can run Cypress in two ways:

   ### Open Cypress Test Runner (Interactive Mode)
   ```bash
   npm run cypress:open
   ```
   This will open the Cypress Test Runner UI where you can:
   - Choose your preferred browser
   - See all test files
   - Run tests interactively
   - Watch tests run in real-time

   ### Run Tests in Headless Mode
   ```bash
   npm run cypress:run
   ```
   This will run all tests in the terminal without opening the UI.

   ### Run Tests with Dev Server
   ```bash
   npm run test:e2e
   ```
   This command will:
   1. Start the development server
   2. Wait for it to be available
   3. Run all Cypress tests
   4. Shut down the server when done

## Project Structure

```
├── src/
│   ├── components/
│   │   ├── LoginForm.js
│   │   ├── LoginForm.css
│   │   ├── Welcome.js
│   │   └── Welcome.css
│   ├── App.js
│   └── App.css
├── cypress/
│   ├── e2e/
│   │   └── login.cy.js
│   └── support/
│       ├── commands.js
│       └── e2e.js
└── package.json
```

## Bug Fix Explanation

The login form wasn't properly handling form submission events. The form had a submit button but was missing the `onSubmit` handler to process the form data and call the `onLogin` prop. This was fixed by adding a `handleSubmit` function that prevents the default form submission and calls `onLogin` with the form data, along with adding the `onSubmit` handler to the form element.

## Cypress Test Cases

The following test cases have been implemented to verify the login functionality:

1. **Login Form Display**
   - Verifies that the login form is visible
   - Checks for the presence of name input, password input, and submit button

2. **Successful Login and Redirect**
   - Tests the complete login flow with valid credentials
   - Verifies redirection to the welcome page
   - Confirms the welcome message displays the correct username

3. **Logout Functionality**
   - Verifies that the logout button is visible after login
   - Ensures proper UI state after successful login

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Runs the React testing suite
- `npm run build` - Builds the app for production
- `npm run cypress:open` - Opens Cypress Test Runner
- `npm run cypress:run` - Runs Cypress tests in headless mode
- `npm run test:e2e` - Runs Cypress tests with the dev server

## License

This project is for testing purposes only and is not licensed for public use.
