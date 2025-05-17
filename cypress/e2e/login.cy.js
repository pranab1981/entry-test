describe('Login Component', () => {
    it('should login successfully and redirect', () => {
        cy.visit('/')

        // Login form should be visible
        cy.contains('Login').should('be.visible')

        // Enter name and password
        cy.get('input[name="name"]').type('Kirellos Wasfy')
        cy.get('input[name="password"]').type('123456789')

        // Click login after typing the user credentials 
        cy.get('button').contains('Login').click()

        // Verify redirection to the Welcome component
        cy.contains('Welcome, Kirellos Wasfy').should('be.visible')

    })
}) 