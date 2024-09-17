///<reference types="cypress" />

before('Running before all tests', () => {
    cy.log('automation test begins...!')
});

after('Running after all tests', () => {
    cy.log('automation test completed...!')
});

beforeEach('Running before all tests', () => {
    cy.log('logging to the website before testng...')
    cy.visit('https://www.google.com/search?q=javascript+by+testers+talk');
});

afterEach('Running after all tests', () => {
    cy.log('automation test completed2...!')
});

describe("Hooks Test Suite", () => {

    it("Hooks test 1", () => {
        
        cy.get('textarea#APjFqb.gLFyf').then((element) => {
            cy.log('Text from Google 1 using id:' + element.text())

            cy.get('textarea[aria-label="Search"]').then((element) => {
                cy.log("Text from Google 2 using attribute: " + element.text());
            })
            
        });
        
        //index element
        cy.get('.crJ18e a').eq(1).click();
        
    });

    it("Hooks test 2", () => {
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