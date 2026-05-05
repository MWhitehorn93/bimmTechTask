import { StudentRegistrationFormPage } from '../pages/studentRegistrationFormPage.js';

const studentRegistrationFormPage = new StudentRegistrationFormPage();
const redBorderColor = 'rgb(220, 53, 69)'; //saving the border colour value as a const

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

  it('Student form required fields validation and assert CSS border colour', () => {
      studentRegistrationFormPage.submitButton().click();
      //storing extra data for some of the required fields as consts 
      const male = 'Male';
      const female = 'Female';
      const other = 'Other';
      const sports = 'Sports';
      const reading = 'Reading';
      const music = 'Music';
      //Creating an array of the requited fields 
      const requiredFields = [
          studentRegistrationFormPage.firstNameInput(),
          studentRegistrationFormPage.lastNameInput(),
          studentRegistrationFormPage.emailInput(),
          studentRegistrationFormPage.genderRadioButton(male),
          studentRegistrationFormPage.genderRadioButton(female),
          studentRegistrationFormPage.genderRadioButton(other),
          studentRegistrationFormPage.mobileNumberInput(),
          studentRegistrationFormPage.subjectsInput(),
          studentRegistrationFormPage.hobbiesCheckbox(sports),
          studentRegistrationFormPage.hobbiesCheckbox(reading),
          studentRegistrationFormPage.hobbiesCheckbox(music),
          studentRegistrationFormPage.currentAddressInput(),
          studentRegistrationFormPage.stateDropDown(),
          studentRegistrationFormPage.cityDropDown()
      ];

      //a forEach loop to go through and assert that the border colour is on show on each field stored above
      requiredFields.forEach(registrationField => {
          registrationField.should('have.css', 'border-color', redBorderColor);
      });
  });

  it('Student form validation for email field with invalid email', () => {
    cy.fixture('testData').then((testData) => {
      //filling out the email field with an invalid value
      studentRegistrationFormPage.emailInput().type(testData.formEntry.invalidEmail);
      studentRegistrationFormPage.submitButton().click();
      //asserting that the border coulor of the email field is red
      studentRegistrationFormPage.emailInput().should('have.css', 'border-color', redBorderColor);
    });
  });
});