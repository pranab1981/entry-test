describe('Login Component', () => {
    // Runs before each test - visits the app's root URL
    beforeEach(() => {
        cy.visit('http://localhost:3000');
    });

    it('Displays the login form', () => {
        // Verify form heading and input fields are visible
        cy.get('h2').should('contain', 'Login');
        cy.get('input[name="name"]').should('exist');
        cy.get('input[name="password"]').should('exist');
        cy.get('button[type="submit"]').should('contain', 'Login');
    });

    it('Accepts input and logs in successfully', () => {
        const testName = 'testuser';
        const testPassword = 'testpassword';

        // Type credentials into form fields
        cy.get('input[name="name"]').type(testName);
        cy.get('input[name="password"]').type(testPassword);

        // Submit the login form
        cy.get('form').submit();

        // Verify user is welcomed after login
        cy.contains(`Welcome, ${testName}`).should('be.visible');

        // Confirm Logout button is visible
        cy.contains('Logout').should('be.visible');
    });
});
