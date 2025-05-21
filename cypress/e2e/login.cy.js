describe('Login Component', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should display login form', () => {
    cy.get('.login-form').should('be.visible');
    cy.get('input[name="name"]').should('exist');
    cy.get('input[name="password"]').should('exist');
    cy.get('button[type="submit"]').should('exist');
  });

  it('should successfully login and redirect to welcome page', () => {
    cy.get('input[name="name"]').type('test1');
    cy.get('input[name="password"]').type('password1');
    cy.get('button[type="submit"]').click();
    
    // Verify redirect to welcome page
    cy.get('.welcome-container').should('be.visible');
    cy.get('h1').should('contain', 'Welcome, test1!');
  });

  it('should show logout button after login', () => {
    cy.get('input[name="name"]').type('test1');
    cy.get('input[name="password"]').type('password1');
    cy.get('button[type="submit"]').click();
    
    cy.get('.logout-button').should('be.visible');
  });
}); 