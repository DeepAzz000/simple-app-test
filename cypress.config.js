const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
    },

    // Base URL where the app is running
    baseUrl: 'http://localhost:8080',

    // Environment variables used in tests
    env: {
      valid_username: 'admin',
      valid_password: 'AdminPass1',
      invalid_password: 'incorrectpass'
    },
  },
});
