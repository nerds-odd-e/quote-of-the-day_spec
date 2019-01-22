const { Given, When, Then } = require('cucumber')
const puppeteer = require('puppeteer');

Given('there is a quote', function (dataTable) { });

When('I visit the quote of the day', async function () {
  const browser = await puppeteer.launch({executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'});
  const page = await browser.newPage();
  await page.goto('http://localhost:8008');
  await browser.close();
});

Then('I should see the quote', function () {
// Write code here that turns the phrase above into concrete actions
return 'pending';
});