class Faq {
    get faqButton() {
        return $("//*[text()='FAQ']");
    }

    faqPage() {
        this.faqButton.waitForVisible();
        this.faqButton.click();
    }
}

export default new Faq();