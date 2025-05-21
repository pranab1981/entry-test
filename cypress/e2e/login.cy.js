// End to End Test for Login Flow
// Confirm the login form and its elements are present
// Confirm that it allows typing in name and password fields
// Confirm that a successful login leads to a redirect
// Confirm that a successfu logout leads to Login page
const userName = "Oluwafemi Oloyede";
const password = "Password123";

describe("Login Flow", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should render login form", () => {
    cy.get("form.login-form").should("exist");
    cy.get("input[name='name']").should("exist");
    cy.get("input[name='password']").should("exist");
    cy.get("button.login-button").should("contain", "Login");
  });

  it("should allow typing in name and password fields", () => {
    cy.get("input[name='name']")
      .type(`${userName}`)
      .should("have.value", `${userName}`);
    cy.get("input[name='password']")
      .type(`${password}`)
      .should("have.value", `${password}`);
  });

  it("should login successfully and redirect to welcome page", () => {
    cy.login(userName, password);

    cy.contains(`Welcome, ${userName}!`).should("be.visible");
    cy.contains("You have successfully logged in.").should("be.visible");
    cy.get("button.logout-button").should("exist");
  });

  it("should logout and return to login screen", () => {
    cy.login(userName, password);

    cy.get("button.logout-button").click();

    // Confirm we're back on the login screen
    cy.get("form.login-form").should("exist");
    cy.contains("Login").should("exist");
  });
});
