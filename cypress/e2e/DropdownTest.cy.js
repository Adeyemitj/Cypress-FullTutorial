///<reference types="cypress" />

describe('Dropdown Test Suites', () => {
    it('Dropdown Test', () => {
        cy.visit("https://example.cypress.io/commands/actions");

        cy.get(".action-select").select(2); //using index
        cy.get(".action-select").select('bananas'); //using visible text
        cy.get(".action-select").select('fr-oranges'); //using value atrribute


    })
})