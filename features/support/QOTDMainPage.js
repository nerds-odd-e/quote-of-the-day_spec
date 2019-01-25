class QOTDMainPage {
    setBrowser(browser) {
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
}
exports.QOTDMainPage = QOTDMainPage;
