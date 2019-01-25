const { QOTDMainPage } = require("./QOTDMainPage");
const puppeteer = require('puppeteer');

class QOTDWorld {
    constructor() {
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
}
exports.QOTDWorld = QOTDWorld;
