import { generateRandomString } from '../support/utils';

describe('Editing an existing item', () => {
  beforeEach(() => {
    // Log in before each test
    cy.login(Cypress.env('valid_username'), Cypress.env('valid_password'));
  });
  
  it('edits the item', () => {
    // Generate a unique name for the original and edited item
    const originalName = generateRandomString(8);
    const editName = generateRandomString(10);

    // Create the original item
    cy.createItem(originalName);

    // Edit it to a new name
    cy.editItem(originalName, editName);
  });
});
