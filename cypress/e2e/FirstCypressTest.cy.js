///<reference types="Cypress" />

describe('Test Suite 1', () => {

  it('My First Test', () => {
    cy.visit('https://www.youtube.com/')

    cy.get('#search-input > #search').type('Javascript by testers talk');

    //cy.get('#search-icon-legacy > yt-icon.style-scope > .yt-icon-shape > div').click();
    cy.get('#search-icon-legacy > yt-icon.style-scope').click();

    
  })

  it('My First Test 2', () => {

    cy.log("Test2 is started")
    cy.visit('https://www.youtube.com/')

    cy.get('#search-input > #search').type('Javascript by testers talk');

    //cy.get('#search-icon-legacy > yt-icon.style-scope > .yt-icon-shape > div').click();
    cy.get('#search-icon-legacy > yt-icon.style-scope').click();

    cy.log("Test2 is completed....");


  })
})