describe('Login Component', () => {
    beforeEach(() => {
        cy.visit('/');
      });

      it('should render name and password inputs and login button', () => {
        cy.get('input[name="name"]').should('exist');
        cy.get('input[name="password"]').should('exist');
        cy.get('button[type="submit"]').should('exist');

      
    });
    it('prevents submission when input fields are empty', () => {
        cy.get('button[type="submit"]').click();
        cy.get('input[name="name"]').then($input => {
            expect($input[0].checkValidity()).to.be.false;
          });

        cy.get('input[name="password"]').then($input => {
            expect($input[0].checkValidity()).to.be.false;
          });

    });

}) 