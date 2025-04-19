import { TextBoxPage } from "../page-objects/TextBox";


    beforeEach(() => {
        cy.visit('https://demoqa.com/text-box')
    });


    before(() => {
        cy.fixture('testData').as('data')
    })
    
    describe('Test Text Box', () => {
    
        it("Verify Placeholders", () => {
            const textBox = new TextBoxPage()
            textBox.fullNameLocator.invoke('attr', 'placeholder').should('eq', 'Full Name')
            textBox.emailLocator.invoke('attr', 'placeholder').should('eq', 'name@example.com')
            textBox.currentAddressLocator.invoke('attr', 'placeholder').should('eq', 'Current Address')
    
        })
    
        it("Testing the text field", function () {
            const textBox = new TextBoxPage()
            const textBoxDataLength = this.data.textBoxData.length
            for (var i = 0; i < textBoxDataLength; i++) {
                textBox.enterFullName(this.data.textBoxData[i].fullname)
                textBox.enterEmail(this.data.textBoxData[i].email)
                textBox.enterCurrentAddress(this.data.textBoxData[i].currentAddress)
                textBox.enterPermanentAddress(this.data.textBoxData[i].permanentAddress)
                textBox.clickSubmitButton()
    
                textBox.fullNameOutput.should('contain', this.data.textBoxData[i].fullname)
                textBox.emailOutput.should('contain', this.data.textBoxData[i].email)
                textBox.currentAddressOutput.should('contain', this.data.textBoxData[i].currentAddress)
                textBox.permanentAddressOutput.should('contain', this.data.textBoxData[i].permanentAddress)
            }
        })
    

        it("Enter email without domain part", function () {
            const textBox = new TextBoxPage()   
                textBox.emailLocator.type('miledynastia@gmail')
                textBox.clickSubmitButton()
                textBox.emailLocator.should('have.class', 'mr-sm-2 field-error form-control') 
        })


        it("Enter email without @ symbol", function () {
            const textBox = new TextBoxPage()    
                textBox.emailLocator.type('miledynastiagmail.com')
                textBox.clickSubmitButton()
                textBox.emailLocator.should('have.class', 'mr-sm-2 field-error form-control') 
        })


        it("Enter email without domain", function () {
            const textBox = new TextBoxPage()        
                textBox.emailLocator.type('miledynastia@')
                textBox.clickSubmitButton()
                textBox.emailLocator.should('have.class', 'mr-sm-2 field-error form-control') 
        })


        it("Enter email with Russian domain", function () {
            const textBox = new TextBoxPage()          
                textBox.emailLocator.type('miledynastia@бел.ру')
                textBox.clickSubmitButton()
                textBox.emailLocator.should('have.class', 'mr-sm-2 field-error form-control') 
        })

        it("Enter email with Russian username", function () {
            const textBox = new TextBoxPage()              
                textBox.emailLocator.type('милединастя@mail.ru')
                textBox.clickSubmitButton()
                textBox.emailLocator.should('have.class', 'mr-sm-2 field-error form-control') 
        })
})

