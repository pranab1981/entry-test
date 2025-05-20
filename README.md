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

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Runs the React testing suite
- `npm run build` - Builds the app for production
- `npm run cypress:open` - Opens Cypress Test Runner
- `npm run cypress:run` - Runs Cypress tests in headless mode
- `npm run test:e2e` - Runs Cypress tests with the dev server

## License

This project is for testing purposes only and is not licensed for public use.

---

### 🐛 Bug Fix Explanation

The original issue in the app was that **logging in did not redirect the user to the welcome page**.  
This occurred because the login logic didn’t properly trigger the redirect using React Router.

#### ✅ Fix:
- I created a wrapper `LoginPage` component using `useNavigate()` from `react-router-dom`.
- Inside the login handler, after updating login state, I added `navigate('/welcome')` to redirect the user upon successful login.

This ensured the login flow completes and navigates to the welcome screen.

---

### ✅ Cypress Tests Summary

I wrote a Cypress test (`cypress/e2e/login.cy.js`) that performs the following:

1. Opens the login page
2. Enters a username and password
3. Submits the login form
4. Asserts that the user is redirected to `/welcome`
5. Checks that the personalized welcome message appears

All test cases pass successfully, confirming that the login functionality and redirection work as expected.




