import { WebTablesPage } from '../../pages/webTables';

const webTablesPage = new WebTablesPage();

describe('WebTables delete tests', () => {
    beforeEach(() => {
        webTablesPage.navigateToWebTablesPage();
    });

    it('Web Tables Delete specific entry', () => {
        cy.fixture('testData').then((testData) => {
            //assert that the entry is going to be deleted is shown
            webTablesPage.getValueByFirstName(testData.webTables.deleteEntry.firstName, testData.webTables.deleteEntry.firstName).should('exist');
            //delete entry
            webTablesPage.deleteButtonByFirstName(testData.webTables.deleteEntry.firstName).click({ force: true });
            //assert entry has been deleted
            webTablesPage.getValueByFirstName(testData.webTables.deleteEntry.firstName, testData.webTables.deleteEntry.firstName).should('not.exist');
        });
    });
});