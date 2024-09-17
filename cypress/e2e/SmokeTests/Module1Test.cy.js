///<reference types="cypress"/>

describe("Module1 Test Suite", () => {

    it("Module1 Test1", () => {
        cy.visit('https://www.google.com/search?q=javascript+by+testers+talk');
        cy.get('textarea#APjFqb.gLFyf').then((element) => {
            cy.log('Text from Google 1 using id:'+element.text())

            cy.get('textarea[aria-label="Search"]').then((element) => {
                cy.log("Text from Google 2 using attribute: " + element.text());
            })
            
        })
        //get the first element
        cy.get('.crJ18e a').first().click();

        //get the last element
        cy.get('.crJ18e a').first().click();

        //index element
        cy.get('.crJ18e a').eq(1).click();

        //start-with
        cy.get('button[type^="sub"]').click();

        //End-with
        cy.get('button[type$="mit"]').click();

        //contains CSS
        cy.get('button[type*="ubmi"]').click();

        //contains - cypress
        cy.contains('Testers Talk').click();

        
        
    })
})