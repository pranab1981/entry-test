The redirect after login wasn’t working because the form in LoginForm.js didn’t have an onSubmit handler. As a result, the handleSubmit function never ran, and the onLogin function wasn’t triggered.

I fixed the issue by adding onSubmit={handleSubmit} to the <form> tag, which ensures the login logic is executed and the app transitions to the welcome screen upon successful login.

AI Usage
prompt:
I keep getting this "Cypress could not verify that this server is running:

http://localhost:3000 even though the app is running".
