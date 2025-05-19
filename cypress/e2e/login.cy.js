describe('Login Component', () => {
  beforeEach(() => {
    // Visit the app before each test
    cy.visit('/');
  });

  it('should display the login form with all required elements', () => {
    // Check if the login form is visible
    cy.get('.login-form').should('be.visible');
    
    // Check if all form elements are present
    cy.get('h2').should('contain', 'Login');
    cy.get('label[for="name"]').should('be.visible');
    cy.get('label[for="password"]').should('be.visible');
    cy.get('#name').should('be.visible');
    cy.get('#password').should('be.visible');
    cy.get('.login-button').should('be.visible');
  });

  it('should show validation errors when submitting empty form', () => {
    // Try to submit the form without entering any data
    cy.get('.login-button').click();
    
    // Check if the form is still visible (not submitted)
    cy.get('.login-form').should('be.visible');
    
    // Check if the required fields are marked as invalid
    cy.get('#name').should('have.attr', 'required');
    cy.get('#password').should('have.attr', 'required');
  });

  it('should successfully login with valid credentials', () => {
    // Enter valid credentials
    cy.get('#name').type('testuser');
    cy.get('#password').type('password123');
    
    // Submit the form
    cy.get('.login-button').click();
    
    // Check if we're redirected to the welcome screen
    cy.get('.welcome-container').should('be.visible');
    cy.get('.welcome-card h1').should('contain', 'Welcome, testuser!');
  });

  it('should handle form input correctly', () => {
    // Test name input
    cy.get('#name')
      .type('testuser')
      .should('have.value', 'testuser');
    
    // Test password input
    cy.get('#password')
      .type('password123')
      .should('have.value', 'password123');
  });

  it('should logout successfully', () => {
    // First login
    cy.get('#name').type('testuser');
    cy.get('#password').type('password123');
    cy.get('.login-button').click();
    
    // Verify we're on the welcome screen
    cy.get('.welcome-container').should('be.visible');
    
    // Click logout button
    cy.get('.logout-button').click();
    
    // Verify we're back to the login form
    cy.get('.login-form').should('be.visible');
    cy.get('.welcome-container').should('not.exist');
  });

  it('should maintain form state when switching between fields', () => {
    // Enter data in name field
    cy.get('#name').type('testuser');
    
    // Switch to password field
    cy.get('#password').type('password123');
    
    // Verify name field still has the entered value
    cy.get('#name').should('have.value', 'testuser');
  });

  it('should handle special characters in input fields', () => {
    // Test special characters in name
    cy.get('#name')
      .type('test@user#$%')
      .should('have.value', 'test@user#$%');
    
    // Test special characters in password
    cy.get('#password')
      .type('pass@word#$%')
      .should('have.value', 'pass@word#$%');
  });

  it('should handle long input values', () => {
    // Generate a long string
    const longString = 'a'.repeat(100);
    
    // Test long name
    cy.get('#name')
      .type(longString)
      .should('have.value', longString);
    
    // Test long password
    cy.get('#password')
      .type(longString)
      .should('have.value', longString);
  });
}); 