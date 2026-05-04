import { FormPage } from '../pages/formPage.js';

const formPage = new FormPage();

describe('template spec', () => {
  
  beforeEach(() => {
    formPage.navigateToFormPage();
  });
  
  it('Form submission with valid data and assert entry', () => {
    cy.fixture('testData').then((testData) => {
      const day = testData.formEntry.dob.day;
      const month = testData.formEntry.dob.month;
      const year = testData.formEntry.dob.year;
      const stateOption = testData.formEntry.state.option;
      const stateName = testData.formEntry.state.name;
      const cityName = testData.formEntry.city.name;
      const cityOption = testData.formEntry.city.option;

      formPage.fillForm(testData.formEntry.firstName,
         testData.formEntry.lastName,
         testData.formEntry.emailValue,
         testData.formEntry.gender,
         testData.formEntry.mobile,
         year,
         month,
         day,
         testData.formEntry.subjects,
         testData.formEntry.hobbies,
         testData.formEntry.pictureFilePath,
         testData.formEntry.currentAddress,
         stateOption,
         cityOption
      );
      formPage.submitButton().click();

      
      formPage.formResponse(testData.formEntry.emailLabel, testData.formEntry.emailValue);
    });
  });
});