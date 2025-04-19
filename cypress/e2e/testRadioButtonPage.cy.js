import { RadioButtonPage } from "../page-objects/RadioButton";


        beforeEach(() => {
            cy.visit('https://demoqa.com/radio-button')
        });

describe('Radio Button check Tests', ()=>{


    it("Verify No Radio button", () => {
        const radioButton = new RadioButtonPage()
        radioButton.noRadioButton.should('be.disabled')

    })

    it("Verify Yes Radio button", ()=>{
       const radioButton = new RadioButtonPage()
       radioButton.checkYesRadioBtn()
       radioButton.textSuccess.should('contain','Yes')
    })


    it("Verify Impressive Radio button", ()=>{
        const radioButton = new RadioButtonPage()
        radioButton.checkImpressiveRadioBtn()
        radioButton.textSuccess.should('contain','Impressive')
     })

})