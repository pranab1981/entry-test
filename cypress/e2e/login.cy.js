describe('Login Flow with Component Switch', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('logs in and shows welcome message with username', () => {
    // Type the name and password
    cy.get('[data-testid="input-name"]').type('testuser');
    cy.get('[data-testid="input-password"]').type('anything');

    // Submit the form
    cy.get('[data-testid="login-button"]').click();

    // Assert that the login form disappears
    cy.get('[data-testid="login-form"]').should('not.exist');

    // Assert that the welcome message with the username appears
    cy.contains('Welcome, testuser').should('exist');
  });
});
