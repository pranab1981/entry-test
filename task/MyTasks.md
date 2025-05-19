# Here is how I fixed the issue with the code

- So I noticed the function for submitting the form was not being called as a parameter for the form's onSubmit event. I added the function to the onSubmit event and it worked.

- I also did some refactoring to make the code cleaner and more readable. I added a function to handle the form submission and another function to handle the input change. This way, the code is more modular and easier to maintain.

- I also added some comments to the code to explain what each part does. This will help anyone who reads the code in the future to understand it better.

- Additionally, I used Github Copilot Agent Mode (Set to GTP-4o) to help me with the refactoring and to suggest some improvements to the code. It was really helpful in suggesting some best practices and making the code more efficient and also identifying some bugs in the code and fixing them. Below is the prompt I used to get the suggestions:

```text
look through this codebase and suggest for me instances where the bugs could be in the project and then also make the form submit and work according to the existing logic, also look into my existing test file in the cypress folder and suggest possible changes in how it can be better at testing the whole form submission processs so that the login works as expected, so far I have edited it to allow submission but the challenge is that the form is never submitted and that this data is not recived by the Welcome component, so make necessary adjustments for everything to be in the right order as required
```

**Images for the prompt**
  ![Screenshot 2025-05-19 at 4.59.51 PM](./images/Screenshot%202025-05-19%20at%204.59.51 PM.png)

## Usage of AI tools in the project

- **Github Copilot in VS Code**: I used Github Copilot to help me with the refactoring and to suggest some improvements to the code. It was really helpful in suggesting some best practices and making the code more efficient.

### a) Using Github Copilot inline Suggestions

  ![Screenshot 2025-05-19 at 3.37.11 PM](./images/Screenshot%202025-05-19%20at%203.37.11 PM.png)

  ![Screenshot 2025-05-19 at 3.41.57 PM](./images/Screenshot%202025-05-19%20at%203.41.57 PM.png)

### b) Using Github Copilot Agent Mode

  ![Screenshot 2025-05-19 at 4.50.20 PM](./images/Screenshot%202025-05-19%20at%204.50.20 PM.png)

  ![Screenshot 2025-05-19 at 4.51.25 PM](./images/Screenshot%202025-05-19%20at%204.51.25 PM.png)

**Agent Mode Response**
  ![Screenshot 2025-05-19 at 4.52.42 PM](./images/Screenshot%202025-05-19%20at%204.52.42 PM.png)

  ![Screenshot 2025-05-19 at 4.55.06 PM](./images/Screenshot%202025-05-19%20at%204.55.06 PM.png)

  ![Screenshot 2025-05-19 at 5.06.28 PM](./images/Screenshot%202025-05-19%20at%205.14.39 PM.png)

### c) All Tests Passed after Editting with Agent Mode

  ![Screenshot 2025-05-19 at 4.54.09 PM](./images/Screenshot%202025-05-19%20at%204.54.09 PM.png)

  ![Screenshot 2025-05-19 at 5.06.03 PM](./images/Screenshot%202025-05-19%20at%205.06.03 PM.png)

  ![Screenshot 2025-05-19 at 5.06.16 PM](./images/Screenshot%202025-05-19%20at%205.06.16 PM.png)
  