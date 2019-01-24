const { setWorldConstructor } = require('cucumber')
const puppeteer = require('puppeteer');

class MongoDBWorld
{
  constructor() {
    this.MongoClient = require('mongodb').MongoClient;
    this.mongoClient = this.MongoClient("mongodb://localhost:27017/");
  }

  async connect() {
    await this.mongoClient.connect();
  }

  disconnect() {
    this.mongoClient.close();
  }

  async dropDatabase() {
    if (this.mongoDB) {
      await this.mongoDB.dropDatabase();
    }
  }

  createDatabase() {
    this.mongoDB = this.mongoClient.db('quotes-database');
  }

  async insertCollectionIntoDatabase(collection, dataTable) {
    await this.mongoDB.collection('quotes').insertMany(dataTable.hashes());
  }

  async insertQuotesIntoDatabase(dataTable) {
    await this.insertCollectionIntoDatabase('quotes', dataTable);
  }

  async insertDaysWithQuotesIntoDatabase(dataTable) {
    await this.insertCollectionIntoDatabase('days-with-quotes', dataTable);
  }
}

class QOTDMainPage {

  setBrowser(browser)  {
    this.browser = browser;
  }

  setVisitDate(date) {
    this.visitDate = date;
  }

  async go() {
    this.page = await this.browser.newPage();
    await this.page.goto('http://localhost:7008');
  }

  async getWelcomeMessage() {
    return await this.page.$eval('#welcome-message', el => el.textContent);
  }

  async getQuote() {
    return await this.page.$eval('#quote-of-the-day', el => el.textContent);
  }
};

class QOTDWorld {

  constructor() {
    this.mongo = new MongoDBWorld();
    this.mainPage = new QOTDMainPage();
  }

  //// Browser

  async openBrowser() {
    this.browser = await puppeteer.launch({executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'});
  }

  closeBrowser() {
    this.browser.close();
  }

  setBrowserLanguage() {
  }

  refreshBrowser() {
  }

  //// Main QOTD
  //
  async gotoQOTDMainPage() {
    this.mainPage.setBrowser(this.browser);
    await this.mainPage.go();
  }

  async gotoQOTDMainPageOnDate(date) {
    await this.mainPage.setVisitDate(date);
    await this.gotoQOTDMainPage();
  }

  getMainPage() {
    return this.mainPage;
  }

  //// Mongo Stuff

  async connectToMongoAndCreateDatabase()  {
    await this.mongo.connect();
    this.mongo.createDatabase();
  }

  async dropDatabaseAndDisconnect() {
    await this.mongo.dropDatabase();
    this.mongo.disconnect();
  }

  async insertQuotesIntoDatabase(dataTable) {
    await this.mongo.insertQuotesIntoDatabase(dataTable);
  }

  async insertDaysWithQuotesIntoDatabase(dataTable) {
    await this.mongo.insertDaysWithQuotesIntoDatabase(dataTable);
  }
}

setWorldConstructor(QOTDWorld)
