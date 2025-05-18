Cypress.Commands.add('login', (name = 'testuser', password = 'anything') => {
  cy.visit('http://localhost:3000');
  cy.get('[data-testid="input-name"]').type(name);
  cy.get('[data-testid="input-password"]').type(password);
  cy.get('[data-testid="login-button"]').click();
  cy.get('[data-testid="login-form"]').should('not.exist');
  cy.contains(`Welcome, ${name}`).should('exist');
});
