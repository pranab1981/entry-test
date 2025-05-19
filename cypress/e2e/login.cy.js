describe('Login Component', () => {
    it("first login and redirect to welcome page", () => {
        cy.visit('http://localhost:3000');

        // Check that login form is visible
        cy.get('form.login-form').should('be.visible');

        // Fill login form
        cy.get('input[name="name"]').type('sampleuser');
        cy.get('input[name="password"]').type('sampleuser123');

        // Now form submit
        cy.get('form').submit();

        // check that we're on /welcome
        cy.url().should('include', '/welcome');

        cy.contains("Welcome, sampleuser!").should('be.visible');


        cy.contains('Logout').click();


        cy.get('form.login-form').should('be.visible');
    })
}) 