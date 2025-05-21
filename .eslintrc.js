module.exports = {
    env: {
        browser: true,
        node: true,
        'cypress/globals': true,
    },
    plugins: ['cypress'],
    rules: {
        'cypress/no-assigning-return-values': 'error', // Prevents assigning return values from Cypress commands
        'cypress/no-unnecessary-waiting': 'warn', // Warns against using cy.wait() unnecessarily
        'cypress/assertion-before-screenshot': 'error', // Ensures assertions are made before taking screenshots
        'cypress/no-async-tests': 'error', // Prevents using async/await in Cypress tests
    },
    extends: [
        'plugin:cypress/recommended'
    ],
};