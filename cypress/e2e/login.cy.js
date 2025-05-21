describe('Login Component', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should render the login form', () => {
    cy.get('form.login-form').should('exist');
    cy.get('input[name="name"]').should('exist');
    cy.get('input[name="password"]').should('exist');
    cy.get('button.login-button').should('contain', 'Login');
  });

  it('should login and redirect to welcome page', () => {
    cy.get('input[name="name"]').type('John');
    cy.get('input[name="password"]').type('password123');
    cy.get('form.login-form').submit();

    // Confirm redirection
    cy.url().should('include', '/welcome');

    // Confirm welcome message
    cy.contains('Welcome, John!').should('exist');
  });
});
