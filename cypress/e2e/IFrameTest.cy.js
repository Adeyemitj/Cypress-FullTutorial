///<reference types="cypress" />
import 'cypress-iframe'


describe('IFrame Test Suites', () => {
    it('IFrame Test', () => {
        cy.visit('./iFramesDemo.html')

        cy.frameLoaded('[name="myframe"]'); //frame name

        //cy.iframe().contains('About').click()
        //cy.iframe().contains('Download').click()

    })
})