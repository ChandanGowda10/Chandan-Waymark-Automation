import testData from "../constants/testData.json";
import ClearTextBoxValue from "./ClearTextBoxValue";
import { waituntilisvisible } from "../page-objects/Utils.js";

class SuperAdminRoles extends ClearTextBoxValue{
    get usersButton() {
        return $("//*[text()='Users']");
    }

    get addNewUserButton() {
        return $(".MuiGrid-justify-xs-space-between .MuiGrid-item:nth-child(2) .MuiButtonBase-root");
    }

    get selectOrganisationDropdown() {
        return $("#organization_id");
    }

    get selectGroupDropdown() {
        return $("#groups");
    }

    get organisationDetailsNextButton() {
        return $(".MuiGrid-spacing-xs-1 .MuiButtonBase-root");
    }

    get firstNameTextBox() {
        return $("[id='users[0].first_name']");
    }

    get lastNameTextBox() {
        return $("[id='users[0].last_name']");
    }

    get emailTextBox() {
        return $("[id='users[0].email']");
    }

    get userRolesDropdown() {
        return $("[id='users[0].roles']");
    }

    get userDetailsNextButton() {
        return $(".MuiGrid-spacing-xs-1 .MuiButtonBase-root");
    }

    get chooseOrganisationDropdown() {
        return $("#organization_id");
    }

    editPencilButton(i) {
        return $(`.MuiGrid-item.MuiGrid-align-items-xs-center:nth-child(${i}) .MuiIconButton-root:nth-child(1) .MuiIconButton-label`)
    }

    deleteUserButton(i) {
        return $(`.MuiGrid-item.MuiGrid-align-items-xs-center:nth-child(${i}) .MuiIconButton-root:nth-child(2) .MuiIconButton-label`);
    }

    get deleteYesButtonPopup() {
        return $(".MuiGrid-spacing-xs-2 .MuiGrid-item:nth-child(1) .MuiButtonBase-root");
    }

    get groupsButton() {
        return $("//*[text()='Groups']");
    }

    get createGroupButton() {
        return $(".MuiGrid-justify-xs-space-between .MuiGrid-item:nth-child(2) .MuiButtonBase-root");
    }

    get selectOrganisationGroupDropdown() {
        return $("#organization_id");
    }

    get groupName() {
        return $("#name");
    }

    get selectParentGroup() {
        return $("#parent_id");
    }

    get groupDetailsNextButton() {
        return $(".MuiGrid-spacing-xs-1 .MuiButtonBase-root");
    }

    get addUsersToGroup() {
        return $("#users");
    }

    get addAllUsersCheckBox() {
        return $(".MuiTypography-displayBlock .MuiIconButton-label");
    }

    get closeIcon() {
        return $(".MuiGrid-justify-xs-space-between .MuiIconButton-label");
    }

    get finalNextButton() {
        return $(".MuiGrid-spacing-xs-1 .MuiButtonBase-root");
    }

    groupEditPencilButton(i) {
        return $(`.MuiGrid-wrap-xs-nowrap:nth-child(${i}) .MuiGrid-root:nth-child(5) .MuiButtonBase-root:nth-child(1) .MuiIconButton-label`);
    }

    get editButton() {
        return $("//*[text()='Edit']");
    }

    get backToGroupList() {
        return $("//*[text()='Back to the group’s list']");
    }

    get groupDeleteButton() {
        return $(".MuiGrid-wrap-xs-nowrap:nth-child(2) .MuiGrid-root:nth-child(5) .MuiButtonBase-root:nth-child(2) .MuiIconButton-label");
    }

    get organisationsButton() {
        return $("//*[text()='Organisations']");
    }

    get createNewOrganisationButton() {
        return $(".MuiGrid-align-items-xs-center.MuiGrid-justify-xs-space-between .MuiButtonBase-root");
    }

    get organisationName() {
        return $("#name");
    }

    get organisationNextButton() {
        return $(".MuiGrid-spacing-xs-1 .MuiButtonBase-root");
    }

    get permittedEmailSuffixes() {
        return $("[id='permitted_email_suffixes[0].suffix']");
    }

    get licenseDropDown() {
        return $(".MuiList-root.MuiMenu-list.MuiList-padding li:nth-child(1)");
    }

    get enterpriseLicence() {
        return $(".MuiList-root.MuiMenu-list.MuiList-padding li:nth-child(2)");
    }

    get professionalLicence() {
        return $(".MuiList-root.MuiMenu-list.MuiList-padding li:nth-child(3)");
    }

    get teamsLicence() {
        return $(".MuiList-root.MuiMenu-list.MuiList-padding li:nth-child(4)");
    }

    get licenseField() {
        return $("#license");
    }

    get horizonScanning() {
        return $("#horizontal_scanning");
    }

    get obligationTrackingDropdown() {
        return $("#obligation_tracking");
    }

    get workflowDropdown() {
        return $("#are_workflows_allowed");
    }

    get dataSourceCountDropdown() {
        return $("#mui-component-select-number_of_data_sources");
    }

    get selectDataSource() {
        return $("#data_sources");
    }

    get addGroupName() {
        return $("[id='groups[0].name']");
    }

    get organisationUserFirstNameTextBox() {
        return $("[id='owners[0].first_name']");
    }

    get organisationUserLastNameTextBox() {
        return $("[id='owners[0].last_name']");
    }

    get organisationUserEmailTextBox() {
        return $("[id='owners[0].email']");
    }

    get organisationDeactivateButton() {
        return $(".MuiGrid-wrap-xs-nowrap:nth-child(3) .MuiIconButton-root:nth-child(2) .MuiIconButton-label");
    }

    get confirmDeactivateButton() {
        return $(".MuiGrid-spacing-xs-2 .MuiGrid-item:nth-child(1)");
    }

    get organisationEditPencilButton() {
        return $(".MuiGrid-wrap-xs-nowrap:nth-child(3) .MuiIconButton-root:nth-child(1) .MuiIconButton-label");
    }

    get editOrganisationButton() {
        return $("//*[text()='Edit']");
    }

    get backToOrganisationList() {
        return $("//*[text()='Back to the organisations list']");
    }

    usersPage() {
        this.usersButton.waitForVisible();
        this.usersButton.click();
    }

    groupsPage() {
        this.groupsButton.waitForVisible();
        this.groupsButton.click();
    }

    organisationsPage() {
        this.organisationsButton.waitForVisible();
        this.organisationsButton.click();
    }

    nextButton() {
        this.organisationNextButton.waitForVisible();
        this.organisationNextButton.click();
    }

    chooseOrganisation() {
        this.chooseOrganisationDropdown.waitForVisible();
        browser.setValue('#organization_id',['WaymarK on 29/04/2021','Enter']);
    }

    userCreationFromSuperAdminAccount() {
        this.usersPage();
        this.addNewUserButton.waitForVisible();
        this.addNewUserButton.click();
        this.selectOrganisationDropdown.waitForVisible();
        browser.setValue('#organization_id',['WaymarK on 29/04/2021','ArrowDown','Enter']);
        this.selectGroupDropdown.waitForVisible();
        browser.setValue('#groups',['Marge','ArrowDown','Enter']);
        this.organisationDetailsNextButton.waitForVisible();
        this.organisationDetailsNextButton.click();
        this.firstNameTextBox.waitForVisible();
        this.firstNameTextBox.setValue(testData.superAdminRoles.userFirstName);
        this.lastNameTextBox.waitForVisible();
        this.lastNameTextBox.setValue(testData.superAdminRoles.userLastName);
        this.emailTextBox.waitForVisible();
        this.emailTextBox.setValue(testData.superAdminRoles.userEmail);
        this.userRolesDropdown.waitForVisible();
        browser.setValue("[id='users[0].roles']",['Workflow admin','ArrowDown','Enter']);
        this.userDetailsNextButton.waitForVisible();
        this.userDetailsNextButton.click();
    }

    userEditionFromSuperAdminAccount() {
        this.usersPage();
        this.chooseOrganisation();
        this.editPencilButton(2).waitForVisible();
        this.editPencilButton(2).click();
        this.selectGroupDropdown.waitForVisible();
        browser.setValue('#groups',['Test','ArrowDown','Enter']);
        this.userDetailsNextButton.waitForVisible();
        this.userDetailsNextButton.click();
        this.firstNameTextBox.waitForVisible();
        this.clearField("[id='users[0].first_name']");
        this.firstNameTextBox.setValue(testData.superAdminRoles.editUserFirstName);
        this.lastNameTextBox.waitForVisible();
        this.clearField("[id='users[0].last_name']");
        this.lastNameTextBox.setValue(testData.superAdminRoles.editUserLastName);
        this.userRolesDropdown.waitForVisible();
        browser.setValue("[id='users[0].roles']",['Group admin','ArrowDown','Enter']);
        this.userDetailsNextButton.waitForVisible();
        this.userDetailsNextButton.click();
    }

    userDeletionFromSuperAdminAccount() {
        this.usersPage();
        this.chooseOrganisation();
        this.deleteUserButton(1).waitForVisible();
        this.deleteUserButton(1).click();
        browser.waitUntil(
            function() {
              return (
                browser.isVisible(
                  `.MuiGrid-spacing-xs-2 .MuiGrid-item:nth-child(1) .MuiButtonBase-root`
              ) === true
            );
          },
          30000,
          "secondary breaches is not visible even after 10s"
        );
        this.deleteYesButtonPopup.waitForVisible();
        this.deleteYesButtonPopup.click();
    }

    groupCreationFromSuperAdminAccount() {
        this.groupsPage();
        this.createGroupButton.waitForVisible();
        this.createGroupButton.click();
        this.selectOrganisationGroupDropdown.waitForVisible();
        browser.setValue('#organization_id',['WaymarK on 29/04/2021','ArrowDown','Enter']);
        this.groupName.waitForVisible();
        this.groupName.setValue(testData.superAdminRoles.groupName);
        this.selectParentGroup.waitForVisible();
        browser.setValue('#parent_id',['Marge','ArrowDown','Enter']);
        this.groupDetailsNextButton.waitForVisible();
        this.groupDetailsNextButton.click();
        this.userAdding();
    }

    userAdding(){
        this.addUsersToGroup.waitForVisible();
        this.addUsersToGroup.click();
        this.addAllUsersCheckBox.waitForVisible();
        this.addAllUsersCheckBox.click();
        this.closeIcon.waitForVisible();
        this.closeIcon.click();
        this.finalNextButton.waitForVisible();
        this.finalNextButton.click();
    }

    groupEditionFromSuperAdminAccount() {
        this.groupsPage();
        this.chooseOrganisation();
        this.groupEditPencilButton(3).waitForVisible();
        this.groupEditPencilButton(3).click();
        this.editButton.waitForVisible();
        this.editButton.click();
        this.groupName.waitForVisible();
        this.clearField("#name");
        this.groupName.setValue(testData.superAdminRoles.editGroupName);
        this.selectParentGroup.waitForVisible();
        browser.setValue('#parent_id',['Test Group 1','ArrowDown','Enter']);
        browser.pause(3000);
        this.groupDetailsNextButton.waitForVisible();
        this.groupDetailsNextButton.click();
        this.userAdding();
        this.backToGroupList.waitForVisible();
        this.backToGroupList.click();
    }

    groupDeletionFromSuperAdminAccount() {
        this.groupsPage();
        this.chooseOrganisation();
        this.groupDeleteButton.waitForVisible();
        this.groupDeleteButton.click();
        this.deleteYesButtonPopup.waitForVisible();
        this.deleteYesButtonPopup.click();
    }

    organisationCreation() {
        this.organisationsPage();
        this.createNewOrganisationButton.waitForVisible();
        this.createNewOrganisationButton.click();
        this.organisationName.waitForVisible();
        this.organisationName.setValue(testData.superAdminRoles.organisationName);
        this.nextButton();
        this.permittedEmailSuffixes.waitForVisible();
        this.permittedEmailSuffixes.setValue(testData.superAdminRoles.permittedEmailSuffixes);
        this.nextButton();
        this.licenseField.waitForVisible();
        this.licenseField.click();
        this.licenseDropDown.waitForVisible();
        this.licenseDropDown.click();
        this.selectDataSource.waitForVisible();
        browser.setValue('#data_sources',['BOE','ArrowDown','Enter']);
        this.nextButton();
        this.addGroupName.waitForVisible();
        this.addGroupName.setValue(testData.superAdminRoles.organisationGroupName);
        this.nextButton();
        this.organisationUserFirstNameTextBox.waitForVisible();
        this.organisationUserFirstNameTextBox.setValue(testData.superAdminRoles.organisationUserFirstName);
        this.organisationUserLastNameTextBox.waitForVisible();
        this.organisationUserLastNameTextBox.setValue(testData.superAdminRoles.organisationUserLastName);
        this.organisationUserEmailTextBox.waitForVisible();
        this.organisationUserEmailTextBox.setValue(testData.superAdminRoles.organisationUserEmail);
        this.nextButton();
    }

    organisationDeactivate() {
        this.organisationsPage();
        this.organisationDeactivateButton.waitForVisible();
        this.organisationDeactivateButton.click();
        this.confirmDeactivateButton.waitForVisible();
        this.confirmDeactivateButton.click();
    }

    organisationEdition() {
        this.organisationsPage();
        this.organisationEditPencilButton.waitForVisible();
        this.organisationEditPencilButton.click();
        this.editOrganisationButton.waitForVisible();
        this.editOrganisationButton.click();
        this.organisationName.waitForVisible();
        this.clearField("#name");
        this.organisationName.setValue(testData.superAdminRoles.editOrganisationName);
        this.nextButton();
        this.organisationNextButton.waitForVisible();
        this.organisationNextButton.click();
        this.licenseField.waitForVisible();
        this.licenseField.click();
        this.enterpriseLicence.waitForVisible();
        this.enterpriseLicence.click();
        this.selectDataSource.waitForVisible();
        browser.setValue('#data_sources',['accc','ArrowDown','Enter']);
        this.nextButton();
        this.backToOrganisationList.waitForVisible();
        this.backToOrganisationList.click();
    }

}

export default new SuperAdminRoles();