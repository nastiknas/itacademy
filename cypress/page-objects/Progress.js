export class ProgressBarPage {

    get startStopButton() {
        return cy.get("#startStopButton");
      }

      get startStopButton() {
        return cy.get("#startStopButton");
      }


      get ProgressBarLine() {
        return cy.xpath('//div[@class="progress-bar bg-info"]');
      }


    verifyProgressBar() {
        this.startStopButton.should('have.text', 'Start').click()
        cy.wait(3000)
        this.startStopButton.should('have.text', 'Stop').click()
        this.ProgressBarLine.should('have.attr', 'aria-valuenow').then((value) => {
            expect(parseInt(value)).greaterThan(10)
        })
    }


}