import '@testing-library/cypress/add-commands'

const redBorderColor = 'rgb(220, 53, 69)';

Cypress.Commands.add('shouldHaveRedBorderColour',
    { prevSubject: 'element' },
    (subject) => {
        cy.wrap(subject).should('have.css', 'border-color', redBorderColor)
    }
)