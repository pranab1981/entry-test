describe('Login Functionality', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('should validate login form inputs and submission', () => {
        // Test form validation
        cy.get('button[type="submit"]').click();
        cy.get('input[name="name"]').should('have.attr', 'required');
        cy.get('input[name="password"]').should('have.attr', 'required');

        // Test form inputs
        cy.get('input[name="name"]').type('testuser');
        cy.get('input[name="password"]').type('password123');

        // Verify input values
        cy.get('input[name="name"]').should('have.value', 'testuser');
        cy.get('input[name="password"]').should('have.value', 'password123');
    });

    it('should successfully login and redirect to welcome page', () => {
        // Fill in login form
        cy.get('input[name="name"]').type('testuser');
        cy.get('input[name="password"]').type('password123');

        // Submit form
        cy.get('button[type="submit"]').click();

        // Verify redirect to welcome page
        cy.get('.welcome-card').should('be.visible');
        cy.get('.welcome-card h1').should('contain', 'Welcome, testuser!');

        // Verify logout button is present
        cy.get('.logout-button').should('be.visible');
    });
});
