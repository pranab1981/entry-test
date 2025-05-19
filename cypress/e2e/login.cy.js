//  My Code

// describe('Login Component', () => {

//     const loginData = {
//         name: "Michael",
//         password: "password"
//     }

//     it("Check if input fields and submit button are Presennt", ()=>{
//         cy.visit('/');

//         cy.get('input[name="name"]').should('be.visible');
//         cy.get('input[name="password"]').should('be.visible');
//         cy.get('button[type="submit"]').should('be.visible');

//     });
    
//     it("check if button is disabled if for is empty", () => {
//         cy.visit('/');

//         cy.get('button[type="submit"]').should('have.attr','disabled');

//         cy.get('input[name="name"]').type(loginData.name);
//         cy.get('button[type="submit"]').should('have.attr','disabled');

//         cy.get('input[name="password"]').type(loginData.password);

//         cy.get('button[type="submit"]').should('not.have.attr','disabled');
//     })

//     it("Check if Form redirects when it is submitted", () => {
        
//         cy.visit('/');

//         cy.get('input[name="name"]').type(loginData.name);
//         cy.get('input[name="password"]').type(loginData.password);

//         cy.get('input[name="name"]').should('have.value', loginData.name);
//         cy.get('input[name="password"]').should('have.value', loginData.password)

//         cy.get('button[type="submit"]').click();

//         cy.contains(`Welcome, ${loginData.name}!`).should('be.visible');
//     })
// }) 



// Chatgpt Prompt: Please optimize, organize, and structure the following Cypress test code for a React component. Use best practices for readability, maintainability, and scalability. Group related tests properly, reduce redundancy, and improve naming conventions where appropriate. Here's the code:


describe('Login Component', () => {

    const loginData = {
        name: "Michael",
        password: "password"
    }

    it("Check if input fields and submit button are Presennt", ()=>{
        cy.visit('/');

        cy.get('input[name="name"]').should('be.visible');
        cy.get('input[name="password"]').should('be.visible');
        cy.get('button[type="submit"]').should('be.visible');

    });
    
    it("check if button is disabled if for is empty", () => {
        cy.visit('/');

        cy.get('button[type="submit"]').should('have.attr','disabled');

        cy.get('input[name="name"]').type(loginData.name);
        cy.get('button[type="submit"]').should('have.attr','disabled');

        cy.get('input[name="password"]').type(loginData.password);

        cy.get('button[type="submit"]').should('not.have.attr','disabled');
    })

    it("Check if Form redirects when it is submitted", () => {
        
        cy.visit('/');

        cy.get('input[name="name"]').type(loginData.name);
        cy.get('input[name="password"]').type(loginData.password);

        cy.get('input[name="name"]').should('have.value', loginData.name);
        cy.get('input[name="password"]').should('have.value', loginData.password)

        cy.get('button[type="submit"]').click();

        cy.contains(`Welcome, ${loginData.name}!`).should('be.visible');
    })
}) 

