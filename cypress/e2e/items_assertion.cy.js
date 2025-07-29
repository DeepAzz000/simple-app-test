import { generateRandomString } from '../support/utils';

describe('Asserting presence of expected data after actions', () => {
  beforeEach(() => {
    // Log in before each test
    cy.login(Cypress.env('valid_username'), Cypress.env('valid_password'));
  });

  it('handles multiple action and assertions correctly', () => {
    // Generate random item names
    const first = generateRandomString();
    const second = generateRandomString();
    const third = generateRandomString();
    const items = [first, second, third];

    // Create multiple items
    items.forEach(item => cy.createItem(item));

    // Assert all are visible
    items.forEach(item => cy.verifyItemText(item));

    // Delete the first item and verify it's removed
    cy.deleteItem(first);
    cy.verifyItemTextNotExists(first);

    // Edit the second item and verify the update
    const updatedSecond = generateRandomString();
    cy.editItem(second, updatedSecond);
    cy.verifyItemText(updatedSecond);
  });
});
