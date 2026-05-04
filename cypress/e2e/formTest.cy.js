import { FormPage } from '../pages/formPage.js';

const formPage = new FormPage();

describe('template spec', () => {
  
  beforeEach(() => {
    formPage.navigateToFormPage();
  });
  
  it('passes', () => {
    cy.fixture('testData').then((testData) => {
      formPage.fillForm(testData.formEntryData.firstName,
         testData.formEntryData.lastName,
         testData.formEntryData.email,
         testData.formEntryData.mobile,
         testData.formEntryData.currentAddress);
    });
  });
});