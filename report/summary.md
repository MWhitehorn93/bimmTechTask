## Summary ##

## Approach ##
 I have used a POM approach in this suite. Using a POM approach means I am storing locators and some methods in a pages file. This allows the test files to be more readable and store all selectors in a file that is centralised to the relative web page.  

For data handling, I have stored all of the data needed in the testData.json. While I do not have access to the database product. I decided it was best to store it there. 

The tests I have written address the Student Registration Form Page and the Web Tables page, see URLs below. 

## Web Tables tests ##
I have four tests for the Web Tables page. I have stored them in specific files. Delete test in delete test file and the three edit tests in their own file. 

Web Tables Delete specific entry - This test is to ensure that the delete function is working, the delete button is retrieved using the first name then looking for the sibling delete button. Once the delete button is clicked. The test asserts that the record has been deleted. 

Web Tables Edit specific entry - This test is to ensure that a user can edit a user already in the Web Table. To do this, I have stored the entries data in the testData.json. I then interact with the page, and enter new data. Once the submit button has been clicked I assert that the data is correct. 

Web Tables Edit specific entry and then cancel - This test follows a lot of the steps above however, instead of clicking submit. I make sure the test clicks the close button then asserts that the entry has not been changed. 

Web Tables edit data validation - This test is to ensure that the data validation for the Web Table is working with the correct border colour and expects all fields to be required. 

## Student Registration Form ##
I also have three tests for the student registration form, I started off with a test to ensure I can submit a form. Then I worked on the data validation of the form. 

Student Registration Form submission with valid data and assert entry - This test is to ensure that I can successfully submit data to the submission form. Once again I am storing data in the testData.json. I don't believe this is a fragility as this data would not be stored in the backend of the product.

The test takes the data and then enters the data throughout the different inputs, once complete a forEach loop asserts the values on the form response page. 

Student Registration form required fields validation and assert CSS border colour - This test is to ensure that the data validation is working as I would imagine it to. This test is currently failing because the form allows some fields to be empty. Some of these fields, I'd argue need to be filled like Subject. For more information see, DEFECTS.md

Student Registration Form validation for email field with invalid email - This test is to ensure the form does not allow an invalid email address to be entered. This test only enters the email address and as the data validation is based on each input rather than all of the inputs, it is best just to enter a invalid email rather than the whole form. 

Test Page URLs
https://demoqa.com/webtables
https://demoqa.com/automation-practice-form 


## Test reporting ##
Within the report folder, you will be able to see that I have screenshotted the latest test run. You can see that the tests have run very quickly and there is one failure. 

For futher detail on the failed test see DEFECTS.md. Also in this folder, there is a screenshot of the failure. Which shows the inputs that are showing the incorrect data validation colour. 

Other than the failure, you can see the tests run successfully and very quickly. 

Test report 
7 Tests / 6 Pass / 1 Fail / 85% Pass

## Known fragilities ##
There are some known fragilities in this suite. 

State & City Selectors - The state and City selectors are frail. As they are selecting a piece of data from an order rather than clicking the correct data value. 

Force True -  In this suite I have used { force : true } when clicking on an item. This can sometimes mask a bug. 

studentRegistrationFormDataValidation - As I have mentioned previously this test is failing due to the bug described in DEFECTS.md

TestData.json - Some of the test data stored in this suite is static. This is a fragility because if the data stored on the web page changes. The tests will fail. If I was able to, I would retrieve the data from the database. 




