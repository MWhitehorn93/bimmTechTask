export class FormPage {
    navigateToFormPage() {
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

    //gender

    numberInput() {
        return cy.get('#userNumber');
    }

    //date of birth

    //subjects

    //hobbies

    //picture

    currentAddressInput() {
        return cy.get('#currentAddress');
    }

    fillForm(firstName, lastName, email, number, address) {
        this.firstNameInput().clear().type(firstName);
        this.lastNameInput().clear().type(lastName);
        this.emailInput().clear().type(email);
        //gender
        this.numberInput().clear().type(number);
        //DOB
        //subjects
        //hobbies
        //picture
        this.currentAddressInput().clear().type(address);
    }
}