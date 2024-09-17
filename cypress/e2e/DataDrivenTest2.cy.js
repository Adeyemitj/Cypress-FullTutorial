///<reference types="cypress" />

const jsonData = require('../fixtures/DataDrivenTest2.json')

describe('Data Driven Test Suites2', () => {
    jsonData.forEach((testData) => {
        it('Data Driven Test2', () => {

            cy.visit('https://www.google.com/search?q=javascript+by+testers+talk');
    
            cy.get('textarea[aria-label="Search"]').clear()
                .type(testData.skill1)
            
            cy.get('button[type="submit"]').click()
    
    
        });
        
    });

    
})