// cypress/e2e/login.cy.js

describe('Login Component', () => {
  const username = 'Jane Doe';
  const password = 'supersecret';

  beforeEach(() => {
    // assumes your dev server is at localhost:3000
    cy.visit('/');
  });

  it('renders the login form', () => {
    cy.contains('h2', 'Login');
    cy.get('input[name="name"]').should('be.visible');
    cy.get('input[name="password"]').should('be.visible');
    cy.get('button[type="submit"]').contains('Login');
  });

  it('allows a user to log in and shows the welcome screen', () => {
    // fill out and submit
    cy.get('input[name="name"]').type(username);
    cy.get('input[name="password"]').type(password);
    cy.get('button[type="submit"]').click();

    // should render Welcome component
    cy.contains(`Welcome, ${username}!`).should('be.visible');
    cy.get('button').contains('Logout').should('be.visible');
  });
});
