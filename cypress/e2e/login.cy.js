describe('Login Flow with Component Switch', () => {
  it('logs in and shows welcome message with username', () => {
    cy.login('layoolar','password');
  });
});
