const { QOTDMainPage } = require("./QOTDMainPage");
const puppeteer = require('puppeteer');

class QOTDBrowser {

    async open() {
        this.browser = await puppeteer.launch({ executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome' });
    }

    close() {
        this.browser.close();
    }

    setLanguage() {
    }

    refresh() {
    }

    setVisitDate(date) {
        this.visitDate = date;
    }

    async gotoMainPage() {
        var page = await this.browser.newPage();
        await page.goto('http://localhost:7008');
        return new QOTDMainPage(this.browser, page);
    }

    async gotoMainPageOnDate(date) {
        await this.setVisitDate(date);
        return await this.gotoMainPage();
    }
}

exports.QOTDBrowser = QOTDBrowser;
