import { StudentRegistrationFormPage } from '../../pages/studentRegistrationFormPage.js';

const studentRegistrationFormPage = new StudentRegistrationFormPage();

describe('Student Registration Form', () => {
  
  beforeEach(() => {
    studentRegistrationFormPage.navigateToStudentRegistrationFormPage();
  });
  
  it('Student Form submission with valid data and assert entry', () => {
    cy.fixture('testData').then((testData) => {
      //storing some values from testData to consts for easier handling 
      const day = testData.formEntry.dob.day;
      const month = testData.formEntry.dob.month;
      const year = testData.formEntry.dob.year;
      const stateOption = testData.formEntry.state.option;
      const stateName = testData.formEntry.state.name;
      const cityName = testData.formEntry.city.name;
      const cityOption = testData.formEntry.city.option;

      //filling out the student registration form with values from testData.json
      studentRegistrationFormPage.fillStudentForm(testData.formEntry.firstName,
         testData.formEntry.lastName,
         testData.formEntry.emailValue,
         testData.formEntry.gender,
         testData.formEntry.mobileNumber,
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
      //submit the form
      studentRegistrationFormPage.submitButton().click();

      //asserting the form responnse by finding the label value and then asserting its sibling element value
      testData.formEntry.formResponse.forEach(field => {
        studentRegistrationFormPage.assertStudentFormResponse(field.label, field.value);
      });
    });
  });
});