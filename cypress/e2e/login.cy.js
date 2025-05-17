describe('Login Component', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('displays the login form', () => {
    cy.get('h2').should('contain', 'Login');
    cy.get('input[name="name"]').should('exist');
    cy.get('input[name="password"]').should('exist');
    cy.get('button').contains('Login');
  });

  it('logs in successfully and redirects to welcome screen', () => {
    cy.get('input[name="name"]').type('TestUser');
    cy.get('input[name="password"]').type('password123');
    cy.get('button').contains('Login').click();

    cy.contains('Welcome, TestUser!').should('exist');
    cy.get('button').contains('Logout').should('exist');
  });

  it('can logout and go back to login screen', () => {
    cy.get('input[name="name"]').type('TestUser');
    cy.get('input[name="password"]').type('password123');
    cy.get('button').contains('Login').click();

    cy.get('button').contains('Logout').click();
    cy.contains('Login').should('exist');
  });
});
