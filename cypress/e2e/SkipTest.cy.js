///<reference types="cypress" />

before('Running before all tests', () => {
    cy.log('automation test begins...!')
});

after('Running after all tests', () => {
    cy.log('automation test completed...!')
});

beforeEach('Running before all tests', () => {
    cy.log('logging to the website before testing...')
    cy.visit('https://www.google.com/search?q=javascript+by+testers+talk');
});

afterEach('Running after all tests', () => {
    cy.log('automation test completed2...!')
});

describe("Skip Test Suite", () => {

    it("Skip test 1", () => {
        
        cy.get('textarea#APjFqb.gLFyf').then((element) => {
            cy.log('Text from Google 1 using id:' + element.text())

            cy.get('textarea[aria-label="Search"]').then((element) => {
                cy.log("Text from Google 2 using attribute: " + element.text());
            })
            
        });
        
        //index element
        cy.get('.crJ18e a').eq(1).click();
        
    });

    it.skip("Skip test 2", () => {
        //cy.visit('https://www.google.com/search?q=javascript+by+testers+talk');
        
        cy.get('textarea#APjFqb.gLFyf').then((element) => {
            cy.log('Text from Google 1 using id:' + element.text())

            cy.get('textarea[aria-label="Search"]').then((element) => {
                cy.log("Text from Google 2 using attribute: " + element.text());
            })
            
        });
        
        //index element
        cy.get('.crJ18e a').eq(1).click();
        
    });

    it("Skip test 3", () => {
        //cy.visit('https://www.google.com/search?q=javascript+by+testers+talk');
        
        cy.get('textarea#APjFqb.gLFyf').then((element) => {
            cy.log('Text from Google 1 using id:' + element.text())

            cy.get('textarea[aria-label="Search"]').then((element) => {
                cy.log("Text from Google 2 using attribute: " + element.text());
            })
            
        });
        
        //index element
        cy.get('.crJ18e a').eq(1).click();
        
    });
});