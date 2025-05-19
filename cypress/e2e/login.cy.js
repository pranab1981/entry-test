describe('Login Component', () => {

    // username and password are hardcoded for testing purposes
    const username = 'testuser'
    const password = 'testpassword'

    // check if the fields and the buttons exist
    it('Now Find the Counter Button', () => {
        cy.visit('/')

        // name field
        cy.get('input[name=name]').should('exist')
        // password field
        cy.get('input[name=password]').should('exist')
        // login button
        // cy.get('button[type=submit]').should('exist')
        cy.get('[data-test-id="cypress-submit-btn"]').should('exist')

        // name field
        cy.get('input[name=name]').type(username)
        // password field
        // cy.get('input[name=password]').type(password)
        cy.get('input[name=password]').type(`${password}{enter}`)
    })

    it('should log in successfully and display the Welcome component', () => {
        cy.visit('/');

        // Fill in the login form
        cy.get('input[name=name]').type(username);
        cy.get('input[name=password]').type(password);
        cy.get('[data-test-id="cypress-submit-btn"]').click();

        // Verify the Welcome component is displayed
        cy.contains(`Welcome, ${username}!`).should('exist');
    });

})