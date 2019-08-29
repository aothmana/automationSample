@Regression
Feature: Test Account Creation and Login

  Scenario: Scenario-1 User create a new account on enrollment Page
    Given user navigates to enrollment page
    And user creates a new account from enrollment page
      | FULLNAME | USERNAME | EMAIL_PREFIX     | PASSWORD  |
      | Jane Doe  | jDoe   | alyaothman+a1 | password1 |
    Then user is presented with success message
    And user logout
    And user login
      | USERNAME     | PASSWORD  |
      | jDoe | password1 |
    Then user is presented with success message

  Scenario: Scenario-2 User gets errors on create account form if left empty or if invalid data
    Given user navigates to enrollment page
    And user submit form empty on Account
    Then errors are presented to the user
      | Error                    | Location |
      | Please enter full name. |Name   |
      | Please enter username.  | UserName    |
      | Please enter email.      | Email    |
      | Please enter password.   | Password |
    And user submit a form with invalid data  
      | FULLNAME | USERNAME | EMAIL_PREFIX     | PASSWORD  |
      | Jane14  | jDoe@1   | alyaothman~ | 12345 |
    Then errors are presented to the user
      | Error                    | Location |
      | Name should not contain any numeric values. |Name   |
      | Please make sure that the username does not contain any special characters.  | UserName    |
      | Email format is invalid.      | Email    |
      | Please make sure that the password has at least 6 characters.   | Password |
 
 