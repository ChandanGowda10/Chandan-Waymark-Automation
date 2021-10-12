import SavedSearches from "../page-objects/SavedSearches.js";
import { waituntilisvisible } from "../page-objects/Utils.js";
import { expect } from "chai";

class Dashboard {
    get dashboardButton() {
        return $("//span[.='Dashboard']");
    }

    get savedSearchName() {
        return $(".MuiGrid-align-items-xs-flex-start .MuiGrid-wrap-xs-nowrap:nth-child(1) .MuiGrid-justify-xs-center:nth-child(1) .MuiTypography-displayBlock");
    }

    get totalSearchResultsOnSearchPage() {
        return $("//*[text()='Total Search Results']");
    }

    savedSearchOnDashboardPage() {
        SavedSearches.savedSearchesButton.waitForVisible();
        SavedSearches.savedSearchesButton.click();
        browser.waitUntil(
            function() {
              return (
                browser.isVisible(
                  `.MuiPaper-rounded:nth-child(2)>div>div:nth-child(2)>div:nth-child(1)>div>div>div:nth-child(1) a`
              ) === true
            );
          },
          30000,
          "saved search page is not visible even after 30s"
        );
        const savedSearchFirstName = SavedSearches.savedSearchName.getText();
        this.dashboardButton.waitForVisible();
        this.dashboardButton.click();
        browser.waitUntil(
            function() {
              return (
                browser.isVisible(
                  `.MuiGrid-align-items-xs-flex-start .MuiGrid-wrap-xs-nowrap:nth-child(1) .MuiGrid-justify-xs-center:nth-child(1) .MuiTypography-displayBlock`
              ) === true
            );
          },
          30000,
          "dashboard page is not visible even after 30s"
        );
        expect(this.savedSearchName.getText()).to.eql(savedSearchFirstName);
    }

    savedSearchDocumentsOnSearchPageFromDashboard() {
        this.savedSearchName.waitForVisible();
        this.savedSearchName.click();
        browser.waitUntil(
            function() {
              return (
                browser.isVisible(
                  `//*[text()='Total Search Results']`
              ) === false
            );
          },
          30000,
          "Search page is not visible even after 30s"
        );
    }
}

export default new Dashboard();