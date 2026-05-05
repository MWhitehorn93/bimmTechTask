import { checkBoxPage } from '../pages/checkBoxPage';

const checkBoxPage = new checkBoxPage();

describe('CheckBox', () => {
    beforeEach(() => {
        checkBoxPage.navigateToCheckBoxPage();
    });

    it('CheckBox selection', () => {
        cy.fixture('testData').then((testData) => {
        });
    });
    
});