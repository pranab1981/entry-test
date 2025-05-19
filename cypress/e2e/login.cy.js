describe('Login Component', () => {
    it("A successful login leads to a redirect", () => {
        cy.login("kevin", "correctpass");
        cy.contains("Welcome,").should("be.visible");
      });
}) 