export class ButtonsPage {

    doubleClick(){
        cy.get("#doubleClickBtn").dblclick()
    }

    rightClick(){
        cy.get("#rightClickBtn").rightclick()
    }

    dynamicClick(){
    cy.xpath("//button[normalize-space()='Click Me']").click()
    
    }

    get doubleClickMessage() {
        return cy.get("#doubleClickMessage");
      }

    get rightClickMessage() {
        return cy.get("#rightClickMessage");
      }    

    get dynamicClickMessage() {
        return cy.get("#dynamicClickMessage");
     }

}