## Bug
It was not redirecting because onSubmit event handler was not used as an attribute in the form tag. So I created another function handleSubmit which was calling onLogin function.

## Test
I wrote test cases in login.cy.js file for "LoginForm" component and tested it using cypress application.

I took the help of chatGPT to solve the erros while testing.


![Cypress Error](assets/images/cypress-installation.png)


![Error in Cypress](assets/images/error-in-testing.png)