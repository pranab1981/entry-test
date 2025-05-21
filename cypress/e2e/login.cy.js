/// <reference types="cypress" />

/* global cy */
describe('Login Page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should display login form', () => {
    cy.get('form.login-form').should('be.visible');
    cy.get('input[name="name"]').should('be.visible');
    cy.get('input[name="password"]').should('be.visible');
    cy.get('button[type="submit"]').should('be.visible');
  });

  it('should login successfully and redirect to welcome page', () => {
    const testUser = {
      name: 'Test User',
      password: 'password123'
    };

    cy.get('input[name="name"]').type(testUser.name);
    cy.get('input[name="password"]').type(testUser.password);
    cy.get('button[type="submit"]').click();

    // Verify redirect to welcome page
    cy.url().should('include', '/welcome');
    cy.contains('Welcome, Test User!').should('be.visible');
  });

  it('should show validation errors for empty fields', () => {
    cy.get('button[type="submit"]').click();
    cy.get('input[name="name"]').should('have.attr', 'required');
    cy.get('input[name="password"]').should('have.attr', 'required');
  });
});
