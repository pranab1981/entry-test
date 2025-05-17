describe('Login Component', () => {
  const selectors = {
    nameInput: 'input[name="name"]',
    passwordInput: 'input[name="password"]',
    submitButton: 'button[type="submit"]',
    logoutButton: 'button:contains("Logout")',
  };

  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('should log in and then log out successfully', () => {
    // Fill out login form
    cy.get(selectors.nameInput).type('testing-xpx');
    cy.get(selectors.passwordInput).type('the tester');
    cy.get(selectors.submitButton).click();

    // Confirm welcome message is visible
    cy.contains('Welcome, testing-xpx!').should('be.visible');

    // Click logout and confirm returned to login
    cy.get(selectors.logoutButton).click();
    cy.contains('Login').should('be.visible');
  });
});
