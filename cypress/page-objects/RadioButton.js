export class RadioButtonPage {

    get noRadioButton() {
        return cy.get("#noRadio");
      }

    get yesRadioButton() {
        return cy.get("#yesRadio");
      }

    get impressiveRadioBtn() {
        return cy.get("#impressiveRadio");
      }


      get textSuccess() {
        return cy.get(".text-success");
      }

    checkYesRadioBtn(){
        this.yesRadioButton.check({force: true})
        }
    
    checkImpressiveRadioBtn(){
            this.impressiveRadioBtn.check({force: true})
        }

}