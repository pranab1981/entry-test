describe('Login Component', () => {
    it('logs in successfully',() => {
        cy.visit('http://localhost:3000/login')
        cy.get('input[name="name"]')//get the name input field
        cy.get('input[name="password"]')//get the password input field
        cy.get('input[name="name"]').type('testuser')
        cy.get('input[name="password"]').type('testpassword')// fill both up with user and pass
        cy.get('button[type="submit"]').click()//click the login button
        cy.get('.welcome-container').should('exist')//welcome page should be rendered, since this is the class of the main container
        //didn't really go for getting the url since after doing heavy editting, I figured the URL doesn't change
        //and that there's no explicit paths set for each of the pages

        //this should be enough for the entire flow.
    })
}) 