import { ButtonsPage } from "../page-objects/Button"

describe('Button Press Tests', () => {

    beforeEach(() => {
        cy.visit('https://demoqa.com/buttons')
    });
    
    it("Verify doubleClick button", () => {
        const buttons = new ButtonsPage()
        buttons.doubleClick()
        buttons.doubleClickMessage.should('contain', 'You have done a double click')
    })

    it("Verify rightClick button", () => {
        const buttons = new ButtonsPage()
        buttons.rightClick()
        buttons.rightClickMessage.should('contain', 'You have done a right click')
    })

    it("Verify dynamicClick button", () => {
        const buttons = new ButtonsPage()
        buttons.dynamicClick()
        buttons.dynamicClickMessage.should('contain', 'You have done a dynamic click')
    })

})