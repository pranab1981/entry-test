describe('Login Component', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should display the login form', () => {
    cy.get('.login-form').should('be.visible');
    cy.get('h2').should('contain', 'Login');
    cy.get('input[name="name"]').should('exist');
    cy.get('input[name="password"]').should('exist');
    cy.get('button[type="submit"]').should('exist');
  });

  it('should show validation errors for empty fields', () => {
    cy.get('button[type="submit"]').click();
    cy.get('input[name="name"]').then($input => {
      expect($input[0].validationMessage).to.not.be.empty;
    });
    cy.get('input[name="password"]').then($input => {
      expect($input[0].validationMessage).to.not.be.empty;
    });
  });

  it('should successfully login and redirect to welcome page', () => {
    const testUser = {
      name: 'Test User',
      password: 'password123'
    };

    cy.get('input[name="name"]').type(testUser.name);
    cy.get('input[name="password"]').type(testUser.password);
    cy.get('button[type="submit"]').click();

    // Verify redirect to welcome page
    cy.get('.welcome-container').should('be.visible');
    cy.get('.welcome-card h1').should('contain', testUser.name);
    cy.get('.welcome-card p').should('contain', 'successfully logged in');
  });

  it('should allow logout and return to login form', () => {
    // Login first
    cy.get('input[name="name"]').type('Test User');
    cy.get('input[name="password"]').type('password123');
    cy.get('button[type="submit"]').click();

    // Verify welcome page
    cy.get('.welcome-container').should('be.visible');

    // Logout
    cy.get('.logout-button').click();

    // Verify return to login form
    cy.get('.login-form').should('be.visible');
    cy.get('input[name="name"]').should('have.value', '');
    cy.get('input[name="password"]').should('have.value', '');
  });
}); 