import { ProgressBarPage } from "../page-objects/Progress"


describe('Test Progress Page', () => {


  before(() => {
    cy.visit('https://demoqa.com/progress-bar')
  })


  it("Verify Progress Bar is working propely or not", () => {
    const progressBar = new ProgressBarPage()
    progressBar.verifyProgressBar()

  })


})