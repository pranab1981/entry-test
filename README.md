# Bug Fix Explanation

The issue was that the login form's onSubmit event did not trigger the onLogin function, so the app never updated the login state. I fixed this by adding an onSubmit handler to the <form> element and calling onLogin(formData) inside it. This change allows the app to display the welcome screen after submitting credentials

# Cypress Test Approach

To test the login functionality, I used Cypress to simulate a user interacting with the form. First, the test navigates to the homepage, then it fills in the name and password fields using cy.get with the input name attributes. After clicking the login button (identified by its class), the test checks for the presence of a “Welcome,” message and a “Logout” button to confirm that the user was successfully logged in and the UI updated as expected.
