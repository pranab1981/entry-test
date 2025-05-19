describe('Login Component', () => {
    it('assert that the login form is presented', () => {
        // Visit the login page
        cy.visit('http://localhost:3000')

        // Assert the login form is present
        cy.get('form').should('exist')
        cy.get('input[name="name"]').should('be.visible')
        cy.get('input[name="password"]').should('be.visible')
        cy.get('input[name="password"]').should('have.attr', 'type', 'password')
    })

    it('type into name input box should show its value', () => {
        // Visit the login page
        cy.visit('http://localhost:3000')

        // Type in name input box
        cy.get('input[name="name"]').type('hello')

        // Check that the name input box's value is correct
        cy.get('input[name="name"]').should('have.value', 'hello')

        // Check that the password input box's value should not change
        cy.get('input[name="password"]').should('have.value', '')
    })

    it('type into password input box should show its value', () => {
        // Visit the login page
        cy.visit('http://localhost:3000')

        // Type in password input box
        cy.get('input[name="password"]').type('123')

        // Check that the password input box's value is correct
        cy.get('input[name="password"]').should('have.value', '123')

        // Check that the name input box's value should not change
        cy.get('input[name="name"]').should('have.value', '')
    })

    it('type into both name and password input box should show correct values', () => {
        // Visit the login page
        cy.visit('http://localhost:3000')

        // Type in name and password input box
        cy.get('input[name="name"]').type('alice')
        cy.get('input[name="password"]').type('pwd')

        // Check that the name input box's value is correct
        cy.get('input[name="name"]').should('have.value', 'alice')

        // Check that the password input box's value is correct
        cy.get('input[name="password"]').should('have.value', 'pwd')

    })

    it('should log in successfully with valid credentials', () => {
        // Visit the login page
        cy.visit('http://localhost:3000')

        // Fill in the login form
        cy.get('input[name="name"]').type('alice')
        cy.get('input[name="password"]').type('pwd')

        // Click the login button
        cy.get('button[type="submit"]').click()

        // Wait for the greeting or any element change that indicates successful login
        cy.contains('Welcome, alice', { timeout: 10000 }).should('be.visible')
    })
})
