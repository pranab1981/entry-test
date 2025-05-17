# zipBoard Junior Position Test Project

This is a test repository for the zipBoard junior position application process. This project demonstrates a secure React login form with comprehensive testing.

## Important Note

This repository is for testing purposes only. Please fork this repository to your own account and do not modify this original repository. All your work should be done in your forked version.

## Challenge Description

This challenge involved fixing a login redirect bug and implementing comprehensive test coverage. The solution includes:

1. Enhanced form validation and security features
2. Comprehensive Cypress test suite
3. Accessibility improvements (WCAG 2.1)

### Implementation Details

- Added form validation with error handling
- Added ARIA attributes for accessibility
- Created comprehensive test suite covering:
  - Authentication flow
  - Form validation
  - Accessibility compliance
  - Session management
  - Error handling
- Fixed responsive design issues:
  - Added box-sizing: border-box for proper sizing
  - Implemented responsive form container with margins
  - Fixed input field overflow issues
  - Ensured mobile-friendly layout

## Required Technologies

To run this project locally, you need to have the following installed:

- Node.js (version 18 or higher)
- npm (comes with Node.js)
- Git

## Test Credentials

For testing purposes, use these credentials:

```
Username: zipboard_test
Password: ZipBoard@2025
```

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

The project includes a comprehensive test suite covering authentication, security, and accessibility:

### Running Tests

1. Start the development server:

   ```bash
   npm start
   ```

2. Run tests in interactive mode:

   ```bash
   npm run cypress:open
   ```

3. Run tests in headless mode:
   ```bash
   npm run cypress:run
   ```

### Test Coverage

The test suite includes:

- Authentication flow validation
  - Login form elements presence
  - Input field behavior
  - Successful login flow
  - Invalid credentials handling
  - Logout functionality
- Security measures
  - Session termination
- Accessibility compliance
  - ARIA attributes
  - Required field indicators
  - Error message announcements
- Form validation
  - Required fields
  - Error state handling

## Project Structure

```
├── src/
│   ├── components/
│   │   ├── LoginForm.js      # Enhanced login form with validation
│   │   ├── LoginForm.css
│   │   ├── Welcome.js        # Welcome screen component
│   │   └── Welcome.css
│   ├── App.js                # Main app with auth logic
│   └── App.css
├── cypress/
│   ├── e2e/
│   │   └── login.cy.js       # Comprehensive test suite
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
- `npm run test:e2e` - Runs Cypress tests with dev server

## Security Features

- Form validation with error handling
- Secure session management
- Protected routes after logout

## Accessibility

- WCAG 2.1 compliant
- Proper ARIA attributes
- Keyboard navigation support
- Clear error messaging

## License

This project is for testing purposes only and is not licensed for public use.
