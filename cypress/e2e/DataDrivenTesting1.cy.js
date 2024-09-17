///<reference types="cypress" />

describe('Data Driven Test Suites', () => {

    let testData;

    before('Run Before All Test', () => {
        cy.fixture('DataDriveTest.json').then((jsonData) => {
            testData = jsonData;
        })
        
    })

    it('Data Driven Test', () => {

        cy.visit('https://www.google.com/search?q=javascript+by+testers+talk');

        cy.get('textarea[aria-label="Search"]').clear()
            .type(testData.skill1)
        
        cy.get('button[type="submit"]').click()


    })
})