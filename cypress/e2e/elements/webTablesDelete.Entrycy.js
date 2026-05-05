import { WebTablesPage } from '../../pages/webTables';

const webTablesPage = new WebTablesPage();

describe('WebTables delete tests', () => {
    beforeEach(() => {
        webTablesPage.navigateToWebTablesPage();
    });

    it('Web Tables Delete specific entry', () => {
        cy.fixture('testData').then((testData) => {
            webTablesPage.webTableBody().should('contain', testData.webTables.deleteEntry.firstName);
            webTablesPage.deleteButtonByFirstName(testData.webTables.deleteEntry.firstName).click({ force: true });
            webTablesPage.webTableBody().should('not.contain', testData.webTables.deleteEntry.firstName);
        });
    });
});