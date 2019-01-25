const { After, Before, BeforeAll, AfterAll, Given, When, Then } = require('cucumber')
const { expect } = require("chai");

Before( async function() {
  await this.mongo.connectToMongoAndCreateDatabase();
  await this.openBrowser();
});

After( function() {
  this.mongo.dropDatabaseAndDisconnect();
  this.closeBrowser();
});

Then('the amount of quotes should be {int}', async function (count) {
  expect(await this.mongo.countQuotesFromDatabase()).to.equal(count);
});

Then('the amount of mapping should be {int}', async function (count) {
  expect(await this.mongo.countDaysWithQuotesFromDatabase()).to.equal(count);
});

Given('There are the following quotes', async function (dataTable) {
  await this.mongo.insertQuotesIntoDatabase(dataTable);
});

Given('The following random quotes map to the days', async function (dataTable) {
  await this.mongo.insertDaysWithQuotesIntoDatabase(dataTable);
});

When('I visit QOFT', async function () {
  await this.gotoQOTDMainPage();
});

Then('I should be welcomed with {string}', async function (welcome_message) {
  const actual_welcome_message = await this.getMainPage().getWelcomeMessage();
  expect(actual_welcome_message).to.equal(welcome_message);
});

When('I visit QOFT on {string}', async function (date) {
  await this.gotoQOTDMainPageOnDate(date);
});

Then('I should see {string}', async function (quote) {
  const actual_quote = await this.getMainPage().getQuote();
  expect(actual_quote).to.equal(quote);
});

Then('When I refresh', function () {
  this.refreshBrowser();
});

Then('When I wait One Day and refresh', function () {
  return 'pending';
});

When('my Browser Language is {string}', function (language) {
  this.setBrowserLanguage();
});
