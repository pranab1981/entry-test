/// <reference types="cypress" />
describe('Login Component', () => {
    beforeEach(() => {
        cy.visit('/'); // Adjust if needed (e.g. localhost:3000 or specific route)
    });

    it('displays login form elements', () => {
        cy.get('h2').should('contain', 'Login');
        cy.get('input[name="name"]').should('exist');
        cy.get('input[name="password"]').should('exist');
        cy.get('button[type="submit"]').should('contain', 'Login');
    });

    it('shows error message if fields are empty', () => {
        cy.get('button[type="submit"]').click();
        cy.get('.error-message').should('contain', 'Name and Password cannot be empty');
    });

    it('logs in successfully and shows welcome message', () => {
        cy.get('input[name="name"]').type('Habeeb');
        cy.get('input[name="password"]').type('supersecret');
        cy.get('button[type="submit"]').click();

        cy.contains('Welcome, Habeeb!'); // Assuming Welcome component renders this
        cy.get('button').contains('Logout').should('exist'); // Logout button from Welcome
    });
});
