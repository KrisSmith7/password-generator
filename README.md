# Password Generator Starter Code
This application will allow users to generate a random password. Offers users a choice of uppercase characters, lowercase characters, special characters and/or numbers and will allow them to choose a length between 8-128 characters. 

The reset function will clear the display box and ready it for the next new password so that the user doesn't have to refresh the page to generate a new password.

![screenshot of application](./screenshot.png)

Link to deployed app -
https://krissmith7.github.io/password-generator/

## User Story

```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```

## Acceptance Criteria

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```