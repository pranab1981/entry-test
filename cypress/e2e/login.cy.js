describe("Login Component", () => {});

describe("Login Form", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should display login form", () => {
    cy.get(".login-form").should("be.visible");
    cy.get("h2").should("contain", "Login");
    cy.get('input[name="name"]').should("exist");
    cy.get('input[name="password"]').should("exist");
    cy.get('button[type="submit"]').should("exist");
  });

  it("should show validation errors for empty fields", () => {
    // Try to submit without filling the form
    cy.get('button[type="submit"]').click();

    // Verify form is still visible (not logged in)
    cy.get(".login-form").should("be.visible");
    cy.get(".welcome-card").should("not.exist");
  });

  it("should successfully log in and show welcome message", () => {
    const testUser = {
      name: "John Doe",
      password: "password123",
    };

    // Fill in the login form
    cy.get('input[name="name"]').type(testUser.name);
    cy.get('input[name="password"]').type(testUser.password);

    // Submit the form
    cy.get('button[type="submit"]').click();

    // Verify welcome message appears
    cy.get(".welcome-card").should("be.visible");
    cy.get("h1").should("contain", `Welcome, ${testUser.name}!`);
    cy.get("p").should("contain", "You have successfully logged in");
  });

  it("should successfully log out and return to login form", () => {
    // First login
    const testUser = {
      name: "John Doe",
      password: "password123",
    };
    cy.get('input[name="name"]').type(testUser.name);
    cy.get('input[name="password"]').type(testUser.password);
    cy.get('button[type="submit"]').click();

    // Verify welcome message appears
    cy.get(".welcome-card").should("be.visible");

    // Click logout button
    cy.get(".logout-button").click();

    // Verify we're back at login form
    cy.get(".login-form").should("be.visible");
    cy.get(".welcome-card").should("not.exist");
  });
});
