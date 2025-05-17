/* global cy */

describe('Login Component', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000'); 
  });

  // check for login.js
  it('renders the login form', () => {
    cy.get('form.login-form').should('exist');
    cy.get('input#name').should('exist');
    cy.get('input#password').should('exist');
    cy.get('button.login-button').should('contain', 'Login');
  });

  //check for welcome.js
  it('logs in successfully and redirects to welcome screen', () => {
    const testName = 'Berk';
    const testPassword = 'test123';
    // fill the form
    cy.get('input#name').type(testName);
    cy.get('input#password').type(testPassword);
    cy.get('button.login-button').click();

    // check for welcome msg
    cy.contains(`Welcome, ${testName}!`).should('exist');
    cy.get('button').contains('Logout').should('exist');
  });
});
