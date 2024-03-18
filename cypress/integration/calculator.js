describe (  "calculator",()  => {

  it(  "calculator test",()  => {

      cy.visit("https://rabata.io/")

      cy.get('#dataApiStoredInput').invoke('val', 200).trigger('input');
      cy.wait(2000);
      // cy.get('#dataApiStoredInput').as('range').invoke('val', 100).trigger('change')
      cy.get('#dataDownloadInput').invoke('val', 300).trigger('input');
      cy.wait(1000);
      cy.get('#rabataMobileApi').should('contain', '$90000 / yr');
  } )

} )