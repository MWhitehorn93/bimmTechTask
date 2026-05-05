## Recommendations and strategy ##

# Test element recommendations #
I recommend the dev team to have better and more robust selectors around the website. The best practice for selectors on elements is to embed data-cy selectors throughout the product. I have attached an example below. These attributes do not affect the functionality of the elements at all. They are merely a latching point for cypress tests. These attributes allow the cypress to interact with the elements in a secure and fast way. 

data-cy="submit" 

# Test Data strategy #
If I were to have more time and access to the database of this product. I would call upon some of the test data used in this repo from the database. This keeps the repo more accurate to what is happening on the product. 

For example, in testData.json I have the data "webTables.deleteEntry". The issue with this piece of data, if the behaviour of the code changes and Kierra Gentry does not appear in the product the test "Web Tables Delete specific entry". Will fail as I have stored the values away from the backend of the product. 

If I were to have access to the database. I would call upon the database, asking for one user who is in the webTable. I will then take that first name and then delete the entry. 

I can then assert the entry has been deleted on the UI and then in the database. Ensuring that the UI changes the databases behaviour.

If DB access cannot be achieved, the same goal can be reached with API calls.

# CI/ CD strategy/tagging tests #
I recommend that the following CI/CD strategy approach is followed if the repo is fleshed out. 

Night run: This will run the entire repo and will give a full report back to the shareholders. Showing the pass/fail rate with percentage. Screenshots of where the tests have failed and what tests have failed. It is also important that the time to run is reported for each test. As this is also a good way to work on behaviour of the product. 

Smoke run: With the use of grep tags. You will be able to run tag tests throughout the repo a certain tag. In smoke run, we are looking for the most critical of tests to ensure that the users can act on business critical issues. This smoke run could be set off by a user, a gitHub Action or a demand on the CLI. Also I believe this run should be kicked off every time a git push command has been sent. 

Tag functionality Run: As the repo expands, I feel it is best that the repo is tagged whether it is a smoke test, page and functionality. Different pages share similar functionality. For example, if you were having issues with submit forms. You could run the tests that have been tagged with Submit forms. This will ensure whether this is a page issue or an issue across the entire product. The cypress add-on cypress-grep can help this out. 

Page Run: Similarly, all tests should be tagged on which page they are testing. That way you could quickly test all tests on each page.

Full Regression run: On pull request open, the full regression suite should run. On a merge to the master branch, the full regression suite should run again. 

# Metrics tracking #
I recommened that the following metrics are tracked when the repo expands and becomes more mature. 

Pass/Fail rate: This is the simplist of metric tracking but it still is important to know how many of the tests are passing and how many are failing. 

Time: Time is a crucial factor on website and suite performance. It is important to know if tests are taking longer than previously they were and why is that the case. 

Fail reasoning: Everytime a test does fail, it is important to know why they are failing. This could be because of unsecure locator, timeout, incorrect data. It is important to record these metrics then you can create a picture on where the repo is failing the most. 

Test File Performance: It is important to know the pass/fail rate and time of each test file as well. That way you can specify which of the tests are flaky and need improving. 

Page performance: This metric is to test which page or area of the product is falling the tests the most. This will indicate if there is a weak part of the website, API layer or if the database is flaky. 

Parallelisation: 
After researching into Cypress Cloud. I believe and recommend that the repo utilises this piece of technology. 

As the repo gets larger it will take longer for the tests to run. To mitigate this we could utilise Cypress clouds method of running multiple tests on multiple machines. This will ensure that the test run process will be immediately quicker once this functionality is used. 

Similarly the constant use of tagging and custom scripts per test folder, will mean that the user can run tests specific to a certain page, area or functionality. 


