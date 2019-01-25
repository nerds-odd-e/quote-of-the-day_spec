
const { After, Before, BeforeAll, AfterAll, Given, When, Then } = require('cucumber')
const { expect } = require("chai");
const { QOTDMongoClient } = require("./QOTDMongoClient");
const { QOTDBrowser } = require("./QOTDBrowser");

var mongoClient = new QOTDMongoClient();
var browser = new QOTDBrowser();
var contributePage;

BeforeAll( async function() {
  await mongoClient.connect();
});

AfterAll(async function() {
  await mongoClient.disconnect();
});

Before( async function() {
  mongoClient.createDatabase();

  await browser.open();
});

After( async function() {
  await mongoClient.dropDatabase();

  browser.close();
});

When('I visit the contribute quote page', async function () {
  contributePage = await browser.gotoContributeQuotePage();
});

When('I contribute quote', function (dataTable) {
  contributePage.contributeQuote(dataTable);
});

Then('the {string} quote should be in the database', async function (quote) {
  var actualQuote = await mongoClient.findQuote(quote);
  expect(actualQuote.quote()).to.equal(quote)
});

Given('current quotes in the database', async function (dataTable) {
   await mongoClient.insertQuotesIntoDatabase(dataTable);
 });
