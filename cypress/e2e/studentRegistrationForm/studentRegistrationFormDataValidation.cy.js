import { StudentRegistrationFormPage } from '../../pages/studentRegistrationFormPage.js';

const studentRegistrationFormPage = new StudentRegistrationFormPage(); 

describe('Student Registration Form Data Validation', () => {
  
  beforeEach(() => {
    studentRegistrationFormPage.navigateToStudentRegistrationFormPage();
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
          registrationField.shouldHaveRedBorderColour();
      });
  });

  it('Student form validation for email field with invalid email', () => {
    cy.fixture('testData').then((testData) => {
      //filling out the email field with an invalid value
      studentRegistrationFormPage.emailInput().type(testData.formEntry.invalidEmail);
      studentRegistrationFormPage.submitButton().click();
      //asserting that the border coulor of the email field is red
      studentRegistrationFormPage.emailInput().shouldHaveRedBorderColour();
    });
  });
});