class Login_handler {
  get emailTextBox() {
    return $("#email");
  }

  get passwordTextBox() {
    return $("#password");
  }

  get signinButton() {
    return $("//span[.='Sign In']");
  }

  get welcomeValidationText() {
    return $("//h1[.='Welcome to Wayfinder']");
  }

  get invalidValidationText() {
    return $("//h1[.='Sign In']");
  }

  get homePageValidationText() {
    return $("//*[text()='My saved searches']");
  }

  get avatarIcon() {
    return $(".MuiSvgIcon-root.MuiAvatar-fallback");
  }

  get logoutButton() {
    return $("//li[.='Logout']");
  }

  get logoutInvalidValidationText() {
  return $("//h1[.='Sign In']");
  }

  givenURL(website1) {
    browser.url(website1);
    const windowHandle = browser.windowHandle();
    console.log(windowHandle);
    browser.windowHandleMaximize(windowHandle.value);
  }

  userLogin(userName, password) {
    this.emailTextBox.waitForVisible();
    this.emailTextBox.setValue(userName);
    this.passwordTextBox.waitForVisible();
    this.passwordTextBox.setValue(password);
    this.signinButton.waitForVisible();
    this.signinButton.click();
  }

  workflowUserLogin(workflowUser, workflowPassword) {
    this.emailTextBox.waitForVisible();
    this.emailTextBox.setValue(workflowUser);
    this.passwordTextBox.waitForVisible();
    this.passwordTextBox.setValue(workflowPassword);
    this.signinButton.waitForVisible();
    this.signinButton.click();
  }

  groupAdminLogin(groupAdmin, groupAdminPassword) {
    this.emailTextBox.waitForVisible();
    this.emailTextBox.setValue(groupAdmin);
    this.passwordTextBox.waitForVisible();
    this.passwordTextBox.setValue(groupAdminPassword);
    this.signinButton.waitForVisible();
    this.signinButton.click();
  }

  caseSensitiveLogin(caseSensiUserName, password) {
    this.emailTextBox.waitForVisible();
    browser.pause(5000);
    this.emailTextBox.setValue(caseSensiUserName);
    this.passwordTextBox.waitForVisible();
    this.passwordTextBox.setValue(password);
    this.signinButton.click();
  }
  
  userLogout() {
    this.avatarIcon.waitForVisible();
    this.avatarIcon.click();
    this.logoutButton.waitForVisible();
    this.logoutButton.click();
  }

}

export default new Login_handler();