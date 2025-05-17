/* global cy */
describe("Login Component", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });
  it("should fill in the login form and submit", () => {
    //Fill in loging form
    cy.get('input[name="name"]').type("testuser");
    cy.get('input[name="password"]').type("password");
    // Submit the form
    cy.get(".login-button").click();

    // Check if Welcome message appears (indicating redirect)
    cy.contains("Welcome,").should("be.visible");
    cy.get("button").contains("Logout").should("exist");
  });
});
