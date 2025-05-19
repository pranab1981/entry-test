describe("Login Form", () => {
  const testUser = {
    name: "John Doe",
    password: "Lemon@343sfdf",
  };

  beforeEach(() => {
    cy.visit("/");
  });

  it("should display login form", () => {
    cy.get(".login-form").should("be.visible");
    cy.get(".login-form h2").should("contain", "Login");
    cy.get(".login-form input[name='name']").should("exist");
    cy.get(".login-form input[name='password']").should("exist");
    cy.get(".login-form button[type='submit']").should("exist");
  });

  it("should show validation errors for empty fields", () => {
    // Try to submit without filling the form
    cy.get(".login-form button[type='submit']").click();

    // Verify form is still visible (not logged in)
    cy.get(".login-form").should("be.visible");
    cy.get(".welcome-card").should("not.exist");

    // Check for HTML5 validation message on required fields
    cy.get(".login-form input[name='name']").then(($el) => {
      expect($el[0].validationMessage).to.not.be.empty;
    });
    cy.get(".login-form input[name='password']").then(($el) => {
      expect($el[0].validationMessage).to.not.be.empty;
    });
  });

  it("should successfully log in and show welcome message", () => {
    // Fill in the login form
    cy.get(".login-form input[name='name']").type(testUser.name);
    cy.get(".login-form input[name='password']").type(testUser.password);

    // Submit the form
    cy.get(".login-form button[type='submit']").click();

    // Verify welcome message appears
    cy.get(".welcome-card").should("be.visible");
    cy.get(".welcome-card h1").should("contain", `Welcome, ${testUser.name}!`);
    cy.get(".welcome-card p").should(
      "contain",
      "You have successfully logged in"
    );
  });

  it("should successfully log out and return to login form", () => {
    // First login
    cy.get(".login-form input[name='name']").type(testUser.name);
    cy.get(".login-form input[name='password']").type(testUser.password);
    cy.get(".login-form button[type='submit']").click();

    // Verify welcome message appears
    cy.get(".welcome-card").should("be.visible");

    // Click logout button
    cy.get(".welcome-card .logout-button").click();

    // Verify we're back at login form
    cy.get(".login-form").should("be.visible");
    cy.get(".welcome-card").should("not.exist");
  });
});
