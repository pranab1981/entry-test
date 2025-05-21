describe('Login Component', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000');

        // Handle uncaught exceptions once for all tests
        cy.once('uncaught:exception', () => false);
    });

    it('should have correct page title and heading', () => {
        cy.title().should('eq', 'React App'); 
        cy.get('h2').should('contain', 'Login'); 
    });

    it('should have correct login form structure', () => {
        // Check form exists
        cy.get('form.login-form').should('exist');

        // Check name field
        cy.get('#name').should('have.attr', 'type', 'text').and('have.attr', 'required');

        // Check password field
        cy.get('#password').should('have.attr', 'type', 'password').and('have.attr', 'required');
        
        // Check submit button
        cy.get('.login-button').should('contain', 'Login');

    });

    it('should allow login and redirect', () => {
        // Fill and submit form
        cy.get('#name').type('testuser');
        cy.get('#password').type('password123');
        cy.get('.login-button').click();
        
        // Check redirect
        cy.url().should('include', '/welcome');
        cy.contains('Welcome, testuser!');

        // Logout
        cy.get('.logout-button').click();
        
        // Verify back to login
        cy.url().should('not.include', '/welcome');
        cy.get('.login-form').should('exist');
    });

}) 