describe("Login Component", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("Login works and redirects", () => {
    cy.getDataTest("login-form").should("exist");
    cy.getDataTest("username").type("pjgeronimo");
    cy.getDataTest("password").type("password");
    cy.getDataTest("login-button").click();
    cy.getDataTest("welcome").should("exist");
  });
});
