const { Before, BeforeAll, AfterAll, Given, When, Then } = require('cucumber')
const puppeteer = require('puppeteer');
var MongoClient = require('mongodb').MongoClient;
var mongoUrl = "mongodb://localhost:27017/";

const mongoClient = new MongoClient(mongoUrl);
var db;

BeforeAll( async () => {
  await mongoClient.connect();
  db = mongoClient.db('quotes-database');
});

AfterAll( async () => {
  await db.dropDatabase();
  mongoClient.close();
});

Before( () => {
    return db.dropDatabase().then( () => {
      db = mongoClient.db('quotes-database');
    })
});

Given('There are the following quotes', async (dataTable) => {
  return db.collection('quotes').insertMany(dataTable.hashes());
});

Given('The following random quotes map to the days', (dataTable) => {
  return db.collection('days-with-quotes').insertMany(dataTable.hashes());
});

When('I visit QOFT', async () => {
  const browser = await puppeteer.launch({executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'});
  const page = await browser.newPage();
  await page.goto('http://localhost:8008');
  await browser.close();
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


