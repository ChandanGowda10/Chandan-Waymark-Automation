import testData from "../constants/testData.json";
import ClearTextBoxValue from "./ClearTextBoxValue";

class Folders extends ClearTextBoxValue {
    get documentLibraryButton() {
        return $("//span[.='Document library']");
    }

    get createNewFolderButton() {
        return $("//span[.='Create new folder']");
    }

    get folderName() {
        return $("#name");
    }

    get createButton() {
        return $(".MuiGrid-container.MuiGrid-spacing-xs-2 .MuiGrid-item:nth-child(1)");
    }

    get folderValidationText() {
        return $("//a[.='Chandan Test Folder']");
    }

    get threeDotsButton() {
        return $(".MuiGrid-root.MuiGrid-container.MuiGrid-item.MuiGrid-justify-xs-flex-end.MuiGrid-grid-xs-2 .MuiButtonBase-root.MuiIconButton-root");
    }

    get editButton() {
        return $(".MuiPaper-rounded .MuiListItem-button:nth-child(1)");
    }

    get saveButton() {
        return $("//span[.='Save']");
    }

    get editedFolderValidation() {
        return $("//a[.='Chandan Test Folder 1']");
    }

    get deleteButton() {
        return $(".MuiPaper-rounded .MuiListItem-button:nth-child(3)");
    }

    get deletePopupButton(){
        return $(".MuiGrid-spacing-xs-2 .MuiGrid-item:nth-child(1)");
    }

    get validationForDelete() {
        return $(".MuiTypography-root.MuiTypography-caption.MuiTypography-displayBlock");
    }

    get shareButton() {
        return $(".MuiPaper-rounded .MuiListItem-button:nth-child(2)");
    }

    get shareFolderWithUser() {
        return $("#users");
    }

    get shareFolderWithGroup() {
        return $("#groups");
    }

    get shareSaveButton() {
        return $("//*[text()='Save']");
    }

    get shareSaveButtonWithUserAndGroup() {
        return $(".MuiGrid-grid-xs-6:nth-child(1) .MuiButtonBase-root");
    }

    get deleteDropdownGroup() {
        return $(".MuiGrid-spacing-xs-2:nth-child(2) .MuiIconButton-label");
    }

    folderCreation() {
        this.documentLibraryButton.waitForVisible();
        this.documentLibraryButton.click();
        this.createNewFolderButton.waitForVisible();
        this.createNewFolderButton.click();
        this.folderName.waitForVisible();
        this.folderName.setValue(testData.documentLibrary.folderName);
        this.createButton.waitForVisible();
        this.createButton.click();
    }

    folderEdition() {
        this.documentLibraryButton.waitForVisible();
        this.documentLibraryButton.click();
        browser.refresh();
        this.threeDotsButton.waitForVisible();
        this.threeDotsButton.click();
        this.editButton.waitForVisible();
        this.editButton.click();
        this.folderName.waitForVisible();
        this.clearField("#name");
        this.folderName.setValue(testData.documentLibrary.editFolderName);
        this.saveButton.waitForVisible();
        this.saveButton.click();
    }

    folderDeletion() {
        this.documentLibraryButton.waitForVisible();
        this.documentLibraryButton.click();
        this.threeDotsButton.waitForVisible();
        this.threeDotsButton.click();
        this.deleteButton.waitForVisible();
        this.deleteButton.click();
        this.deletePopupButton.waitForVisible();
        this.deletePopupButton.click();
        browser.pause(2000);
    }

    folderPage() {
        this.documentLibraryButton.waitForVisible();
        this.documentLibraryButton.click();
    }
    
    folderShareWithUser() {
        this.documentLibraryButton.waitForVisible();
        this.documentLibraryButton.click();
        this.threeDotsButton.waitForVisible();
        this.threeDotsButton.click();
        this.shareButton.waitForVisible();
        this.shareButton.click();
        this.shareFolderWithUser.waitForVisible();
        browser.setValue('#users',['kcchandan423@gamil.com','ArrowDown','Enter']);
        this.shareSaveButton.waitForVisible();
        this.shareSaveButton.click();
    }

    folderShareWithGroup() {
        this.documentLibraryButton.waitForVisible();
        this.documentLibraryButton.click();
        this.threeDotsButton.waitForVisible();
        this.threeDotsButton.click();
        this.shareButton.waitForVisible();
        this.shareButton.click();
        this.shareFolderWithGroup.waitForVisible();
        browser.setValue('#groups',['Marge','ArrowDown','Enter']);
        this.shareSaveButton.waitForVisible();
        this.shareSaveButton.click();
        browser.pause(1000);
    }

    folderShareWithUserAndGroup() {
        this.documentLibraryButton.waitForVisible();
        this.documentLibraryButton.click();
        this.threeDotsButton.waitForVisible();
        this.threeDotsButton.click();
        this.shareButton.waitForVisible();
        this.shareButton.click();
        browser.pause(1000);
        this.shareFolderWithUser.waitForVisible();
        browser.setValue('#users',['kcchandan423@gamil.com','ArrowDown','Enter']);
        this.shareFolderWithGroup.waitForVisible();
        browser.setValue('#groups',['Marge','ArrowDown','Enter']);
    }
}

export default new Folders();