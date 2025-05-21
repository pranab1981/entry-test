describe('Login Component', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('make sure that login page exits', () => {
    cy.contains('Login').should('exist');
    cy.get('input[name="name"]').should('exist');
    cy.get('input[name="password"]').should('exist');
  });

  it('cheking empty submissions.', () => {
    cy.get('button[type="submit"]').click();
    cy.get('form.login-form').should('exist');
    cy.contains('Welcome').should('not.exist');
  });

  const users = [
    { name: 'Akhil', password: 'pass123' },
    { name: 'Nikhil', password: '123@123' },
    { name: 'TestNewCandidate', password: 'password@2211' }
  ];

  users.forEach(({ name, password }) => {
    it(`must login for all the users: ${name}`, () => {
      cy.get('input[name="name"]').type(name);
      cy.get('input[name="password"]').type(password);
      cy.get('button[type="submit"]').click();

      cy.contains(`Welcome, ${name}!`).should('exist');
      cy.contains('Logout').should('exist').click();
      cy.contains('Login').should('exist');
    });
  });

  it('checking sucessfull logout and return to the login page', () => {
    cy.get('input[name="name"]').type('Akhil');
    cy.get('input[name="password"]').type('pass123');
    cy.get('button[type="submit"]').click();
    cy.contains('Logout').click();
    cy.contains('Login').should('exist');
  });
});
