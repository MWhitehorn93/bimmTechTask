
Bug Title
Fields are showing the wrong validation border. 

URL
https://demoqa.com/automation-practice-form

Steps to reproduce
1. Navigate to the URL above (https://demoqa.com/automation-practice-form)
2. Ensure you DO NOT enter any values
3. Click the submit button. 

Description
The following fields are showing the incorrect validation border when the submit is clicked:
Email Text box
Subjects Text box
Hobbies Radio button
Picture File select
Current Address Text box
State Dropdown
City Dropdown

I believe these fields are showing the wrong behaviour as they are presenting a green border, indicating it is okay to leave these fields unpopulated. 

I have decieded to leave Date of Birth as there is a value already present. However I would like to see the behaviour of preloading a value(todays date) changed. 

Expect 
When no values have been entered. I expect the fields mention above to show a red border colour indicating the field needs data for the Student registration to be submitted. 

Result
When no values have been entered The Fields show a green border meaning that they idicate it is okay to enter an empty value in these fields. 

Prority level
Medium

Believe this is not critical enough not to be high but users can register students without all of the information required. 

Supporting Evidence
See the fields mentioned below for the expected behaviour I would like to see for the fields mentioned above. 
First Name
Last Name
Gender (all radio buttons)
Mobile number

