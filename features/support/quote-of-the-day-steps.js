const { After, Before, BeforeAll, AfterAll, Given, When, Then } = require('cucumber')
const { expect } = require("chai");
const { QOTDMongoClient } = require("./QOTDMongoClient");

var mongoClient = new QOTDMongoClient();

BeforeAll( async function() {
  await mongoClient.connect();
});

AfterAll(async function() {
  await mongoClient.disconnect();
});

Before( async function() {
  mongoClient.createDatabase();

  await this.openBrowser();
});

After( async function() {
  await mongoClient.dropDatabase();

  this.closeBrowser();
});

Then('the amount of quotes should be {int}', async function (count) {
  expect(await mongoClient.countQuotesFromDatabase()).to.equal(count);
});

Then('the amount of mapping should be {int}', async function (count) {
  expect(await mongoClient.countDaysWithQuotesFromDatabase()).to.equal(count);
});

Given('There are the following quotes', async function (dataTable) {
  await mongoClient.insertQuotesIntoDatabase(dataTable);
});

Given('The following random quotes map to the days', async function (dataTable) {
  await mongoClient.insertDaysWithQuotesIntoDatabase(dataTable);
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
