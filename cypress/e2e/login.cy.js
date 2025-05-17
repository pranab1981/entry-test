describe('Login Component', () => {
  //created users object for testing
    const users = {
      main: { name: 'swarnil', password: 'password@123' },
      secondary: { name: 'testUser', password: 'password@1234' },
    };
  
    //visited the login page before each test case
    beforeEach(() => {
      cy.visit('/');
    });

  //checked the login form visibility and required inputs and submit button
    it('should display the login form with required inputs and a submit button', () => {
      cy.get('.login-form').should('be.visible');
      cy.get('input[name="name"]').should('be.visible');
      cy.get('input[name="password"]').should('be.visible').and('have.attr', 'type', 'password');
      cy.get('button[type="submit"]').should('exist').and('contain', 'Login');
    });
  
    //checked the login functionality
    it('should login with valid credentials and display welcome page', () => {
      const { name, password } = users.main;
  
      cy.get('input[name="name"]').type(name);
      cy.get('input[name="password"]').type(password);
      cy.get('button[type="submit"]').click();
      cy.get('.welcome-container').should('be.visible');
      cy.get('h1').should('contain.text', `Welcome, ${name}`);
    });
  
    it('should display logout button after login', () => {
      const { name, password } = users.secondary;
  
      cy.get('input[name="name"]').type(name);
      cy.get('input[name="password"]').type(password);
      cy.get('button[type="submit"]').click();
  
      cy.get('.logout-button').should('be.visible').and('contain.text', 'Logout');

      cy.get('.logout-button').click();
      cy.get('.login-form').should('be.visible');
    
    });
  });
  