///<reference types="cypress" />

class PlaylistPage {

    elements = {

        playlistTitle: () => cy.get('#header-description > h3 > yt-formatted-string >a'), //using the title of the element
        
    }

}

//export module object
module.exports = new PlaylistPage();