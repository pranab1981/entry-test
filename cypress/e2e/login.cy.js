describe("Login Component", () => {
  it("should login successfully and redirect to welcome page", () => {
    cy.visit("/");

    cy.get('input[name="name"]').type("Vimal K Manoj");
    cy.get('input[name="password"]').type("password123");
    cy.get('button[type="submit"]').click();

    cy.contains("Welcome, Vimal K Manoj!").should("exist");
  });
});
