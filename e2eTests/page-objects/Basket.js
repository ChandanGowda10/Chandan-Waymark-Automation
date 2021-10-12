import Search from "./Search.js";
import Folders from "../page-objects/DocumentLibrary.js";
import testData from "../constants/testData.json";
import { expect } from "chai";

class Basket {
    documentsSelection(i) {
        return $(`.MuiGrid-root:nth-child(${i}) .MuiCheckbox-colorSecondary:nth-child(1)`);
    }
    
    documentTitle(i) {
        return $(`div:nth-child(1) .MuiGrid-item:nth-child(${i}) a span`);
    }

    get addToBasket() {
        return $("//*[text()='Add ']");
    }

    get addToBasketIcon() {
        return $(".MuiGrid-item:nth-child(3) .MuiBadge-root");
    }

    get goToBasketButton() {
        return $(".MuiGrid-justify-xs-center .MuiButtonBase-root:nth-child(2)");
    }

    get saveToFolder() {
        return $("//span[.='Save to a folder']");
    }

    get createANewFolder() {
        return $("//span[.='Create a new folder']");
    }

    get folderNameInDocumentLibrary() {
        return $(".MuiTypography-noWrap.MuiTypography-displayBlock");
    }

    get clearAllButton() {
        return $("//span[.='Clear all']");
    }

    get clearButton() {
        return $(".MuiGrid-spacing-xs-2 .MuiGrid-item:nth-child(1)");
    }

    get emptyBasketButton() {
        return $(".MuiPaper-rounded .MuiGrid-justify-xs-center .MuiButtonBase-root:nth-child(1)");
    }

    get noItemsInBasketPopup() {
        return $("//span[.='No items in the basket.']");
    }

    get viewCumulativeBurdenScoreButton() {
        return $("//span[.='View cumulative burden score']");
    }

    get burdenAssessmentText() {
        return $("//span[.='Burden assessment']");
    }

    addDocumentsToBasket() {
        this.addDocumentsToBasketPanel();
        this.goToBasketButton.waitForVisible();
        this.goToBasketButton.click();
        const array1 = [];
        for (let j = 1; j <= 5; j++) {
        this.documentsSelection(j).waitForVisible();
        this.documentsSelection(j).click();
        const getDocuments1 = this.documentTitle(j).getText();
        array1[j] = getDocuments1;
        console.log("Document selected successfully", array1[j]);
        }
    }

    addDocumentsToBasketPanel() {
        Search.searchPage();
        Search.datasourceDropdown.waitForVisible();
        browser.setValue("#data_source_id",['Access Board','ArrowDown','Enter']);
        const array = [];
        for (let i = 3; i <= 7; i++) {
        this.documentsSelection(i).waitForVisible();
        this.documentsSelection(i).click();
        const getDocuments = this.documentTitle(i).getText();
        array[i] = getDocuments;
        console.log("Document added successfully", array[i]);
        }
        this.addToBasket.waitForVisible();
        this.addToBasket.click();
        browser.pause(4000);
        this.addToBasketIcon.waitForVisible();
        this.addToBasketIcon.click();
    }

    createFolderFromBasket() {
        this.addDocumentsToBasket();
        this.saveToFolder.waitForVisible();
        this.saveToFolder.click();
        this.createANewFolder.waitForVisible();
        this.createANewFolder.click();
        Folders.folderName.waitForVisible();
        Folders.folderName.setValue(testData.basket.folderName);
        Folders.createButton.waitForVisible();
        Folders.createButton.click();
        Folders.documentLibraryButton.waitForVisible();
        Folders.documentLibraryButton.click();
        browser.waitUntil(
            function() {
              return (
                browser.isVisible(
                  `.MuiTypography-noWrap.MuiTypography-displayBlock`
              ) === true
            );
          },
          30000,
          "Folder page is not visible even after 10s"
        );
        const folderNameInDocumentLibrary = this.folderNameInDocumentLibrary.getText();
        expect(folderNameInDocumentLibrary).to.eql(testData.basket.folderName);
    }

    clearAllDocuments() {
        Search.searchPage();
        this.addDocumentsToBasket();
        this.clearAllButton.waitForVisible();
        this.clearAllButton.click();
        this.clearButton.waitForVisible();
        this.clearButton.click();
    }

    emptyBasketFromTheBasketPanel() {
        Search.searchPage();
        this.addDocumentsToBasketPanel();
        this.emptyBasketButton.waitForVisible();
        this.emptyBasketButton.click();
        this.clearButton.waitForVisible();
        this.clearButton.click();
        const noItemsInBasket = this.noItemsInBasketPopup.getText();
        expect(noItemsInBasket).to.eql(testData.basket.noItemsInBasketText);
        browser.refresh();
    }

    burdenAssessmentPanel() {
        this.addDocumentsToBasket();
        this.viewCumulativeBurdenScoreButton.waitForVisible();
        this.viewCumulativeBurdenScoreButton.click();
        expect(this.burdenAssessmentText.getText()).to.eql(testData.basket.burdenAssessmentPanel);
    }
}

export default new Basket();