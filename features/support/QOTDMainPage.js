class QOTDMainPage {

    constructor(browser, page) {
        this.browser = browser;
        this.page = page;
    }

    setBrowser(browser) {
        this.browser = browser;
    }

    async getWelcomeMessage() {
        return await this.page.$eval('#welcome-message', el => el.textContent);
    }

    async getQuote() {
        return await this.page.$eval('#quote-of-the-day', el => el.textContent);
    }
}
exports.QOTDMainPage = QOTDMainPage;
