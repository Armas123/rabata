describe('Login Test', () => {
    const USER_EMAIL = "test3@example.com";
    const USER_PASSWORD = "!Password123"
    it('should register a new user', () => {
      // Visit the authorization page
      cy.visit('https://rabata.io');
      cy.get('.arrow-wrap > .btn').click();
      cy.get('.info > .btn').should("be.visible").click();

      cy.get('.form.flex > .h2')
      .should('contain', 'Login');

      cy.get('#username')
      .type("test3@mailinator.com")

      cy.get('#password')
      .type("!Password123")

      cy.get('.btn-login').click();

      cy.get('.h2.heading').should('be.visible');
    });
  });