describe('Login Component', () => {
    it('should log in successfully and show Welcome page', () => {
      cy.visit('http://localhost:3000');
  
      cy.get('input[name="name"]').type('arjun');
      cy.get('input[name="password"]').type('password123');
  
      cy.get('form').submit();
  
      // Confirm welcome page is shown
      cy.contains('Welcome, arjun!').should('exist');
    });
  });
  