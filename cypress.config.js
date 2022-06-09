const { defineConfig } = require("cypress");

module.exports = defineConfig({
defaultCommandTimeout: 9000,
reporter: 'mochawesome',

env:
{
 baseurl: "https://rahulshettyacademy.com/angularpractice/",
},
testfiles : "**/*.feature",
    
e2e: {
// We've imported your old cypress plugins here.
// You may want to clean this up later by importing these.
setupNodeEvents(on, config) {
return require('./cypress/plugins/index.js')(on, config)
  
},
},

projectId: 'gvvvb3',
})
