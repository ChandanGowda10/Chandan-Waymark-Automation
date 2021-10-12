import Login_handler from "../page-objects/Login_handler.js";
import Forgotpassword from "../page-objects/ForgotPassword.js";
import Organisation from "../page-objects/Organisation.js";
import Profile from "../page-objects/Profile.js";
import Folders from "../page-objects/DocumentLibrary.js";
import Notifications from "../page-objects/Notifications.js";
import Support from "../page-objects/Support.js";
import Faq from "../page-objects/FAQ.js"
import SuperAdminRoles from "../page-objects/SuperAdminRoles.js";
import Workflows from "../page-objects/Workflows.js";
import Search from "../page-objects/Search.js";
import { waituntilisvisible } from "../page-objects/Utils.js";
import testData from "../constants/testData.json";
import { expect } from "chai";
import SavedSearches from "../page-objects/SavedSearches.js";
import Basket from "../page-objects/Basket.js";
import Dashboard from "../page-objects/Dashboard.js";

describe.skip("Sign-in", async () => {
  it("Verify that the organisation admin user sign-in successfully when user enter the valid email id and valid password", async () => {
    Login_handler.givenURL(testData.waymarkLogin.url);
    Login_handler.userLogin(testData.waymarkLogin.emails, testData.waymarkLogin.password);
    waituntilisvisible(
      "//*[text()='Welcome to Wayfinder']",
      2500,
      "Dashboard page is not visible even after 25 sec",
      true
    );
    expect(Login_handler.welcomeValidationText.getText()).to.eql(testData.waymarkLogin.welcomeText);
  });

  it("Verify that the user logged out successfully when the user clicks on the logout button", async () => {
    Login_handler.userLogout();
    expect(Login_handler.logoutInvalidValidationText.getText()).to.eql(testData.waymarkLogin.logoutText);
  });

  it("Verify that the user receives the Reset Password link in the email and the sign-in page is displayed when the user clicks on the Restore button", async () => {
    Forgotpassword.testForgotPassword(testData.waymarkLogin.emails);
    Forgotpassword.forgotPasswordValidationText.waitForVisible();
    expect(Forgotpassword.forgotPasswordValidationText.getText()).to.eql(testData.waymarkLogin.signinPageText);
  });

  it("Verify that Super Admin user is logged in successfully when valid UN and PW is submitted", async () => {
    Login_handler.userLogin(testData.waymarkLogin.superAdmin, testData.waymarkLogin.superAdminPassword);
    waituntilisvisible(
      "//*[text()='Welcome to Wayfinder']",
      2500,
      "Dashboard page is not visible even after 25 sec",
      true
    );
    expect(Login_handler.welcomeValidationText.getText()).to.eql(testData.waymarkLogin.welcomeText);
    Login_handler.userLogout();
  });

  it("Verify that Workflow Admin user is logged in successfully when valid UN and PW is submitted", async () => {
    Login_handler.givenURL(testData.waymarkLogin.url);
    Login_handler.workflowUserLogin(testData.waymarkLogin.workflowAdmin, testData.waymarkLogin.workflowPassword);
    waituntilisvisible(
      "//*[text()='My saved searches']",
      2500,
      "Dashboard page is not visible even after 25 sec",
      true
    );
    expect(Login_handler.homePageValidationText.getText()).to.eql(testData.waymarkLogin.homepageText);
    Login_handler.userLogout();
  });

  it("Verify that Group Admin user is logged in successfully when valid UN and PW is submitted", async () => {
    Login_handler.groupAdminLogin(testData.waymarkLogin.groupAdmin, testData.waymarkLogin.groupAdminPassword);
    waituntilisvisible(
      "//*[text()='My saved searches']",
      2500,
      "Dashboard page is not visible even after 25 sec",
      true
    );
    expect(Login_handler.homePageValidationText.getText()).to.eql(testData.waymarkLogin.homepageText);
    Login_handler.userLogout();
  });

  it("Verify that the user is unable to sign-in  when invalid credentials are specified in the sign-in page", async () => {
    Login_handler.userLogin(testData.waymarkLogin.invalidEmail, testData.waymarkLogin.password);
    expect(Login_handler.invalidValidationText.getText()).to.eql(testData.waymarkLogin.invalidText);
  });

  it("Verify that the user email is not a case sensitive", async () => {
    Login_handler.givenURL(testData.waymarkLogin.url);
    Login_handler.caseSensitiveLogin(testData.waymarkLogin.caseSensitiveEmail, testData.waymarkLogin.password);
    waituntilisvisible(
      "//*[text()='My saved searches']",
      2500,
      "Dashboard page is not visible even after 25 sec",
      true
    );
    expect(browser.getUrl()).to.eql(testData.waymarkLogin.dashboardPageUrl);
  });

});

describe.skip("Organisation", async () => {
  it("Verify that the organisation admin can create new user with permitted email id", async () => {
    Login_handler.givenURL(testData.waymarkLogin.url);
    Login_handler.userLogin(testData.waymarkLogin.emails, testData.waymarkLogin.password);
    Organisation.organisationPage();
    Organisation.organisationAddUser(testData.waymarkOrganisation.userFirstName, testData.waymarkOrganisation.userLastName, testData.waymarkOrganisation.userEmail);
    Login_handler.userLogout();
  });

  it("Verify that the Organisation admin can edit the existing user", async () => {
    Login_handler.givenURL(testData.waymarkLogin.url);
    Login_handler.userLogin(testData.waymarkLogin.emails, testData.waymarkLogin.password);
    Organisation.organisationPage();
    Organisation.organisationEditUser(testData.waymarkOrganisation.editFirstName, testData.waymarkOrganisation.editLastName);
  })

  it("Verify that the Organisation admin can delete the created user", async () => {
    Login_handler.givenURL(testData.waymarkLogin.url);
    Login_handler.userLogin(testData.waymarkLogin.emails, testData.waymarkLogin.password);
    Organisation.organisationPage();
    Organisation.organisationUserDelete();
    Login_handler.userLogout();
  });

  it("Verify that the Organisation page is displayed when the user clicks on the Organisation button", async () => {
    Login_handler.givenURL(testData.waymarkLogin.url);
    Login_handler.userLogin(testData.waymarkLogin.emails, testData.waymarkLogin.password);
    Organisation.organisationSelect();
    expect(browser.getUrl()).to.eql(testData.waymarkOrganisation.organisationPageUrl);
    Login_handler.userLogout();
  });

  it("Verify that the User List page is displayed when the user clicks on the Users button", async () => {
    Login_handler.givenURL(testData.waymarkLogin.url);
    Login_handler.userLogin(testData.waymarkLogin.emails, testData.waymarkLogin.password);
    Organisation.organisationSelect();
    Organisation.organisationPageUsers();
    expect(browser.getUrl()).to.eql(testData.waymarkOrganisation.organisationUsersUrl);
    Login_handler.userLogout();
  });

  it("Verify that the Group List page is displayed when the user clicks on the Groups button", async () => {
    Login_handler.givenURL(testData.waymarkLogin.url);
    Login_handler.userLogin(testData.waymarkLogin.emails, testData.waymarkLogin.password);
    Organisation.organisationSelect();
    Organisation.organisationPageGroups();
    expect(browser.getUrl()).to.eql(testData.waymarkOrganisation.organisationGroupsUrl);
    Login_handler.userLogout();
  });

  it("Verify that the organisation admin can create new group", async () => {
    Login_handler.givenURL(testData.waymarkLogin.url);
    Login_handler.userLogin(testData.waymarkLogin.emails, testData.waymarkLogin.password);
    Organisation.orgGroups();
    Organisation.organisationAddGroup(testData.waymarkOrganisation.selectGroupName);
  });

  it("Verify that the organisation admin can edit the existing group", async () => {
    Login_handler.givenURL(testData.waymarkLogin.url);
    Login_handler.userLogin(testData.waymarkLogin.emails, testData.waymarkLogin.password);
    Organisation.orgGroups();
    Organisation.organisationEditGroup(testData.waymarkOrganisation.editGroupName);
  })

  it("Verify that the organisation admin can delete the group", async () => {
    Login_handler.givenURL(testData.waymarkLogin.url);
    Login_handler.userLogin(testData.waymarkLogin.emails, testData.waymarkLogin.password);
    Organisation.orgGroups();
    Organisation.organisationGroupDelete();
  });
});

describe.skip("Profile", async () => {
it("Verify that user is able to edit his profile details", async () => {
    Login_handler.givenURL(testData.waymarkLogin.url);
    Login_handler.userLogin(testData.waymarkLogin.emails, testData.waymarkLogin.password);
    Profile.userProfileEdit();
    expect(browser.getUrl()).to.eql(testData.profileAvatar.profileValidation);
    Login_handler.userLogout();
  });
});

describe.skip("DocumentLibrary", async () => {
  it("Verify that the user can create a new folder", async () => {
      Login_handler.givenURL(testData.waymarkLogin.url);
      Login_handler.userLogin(testData.waymarkLogin.emails, testData.waymarkLogin.password);
      Folders.folderCreation();
      waituntilisvisible(
        "//a[.='Chandan Test Folder']",
        2500,
        "Folder page is not visible even after 25 sec",
        true
      );
      expect(Folders.folderValidationText.getText()).to.eql(testData.documentLibrary.ValidationTextForFolder);
      Login_handler.userLogout();
    });

  it("Verify that the user can edit a created folder", async () => {
      Login_handler.givenURL(testData.waymarkLogin.url);
      Login_handler.userLogin(testData.waymarkLogin.emails, testData.waymarkLogin.password);
      Folders.folderEdition();
      waituntilisvisible(
        "//a[.='Chandan Test Folder 1']",
        2500,
        "Folder page is not visible even after 25 sec",
        true
      );
      expect(Folders.editedFolderValidation.getText()).to.eql(testData.documentLibrary.editFolderNameValidation);
      Login_handler.userLogout();
    });

    it("Verify that the user can share the created folder with a user", async () => {
      Login_handler.givenURL(testData.waymarkLogin.url);
      Login_handler.userLogin(testData.waymarkLogin.emails, testData.waymarkLogin.password);
      Folders.folderShareWithUser();
      Login_handler.userLogout();
      Login_handler.givenURL(testData.waymarkLogin.url);
      Login_handler.userLogin(testData.documentLibrary.sharedUserEmail, testData.documentLibrary.sharedUserPassword);
      Folders.folderPage();
      waituntilisvisible(
        "//a[.='Chandan Test Folder 1']",
        2500,
        "Folder page is not visible even after 25 sec",
        true
      );
      expect(Folders.editedFolderValidation.getText()).to.eql(testData.documentLibrary.editFolderNameValidation);
      Login_handler.userLogout();
    });

    it("Verify that the user can share the created folder with a group", async () => {
      Login_handler.givenURL(testData.waymarkLogin.url);
      Login_handler.userLogin(testData.waymarkLogin.emails, testData.waymarkLogin.password);
      Folders.folderShareWithGroup();
      browser.pause(1000);
      Login_handler.userLogout();
      Login_handler.givenURL(testData.waymarkLogin.url);
      Login_handler.userLogin(testData.documentLibrary.sharedUserEmail, testData.documentLibrary.sharedUserPassword);
      Folders.folderPage();
      waituntilisvisible(
        "//a[.='Chandan Test Folder 1']",
        2500,
        "Folder page is not visible even after 25 sec",
        true
      );
      expect(Folders.editedFolderValidation.getText()).to.eql(testData.documentLibrary.editFolderNameValidation);
      Login_handler.userLogout();
    });

    it("Verify that the user can share the created folder with both user and group", async () => {
      Login_handler.givenURL(testData.waymarkLogin.url);
      Login_handler.userLogin(testData.waymarkLogin.emails, testData.waymarkLogin.password);
      Folders.folderShareWithUserAndGroup();
      browser.pause(1000);
      Login_handler.userLogout();
      Login_handler.givenURL(testData.waymarkLogin.url);
      Login_handler.userLogin(testData.documentLibrary.sharedUserEmail, testData.documentLibrary.sharedUserPassword);
      Folders.folderPage();
      waituntilisvisible(
        "//a[.='Chandan Test Folder 1']",
        2500,
        "Folder page is not visible even after 25 sec",
        true
      );
      expect(Folders.editedFolderValidation.getText()).to.eql(testData.documentLibrary.editFolderNameValidation);
      Login_handler.userLogout();
    });

    it("Verify that the user can delete a created folder", async () => {
      Login_handler.givenURL(testData.waymarkLogin.url);
      Login_handler.userLogin(testData.waymarkLogin.emails, testData.waymarkLogin.password);
      Folders.folderDeletion();
      waituntilisvisible(
        ".MuiTypography-root.MuiTypography-caption.MuiTypography-displayBlock",
        2500,
        "Folder page is not visible even after 25 sec",
        true
      );
      expect(Folders.validationForDelete.getText()).to.eql(testData.documentLibrary.deleteValidation);
      Login_handler.userLogout();
    });

});

describe.skip("Notifications", async () => {
  it("Verify that the Notification panel is displayed when the user clicks on the bell icon button", async () => {
    Login_handler.givenURL(testData.waymarkLogin.url);
    Login_handler.userLogin(testData.waymarkLogin.emails, testData.waymarkLogin.password);
    Notifications.notificationPanel();
    expect(Notifications.validationNotificationText.getText()).to.eql(testData.notifications.notificationsText);
    browser.refresh();
    Login_handler.userLogout();
  });
});

describe.skip("Support", async () => {
  it("Verify that the intercom chat is displayed when the user clicks on the Support option.", async () => {
    Login_handler.givenURL(testData.waymarkLogin.url);
    Login_handler.userLogin(testData.waymarkLogin.emails, testData.waymarkLogin.password);
    Support.intercom();
    browser.refresh();
    Login_handler.userLogout();
  });
});

describe.skip("FAQ", async () => {
  it("Verify that the FAQ page is displayed when the user click on the FAQ option.", async () => {
    Login_handler.givenURL(testData.waymarkLogin.url);
    Login_handler.userLogin(testData.waymarkLogin.emails, testData.waymarkLogin.password);
    Faq.faqPage();
    var tabIds = browser.getTabIds();
    browser.switchTab(tabIds[1]);
    browser.pause(3000);
    expect(browser.getUrl()).to.eql(testData.faq.faqUrl);
    browser.switchTab(tabIds[0]);
    browser.pause(3000);
    Login_handler.userLogout();
  });
});

describe.skip("SuperAdminRoles", async () => {
  it("Verify that the Super Admin can create a New User", async () => {
    Login_handler.givenURL(testData.waymarkLogin.url);
    Login_handler.userLogin(testData.waymarkLogin.superAdmin, testData.waymarkLogin.superAdminPassword);
    SuperAdminRoles.userCreationFromSuperAdminAccount();
    waituntilisvisible(
      ".MuiGrid-justify-xs-space-between .MuiGrid-item:nth-child(2) .MuiButtonBase-root",
      2500,
      "Users page is not visible even after 25 sec",
      true
    );
    expect(browser.getUrl()).to.eql(testData.superAdminRoles.usersCreationValidation);
    Login_handler.userLogout();
  });

  it("Verify that the Super Admin can edit the new user details", async () => {
    Login_handler.givenURL(testData.waymarkLogin.url);
    Login_handler.userLogin(testData.waymarkLogin.superAdmin, testData.waymarkLogin.superAdminPassword);
    SuperAdminRoles.userEditionFromSuperAdminAccount();
    waituntilisvisible(
      ".MuiGrid-justify-xs-space-between .MuiGrid-item:nth-child(2) .MuiButtonBase-root",
      2500,
      "Users page is not visible even after 25 sec",
      true
    );
    expect(browser.getUrl()).to.eql(testData.superAdminRoles.usersCreationValidation);
    Login_handler.userLogout();
  });

  it("Verify that the super admin can delete the user from the organisation.", async () => {
    Login_handler.givenURL(testData.waymarkLogin.url);
    Login_handler.userLogin(testData.waymarkLogin.superAdmin, testData.waymarkLogin.superAdminPassword);
    SuperAdminRoles.userDeletionFromSuperAdminAccount();
    waituntilisvisible(
      ".MuiGrid-justify-xs-space-between .MuiGrid-item:nth-child(2) .MuiButtonBase-root",
      2500,
      "Users page is not visible even after 25 sec",
      true
    );
    Login_handler.userLogout();
  });

  it("Verify that the Super Admin can create new group", async () => {
    Login_handler.givenURL(testData.waymarkLogin.url);
    Login_handler.userLogin(testData.waymarkLogin.superAdmin, testData.waymarkLogin.superAdminPassword);
    SuperAdminRoles.groupCreationFromSuperAdminAccount();
    waituntilisvisible(
      ".MuiGrid-justify-xs-space-between .MuiGrid-item:nth-child(2) .MuiButtonBase-root",
      2500,
      "Groups page is not visible even after 25 sec",
      true
    );
    Login_handler.userLogout();
  });

  it("Verify that the Super Admin can edit the group details", async () => {
    Login_handler.givenURL(testData.waymarkLogin.url);
    Login_handler.userLogin(testData.waymarkLogin.superAdmin, testData.waymarkLogin.superAdminPassword);
    SuperAdminRoles.groupEditionFromSuperAdminAccount();
    waituntilisvisible(
      ".MuiGrid-justify-xs-space-between .MuiGrid-item:nth-child(2) .MuiButtonBase-root",
      2500,
      "Groups page is not visible even after 25 sec",
      true
    );
    expect(browser.getUrl()).to.eql(testData.superAdminRoles.groupCreationValidation);
    Login_handler.userLogout();
  });

  it("Verify that the Super Admin can delete the group", async () => {
    Login_handler.givenURL(testData.waymarkLogin.url);
    Login_handler.userLogin(testData.waymarkLogin.superAdmin, testData.waymarkLogin.superAdminPassword);
    SuperAdminRoles.groupDeletionFromSuperAdminAccount();
    waituntilisvisible(
      ".MuiGrid-justify-xs-space-between .MuiGrid-item:nth-child(2) .MuiButtonBase-root",
      2500,
      "Groups page is not visible even after 25 sec",
      true
    );
    Login_handler.userLogout();
  });

  it("Verify that the Super admin can create a New Organisation", async () => {
    Login_handler.givenURL(testData.waymarkLogin.url);
    Login_handler.userLogin(testData.waymarkLogin.superAdmin, testData.waymarkLogin.superAdminPassword);
    SuperAdminRoles.organisationCreation();
    waituntilisvisible(
      ".MuiSvgIcon-root.MuiAvatar-fallback",
      25000,
      "Organiation page is not visible even after 25 sec",
      true
    );
    Login_handler.userLogout();
  });

  it("Verify that the Super admin can deactivate the Organisation", async () => {
    Login_handler.givenURL(testData.waymarkLogin.url);
    Login_handler.userLogin(testData.waymarkLogin.superAdmin, testData.waymarkLogin.superAdminPassword);
    SuperAdminRoles.organisationDeactivate();
    waituntilisvisible(
      ".MuiGrid-align-items-xs-center.MuiGrid-justify-xs-space-between .MuiButtonBase-root",
      25000,
      "Organiation page is not visible even after 25 sec",
      true
    );
    Login_handler.userLogout();
  });

  it("Verify that the Super admin can edit the Organisation", async () => {
    Login_handler.givenURL(testData.waymarkLogin.url);
    Login_handler.userLogin(testData.waymarkLogin.superAdmin, testData.waymarkLogin.superAdminPassword);
    SuperAdminRoles.organisationEdition();
    waituntilisvisible(
      ".MuiGrid-align-items-xs-center.MuiGrid-justify-xs-space-between .MuiButtonBase-root",
      25000,
      "Organiation page is not visible even after 25 sec",
      true
    );
    Login_handler.userLogout();
  });

});

describe.skip("Workflows", async () => {
  it("Verify that the user can create a new workflow", async () => {
    Login_handler.givenURL(testData.waymarkLogin.url);
    Login_handler.userLogin(testData.waymarkLogin.emails, testData.waymarkLogin.password);
    Workflows.workflowCreation();
    waituntilisvisible(
      "//span[.='Test Workflow']",
      2500,
      "Workflow page is not visible even after 25 sec",
      true
    );
    expect(Workflows.validationForCreatingWorkflow.getText()).to.eql(testData.workflows.validationForCreatingWorkflow);
    Login_handler.userLogout();
  });

  it("Verify that the user can edit the workflows", async () => {
    Login_handler.givenURL(testData.waymarkLogin.url);
    Login_handler.userLogin(testData.waymarkLogin.emails, testData.waymarkLogin.password);
    Workflows.editWorkflow();
    waituntilisvisible(
      "//span[.='Test Workflow 1']",
      2500,
      "Workflow page is not visible even after 25 sec",
      true
    );
    expect(Workflows.validationForEditingWorkflow.getText()).to.eql(testData.workflows.validationForEditingWorkflow);
    Login_handler.userLogout();
  });

  it("Verify that the user can delete the workflows", async () => {
    Login_handler.givenURL(testData.waymarkLogin.url);
    Login_handler.userLogin(testData.waymarkLogin.emails, testData.waymarkLogin.password);
    Workflows.removeWorkflow();
    waituntilisvisible(
      ".MuiTypography-caption.MuiTypography-displayBlock",
      2500,
      "Workflow page is not visible even after 25 sec",
      true
    );
    expect(Workflows.validationForRemoveWorkflow.getText()).to.eql(testData.workflows.removeWorkflow);
    Login_handler.userLogout();
  });
}); 

describe.skip("Search", async () => {
  it.skip("Verify that the user can assign the save search with user", async () => {
    Login_handler.givenURL(testData.waymarkLogin.url);
    Login_handler.userLogin(testData.waymarkLogin.emails, testData.waymarkLogin.password);
    Search.saveSearchAssignToUser();
    waituntilisvisible(
      "//*[text()='You just saved the search']",
      2500,
      "Save search has been saved successfully",
      true
    );
    expect(Search.savedSearchHasBeenSavedPopup.getText()).to.eql(testData.search.validationSavedSearchText);
    browser.pause(3000);
    Login_handler.userLogout();
  });

  it.skip("Verify that the user can assign the save search with group", async () => {
    Login_handler.givenURL(testData.waymarkLogin.url);
    Login_handler.userLogin(testData.waymarkLogin.emails, testData.waymarkLogin.password);
    Search.saveSearchAssignToGroup();
    waituntilisvisible(
      "//*[text()='You just saved the search']",
      2500,
      "Save search has been saved successfully",
      true
    );
    expect(Search.savedSearchHasBeenSavedPopup.getText()).to.eql(testData.search.validationSavedSearchText);
    browser.pause(3000);
    Login_handler.userLogout();
  });

  it.skip("Verify that the user can assign the save search with both user and group", async () => {
    Login_handler.givenURL(testData.waymarkLogin.url);
    Login_handler.userLogin(testData.waymarkLogin.emails, testData.waymarkLogin.password);
    Search.saveSearchAssignToUserAndGroup();
    waituntilisvisible(
      "//*[text()='You just saved the search']",
      2500,
      "Save search has been saved successfully",
      true
    );
    expect(Search.savedSearchHasBeenSavedPopup.getText()).to.eql(testData.search.validationSavedSearchText);
    browser.pause(3000);
    Login_handler.userLogout();
  });

  it.skip("Verify that the user can preview the document in the document preview panel when the preview button is clicked on the search results for the related document", async () => {
    Login_handler.givenURL(testData.waymarkLogin.url);
    Login_handler.userLogin(testData.waymarkLogin.emails, testData.waymarkLogin.password);
    Search.documentPreview();
    expect(Search.previewButton.getText()).to.eql(testData.search.documentPreview);
    Login_handler.userLogout();
  });

  it.skip("Verify that the selected Data Source options are cleared when the user clicks on the Clear All button in search page", async () => {
    Login_handler.givenURL(testData.waymarkLogin.url);
    Login_handler.userLogin(testData.waymarkLogin.emails, testData.waymarkLogin.password);
    Search.clearSearchFilters();
    expect(browser.getUrl()).to.eql(testData.search.searchFiltersClearUrlValidation);
    Login_handler.userLogout();
  });

  it.skip("Verify that the dropdown options are displayed when the user clicks on the Enforcement option.", async () => {
    Login_handler.givenURL(testData.waymarkLogin.url);
    Login_handler.userLogin(testData.waymarkLogin.emails, testData.waymarkLogin.password);
    Search.enforcementDocumentType();
    expect(Search.administrativeOrderInSearchResults.getText()).to.eql(testData.search.administrativeOrderValidation);
    Login_handler.userLogout();
  });

  it.skip("Verify that the manage filters panel is displayed when the manage filters option is clicked", async () => {
    Login_handler.givenURL(testData.waymarkLogin.url);
    Login_handler.userLogin(testData.waymarkLogin.emails, testData.waymarkLogin.password);
    Search.manageFiltersPanel();
    waituntilisvisible(
      "#keywords",
      2000,
      "Keyword text field displayed successfully",
      true
    );
    expect(Search.keywordFilter.getText()).to.eql(testData.search.keywordValidationText);
    Login_handler.userLogout();
  });

  it.skip("Verify that search results are displayed in ascending order when the Document Title(ascending) option is selected in Sorting options.", async () => {
    Login_handler.givenURL(testData.waymarkLogin.url);
    Login_handler.userLogin(testData.waymarkLogin.emails, testData.waymarkLogin.password);
    Search.documentSortingInAscendingOrder();
    waituntilisvisible(
      "(//*[text()='Preview'])[1]",
      2000,
      "Document is not sorted successfully",
      true
    );
    expect(browser.getUrl()).to.eql(testData.search.documentSortingAscendingOrderUrl);
    Login_handler.userLogout();
  });

  it.skip("Verify that search results are displayed in descending order when the Document Title(descending) option is selected in Sorting options.", async () => {
    Login_handler.givenURL(testData.waymarkLogin.url);
    Login_handler.userLogin(testData.waymarkLogin.emails, testData.waymarkLogin.password);
    Search.documentSortingInDescendingOrder();
    waituntilisvisible(
      "(//*[text()='Preview'])[1]",
      2000,
      "Document is not sorted successfully",
      true
    );
    expect(browser.getUrl()).to.eql(testData.search.documentSortingDescendingOrderUrl);
    Login_handler.userLogout();
  });

  it.skip("Verify that search results are displayed in newest publication date order when the publication date(newest first) option is selected in Sorting options.", async () => {
    Login_handler.givenURL(testData.waymarkLogin.url);
    Login_handler.userLogin(testData.waymarkLogin.emails, testData.waymarkLogin.password);
    Search.documentSortingInNewestPublicationOrder();
    waituntilisvisible(
      "(//*[text()='Preview'])[1]",
      2000,
      "Document is not sorted successfully",
      true
    );
    expect(browser.getUrl()).to.eql(testData.search.documentSortingNewestPublicationDateUrl);
    Login_handler.userLogout();
  });

  it.skip("Verify that search results are displayed in oldest publication date order when the publication date(oldest first) option is selected in Sorting options.", async () => {
    Login_handler.givenURL(testData.waymarkLogin.url);
    Login_handler.userLogin(testData.waymarkLogin.emails, testData.waymarkLogin.password);
    Search.documentSortingInNewestPublicationOrder();
    waituntilisvisible(
      "(//*[text()='Preview'])[1]",
      2000,
      "Document is not sorted successfully",
      true
    );
    expect(browser.getUrl()).to.eql(testData.search.documentSortingOldestPublicationDateUrl);
    Login_handler.userLogout();
  });

  it.skip("Verify that search results are displayed in burden score order when the burden score option is selected in Sorting options.", async () => {
    Login_handler.givenURL(testData.waymarkLogin.url);
    Login_handler.userLogin(testData.waymarkLogin.emails, testData.waymarkLogin.password);
    Search.documentSortingInBurdenScoreOrder();
    waituntilisvisible(
      "(//*[text()='Preview'])[1]",
      2000,
      "Document is not sorted successfully",
      true
    );
    expect(browser.getUrl()).to.eql(testData.search.documentSortingBurdenScoreUrl);
    Login_handler.userLogout();
  });

  it.skip("Verify that search results are displayed in relevance order when the relevance option is selected in Sorting options.", async () => {
    Login_handler.givenURL(testData.waymarkLogin.url);
    Login_handler.userLogin(testData.waymarkLogin.emails, testData.waymarkLogin.password);
    Search.documentSortingInRelevanceOrder();
    waituntilisvisible(
      "(//*[text()='Preview'])[1]",
      2000,
      "Document is not sorted successfully",
      true
    );
    expect(browser.getUrl()).to.eql(testData.search.documentSortingRelevanceUrl);
    Login_handler.userLogout();
  });

  it.skip("Verify that key information fields are displayed for the Enforcements document types in the document information panel", async () => {
    Login_handler.givenURL(testData.waymarkLogin.url);
    Login_handler.userLogin(testData.waymarkLogin.emails, testData.waymarkLogin.password);
    Search.keyInformationFieldsForEnforcementTypeDocuments();
    Login_handler.userLogout();
  });

  it.skip("Verify that any keyword related to Any of these words field is displayed on the Search results.", async () => {
    Login_handler.givenURL(testData.waymarkLogin.url);
    Login_handler.userLogin(testData.waymarkLogin.emails, testData.waymarkLogin.password);
    Search.anyOfTheseWordsAdvancedSearch();
    Login_handler.userLogout();
  });

  it.skip("Verify that any keyword related to Any of these words field is displayed on the Search results.", async () => {
    Login_handler.givenURL(testData.waymarkLogin.url);
    Login_handler.userLogin(testData.waymarkLogin.emails, testData.waymarkLogin.password);
    Search.titleSearchAdvancedSearch();
    Login_handler.userLogout();
  });

  it.skip("Verify that the altered metadata fields like Topics, Tags, Themes, and Industry are updated in the document successfully", async () => {
    Login_handler.givenURL(testData.waymarkLogin.url);
    Login_handler.userLogin(testData.waymarkLogin.superAdmin, testData.waymarkLogin.superAdminPassword);
    Search.metadataContentEditor();
    Login_handler.userLogout();
  });

  it.skip("Verify that the selected breaches are displayed in the breaches section successfully.", async () => {
    Login_handler.givenURL(testData.waymarkLogin.url);
    Login_handler.userLogin(testData.waymarkLogin.superAdmin, testData.waymarkLogin.superAdminPassword);
    Search.contentEditorBreaches();
    Login_handler.userLogout();
  });

  it.skip("Verify that the selected breaches are cleared under the corresponding breaches when the close(X) icon is clicked on the pills.", async () => {
    Login_handler.givenURL(testData.waymarkLogin.url);
    Login_handler.userLogin(testData.waymarkLogin.superAdmin, testData.waymarkLogin.superAdminPassword);
    Search.clearAllTheBreachesPills();
    Login_handler.userLogout();
  });

  it.skip("Verify that the selected SMF, SIMF, and CF are displayed in the other information section successfully.", async () => {
    Login_handler.givenURL(testData.waymarkLogin.url);
    Login_handler.userLogin(testData.waymarkLogin.superAdmin, testData.waymarkLogin.superAdminPassword);
    Search.contentEditorOtherInformation();
    Login_handler.userLogout();
  });

  it.skip("Verify that the selected SMF, SIMF, and CF are cleared under the corresponding dropdown when the close(X) icon is clicked on the pills.", async () => {
    Login_handler.givenURL(testData.waymarkLogin.url);
    Login_handler.userLogin(testData.waymarkLogin.superAdmin, testData.waymarkLogin.superAdminPassword);
    Search.clearOtherInformationPills();
    Login_handler.userLogout();
  });

  it.skip("Verify that only reviewed documents are displayed in the search results when the super admin toggle on the Document Reviewed button", async () => {
    Login_handler.givenURL(testData.waymarkLogin.url);
    Login_handler.userLogin(testData.waymarkLogin.superAdmin, testData.waymarkLogin.superAdminPassword);
    Search.documentReviewed();
    Login_handler.userLogout();
  });

  it("Verify that the selected Manage Filter options are displayed on the Search page when user click on the Apply button.", async () => {
    Login_handler.givenURL(testData.waymarkLogin.url);
    Login_handler.userLogin(testData.waymarkLogin.superAdmin, testData.waymarkLogin.superAdminPassword);
    Search.selectedManageFiltersOnSearchPage();
    Login_handler.userLogout();
  });

});

describe.skip("Saved Searches", async () => {
  it.skip("Verify that the user can assign the save searches with user", async () => {
    Login_handler.givenURL(testData.waymarkLogin.url);
    Login_handler.userLogin(testData.waymarkLogin.emails, testData.waymarkLogin.password);
    SavedSearches.shareSavedSearchWithUser();
    waituntilisvisible(
      ".MuiSvgIcon-root.MuiAvatar-fallback",
      2500,
      "Save search has been shared successfully",
      true
    );
    expect(SavedSearches.saveSharedSearchPopup.getText()).to.eql(testData.savedSearches.validationSavedSearchesText);
    browser.pause(7000);
    Login_handler.userLogout();
  });
  
  it.skip("Verify that the user can assign the save searches with group", async () => {
    Login_handler.givenURL(testData.waymarkLogin.url);
    Login_handler.userLogin(testData.waymarkLogin.emails, testData.waymarkLogin.password);
    SavedSearches.shareSavedSearchWithGroup();
    waituntilisvisible(
      ".MuiSvgIcon-root.MuiAvatar-fallback",
      2500,
      "Save search has been shared successfully",
      true
    );
    expect(SavedSearches.saveSharedSearchPopup.getText()).to.eql(testData.savedSearches.validationSavedSearchesText);
    browser.pause(4000);
    Login_handler.userLogout();
  });

  it.skip("Verify that the user can assign the save searches with both user and group", async () => {
    Login_handler.givenURL(testData.waymarkLogin.url);
    Login_handler.userLogin(testData.waymarkLogin.emails, testData.waymarkLogin.password);
    SavedSearches.shareSavedSearchWithUserAndGroup();
    waituntilisvisible(
      "//*[text()='Saved search was shared.']",
      2000,
      "Save search has been shared successfully",
      true
    );
    expect(SavedSearches.saveSharedSearchPopup.getText()).to.eql(testData.savedSearches.validationSavedSearchesText);
    Login_handler.userLogout();
  });

  it.skip("Verify that the user can delete the saved searches successfully", async () => {
    Login_handler.givenURL(testData.waymarkLogin.url);
    Login_handler.userLogin(testData.waymarkLogin.emails, testData.waymarkLogin.password);
    SavedSearches.deleteeSavedSearch();
    Login_handler.userLogout();
  });

  it("Verify that the Search page is displayed when the user clicks on the title name in the Saved Search page. ", async () => {
    Login_handler.givenURL(testData.waymarkLogin.url);
    Login_handler.userLogin(testData.waymarkLogin.emails, testData.waymarkLogin.password);
    SavedSearches.savedSearchOnSearchPage();
    Login_handler.userLogout();
  });

});

describe("Basket", async () => {
  it.skip("verify that the selected documents are displayed in the basket feature.", async () => {
    Login_handler.givenURL(testData.waymarkLogin.url);
    Login_handler.userLogin(testData.waymarkLogin.emails, testData.waymarkLogin.password);
    Basket.addDocumentsToBasket();
    Login_handler.userLogout();
  });

  it.skip("Verify that the user can create a new folder", async () => {
    Login_handler.givenURL(testData.waymarkLogin.url);
    Login_handler.userLogin(testData.waymarkLogin.emails, testData.waymarkLogin.password);
    Basket.createFolderFromBasket();
    Login_handler.userLogout();
  });

  it.skip("Verify that the user can delete the documents when the user clicks on the Clear All button.", async () => {
    Login_handler.givenURL(testData.waymarkLogin.url);
    Login_handler.userLogin(testData.waymarkLogin.emails, testData.waymarkLogin.password);
    Basket.clearAllDocuments();
    Login_handler.userLogout();
  });

  it.skip("Verify that the documents in the basket panel are deleted when the user clicks on the Empty Basket button", async () => {
    Login_handler.givenURL(testData.waymarkLogin.url);
    Login_handler.userLogin(testData.waymarkLogin.emails, testData.waymarkLogin.password);
    Basket.emptyBasketFromTheBasketPanel();
    Login_handler.userLogout();
  });

  it("Verify that the documents in the basket panel are deleted when the user clicks on the Empty Basket button", async () => {
    Login_handler.givenURL(testData.waymarkLogin.url);
    Login_handler.userLogin(testData.waymarkLogin.emails, testData.waymarkLogin.password);
    Basket.burdenAssessmentPanel();
    Login_handler.userLogout();
  });

});

describe.skip("Dashboard", async () => {
  it("verify that the recently saved results are displaying first on the My Saved Search page.", async () => {
    Login_handler.givenURL(testData.waymarkLogin.url);
    Login_handler.userLogin(testData.waymarkLogin.emails, testData.waymarkLogin.password);
    Dashboard.savedSearchOnDashboardPage();
    Login_handler.userLogout();
  });

  it("Verify that the Search page is displayed when the user clicks on the title name in the My Saved Search", async () => {
    Login_handler.givenURL(testData.waymarkLogin.url);
    Login_handler.userLogin(testData.waymarkLogin.emails, testData.waymarkLogin.password);
    Dashboard.savedSearchDocumentsOnSearchPageFromDashboard();
    Login_handler.userLogout();
  });
});
