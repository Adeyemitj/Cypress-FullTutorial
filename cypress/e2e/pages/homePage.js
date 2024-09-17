class HomePage {

    elements = {

        searchTextBox: () => cy.get('[name="search_query"]'), //using name attr for the search box
        searchIcon : () => cy.get('#search-icon-legacy > yt-icon') //using the id 'search-icon-legacy' of the search button with the search icon 'yt-icon'
    }

    //create an abstraction method to search youtube
    visit() {
        cy.visit('https://www.youtube.com/'); //open youtube page
    }

    searchYoutube() {
        this.elements.searchTextBox().type('api testing by testers talk'); //search for the element
        this.elements.searchIcon().click(); //click the search icon button
    }
}

//export module object
module.exports = new HomePage();