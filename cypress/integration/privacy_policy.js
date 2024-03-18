describe('Privacy Policy Test', () => {


    it('should register a new user', () => {
      // Visit the registration page
      cy.visit('https://rabata.io');
  
      cy.get('[onclick="modalPrivacy.show()"]').click();
      cy.get('#modalPrivacy > .modal-container > .h3').should('contain','Privacy Policy');
      cy.wait(5000);
      cy.get('#modalPrivacy > .modal-container > .btn').click();
    });
  });