describe("Login Component", () => {
  beforeEach(() => {
    cy.visit("/LoginForm"); // Change this route according to your setup
  });

  it("should render the login form with inputs and button", () => {
    cy.get("form.login-form").should("exist");
    cy.get('input[name="name"]').should("exist");
    cy.get('input[name="password"]').should("exist");
    cy.get('button[type="submit"]').should("contain", "Login");
  });

  it("should allow typing into name and password fields", () => {
    cy.get('input[name="name"]').type("john");
    cy.get('input[name="name"]').should("have.value", "john");

    cy.get('input[name="password"]').type("secret123");
    cy.get('input[name="password"]').should("have.value", "secret123");
  });

  it("should submit the form and log-in successfully", () => {
    cy.get('input[name="name"]').type("sahil");
    cy.get('input[name="password"]').type("12345678");
    cy.get('button[type="submit"]').click();

    cy.get("#welcome-screen", { timeout: 10000 }).should("be.visible");
  });

  it("should handle login error gracefully", () => {
    cy.get('input[name="name"]').type("wronguser");
    cy.get('input[name="password"]').type("wrongpass");
    cy.get('button[type="submit"]').click();

    cy.get("#login-error", { timeout: 10000 }).should("be.visible");

    cy.contains("Invalid username or password").should("be.visible");
  });
});
