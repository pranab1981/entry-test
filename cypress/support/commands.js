// Login command
Cypress.Commands.add("login", (userName, password) => {
  // Fill in the login form
  cy.get("input[name='name']").type(userName);
  cy.get("input[name='password']").type(password);

  // Click the login button
  cy.get("button.login-button").click();
});