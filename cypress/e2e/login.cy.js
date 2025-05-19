describe('Login Component', () => {
  beforeEach(() => {
    // Visit the login page before each test
    cy.visit('http://localhost:3000');
  });

  it('should display the login form', () => {
    // Check if the login form is visible
    cy.get('.login-form').should('be.visible');
    
    // Check for form elements
    cy.get('h2').should('contain', 'Login');
    cy.get('input[name="name"]').should('exist');
    cy.get('input[name="password"]').should('exist');
    cy.get('button[type="submit"]').should('contain', 'Login');
  });

  it('should show validation errors for empty form submission', () => {
    // Submit the form without filling any fields
    cy.get('button[type="submit"]').click();
    
    // Check if the required validation works
    cy.get('input[name="name"]:invalid').should('exist');
    cy.get('input[name="password"]:invalid').should('exist');
  });

  it('should successfully log in and redirect to welcome page', () => {
    // Fill in the login form
    const testUser = 'testuser';
    const testPassword = 'testpass';
    
    cy.get('input[name="name"]').type(testUser);
    cy.get('input[name="password"]').type(testPassword);
    
    // Submit the form
    cy.get('button[type="submit"]').click();
    
    // Check if redirected to welcome page
    cy.url().should('include', '/');
    
    // Check if welcome message is displayed with the correct username
    cy.get('.welcome-container h1').should('contain', `Welcome, ${testUser}!`);
    
    // Check if logout button is visible
    cy.get('button').should('contain', 'Logout');
  });

  it('should log out when clicking the logout button', () => {
    // First log in
    const testUser = 'testuser';
    cy.get('input[name="name"]').type(testUser);
    cy.get('input[name="password"]').type('testpass');
    cy.get('button[type="submit"]').click();
    
    // Now log out
    cy.get('button').contains('Logout').click();
    
    // Check if redirected back to login page
    cy.get('.login-form').should('be.visible');
    cy.get('h2').should('contain', 'Login');
  });
})