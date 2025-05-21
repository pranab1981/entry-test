describe('Login Component', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should render the login form correctly', () => {
    cy.get('form.login-form').should('exist');
    cy.get('input[name="name"]').should('exist');
    cy.get('input[name="password"]').should('exist');
    cy.get('button[type="submit"]').contains('Login');
  });

  it('should allow the user to login and redirect to welcome screen', () => {
    cy.get('input[name="name"]').type('ajju');
    cy.get('input[name="password"]').type('password123');
    cy.get('button[type="submit"]').click();

    // After successful login, Welcome message should appear
    cy.contains('Welcome, ajju!').should('be.visible');
    cy.contains('Logout').should('be.visible');
  });

  it('should allow the user to logout and go back to login screen', () => {
    cy.get('input[name="name"]').type('ajju');
    cy.get('input[name="password"]').type('password123');
    cy.get('button[type="submit"]').click();

    cy.contains('Logout').click();

    cy.get('form.login-form').should('exist');
    cy.get('input[name="name"]').should('have.value', '');
  });
});
