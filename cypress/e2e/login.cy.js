describe('Login Component', () => {
    it('passes', {retries: 1}, () => {
        cy.visit('http://localhost:3000')

        cy.contains('Login')

        cy.get('input[name="name"]').type('testuser')
        cy.get('input[name="password"]').type('testpassword')
        cy.get('button[type="submit"]').click()
        cy.contains('Welcome, testuser!')

    })
}) 