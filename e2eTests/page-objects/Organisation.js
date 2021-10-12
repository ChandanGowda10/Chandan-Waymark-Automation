import ClearTextBoxValue from "./ClearTextBoxValue";

class Organisation extends ClearTextBoxValue {
    get settingsOption() {
        return $("//*[text()='Settings']");
    }

    get organisationUsersOption() {
        return $("//*[text()='Organisation Users']");
    }

    get addUserButton() {
        return $("//*[text()='ADD A NEW USER']");
    }

    get addGroupButton() {
        return $("//span[.='ADD A NEW GROUP']");
    }

    get selectGroup() {
        return $("#groups");
    }

    get nextButton() {
        return $("//*[text()='Next']");
    }

    get userNextButton() {
        return $("//span[.='Next']");
    }

    get firstNameTextBox() {
        return $("[id='users[0].first_name']");
    }

    get lastNameTextBox() {
        return $("[id='users[0].last_name']");
    }

    get userEmailTextBox() {
        return $("[id='users[0].email']");
    }

    get userRolesDropdown() {
        return $("[id='users[0].roles']");
    }

    get userDeleteButton() {
        return $("(//button[@title='remove'])[1]");
    }

    get userEditButton() {
        return $("(//button[@title='edit'])[1]");
    }

    get groupEditPencilButton() {
        return $(".MuiGrid-wrap-xs-nowrap:nth-child(2) .MuiGrid-root:nth-child(5) .MuiButtonBase-root:nth-child(1)");
    }

    get groupEditButton() {
        return $("//span[.='Edit']");
    }

    get deletePopup() {
        return $("//span[.='Yes']");
    }

    get organisationGroupsOption() {
        return $("//span[.='Organisation Groups']");
    }

    get organisationButton() {
        return $("//span[.='Organisation']");
    }

    get usersList() {
        return $("//span[.='Users']");
    }

    get groupsList() {
        return $("//span[.='Groups']");
    }
    get parentGroupDropdown() {
        return $("#parent_id")
    }

    get groupNameTextBox() {
        return $("[id='name']");
    }

    get addUsersToGrp() {
        return $("#users");
    }

    get grpNextButton() {
        return $("//span[.='Next']");
    }

    get selectAllUsersCheckBox() {
        return $(".MuiGrid-item.MuiGrid-wrap-xs-nowrap .MuiGrid-root.MuiGrid-align-items-xs-center:nth-child(1) .MuiGrid-root");
    }

    get grpCloseButton() {
        return $(".MuiGrid-align-items-xs-center.MuiGrid-justify-xs-space-between .MuiIconButton-root");
    }

    get grpNextButton1() {
        return $("//span[.='Next']");
    }

    get grpDeleteButton() {
        return $(".MuiGrid-wrap-xs-nowrap:nth-child(2) .MuiGrid-root:nth-child(5) .MuiButtonBase-root:nth-child(2)");
    }

    get grpDeletePopup() {
        return $("//*[text()='Yes']");
    }

    get backToGroupList() {
        return $(".MuiGrid-justify-xs-space-between .MuiGrid-align-items-xs-center .MuiGrid-item:nth-child(1)");
    }

    organisationPage() {
        this.settingsOption.waitForVisible();
        this.settingsOption.click();
        this.organisationUsersOption.waitForVisible();
        this.organisationUsersOption.click();
    }

    orgGroups() {
        this.settingsOption.waitForVisible();
        this.settingsOption.click();
        this.organisationGroupsOption.waitForVisible();
        this.organisationGroupsOption.click();
    }

    organisationAddUser(userFirstName, userLastName, userEmail) {
        this.addUserButton.waitForVisible();
        this.addUserButton.click();
        this.selectGroup.waitForVisible();
        this.selectGroup.click();
        browser.setValue('#groups',['Marge Kuvalis','Enter']);
        this.firstNameTextBox.waitForVisible();
        this.firstNameTextBox.click();
        this.firstNameTextBox.setValue(userFirstName);
        this.lastNameTextBox.waitForVisible();
        this.lastNameTextBox.click();
        this.lastNameTextBox.setValue(userLastName);
        this.userEmailTextBox.waitForVisible();
        this.userEmailTextBox.click();
        this.userEmailTextBox.setValue(userEmail);
        this.userRolesDropdown.waitForVisible();
        this.userRolesDropdown.click();
        browser.setValue('.MuiInputBase-input.MuiInput-input.MuiAutocomplete-input',['Organisation admin','Enter']);
        browser.pause(3000);
    }

    organisationEditUser(userEditFirstName, userEditLastName) {
        this.userEditButton.waitForVisible();
        this.userEditButton.click();
        this.selectGroup.waitForVisible();
        this.selectGroup.click();
        browser.setValue('#groups',['M','a','r','g','e','ArrowDown','Enter']);
        browser.pause(3000);
        this.nextButton.waitForVisible();
        this.nextButton.click();
        this.firstNameTextBox.waitForVisible();
        this.clearField("[id='users[0].first_name']");
        this.firstNameTextBox.setValue(userEditFirstName);
        this.lastNameTextBox.waitForVisible();
        this.clearField("[id='users[0].last_name']");
        this.lastNameTextBox.setValue(userEditLastName);
        this.userRolesDropdown.waitForVisible();
        browser.setValue('.MuiInputBase-input.MuiInput-input.MuiAutocomplete-input',['G','r','o','u','p','ArrowDown','Enter']);
        this.userNextButton.waitForVisible();
        this.userNextButton.click();
        browser.pause(2000);
    }

    organisationUserDelete() {
        this.userDeleteButton.waitForVisible();
        this.userDeleteButton.click();
        this.deletePopup.waitForVisible();
        this.deletePopup.click();
    }

    organisationSelect() {
        this.settingsOption.waitForVisible();
        this.settingsOption.click();
        this.organisationButton.waitForVisible();
        this.organisationButton.click();
    }

    organisationPageUsers() {
        this.usersList.waitForVisible();
        this.usersList.click();
    }

    organisationPageGroups() {
        this.groupsList.waitForVisible();
        this.groupsList.click();
    }

    organisationAddGroup(groupName) {
        this.addGroupButton.waitForVisible();
        this.addGroupButton.click();
        this.groupNameTextBox.waitForVisible();
        this.groupNameTextBox.setValue(groupName);
        this.parentGroupDropdown.waitForVisible()
        this.parentGroupDropdown.click()
        browser.setValue('#parent_id', ['M','a','r','g','e','ArrowDown','Enter'])
        this.grpNextButton.waitForVisible();
        this.grpNextButton.click();
        this.addUsersToGrp.waitForVisible();
        this.addUsersToGrp.click();
        browser.pause(5000);
        this.selectAllUsersCheckBox.waitForVisible();
        this.selectAllUsersCheckBox.click();
        this.grpCloseButton.waitForVisible();
        this.grpCloseButton.click();
        browser.pause(3000);
        this.grpNextButton1.waitForVisible();
        this.grpNextButton1.click();
        browser.pause(3000);
    }

    organisationEditGroup(groupEditGroupName) {
        this.groupEditPencilButton.waitForVisible();
        this.groupEditPencilButton.click();
        this.groupEditButton.waitForVisible();
        this.groupEditButton.click();
        this.groupNameTextBox.waitForVisible();
        this.clearField("[id='name']");
        this.groupNameTextBox.setValue(groupEditGroupName);
        this.parentGroupDropdown.waitForVisible();
        this.clearField("#parent_id");
        browser.setValue('#parent_id',['G','r','o','u','p',' ', '1','ArrowDown','Enter']);
        browser.pause(4000);
        this.grpNextButton.waitForVisible();
        this.grpNextButton.click();
        this.addUsersToGrp.waitForVisible();
        this.addUsersToGrp.click();
        browser.pause(4000);
        this.selectAllUsersCheckBox.waitForVisible();
        this.selectAllUsersCheckBox.click();
        this.grpCloseButton.waitForVisible();
        this.grpCloseButton.click();
        browser.pause(3000);
        this.grpNextButton1.waitForVisible();
        this.grpNextButton1.click();
        this.backToGroupList.waitForVisible();
        this.backToGroupList.click();
        browser.pause(3000);
    }

    organisationGroupDelete() {
        browser.pause(3000);
        this.grpDeleteButton.waitForVisible();
        this.grpDeleteButton.click();
        browser.pause(3000);
        this.grpDeletePopup.waitForVisible();
        this.grpDeletePopup.click();
        browser.pause(3000);
    }
}

export default new Organisation();
