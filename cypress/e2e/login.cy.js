describe("Login Component", () => {
  beforeEach(() => {
    // Visit the app before each test
    cy.visit("/");
  });

  it("should display the login form", () => {
    // Check if the login form is visible
    cy.get("form").should("be.visible");
    cy.get('input[name="name"]').should("exist");
    cy.get('input[name="password"]').should("exist");
    cy.get('button[type="submit"]').should("exist");
  });

  it("should display validation errors if fields are empty", () => {
    // Submit the form without filling in the fields
    cy.get('button[type="submit"]').click();

    // Check for validation messages
    cy.get('input[name="name"]:invalid').should("exist");
    cy.get('input[name="password"]:invalid').should("exist");
  });

  it("should allow the user to log in and display the Welcome component", () => {
    // Fill in the login form
    cy.get('input[name="name"]').type("John Doe");
    cy.get('input[name="password"]').type("password123");

    // Submit the form
    cy.get('button[type="submit"]').click();

    // Verify that the Welcome component is displayed
    cy.contains("Welcome, John Doe").should("be.visible");
    cy.get("button").contains("Logout").should("be.visible");
  });
});
