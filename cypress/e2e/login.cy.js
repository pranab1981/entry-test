describe('Login Flow', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000'); 
  });

  // ✅ Test 1: Happy path
  it('should log in and show welcome message', () => {
    cy.get('input[name="name"]').type('Bhaskar');
    cy.get('input[name="password"]').type('123456');
    cy.get('button[type="submit"]').click();

    cy.contains('Welcome, Bhaskar!').should('be.visible');

    // Logout check
    cy.get('button').contains('Logout').click();
    cy.contains('Login').should('be.visible');
  });

  // ❌ Test 2: Missing username
  it('should show error when username is empty', () => {
    cy.get('input[name="password"]').type('123456');
    cy.get('button[type="submit"]').click();
    cy.contains('Name is required').should('be.visible'); // Make sure app shows this message
  });

  // ❌ Test 3: Missing password
  it('should show error when password is empty', () => {
    cy.get('input[name="name"]').type('Bhaskar');
    cy.get('button[type="submit"]').click();
    cy.contains('Password is required').should('be.visible'); // Make sure app shows this message
  });

  // 🚫 Test 4: Both fields empty
  it('should disable login button when fields are empty', () => {
    cy.get('button[type="submit"]').should('be.disabled');
  });

  // 🤖 Test 5: Multiple user test (AI-generated)
  const users = [
    { name: 'Bhaskar', password: '123456' },
    { name: 'TestUser', password: 'password123' },
    { name: 'EdgeCaseUser', password: 'P@$$w0rd!' }
  ];

  users.forEach(({ name, password }) => {
    it(`should log in successfully with user ${name}`, () => {
      cy.get('input[name="name"]').clear().type(name);
      cy.get('input[name="password"]').clear().type(password);
      cy.get('button[type="submit"]').click();

      cy.contains(`Welcome, ${name}!`).should('be.visible');
      cy.get('button').contains('Logout').click();
    });
  });
});
