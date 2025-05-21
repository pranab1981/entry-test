# zipBoard Junior Position Test Project

This is a test repository for the zipBoard junior position application process. This project demonstrates a simple React application with a login form and Cypress testing setup.

## Bug Fix

Redirecting after login was not working because there was no setup of React Router — the application was relying solely on conditional rendering. To fix this, I added the navigate() function using the useNavigate hook from react-router-dom to programmatically redirect to the /welcome page after login.

Additionally, the login form was missing an onSubmit handler. I fixed this by adding an onSubmit function that triggers the onLogin prop passed to the LoginForm component, allowing login state to update and enabling the redirection to work properly.
