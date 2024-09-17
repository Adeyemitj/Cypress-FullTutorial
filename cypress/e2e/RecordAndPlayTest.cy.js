describe('Record and Play Suite', () => {
  it('passes', () => {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('https://www.youtube.com/');
    cy.get('#search-input > #search').clear('t');
    cy.get('#search-input > #search').type('tester talk');
    cy.get('#sbse0 > .sbqs_c > b').click();
    cy.get('.ytd-channel-renderer > #img').click();
    cy.get('#c4-player > .html5-video-container > .video-stream').click();
    cy.get('#hover-overlays > .ytd-playlist-thumbnail').click();
    cy.get('#movie_player > .html5-video-container > .video-stream').click();
    /* ==== End Cypress Studio ==== */
  })

  /* ==== Test Created with Cypress Studio ==== */
  it('javascripttesting.cy.js', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('https://www.youtube.com/');
    cy.get('#search-input > #search').clear('t');
    cy.get('#search-input > #search').type('testers talk{enter}');
    cy.get('.ytd-channel-renderer > #img').click();
    cy.get('#c4-player > .html5-video-container > .video-stream').click();
    cy.get(':nth-child(2) > :nth-child(3) > .ytd-item-section-renderer > #dismissible > #contents > .ytd-shelf-renderer > #right-arrow > .style-scope > yt-button-shape > .yt-spec-button-shape-next > yt-touch-feedback-shape > .yt-spec-touch-feedback-shape > .yt-spec-touch-feedback-shape__fill').click();
    cy.get(':nth-child(2) > :nth-child(3) > .ytd-item-section-renderer > #dismissible > #contents > .ytd-shelf-renderer > #left-arrow > .style-scope > yt-button-shape > .yt-spec-button-shape-next > yt-touch-feedback-shape > .yt-spec-touch-feedback-shape > .yt-spec-touch-feedback-shape__fill').click();
    cy.get('#hover-overlays > .ytd-playlist-thumbnail > yt-icon.style-scope > .yt-icon-shape > div').click();
    cy.get('#movie_player > .html5-video-container > .video-stream').click();
    /* ==== End Cypress Studio ==== */
  });
})