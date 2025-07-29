
// Login command
Cypress.Commands.add('login', (username, password) => {
  cy.visit('/');
  cy.get('[data-cy="username"]').type(username);
  cy.get('[data-cy="password"]').type(password);
  cy.get('[data-cy="login-btn"]').click();
});

// Create an item
Cypress.Commands.add('createItem', (itemText) => {
  cy.get('[data-cy="new-item-input"]').type(itemText);
  cy.get('[data-cy="add-item-btn"]').click();
  cy.get('[data-cy="items-list"]').should('contain', itemText);
  cy.get('[data-cy="new-item-input"]').should('have.value', '');
});

// Create item with Enter key
Cypress.Commands.add('createItemWithEnter', (itemText) => {
  cy.get('[data-cy="new-item-input"]').type(itemText + '{enter}');
  cy.get('[data-cy="items-list"]').should('contain', itemText);
  cy.get('[data-cy="new-item-input"]').should('have.value', '');
});

// Edit an existing item by its current text, change to newText
Cypress.Commands.add('editItem', (currentText, newText) => {
  cy.contains(currentText)
    .parents('[data-cy="item"]')
    .within(() => {
      cy.get('[data-cy="edit-btn"]').click();
    });
    cy.get(`input[value="${currentText}"]`).clear().type(newText);
    cy.get('[data-cy="save-btn"]').click();
    cy.get('[data-cy="item-text"]').should('contain', newText);
  });

// Delete an item
Cypress.Commands.add('deleteItem', (itemText) => {
  cy.get('[data-cy="item"]').contains('[data-cy="item-text"]', itemText)
    .parents('[data-cy="item"]')
    .within(() => {
      cy.get('[data-cy="delete-btn"]').click();
    });
});

// Verify an item exists by text
Cypress.Commands.add('verifyItemText', (itemText) => {
  cy.get('[data-cy="items-list"]').should('contain', itemText);
});

// Verify an item does NOT exist by text
Cypress.Commands.add('verifyItemTextNotExists', (itemText) => {
  cy.get('[data-cy="items-list"]').should('not.contain', itemText);
});

