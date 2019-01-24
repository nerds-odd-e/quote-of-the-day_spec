const { BeforeAll, AfterAll, Given, When, Then } = require('cucumber')
const puppeteer = require('puppeteer');
var MongoClient = require('mongodb').MongoClient;
var mongoUrl = "mongodb://localhost:27017/";

const mongoClient = new MongoClient(mongoUrl);
var db;

BeforeAll( async function() {
  try {
    await mongoClient.connect();
    db = mongoClient.db('quotes-database');
  } catch (err) {
    console.log(err.stack);
  }
});

AfterAll( async function() {
  mongoClient.close();
});

Given('There are the following quotes', async function (dataTable) {
    db.collection('quotes').insertMany(dataTable.hashes());
});

Given('The following random quotes map to the days', function (dataTable) {
  return 'pending';
});

When('I visit QOFT', async function () {
  const browser = await puppeteer.launch({executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'});
  const page = await browser.newPage();
  await page.goto('http://localhost:8008');
  await browser.close();
});

Then('I should be welcomed with {string}', function (string) {
  return 'pending';
});

When('I visit QOFT on {string}', function (string) {
  return 'pending';
});

Then('I should see {string}', function (string) {
  return 'pending';
});

Then('When I refresh', function () {
  return 'pending';
});

Then('When I wait One Day and refresh', function () {
  return 'pending';
});

When('my Browser Language is {string}', function (string) {
  return 'pending';
});


