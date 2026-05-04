const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {

    baseUrl: "https://demoqa.com/",
    blockHosts: ["*.google-analytics.com", "*.googletagmanager.com", "*.googleadservices.com", "*.doubleclick.net"],

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
