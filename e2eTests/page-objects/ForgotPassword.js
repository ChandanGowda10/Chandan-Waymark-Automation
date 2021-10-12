class Forgotpassword {

    get restoreLink() {
        return $("//a[.='Restore it here.']");
    }

    get emailTextBox() {
        return $("#email");
    }

    get restoreButton() {
        return $("//span[.='Restore']");
    }

    get forgotPasswordValidationText() {
        return $("//h1[contains(text(),'Sign In')]");
    }

    testForgotPassword(emails) {
        this.restoreLink.waitForVisible();
        this.restoreLink.click();
        this.emailTextBox.waitForVisible();
        this.emailTextBox.setValue(emails);
        this.restoreButton.waitForVisible();
        this.restoreButton.click();
    }
}

export default new Forgotpassword();