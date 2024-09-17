///<reference types="Cypress" />

describe('Cypress XPath Suites', () => {
    Cypress._.times(2, (k) => {

        it('Cypress XPath Test', () => {
            cy.visit('https://www.google.com/search?q=javascript+by+testers+talk')
    
            cy.xpath('//textarea[@aria-label="Search"]').clear()
                .type('api testing by testers talk')
                .type('{enter}');
                
            //cy.xpath('//*[@aria-label="Search"]').type('api testing by testers talk')
    
            //cy.xpath('//span[text()="Youtube"]').click();
            cy.xpath('//span[text()="Github"]').click();  
    
        })
        
    })

    

})