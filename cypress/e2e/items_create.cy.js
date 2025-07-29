import { generateRandomString } from '../support/utils';

describe('Creating a new item', () => {
  beforeEach(() => {
    // Log in before each test
    cy.login(Cypress.env('valid_username'), Cypress.env('valid_password'));
  });

  it('creates an item using add button', () => {
    // Generate a unique item name and create the item via button click
    const itemName = generateRandomString(10);
    cy.createItem(itemName);
  });
  
  it('creates an item using Enter key', () => {
    // Generate a unique item name and create the item using Enter key
    const itemName = generateRandomString(10);
    cy.createItemWithEnter(itemName);
  });
});
