const { MongoDBWorld } = require("./MongoDBWorld");
const { QOTDMainPage } = require("./QOTDMainPage");
const puppeteer = require('puppeteer');
class QOTDWorld {
    constructor() {
        this.mongo = new MongoDBWorld();
        this.mainPage = new QOTDMainPage();
    }
    //// Browser
    async openBrowser() {
        this.browser = await puppeteer.launch({ executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome' });
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
    async connectToMongoAndCreateDatabase() {
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
exports.QOTDWorld = QOTDWorld;
