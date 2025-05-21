# zipBoard Junior Position Test Project

This repository contains my solution for the zipBoard junior position test. The project demonstrates my ability to debug issues and implement comprehensive testing in a React application.

## Bug Fix: Login Functionality

### Issue
The login functionality was not working properly - clicking the login button did not redirect users to the welcome screen.

### Solution
I identified and fixed the issue in the `LoginForm` component. The main problems were:
1. The form submission wasn't being handled
2. The `onLogin` prop was received but never used
3. Form data wasn't being passed to the parent component

### Changes Made
I modified `src/components/LoginForm.js` to:
1. Add a `handleSubmit` function that prevents default form submission
2. Connect the form's `onSubmit` event to the handler
3. Pass the form data to the parent component via the `onLogin` prop

### Before and After
![Login Form Before Fix](media/Screenshot%202025-05-19%20203309.png)

The video below demonstrates the fixed login functionality:

https://github.com/user-attachments/assets/c88f44fe-d04d-4786-b648-52680efd2720

## Cypress Testing Implementation

I implemented comprehensive end-to-end tests using Cypress to ensure the application's reliability and functionality.

### Test Location
All tests are located in `cypress/e2e/login.cy.js`

### Test Coverage
The test suite includes:
1. Initial form display verification
2. Form validation testing
3. Successful login flow
4. Form input handling
5. Logout functionality
6. Form state management
7. Special character handling
8. Long input validation

### Test Execution
You can run the tests using:
```bash
npm run cypress:open    # Opens Cypress Test Runner UI
npm run cypress:run     # Runs tests in headless mode
npm run test:e2e        # Runs tests with dev server
```

### Test Implementation
![Cypress Test Implementation](media/Screenshot%202025-05-19%20204045.png)

The video below shows the Cypress tests in action:

https://github.com/user-attachments/assets/62692b52-3a20-4af1-9700-ac622267b834

## Project Setup

### Prerequisites
- Node.js (version 18 or higher)
- npm (comes with Node.js)

### Installation
1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

## Available Scripts
- `npm start` - Runs the app in development mode
- `npm test` - Runs the React testing suite
- `npm run build` - Builds the app for production
- `npm run cypress:open` - Opens Cypress Test Runner
- `npm run cypress:run` - Runs Cypress tests in headless mode
- `npm run test:e2e` - Runs Cypress tests with the dev server

## Project Structure
```
├── src/
│   ├── components/
│   │   ├── LoginForm.js    # Modified for login fix
│   │   ├── LoginForm.css
│   │   ├── Welcome.js
│   │   └── Welcome.css
│   ├── App.js
│   └── App.css
├── cypress/
│   ├── e2e/
│   │   └── login.cy.js     # Comprehensive test suite
│   └── support/
│       ├── commands.js
│       └── e2e.js
└── media/                  # Documentation media
    ├── Screenshot 2025-05-19 203309.png
    ├── Screenshot 2025-05-19 204045.png
    ├── demo_fixed_error.mp4
    └── cypress_testing.mp4
```

## License

This project is for testing purposes only and is not licensed for public use.
