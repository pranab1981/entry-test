## Task Overview
The task was to write Cypress test cases for the `LoginForm` component to ensure it works as expected. Additionally, I needed to fix any issues in the application that prevented the tests from passing and document the changes.

---

## Changes and Fixes

### 1. **Add onSubmit handler to LoginForm component**
   - **Issue**: The page was refreshing on form submission and not properly handled for `onSubmit` event, preventing the `<Welcome>` component from rendering.
   - **Fix**: Added `e.preventDefault()` in the `handleSubmit` function of the `LoginForm` component to prevent the default form submission behavior and attached `handleSubmit` funtion to `onSubmit` form event.
   - **File Modified**: `src/components/LoginForm.js`
   - **Code Snippet**:
     ```javascript
     const handleSubmit = (e) => {
       e.preventDefault(); // Prevent page refresh
       onLogin(formData);
     };
     
     ...
     
     {/* Attach handleSubmit to form */}
     <form className="login-form" onSubmit={handleSubmit}>
     ```

### 2. **Cypress Test Cases**
   - Added comprehensive test cases to verify the functionality of the `LoginForm` component.
   - **File Modified**: `cypress/e2e/login.cy.js`
   - **New Test Cases**:
      1. **Display Login Form**:
         - Verifies that the login form and its fields are visible on the page.
      
      2. **Validation Errors for Empty Fields**:
         - Ensures that the form enforces required fields and displays validation errors.
      
      3. **Successful Login**:
         - Simulates a successful login and verifies that the `<Welcome>` component is displayed.
---

## Screenshots of AI Tool Usage
**Used GitHub Copilot to identify the bug.** (Query and Response on right side)

![Screenshot From 2025-05-18 13-07-48](https://github.com/user-attachments/assets/b52487a6-c128-4096-ab7f-a3a8004015f8)
---

**Used GitHub Copilot to write various Cypress Test Cases.** (Query and Response on right side)

![Screenshot From 2025-05-18 14-04-15](https://github.com/user-attachments/assets/0df2ff9a-a672-4b46-a02c-5ad07023761a)


