const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
module.exports = defineConfig({
 
  
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      allureWriter(on, config);
      return config;
    },
    experimentalStudio:true,
    video: true,
    experimentalWebKitSupport: true,
    experimentalSessionAndOrigin:true,
    include: ["./node_modules/cypress", "cypress/**/*.js"],
    baseUrl:'https://rabata.io'
  },
});
