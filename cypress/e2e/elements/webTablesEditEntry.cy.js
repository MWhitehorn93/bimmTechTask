import { WebTablesPage } from '../../pages/webTables';

const webTablesPage = new WebTablesPage();
const redBorderColor = 'rgb(220, 53, 69)';

describe('WebTables edit entry tests', () => {
    beforeEach(() => {
        webTablesPage.navigateToWebTablesPage();
    });

    it('Web Tables Edit specific entry', () => {
        cy.fixture('testData').then((testData) => {
            //Asserting the existing values of Cierra
            webTablesPage.salaryValueByFirstName(testData.webTables.editEntry.firstName).should('contain', testData.webTables.editEntry.oldSalary);
            webTablesPage.departmentValueByFirstName(testData.webTables.editEntry.firstName).should('contain', testData.webTables.editEntry.oldDepartment);
            //Open up the edit form for Cierra
            webTablesPage.editButtonByFirstName(testData.webTables.editEntry.firstName).click({ force: true });
            //Clearing existing values and then entering new values. 
            webTablesPage.salaryInput().clear().type(testData.webTables.editEntry.newSalary);
            webTablesPage.departmentInput().clear().type(testData.webTables.editEntry.newDepartment);
            webTablesPage.submitButton().click();
            //Asserting the values have succesfully be updated for Cierra
            webTablesPage.salaryValueByFirstName(testData.webTables.editEntry.firstName).should('contain', testData.webTables.editEntry.newSalary);
            webTablesPage.departmentValueByFirstName(testData.webTables.editEntry.firstName).should('contain', testData.webTables.editEntry.newDepartment);
        });
   });
   it('Web Tables Edit specific entry and then cancel', () => {
        cy.fixture('testData').then((testData) => {
            //Asserting the existing values of Cierra
            webTablesPage.salaryValueByFirstName(testData.webTables.editEntry.firstName).should('contain', testData.webTables.editEntry.oldSalary);
            webTablesPage.departmentValueByFirstName(testData.webTables.editEntry.firstName).should('contain', testData.webTables.editEntry.oldDepartment);
            //Open up the edit form for Cierra
            webTablesPage.editButtonByFirstName(testData.webTables.editEntry.firstName).click({ force: true });
            //Clearing existing values and then entering new values. 
            webTablesPage.salaryInput().clear().type(testData.webTables.editEntry.newSalary);
            webTablesPage.departmentInput().clear().type(testData.webTables.editEntry.newDepartment);
            //Click the close button to cancel the edit
            webTablesPage.closeEditFormButton().click();
            //Asserting the values have not been updated for Cierra
            webTablesPage.salaryValueByFirstName(testData.webTables.editEntry.firstName).should('contain', testData.webTables.editEntry.oldSalary);
            webTablesPage.departmentValueByFirstName(testData.webTables.editEntry.firstName).should('contain', testData.webTables.editEntry.oldDepartment);
        });
   });
   it('Web Tables edit data validation', () => {
        cy.fixture('testData').then((testData) => {
           //Asserting the existing values of Cierra
           webTablesPage.emailValueByFirstName(testData.webTables.editEntry.firstName).should('contain', testData.webTables.editEntry.validEmail);
            //Open up the edit form for Cierra
            webTablesPage.editButtonByFirstName(testData.webTables.editEntry.firstName).click({ force: true });
            //Clearing existing values and then entering new values. 
            webTablesPage.emailInput().clear().type(testData.webTables.editEntry.invalidEmail);
            //Click the submit button
            webTablesPage.submitButton().click();
            //Asserting the border colour of the email input is red
            webTablesPage.emailInput().should('have.css', 'border-color', redBorderColor);
        });
    }); 
});
