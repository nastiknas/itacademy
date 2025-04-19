export class TextBoxPage {

    get fullNameLocator() {
        return cy.xpath("//input[@id='userName']");
      }

    get emailLocator() {
        return cy.xpath("//input[@id='userEmail']");
      }

    get currentAddressLocator() {
        return cy.get("#currentAddress");
      }

      get permanentAddressLocator() {
        return cy.get("#permanentAddress");
      }

    enterFullName(name) {
        this.fullNameLocator.clear().type(name)
    }
    enterEmail(email) {
        this.emailLocator.clear().type(email)
    }

    enterCurrentAddress(cAddress) {
        this.currentAddressLocator.clear().type(cAddress)
    }

    enterPermanentAddress(pAddress) {
        this.permanentAddressLocator.clear().type(pAddress)
    }
    clickSubmitButton() {
        cy.get("#submit").click()
    }

    get fullNameOutput() {
        return cy.xpath("//p[@id='name']");
      }

    get emailOutput() {
        return cy.xpath("//p[@id='email']");
      }

    get currentAddressOutput() {
        return cy.xpath("//p[@id='currentAddress']");
      }

      get permanentAddressOutput() {
        return cy.xpath("//p[@id='permanentAddress']");
      }

}




