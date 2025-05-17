## Bug Fix: Login Redirection Issue

### Problem
The initial implementation of the `LoginForm` component did not automatically redirect the user upon successful login due to the default browser behavior of form submission. Without an `onSubmit` handler to prevent this default action, the page would reload, preventing the React state from updating and the `Welcome` component from rendering.

### Solution
To fix this, an `onSubmit` handler (`handleFormSubmission`) was added to the `<form>` element in `LoginForm`. This handler calls `e.preventDefault()` to stop the default browser submission and then invokes the `onLogin` prop, passing the form data to the parent `App` component for state management and conditional rendering of the welcome page.
