
describe('Login Flow', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  it('displays the login form', () => {
    cy.get('input#name').should('be.visible');
    cy.get('input#password').should('be.visible');
    cy.get('button[type="submit"]').contains('Login');
  });

  it('allows a user to login and redirects to /welcome', () => {
    cy.get('input#name').type('TestUser');
    cy.get('input#password').type('password123');
    cy.get('button[type="submit"]').click();

    // After login, URL should be /welcome
    cy.url().should('include', '/welcome');

    // Welcome message should contain username
    cy.contains('Welcome, TestUser!').should('be.visible');
  });

  it('logs out and redirects back to login page', () => {
    // First login
    cy.get('input#name').type('TestUser');
    cy.get('input#password').type('password123');
    cy.get('button[type="submit"]').click();

    // Click logout button
    cy.get('button.logout-button').click();

    // URL should be /login
    cy.url().should('include', '/login');

    // Login form should be visible again
    cy.get('input#name').should('be.visible');
  });
});
