export class WebTablesPage {
    navigateToWebTablesPage() {
        cy.visit('/webtables');
    }

    webTableBody() {
        return cy.get('tbody');
    }

    deleteButtonByFirstName(firstName) {
        return cy.get('td').contains(firstName).siblings('td').find('span[title="Delete"]');
    }
}