describe("Login Component", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should display the login form elements", () => {
    cy.get(".login-form").should("be.visible");
    cy.get('input[name="name"]').should("be.visible");
    cy.get('input[name="password"]').should("be.visible");
    cy.get('button[type="submit"]')
      .should("be.visible")
      .and("contain", "Login");
  });

  it("should allow users to type in the username and password fields", () => {
    cy.get('input[name="name"]')
      .type("testuser")
      .should("have.value", "testuser");
    cy.get('input[name="password"]')
      .type("password123")
      .should("have.value", "password123");
  });

  it("should successfully log in and redirect to the welcome page", () => {
    cy.get('input[name="name"]').type("test");
    cy.get('input[name="password"]').type("password");
    cy.get('button[type="submit"]').click();

    cy.get(".welcome-container").should("be.visible");
    cy.get("h1").should("contain", "Welcome, test!");
  });
});
