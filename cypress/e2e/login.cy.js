/* global cy */

describe('Login Component', () => {
  it('logs in and shows welcome message', () => {
    cy.visit('/');

    cy.get('input[name="name"]').type('UserName');
    cy.get('input[name="password"]').type('123456');
    cy.get('form.login-form').submit();

    cy.contains('Welcome, UserName!').should('be.visible');
    cy.contains('Logout').should('be.visible');

    cy.get('button.logout-button').click();

    cy.get('form.login-form').should('be.visible');
    cy.get('input[name="name"]').should('be.visible');
    cy.get('input[name="password"]').should('be.visible');
  })
}) 