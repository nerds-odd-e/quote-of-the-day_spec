const { After, Before, BeforeAll, AfterAll, Given, When, Then } = require('cucumber')
const puppeteer = require('puppeteer');

Before( async function() {
  await this.connectToMongoAndCreateDatabase();
  await this.openBrowser();
});

After( function() {
  this.dropDatabaseAndDisconnect();
  this.closeBrowser();
});

Given('There are the following quotes', function (dataTable) {
  this.insertQuotesIntoDatabase(dataTable);
});

Given('The following random quotes map to the days', function (dataTable) {
  this.insertDaysWithQuotesIntoDatabase(dataTable);
});

When('I visit QOFT', async () => {
  await this.gotoQOTDMainPage();
});

Then('I should be welcomed with {string}', (string) => {
  return 'pending';
});

When('I visit QOFT on {string}', (string) => {
  return 'pending';
});

Then('I should see {string}', (string) => {
  return 'pending';
});

Then('When I refresh', () => {
  return 'pending';
});

Then('When I wait One Day and refresh', () => {
  return 'pending';
});

When('my Browser Language is {string}', (string) => {
  return 'pending';
});
