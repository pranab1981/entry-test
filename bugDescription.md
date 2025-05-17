# Bug Fix Documentation

## Problem Overview  
The login functionality in the `LoginForm` component was not behaving as expected. When users clicked the "Login" button, the page would reload and no login logic was triggered. This was due to the absence of an `onSubmit` event handler on the form.

## Root Cause  
By default, HTML forms trigger a full page reload on submission unless prevented. In this case, the form had no `onSubmit` handler, and the login data (`formData`) wasn’t being processed or passed to the parent component via the `onLogin` prop.

## Resolution Steps  
To resolve the issue:
1. A `handleSubmitBtn` function was introduced to manage the form submission event.
2. The function calls `e.preventDefault()` to block the default form behavior.
3. The form data is then passed to the `onLogin` function received via props.
4. The form tag was updated to use this handler for the `onSubmit` event.

## Code Changes  
In `LoginForm.js`, the following function was added:

```javascript
const handleSubmitBtn = (e) => {
  e.preventDefault();
  onLogin(formData);
};
