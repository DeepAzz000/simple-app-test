describe('Login Tests', () => {
  it('logs in successfully with valid credentials', () => {
    // Attempt login using valid credentials from environment variables
    cy.login(Cypress.env('valid_username'), Cypress.env('valid_password'));

    // Check that the welcome message appears after login
    cy.get('[data-cy="welcome-message"]').should('be.visible');
  });

  it('shows error on invalid credentials', () => {
    // Attempt login using invalid password
    cy.login(Cypress.env('valid_username'), Cypress.env('invalid_password'));

    // Expect an error message to be shown
    cy.contains('Invalid credentials').should('be.visible');
  });
});
