/* eslint-disable no-undef */

describe("Login Form Authentication Flow", () => {
  beforeEach(() => {
    // Visit the app before each test
    cy.visit("http://localhost:3000");
  });

  const validCredentials = {
    username: "zipboard_test",
    password: "ZipBoard@2025",
  };

  it("validates presence of essential authentication interface elements", () => {
    cy.get(".login-form").should("be.visible");
    cy.get('input[name="name"]').should("be.visible");
    cy.get('input[name="password"]').should("be.visible");
    cy.get('button[type="submit"]').should("be.visible");
  });

  it("ensures dynamic field updates reflect user input correctly", () => {
    cy.get('input[name="name"]')
      .type(validCredentials.username)
      .should("have.value", validCredentials.username);
    cy.get('input[name="password"]')
      .type(validCredentials.password)
      .should("have.value", validCredentials.password);
  });

  it("enforces mandatory field validation protocol", () => {
    cy.get('button[type="submit"]').click();
    cy.get('input[name="name"]').should("have.attr", "required");
    cy.get('input[name="password"]').should("have.attr", "required");
  });

  it("handles invalid login attempts appropriately", () => {
    // Try with wrong credentials
    cy.get('input[name="name"]').type("wronguser");
    cy.get('input[name="password"]').type("wrongpass");
    cy.get('button[type="submit"]').click();

    // Should show error message
    cy.get(".error-message")
      .should("be.visible")
      .and("contain", "Invalid username or password");

    // Form should still be accessible
    cy.get(".login-form").should("be.visible");
  });

  it("executes successful login flow correctly", () => {
    cy.get('input[name="name"]').type(validCredentials.username);
    cy.get('input[name="password"]').type(validCredentials.password);
    cy.get('button[type="submit"]').click();

    cy.get(".welcome-container").should("be.visible");
    cy.get(".welcome-card h1").should(
      "contain",
      `Welcome, ${validCredentials.username}!`
    );
  });

  it("implements secure session termination workflow", () => {
    // Login first
    cy.get('input[name="name"]').type(validCredentials.username);
    cy.get('input[name="password"]').type(validCredentials.password);
    cy.get('button[type="submit"]').click();

    // Logout
    cy.get(".logout-button").click();

    // Verify back at login form
    cy.get(".login-form").should("be.visible");
  });

  it("maintains basic accessibility requirements", () => {
    cy.get('input[name="name"]').should("have.attr", "aria-required", "true");
    cy.get('input[name="password"]').should(
      "have.attr",
      "aria-required",
      "true"
    );

    // Trigger error message by submitting with wrong credentials
    cy.get('input[name="name"]').type("wrong");
    cy.get('input[name="password"]').type("wrong");
    cy.get('button[type="submit"]').click();

    // Now check error message accessibility
    cy.get(".error-message").should("have.attr", "role", "alert");
  });
});
