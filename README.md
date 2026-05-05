# bimmTechTask

Cypress ennd to end test suite for bimm techTask. 

## Prerequisites 
-Node.js installed 
-npm

## Installation 
Close the repo from the url below. 

url: https://github.com/MWhitehorn93/bimmTechTask

run: npm install

## Running the tests
npm run cypress:open - This will open the cypress window, from where you can run what test you would like to. 
npm run cypress:run - This will run all the tests in the repo headlessly (without window)
npm run cypress:run:headed - This will run all the tests in the repo with a window
npm run cypress:run:studentForm - This will run all of the tests in the studentRegistrationForm folder. 
npm run cypress:run:webTables - This will run all of the tests in the webTables folder. 

## Repo structure
cypress/
    e2e/ - Where the e2e tests are stored. Moved into specific folder for the tests. 
        studentRegistrationForm/
        webTables/
    fixtures/
        Buggsbunny.png - Test file used
        testData.json - TestData stored
    pages/ - Where the POM is stored. 
        studentRegistrationForm.js
        webTables.js
    support/ - Supporting files that are used to important support fixtures. 
        commads.js
        e2e.js