describe('Registration Test', () => {


    it('should register a new user', () => {
      // Visit the registration page
      cy.visit('https://rabata.io/signup');
  
      // Fill in registration form
      cy.get('#registration_form_fullName').type('John Rambo');
      cy.get('#registration_form_email').type('test3@mailinator.com');
      cy.get('#registration_form_plainPassword_first').type('!Password123');
      cy.get('#registration_form_plainPassword_second').type('!Password123');
      cy.get('.self-start').click();
      // Submit registration form
      cy.get('#registration > .btn').click();
  
      // Wait for registration to complete
      cy.get('.h2').should('contain.text', 'Verify your email');
    });
  });