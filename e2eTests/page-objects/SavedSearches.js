import Search from "./Search.js";
import { expect } from "chai";
import DocumentLibrary from "./DocumentLibrary";
import { waituntilisvisible } from "./Utils.js";

class SavedSearches {
    get savedSearchesButton() {
        return $("//*[text()='Saved searches']");
    }

    get threeDotsButton() {
        return $(".MuiGrid-item div:nth-child(5) .MuiIconButton-label");
    }

    get shareButton() {
        return $(".MuiPaper-rounded .MuiListItem-button:nth-child(1)");
    }

    get saveSharedSearchPopup() {
        return $("//*[text()='Saved search was shared.']");
    }

    get deleteButton() {
        return $(".MuiPaper-rounded .MuiListItem-button:nth-child(2)");
    }

    get savedSearchName() {
        return $(".MuiPaper-rounded:nth-child(2)>div>div:nth-child(2)>div:nth-child(1)>div>div>div:nth-child(1) a");
    }

    get savedSearchFilters() {
        return $("div:nth-child(1)>div>div>div:nth-child(2)>div:nth-child(1)>div>span>span:nth-child(1)");
    }

    savedSearchesPage() {
       this.savedSearchesButton.waitForVisible();
       this.savedSearchesButton.click();
    }

    shareSavedSearchWithGroup() {
       this.savedSearchesPage();
       this.threeDotsButton.waitForVisible();
       this.threeDotsButton.click();
       this.shareButton.waitForVisible();
       this.shareButton.click();
       Search.assignToGroup.waitForVisible();
       browser.setValue("#associated_groups",['Marge','ArrowDown','Enter']);
       Search.saveSearchSaveButton.waitForVisible();
       Search.saveSearchSaveButton.click();
    }

    shareSavedSearchWithUser() {
       this.savedSearchesPage();
       this.threeDotsButton.waitForVisible();
       this.threeDotsButton.click();
       this.shareButton.waitForVisible();
       this.shareButton.click();
       Search.assignToUser.waitForVisible();
       browser.setValue("#associated_users",['kcchandan423@gamil.com','ArrowDown','Enter']);
       Search.saveSearchSaveButton.waitForVisible();
       Search.saveSearchSaveButton.click();
    }

    shareSavedSearchWithUserAndGroup() {
       this.savedSearchesPage();
       this.threeDotsButton.waitForVisible();
       this.threeDotsButton.click();
       this.shareButton.waitForVisible();
       this.shareButton.click();
       Search.assignToUser.waitForVisible();
       browser.setValue("#associated_users",['kcchandan423@gamil.com','ArrowDown','Enter']);
       Search.assignToGroup.waitForVisible();
       browser.setValue("#associated_groups",['Marge','ArrowDown','Enter']);
       waituntilisvisible(
           `.MuiGrid-justify-xs-flex-end .MuiGrid-grid-xs-3:nth-child(2)`,
           "10000",
           `Save button is not clickable`,
           false
       );
       Search.saveSearchSaveButton.waitForVisible();
       Search.saveSearchSaveButton.click();
       browser.pause(2000);
    }

    deleteeSavedSearch() {
        this.savedSearchesPage();
        this.threeDotsButton.waitForVisible();
        this.threeDotsButton.click();
        this.deleteButton.waitForVisible();
        this.deleteButton.click();
        DocumentLibrary.deletePopupButton.waitForVisible();
        DocumentLibrary.deletePopupButton.click();
    }

    savedSearchOnSearchPage() {
        this.savedSearchesPage();
        browser.waitUntil(
            function() {
              return (
                browser.isVisible(
                  `div:nth-child(1)>div>div>div:nth-child(2)>div:nth-child(1)>div>span>span:nth-child(1)`
              ) === true
            );
          },
          30000,
          "saved search filters are not visible even after 30s"
        );
        const searchFilters = this.savedSearchFilters.getText();
        this.savedSearchName.waitForVisible();
        this.savedSearchName.click();
        browser.waitUntil(
            function() {
              return (
                browser.isVisible(
                  `.MuiGrid-item:nth-child(2) .MuiTypography-body2`
              ) === true
            );
          },
          30000,
          "search filters are not visible even after 30s"
        );
        const filtersOnSearchPage = Search.searchFilters.getText();
        expect(searchFilters).to.eql(filtersOnSearchPage);
    }

}

export default new SavedSearches();