// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// ✅ Parent Command
Cypress.Commands.add('login', (name, password) => {
  cy.visit('/');
  cy.get('input[name="name"]').type(name);
  cy.get('input[name="password"]').type(password);
  cy.get('button[type="submit"]').click();
});

Cypress.Commands.add('logout', () => {
  cy.contains('Logout').click();
});

// ✅ Child Command
Cypress.Commands.add('highlight', { prevSubject: 'element' }, (subject) => {
  cy.wrap(subject).then($el => {
    $el.css('border', '2px solid red');
  });
});

// ✅ Dual Command
Cypress.Commands.add('flash', { prevSubject: 'optional' }, (subject) => {
  const el = subject ? cy.wrap(subject) : cy.get('body');
  el.then($el => {
    $el.css('background-color', 'yellow');
    setTimeout(() => $el.css('background-color', ''), 500);
  });
});

// ✅ Overwrite Command
Cypress.Commands.overwrite('type', (originalFn, subject, string, options) => {
  console.log(`Typing: ${string}`);
  return originalFn(subject, string, options);
});
