import Login_handler from "../page-objects/Login_handler.js";
import testData from "../constants/testData.json";
import ClearTextBoxValue from "./ClearTextBoxValue.js";

class Profile extends ClearTextBoxValue{
    get profileButton() {
        return $("//*[text()='Profile']");
    }

    get editFirstName() {
        return $("[id='first_name']");
    }

    get editLastName() {
        return $("#last_name");
    }

    get saveButton() {
        return $(".MuiGrid-spacing-xs-2 .MuiButton-root:nth-child(1)");
    }

    ProfileTillRefresh() {
        Login_handler.avatarIcon.waitForVisible();
        Login_handler.avatarIcon.click();
        this.profileButton.waitForVisible();
        this.profileButton.click();
    }

    userProfileEdit() {
        this.ProfileTillRefresh();
        browser.refresh();
        this.editFirstName.waitForVisible();
        this.clearField("[id='first_name']");
        this.editFirstName.setValue(testData.profileAvatar.firstNameEdit);
        this.editLastName.waitForVisible();
        this.clearField("#last_name");
        this.editLastName.setValue(testData.profileAvatar.lastNameEdit);
        this.saveButton.waitForVisible();
        this.saveButton.click();
    }
    
}

export default new Profile();