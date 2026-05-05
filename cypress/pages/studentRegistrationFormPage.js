export class StudentRegistrationFormPage {
    navigateToStudentRegistrationFormPage() {
        cy.visit('/automation-practice-form');
    }

    firstNameInput() {
        return cy.get('#firstName');
    }

    lastNameInput() {
        return cy.get('#lastName');
    }

    emailInput() {
        return cy.get('#userEmail');
    }

    genderRadioButton(gender){  
        return cy.findByRole('radio', { name: gender });
    }

    mobileNumberInput() {
        return cy.get('#userNumber');
    }

    dobInput() {
        return cy.get('#dateOfBirthInput');
    }

    dobDaySelect(day) {
        return cy.get(`.react-datepicker__day--0${day}`);
    }

    dobMonthSelect() {
        return cy.get('.react-datepicker__month-select');
    }

    dobYearSelect() {
        return cy.get('.react-datepicker__year-select');
    }

    subjectsInput() {
        return cy.get('#subjectsInput');
    }

    hobbiesCheckbox(hobby) {
        return cy.findByRole('checkbox', { name: hobby });
    }

    pictureInput() {
        return cy.get('#uploadPicture');
    }

    currentAddressInput() {
        return cy.get('#currentAddress');
    }

    stateDropDown() {
        return cy.get('#state');
    }

    stateSelectValue(stateOption) {
        return cy.get(`#react-select-3-option-${stateOption}`);
    }

    cityDropDown() {
        return cy.get('#city');
    }

    citySelectValue(cityOption) {
        return cy.get(`#react-select-4-option-${cityOption}`);
    }

    submitButton() {
        return cy.findByRole('button', { name: 'Submit' });
    }

    assertStudentFormResponse(label, value) {
        return cy.get('tbody').contains('td', label).siblings('td').should('have.text', value);
    }

    fillStudentForm(firstName, lastName, email, gender, mobileNumber, year, month, day, subjects, hobbies, pictureFilePath, address, stateOption, cityOption) {
        this.firstNameInput().clear().type(firstName);
        this.lastNameInput().clear().type(lastName);
        this.emailInput().clear().type(email);
        this.genderRadioButton(gender).check();
        this.mobileNumberInput().clear().type(mobileNumber);
        this.dobInput().click();
        this.dobYearSelect().select(year);
        this.dobMonthSelect().select(month);
        this.dobDaySelect(day).click();
        this.subjectsInput().clear().type(subjects).type('{enter}');
        hobbies.forEach(hobby => {
            this.hobbiesCheckbox(hobby).check();
        });
        this.pictureInput().selectFile(pictureFilePath, { force: true });
        this.currentAddressInput().clear().type(address);
        this.stateDropDown().click();
        this.stateSelectValue(stateOption).click();
        this.cityDropDown().click();
        this.citySelectValue(cityOption).click();
    }
}