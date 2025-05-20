describe('Login Component', () => {
    beforeEach(() => {
        cy.visit('/');
      });

      it('should render name and password inputs and login button', () => {
        cy.get('input[name="name"]').should('exist');
        cy.get('input[name="password"]').should('exist');
        cy.get('button[type="submit"]').should('exist');

    });

}) 