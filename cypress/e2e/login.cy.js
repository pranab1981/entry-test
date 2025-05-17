describe('LoginForm', () => {

    beforeEach(()=>{
        cy.visit("/");
    });
    
    //while logging-in
    it('should login with name and password', ()=>{
       cy.get('input[name="name"]').type('Vijay');
       cy.get('input[name="password"]').type('vijay1234');
       cy.get('form').submit();


       cy.contains('Welcome').should('exist');
       cy.contains('Vijay').should('exist');

    });

    //handling errors
    it('should show errors if input fields are empty', ()=>{
        cy.get('button[type="submit"]').click();
        cy.get('input:invalid').should('have.length', 2);
    })


}) 