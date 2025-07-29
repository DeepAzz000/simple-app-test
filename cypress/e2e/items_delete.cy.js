import { generateRandomString } from '../support/utils';

describe('Deleting an item', () => {
  beforeEach(() => {
    // Log in before each test
    cy.login(Cypress.env('valid_username'), Cypress.env('valid_password'));
  });

  it('deletes the item', () => {
    // Generate a unique item name
    const originalName = generateRandomString(8);

    // Create the item
    cy.createItem(originalName);

    // Delete the item
    cy.deleteItem(originalName);

    // Confirm it's no longer present
    cy.verifyItemTextNotExists(originalName);
  });
});
