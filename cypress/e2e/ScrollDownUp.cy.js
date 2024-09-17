///<reference types="cypress" />

describe('Scroll Down/Up Test Suites', () => {
    it('Scroll Down/Up Test', () => {

        cy.visit('https://www.youtube.com/watch?v=ACUMZ3OkExQ&list=PLUeDIlio4THFLrS29tJnP9yz-QKhn4mdB');
        
        cy.wait(5000);
        /*
        cy.contains('JavaScript #31 Inheritance with Examples')
            .scrollIntoView()
            .should('be.visible')
            .click(); */
        
        cy.contains('JavaScript Full Course Overview')
            .scrollIntoView()
            .should('be.visible')
            .click();


    })
})