describe('Login Component', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/login')
    })
    
    it('should display the login form', () => {
        cy.get('form').should('exist')
        cy.get('h2').should('exist')
        cy.get('input[name="name"]').should('exist')
        cy.get('input[name="password"]').should('exist')
        cy.get('button[type="submit"]').should('exist')
    })

    it('should display the correct title', () => {
        cy.get('h2').contains('Login')
    })

    it('should allow the user to enter their name and password', () => {
        cy.get('input[name="name"]').type('testuser')
        cy.get('input[name="password"]').type('password123')
        cy.get('input[name="name"]').should('have.value', 'testuser')
        cy.get('input[name="password"]').should('have.value', 'password123')
    })

    it('should not redirect if the name is empty', () => {
        cy.get('input[name="password"]').type('password123')
        cy.get('button[type="submit"]').click()
        cy.get('h2').contains('Login')
    })

    it('should not redirect if the password is empty', () => {
        cy.get('input[name="name"]').type('testuser')
        cy.get('button[type="submit"]').click()
        cy.get('h2').contains('Login')
    })

    it('should not redirect if both name and password are empty', () => {
        cy.get('button[type="submit"]').click()
        cy.get('h2').contains('Login')
    })

    it('should redirect after the login', () => {
        cy.get('input[name="name"]').type('testuser')
        cy.get('input[name="password"]').type('password123')
        cy.get('button[type="submit"]').click()
        cy.get('h1').contains('Welcome, testuser!')
        cy.get('p').contains('You have successfully logged in.')
        cy.get('button').contains('Logout').should('exist')
    })

    it('should allow the user to log out', () => {
        cy.get('input[name="name"]').type('testuser')
        cy.get('input[name="password"]').type('password123')
        cy.get('button[type="submit"]').click()
        cy.get('button').contains('Logout').click()
        cy.get('h2').contains('Login')
    })
    
}) 