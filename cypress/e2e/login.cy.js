/**
 * End‑to‑end tests for the basic login flow
 */
describe("Login flow", () => {
  const user = { name: "admin", password: "admin" };

  beforeEach(() => {
    cy.visit("/");
  });

  it("renders the empty form", () => {
    cy.get("[data-cy=login-form]").within(() => {
      cy.get('input[name="name"]').should("have.value", "");
      cy.get('input[name="password"]').should("have.value", "");
      cy.contains("Login");
    });
  });

  it("logs in and shows the welcome screen", () => {
    cy.get('input[name="name"]').type(user.name);
    cy.get('input[name="password"]').type(user.password);
    cy.get("[data-cy=login-submit]").click();

    // The component‐level “redirect” is a conditional render,
    // so we verify that the welcome card appears and the form disappears.
    cy.contains(`Welcome, ${user.name}!`).should("be.visible");
    cy.get("[data-cy=login-form]").should("not.exist");
  });

  it("logs out and returns to the form", () => {
    // log in first
    cy.get('input[name="name"]').type(user.name);
    cy.get('input[name="password"]').type(user.password);
    cy.get("[data-cy=login-submit]").click();

    cy.contains("Logout").click();
    cy.get("[data-cy=login-form]").should("exist");
  });
});
