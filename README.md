# zipBoard Junior Position Test Project

This is a test repository for the zipBoard junior position application process. This project demonstrates a simple React application with a login form and Cypress testing setup.

## Implementation Details

### Bug Fix: Login Form Redirection

**Problem Identified:**
The login form wasn't redirecting users after login because it was missing the form submission handler. The form would just refresh the page instead of triggering the login action.

**Solution Implemented:**

1. Added form submission handler in `LoginForm.js`:

```javascript
const handleSubmit = (e) => {
  e.preventDefault(); // Prevent default form refresh
  onLogin(formData); // Call the login handler with form data
};
```

2. Connected the handler to the form:

```javascript
<form className="login-form" onSubmit={handleSubmit}>
```

### Cypress Test Implementation

Three comprehensive test cases were implemented in `cypress/e2e/login.cy.js`:

1. **Form Display Test:**

```javascript
it("should display login form", () => {
  cy.get("form.login-form").should("be.visible");
  cy.get('input[name="name"]').should("be.visible");
  cy.get('input[name="password"]').should("be.visible");
  cy.get('button[type="submit"]').should("be.visible");
});
```

2. **Login Flow Test:**

```javascript
it("should login successfully and redirect to welcome page", () => {
  const testUser = {
    name: "Test User",
    password: "password123",
  };

  cy.get('input[name="name"]').type(testUser.name);
  cy.get('input[name="password"]').type(testUser.password);
  cy.get('button[type="submit"]').click();

  cy.url().should("include", "/welcome");
  cy.contains("Welcome, Test User!").should("be.visible");
});
```

3. **Validation Test:**

```javascript
it("should show validation errors for empty fields", () => {
  cy.get('button[type="submit"]').click();
  cy.get('input[name="name"]').should("have.attr", "required");
  cy.get('input[name="password"]').should("have.attr", "required");
});
```

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
│   │   ├── LoginForm.js    # Login form component with form handling
│   │   ├── LoginForm.css   # Styles for login form
│   │   ├── Welcome.js      # Welcome page component
│   │   └── Welcome.css     # Styles for welcome page
│   ├── App.js             # Main app component with routing
│   └── App.css            # Global styles
├── cypress/
│   ├── e2e/
│   │   └── login.cy.js    # Cypress test cases
│   └── support/
│       ├── commands.js
│       └── e2e.js
└── package.json
```

## Implementation Notes

1. **Form Handling:**

   - Used controlled components for form inputs
   - Implemented proper form submission handling
   - Added form validation

2. **Routing:**

   - Used React Router for navigation
   - Implemented protected routes
   - Added redirect logic based on authentication state

3. **Testing Strategy:**

   - Test visibility of elements
   - Test user interactions
   - Test form validation
   - Test navigation/redirects
   - Test content display

4. **Best Practices:**
   - Form handling with preventDefault()
   - Proper event handling in React
   - Comprehensive test coverage
   - Clear test organization
   - Using Cypress best practices

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Runs the React testing suite
- `npm run build` - Builds the app for production
- `npm run cypress:open` - Opens Cypress Test Runner
- `npm run cypress:run` - Runs Cypress tests in headless mode
- `npm run test:e2e` - Runs Cypress tests with the dev server

## License

This project is for testing purposes only and is not licensed for public use.
