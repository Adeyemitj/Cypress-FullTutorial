///<reference types="cypress" />

//import all pages
import homePage from "../e2e/pages/homePage"
import resultPage from "../e2e/pages/resultPage"
import playlistPage from "../e2e/pages/playlistPage"

describe('Page Object Test Suite', () => {

    it('Page Object Test', () => {

        //Open Youtube
        homePage.visit();

        //Search in Youtube
        homePage.searchYoutube();

        //Go to playlist
        resultPage.goToPlayList();

        //validate playlist title
        playlistPage.elements.playlistTitle().should('have.text', 'API Testing by Testers Talk☑️');

    })
})