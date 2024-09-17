///<reference types="cypress" />

class ResultPage {

    elements = {

        playlist: () => cy.get('[title="API Testing by Testers Talk☑️"]'), //using the title of the element
        
    }

    //go to playlist to click on it
    goToPlayList() {
        this.elements.playlist().click();
    }

}

//export module object
module.exports = new ResultPage();