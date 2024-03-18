describe('Privacy Policy Test', () => {


    it('changing total data stored', () => {
      // Visit the registration page
      cy.visit('https://rabata.io');
      //cy.get('#dataApiStoredInput').as('range').invoke('val', 1).trigger('change');
     // cy.get('#dataApiStoredInput').trigger('mousemove', {clientX: 1500, clientY: 0});
      cy.get('#dataApiStoredInput').scrollTo('right');
    });
  });