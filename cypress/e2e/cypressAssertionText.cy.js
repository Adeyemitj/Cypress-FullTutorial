// /<reference types ="Cypress" />

describe("Cypress Assertion Suite", () => {

    it("Cypress Assertion Test", () => {
        cy.visit('https://www.google.com/search?q=javascript+by+testers+talk');

        cy.get('#APjFqb').then((element) => {
            expect(element.text()).to.equal("javascript by testers talk");
        });
        
        cy.get('#APjFqb').should("have.text", "javascript by testers talk");
        cy.get('#APjFqb').should("contain", "javascript by testers talk");
        cy.get('#APjFqb').should("be.visible");
        cy.get('#APjFqb').should("have.html", "javascript by testers talk")
            .and("have.attr", "value")
        cy.get('#APjFqb').should("have.html", "javascript by testers talk")
            .and("have.attr", "value")
            .and("include", "javascript by testers talk");
        
    });

});
