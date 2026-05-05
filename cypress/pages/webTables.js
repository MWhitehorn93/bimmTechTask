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

    editButtonByFirstName(firstName) {
        return cy.get('td').contains(firstName).siblings('td').find('span[title="Edit"]');
    }

    getValueByFirstName(firstName, value) {
        return cy.get('td').contains(firstName).siblings('td').contains(value)
    }

    emailInput() {
        return cy.get('#userEmail')
    }

    salaryInput() {
        return cy.get('#salary');
    }

    departmentInput() {
        return cy.get('#department');
    }

    submitButton() {
        return cy.get('#submit');
    }

    closeEditFormButton() {
        return cy.findByRole('button', { name: 'Close' });
    }
}