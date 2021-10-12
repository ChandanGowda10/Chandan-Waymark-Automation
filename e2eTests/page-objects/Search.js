import testData from "../constants/testData.json";
import { expect } from "chai";
import { waituntilisvisible } from "../page-objects/Utils.js";

class Search {
    get searchButton() {
        return $("//span[.='Search']");
    }

    get datasourceDropdown() {
        return $("#data_source_id");
    }

    get saveSearchButton() {
        return $("//*[text()='Save Search']");
    }

    get saveSearchTitleTextBox() {
        return $("#title");
    }

    get assignToGroup() {
        return $("#associated_groups");
    }

    get assignToUser() {
        return $("#associated_users");
    }

    get alertSettingsToggleButton() {
        return $(".MuiGrid-grid-xs-true .MuiGrid-grid-xs-12:nth-child(5) .MuiSwitch-colorSecondary");
    }

    get immediateAlertFreequency() {
        return $(".MuiGrid-grid-xs-6:nth-child(1) .MuiFormControlLabel-root:nth-child(1) .MuiIconButton-colorPrimary");
    }

    get every3hrsAlertFreequency() {
        return $(".MuiGrid-grid-xs-6:nth-child(1) .MuiFormControlLabel-root:nth-child(2) .MuiIconButton-colorPrimary .MuiIconButton-label");
    }

    get everyHourAlertFreequency() {
        return $(".MuiGrid-grid-xs-6:nth-child(1) .MuiFormControlLabel-root:nth-child(3) .MuiIconButton-colorPrimary");
    }

    get everyDayAlertFreequency() {
        return $(".MuiGrid-grid-xs-6:nth-child(2) .MuiFormControlLabel-root:nth-child(2) .MuiIconButton-colorPrimary");
    }

    get everyWeekAlertFreequency() {
        return $(".MuiGrid-grid-xs-6:nth-child(2) .MuiFormControlLabel-root:nth-child(2) .MuiIconButton-colorPrimary");
    }

    get emailAlert() {
        return $(".MuiGrid-grid-md-3:nth-child(2) .MuiTypography-body1");
    }

    get saveSearchSaveButton() {
        return $(".MuiGrid-justify-xs-flex-end .MuiGrid-grid-xs-3:nth-child(2)");
    }

    get savedSearchHasBeenSavedPopup() {
        return $("//*[text()='You just saved the search']");
    }

    get howWouldYouLikeToNotify() {
        return $("//*[text()='How would you like to be notified']");
    }

    get previewButton() {
        return $("(//*[text()='Preview'])[1]");
    }

    get documentPreviewCloseButton() {
        return $(".MuiGrid-justify-xs-space-between .MuiGrid-item:nth-child(2) .MuiIconButton-label");
    }

    get clearAllButton() {
        return $(".MuiGrid-spacing-xs-1.MuiGrid-align-items-xs-center .MuiButtonBase-root:nth-child(1)");
    }

    get documentTypeDropdown() {
        return $("[name='doc_types_id']");
    }

    get enforcementsDocumentTypeDropdown() {
        return $(".MuiGrid-grid-xs-6:nth-child(1) .MuiListItem-button:nth-child(2)");
    }

    get administrativeOrder() {
        return $(".MuiGrid-grid-xs-6:nth-child(2) .MuiListItem-button:nth-child(1)");
    }

    get finalNoticeEnforcementDocType() {
        return $("//*[text()='Final Notice']");
    }

    get administrativeOrderInSearchResults() {
        return $("//*[text()='Administrative order']");
    }

    get manageFilters() {
        return $("//*[text()='Manage Filters']");
    }

    get keywordFilter() {
        return $("//*[text()='Keywords']");
    }

    get sanctionsFilter() {
        return $("//span[.='Sanctions']");
    }

    get breachesPrimaryFilter() {
        return $("//span[.='Breaches Primary']");
    }

    get commencementDateFilter() {
        return $("//span[.='Commencement Date']");
    }

    get fineAmountFilter() {
        return $("//span[.='Fine Amount']");
    }

    get fineCurrency() {
        return $("//span[.='Fine Currency']");
    }

    get recipientTypeFilter() {
        return $("//span[.='Recipient Type']");
    }

    get governmentDepartmentFilter() {
        return $("//span[.='Government Department']");
    }
 
    get applyButton() {
        return $("//*[text()='Apply']");
    }

    get keywordTextfield() {
        return $("#keywords");
    }

    get sortIcon() {
        return $("div button:nth-child(3)");
    }
    get documentTypeSection() {
        return $(".MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-6:nth-child(2) .MuiList-root:nth-child(1)");
    }

    get documentRelevanceOrder() {
        return $(".MuiPaper-rounded .MuiGrid-item:nth-child(2) .MuiListItem-button:nth-child(1)");
    }

    get documentAscendingOrder() {
        return $(".MuiPaper-rounded .MuiGrid-item:nth-child(2) .MuiListItem-button:nth-child(2)");
    }

    get documentDescendingOrder() {
        return $(".MuiPaper-rounded .MuiGrid-item:nth-child(2) .MuiListItem-button:nth-child(3)")
    }

    get documentNewestPublicationDateOrder() {
        return $(".MuiPaper-rounded .MuiGrid-item:nth-child(2) .MuiListItem-button:nth-child(4)")
    }

    get documentOldestPublicationDateOrder() {
        return $(".MuiPaper-rounded .MuiGrid-item:nth-child(2) .MuiListItem-button:nth-child(5)")
    }

    get documentBurdenScoreOrder() {
        return $(".MuiPaper-rounded .MuiGrid-item:nth-child(2) .MuiListItem-button:nth-child(6)")
    }

    documentTitle(i) {
        return $(`div:nth-child(${i}) .MuiGrid-item:nth-child(1) a span`);
    }

    get documentInformationField() {
        return $("//*[text()='Document Information']");
    }

    get caseDetailsField() {
        return $("//*[text()='Case Details']");
    }

    get penaltyDetails() {
        return $("//*[text()='Penalty Details']");
    }

    get breachesField() {
        return $("//*[text()='Breaches']");
    }

    get otherInformationField() {
        return $("//*[text()='Other Information']");
    }

    get advancedSearchDropdown() {
        return $(".MuiInputAdornment-root.MuiInputAdornment-positionStart");
    }

    get advancedSearchAnyOfTheseWords() {
        return $("#any_words");
    }

    get advancedSearchButton() {
        return $(".MuiButton-containedPrimary .MuiButton-label");
    }

    get anyOfTheseWordValidationDocument() {
        return $("//*[text()='fca-serves-final-notice-to-exdeutsche-bank-submitter']");
    }

    get titleSearch() {
        return $("#document_name");
    }

    get titleSearchDocumentValidation() {
        return $("//*[text()='Final Notice 2021: Anthony George']");
    }

    get documentForContentEditor() {
        return $("//*[text()='Final notice 2020: Waterside Classics Limited']");
    }

    get metadataTab() {
        return $(".MuiButtonBase-root.MuiTab-root.MuiTab-textColorInherit:nth-child(2)");
    }

    get editMetadataButton() {
        return $("//*[text()='Edit metadata']");
    }

    get tagsDropdown() {
        return $("#tags");
    }

    get themesDropdown() {
        return $("#themes");
    }

    get topicsDropdown() {
        return $("#topics");
    }

    get industryDropdown() {
        return $("#industry");
    }

    get contentEditorSaveButton() {
        return $(".MuiGrid-align-items-xs-center .MuiGrid-grid-xs-6:nth-child(1)");
    }

    get tagsValidation() {
        return $("//*[text()='AANA']");
    }

    get themesValidation() {
        return $("//*[text()='Banking']");
    }

    get topicsValidation() {
        return $("//*[text()='Benchmarks']");
    }

    get industryValidation() {
        return $("//*[text()='Banks']");
    }

    get editDocumentButton() {
        return $("//*[text()='Edit document']");
    }

    get contentEditorPrimaryBreaches() {
        return $("[id='breaches_primary']");
    }

    get contentEditorSecondaryBreaches() {
        return $("[id='breaches_secondary']");
    }

    get contentEditorSupportingBreaches() {
        return $("[id='breaches_supporting']");
    }

    get contentEditorObservedBreaches() {
        return $("[id='breaches_observed']");
    }

    breachesCloseIcon(i) {
        return $(`.MuiGrid-spacing-xs-2:nth-child(${i}) .MuiIconButton-label`);
    }

    get contentEditorSmf() {
        return $("#smf");
    }

    get contentEditorSimf() {
        return $("#simf");
    }

    get contentEditorCf() {
        return $("#cf");
    }

    get smfValidation() {
        return $("//*[text()='SMF 1']");
    }

    get cfValidation() {
        return $("//*[text()='cf1']");
    }

    get simfValidation() {
        return $("//*[text()='SIMF1']")
    }

    get primaryBreachesValidation() {
        return $("//*[text()='Cultural failings']");
    }

    get secondaryBreachesValidation() {
        return $("//*[text()='Board and Governance problems']");
    }

    get supportingBreachesValidation() {
        return $("//*[text()='Criminal/fraudulent/negligent/reckless behaviour of staff member']");
    }

    get observedBreachesValidation() {
        return $("//*[text()='Training issues']");
    }

    get smfCloseIcon() {
        return $(".MuiGrid-spacing-xs-2:nth-child(2)  .MuiIconButton-label");
    }

    get simfCloseIcon() {
        return $(".MuiGrid-spacing-xs-2:nth-child(3) .MuiIconButton-label");
    }

    get documentReviewedButton() {
        return $("//*[text()='Document reviewed']");
    }

    get searchPageDocumentReviewedButton() {
        return $("//*[text()='Document Reviewed']");
    }

    get backToSearchResultsButton() {
        return $("//span[.='Back to search results']");
    }

    get totalSearchResults() {
        return $(".MuiGrid-justify-xs-center .MuiGrid-align-items-xs-center:nth-child(1) .MuiTypography-displayBlock");
    }

    get documentInformationDocumentTitle() {
        return $(".MuiPaper-elevation1:nth-child(2) #accordion .MuiGrid-justify-xs-space-between:nth-child(1)>div:nth-child(2) span");
    }

    get reviewedDocument() {
        return $(".MuiGrid-wrap-xs-nowrap.MuiGrid-grid-xs-true .MuiGrid-direction-xs-column .MuiTypography-h6");
    }

    get searchFilters() {
        return $(".MuiGrid-item:nth-child(2) .MuiTypography-body2");
    }

    get sanctionsTextfield() {
        return $("#sanctions");
    }

    searchPage() {
        this.searchButton.waitForVisible();
        this.searchButton.click();
    }

    selectedManageFiltersOnSearchPage() {
        this.searchPage();
        this.manageFilters.waitForVisible();
        this.manageFilters.click();
        const sanctions = this.sanctionsFilter.getText();
        this.sanctionsFilter.click();
        const keyword = this.keywordFilter.getText();
        this.keywordFilter.click();
        this.breachesPrimaryFilter.click();
        const breachesPrimary = this.breachesPrimaryFilter.getText();
        this.commencementDateFilter.click();
        const commencementDateFilter = this.commencementDateFilter.getText();
        this.fineAmountFilter.click();
        const fineAmount = this.fineAmountFilter.getText();
        this.fineCurrency.click();
        const fineCurrency = this.fineCurrency.getText();
        this.recipientTypeFilter.click();
        const recipientType = this.recipientTypeFilter.getText();
        this.governmentDepartmentFilter.click();
        const governmentDepartment = this.governmentDepartmentFilter.getText();
        this.applyButton.waitForVisible();
        this.applyButton.click();
        expect(keyword).to.eql(testData.search.keyword);
        expect(breachesPrimary).to.eql(testData.search.breachesPrimary);
        expect(commencementDateFilter).to.eql(testData.search.commencementDate);
        expect(fineAmount).to.eql(testData.search.fineAmount);
        expect(fineCurrency).to.eql(testData.search.fineCurrency);
        expect(recipientType).to.eql(testData.search.recipientType);
        expect(governmentDepartment).to.eql(testData.search.governmentDepartment);
        expect(sanctions).to.eql(testData.search.sanctions);
    }

    saveSearchAssignToUser() {
        this.searchPage();
        this.datasourceDropdown.waitForVisible();
        browser.setValue("#data_source_id",['PRA','ArrowDown','Enter']);
        this.saveSearchButton.waitForVisible();
        this.saveSearchButton.click();
        this.saveSearchTitleTextBox.waitForVisible();
        this.saveSearchTitleTextBox.setValue(testData.search.saveSearchTitleForUser);
        this.assignToUser.waitForVisible();
        browser.setValue("#associated_users",['kcchandan423@gamil.com','ArrowDown','Enter']);
        this.alertSettingsToggleButton.waitForVisible();
        this.alertSettingsToggleButton.click();
        this.every3hrsAlertFreequency.waitForVisible();
        this.every3hrsAlertFreequency.click();
        this.emailAlert.waitForVisible();
        this.emailAlert.click();
        this.saveSearchSaveButton.waitForVisible();
        this.saveSearchSaveButton.click();
    }

    saveSearchAssignToGroup() {
        this.searchPage();
        this.datasourceDropdown.waitForVisible();
        browser.setValue("#data_source_id",['PRA','ArrowDown','Enter']);
        this.saveSearchButton.waitForVisible();
        this.saveSearchButton.click();
        this.saveSearchTitleTextBox.waitForVisible();
        this.saveSearchTitleTextBox.setValue(testData.search.saveSearchTitleForGroup);
        this.assignToGroup.waitForVisible();
        browser.setValue("#associated_groups",['Marge','ArrowDown','Enter']);
        this.alertSettingsToggleButton.waitForVisible();
        this.alertSettingsToggleButton.click();
        this.immediateAlertFreequency.waitForVisible();
        this.immediateAlertFreequency.click();
        browser.pause(1000);
        this.emailAlert.waitForVisible();
        this.emailAlert.click();
        this.saveSearchSaveButton.waitForVisible();
        this.saveSearchSaveButton.click();
    }

    saveSearchAssignToUserAndGroup() {
        this.searchPage();
        this.datasourceDropdown.waitForVisible();
        browser.setValue("#data_source_id",['PRA','ArrowDown','Enter']);
        this.saveSearchButton.waitForVisible();
        this.saveSearchButton.click();
        this.saveSearchTitleTextBox.waitForVisible();
        this.saveSearchTitleTextBox.setValue(testData.search.saveSearchTitleForUserAndGroup);
        this.assignToUser.waitForVisible();
        browser.setValue("#associated_users",['kcchandan423@gamil.com','ArrowDown','Enter']);
        this.assignToGroup.waitForVisible();
        browser.setValue("#associated_groups",['Marge','ArrowDown','Enter']);
        this.alertSettingsToggleButton.waitForVisible();
        this.alertSettingsToggleButton.click();
        this.immediateAlertFreequency.waitForVisible();
        this.immediateAlertFreequency.click();
        browser.pause(1000);
        this.emailAlert.waitForVisible();
        this.emailAlert.click();
        this.saveSearchSaveButton.waitForVisible();
        this.saveSearchSaveButton.click();
    }

    documentPreview() {
        this.searchPage();
        this.datasourceDropdown.waitForVisible();
        browser.setValue("#data_source_id",['Access Board','ArrowDown','Enter']);
        this.previewButton.waitForVisible();
        this.previewButton.click();
        this.documentPreviewCloseButton.waitForVisible();
        this.documentPreviewCloseButton.click();
    }

    clearSearchFilters() {
        this.searchPage();
        this.datasourceDropdown.waitForVisible();
        browser.setValue("#data_source_id",['Access Board','ArrowDown','Enter']);
        this.clearAllButton.waitForVisible();
        this.clearAllButton.click();
    }

    enforcementsDocumentTypes(){
        this.searchPage();
        this.documentTypeDropdown.waitForVisible();
        this.documentTypeDropdown.click();
        this.enforcementsDocumentTypeDropdown.waitForVisible();
        this.enforcementsDocumentTypeDropdown.click();
    }

    enforcementDocumentType() {
        this.searchPage();
        this.enforcementsDocumentTypes();
        this.administrativeOrder.waitForVisible();
        this.administrativeOrder.click();
    }

    manageFiltersPanel() {
        this.searchPage();
        this.manageFilters.waitForVisible();
        this.manageFilters.click();
        this.keywordFilter.waitForVisible();
        this.keywordFilter.click();
        this.applyButton.waitForVisible();
        this.applyButton.click();
    }

    documentSorting() {
        this.searchPage();
        this.datasourceDropdown.waitForVisible();
        browser.setValue("#data_source_id",['PRA','ArrowDown','Enter']);
        this.sortIcon.waitForVisible();
        this.sortIcon.click();
    }

    documentSortingInAscendingOrder() {
        this.documentSorting();
        this.documentAscendingOrder.waitForVisible();
        this.documentAscendingOrder.click();
    }

    documentSortingInDescendingOrder() {
        this.documentSorting();
        this.documentDescendingOrder.waitForVisible();
        this.documentDescendingOrder.click();
    }

    documentSortingInNewestPublicationOrder() {
        this.documentSorting();
        this.documentNewestPublicationDateOrder.waitForVisible();
        this.documentNewestPublicationDateOrder.click();
    }

    documentSortingInOldestPublicationOrder() {
        this.documentSorting();
        this.documentOldestPublicationDateOrder.waitForVisible();
        this.documentOldestPublicationDateOrder.click();
    }

    documentSortingInOldestPublicationOrder() {
        this.documentSorting();
        this.documentOldestPublicationDateOrder.waitForVisible();
        this.documentOldestPublicationDateOrder.click();
    }

    documentSortingInBurdenScoreOrder() {
        this.documentSorting();
        this.documentBurdenScoreOrder.waitForVisible();
        this.documentBurdenScoreOrder.click();
    }

    documentSortingInRelevanceOrder() {
        this.documentSorting();
        this.documentRelevanceOrder.waitForVisible();
        this.documentRelevanceOrder.click();
    }

    keyInformationFieldsForEnforcementTypeDocuments() {
        this.searchPage();
        this.enforcementsDocumentTypes();
        this.finalNoticeEnforcementDocType.waitForVisible();
        this.finalNoticeEnforcementDocType.click();
        this.documentTitle(3).waitForVisible();
        this.documentTitle(3).click();
        browser.pause(2000);
        expect(this.documentInformationField.getText()).to.eql(testData.search.documentInformationText);
        expect(this.caseDetailsField.getText()).to.eql(testData.search.caseDetailsText);
        expect(this.penaltyDetails.getText()).to.eql(testData.search.penaltyDetailsText);
        expect(this.breachesField.getText()).to.eql(testData.search.breachesText);
        expect(this.otherInformationField.getText()).to.eql(testData.search.otherInformationText);
    }

    anyOfTheseWordsAdvancedSearch() {
        this.searchPage();
        this.advancedSearchDropdown.waitForVisible();
        this.advancedSearchDropdown.click();
        this.advancedSearchAnyOfTheseWords.waitForVisible();
        this.advancedSearchAnyOfTheseWords.setValue(testData.search.anyOfTheseWordSearch);
        this.advancedSearchButton.waitForVisible();
        this.advancedSearchButton.click();
        browser.pause(1000);
        expect(this.anyOfTheseWordValidationDocument.getText()).to.eql(testData.search.anyOfTheseWordValidation);
    }

    titleSearchAdvancedSearch() {
        this.searchPage();
        this.advancedSearchDropdown.waitForVisible();
        this.advancedSearchDropdown.click();
        this.titleSearch.waitForVisible();
        this.titleSearch.setValue(testData.search.titleSearch);
        this.advancedSearchButton.waitForVisible();
        this.advancedSearchButton.click();
        this.sortIcon.waitForVisible();
        this.sortIcon.click();
        this.documentNewestPublicationDateOrder.waitForVisible();
        this.documentNewestPublicationDateOrder.click();
        browser.pause(2000);
        expect(this.titleSearchDocumentValidation.getText()).to.eql(testData.search.titleSearch);
    }

    metadataContentEditor() {
        this.searchPage();
        this.enforcementsDocumentTypes();
        this.finalNoticeEnforcementDocType.waitForVisible();
        this.finalNoticeEnforcementDocType.click();
        this.documentTitle(3).waitForVisible();
        this.documentTitle(3).click();
        this.metadataTab.waitForVisible();
        this.metadataTab.click();
        this.editMetadataButton.waitForVisible();
        this.editMetadataButton.click();
        this.tagsDropdown.waitForVisible();
        browser.setValue("#tags",['aana','ArrowDown','Enter']);
        this.themesDropdown.waitForVisible();
        browser.setValue("#themes",['banking','ArrowDown','Enter']);
        this.topicsDropdown.waitForVisible();
        browser.setValue("#topics",['Benchmarks','ArrowDown','Enter']);
        this.industryDropdown.waitForVisible();
        browser.setValue("#industry",["Banks",'ArrowDown','Enter']);
        this.contentEditorSaveButton.waitForVisible();
        this.contentEditorSaveButton.click();
        expect(this.tagsValidation.getText()).to.eql(testData.search.tags);
        expect(this.themesValidation.getText()).to.eql(testData.search.themes);
        expect(this.topicsValidation.getText()).to.eql(testData.search.topics);
        expect(this.industryValidation.getText()).to.eql(testData.search.industry);
    }

    contentEditorBreaches() {
        this.searchPage();
        this.enforcementsDocumentTypes();
        this.finalNoticeEnforcementDocType.waitForVisible();
        this.finalNoticeEnforcementDocType.click();
        this.documentTitle(3).waitForVisible();
        this.documentTitle(3).click();
        this.editDocumentButton.waitForVisible();
        this.editDocumentButton.click();
        this.contentEditorPrimaryBreaches.waitForVisible();
        browser.setValue("[id='breaches_primary']",['cultural','ArrowDown','Enter']);
        this.contentEditorSecondaryBreaches.waitForVisible();
        browser.setValue("#breaches_secondary",['board','ArrowDown','Enter']);
        this.contentEditorSupportingBreaches.waitForVisible();
        browser.setValue("#breaches_supporting",['criminal','ArrowDown','Enter']);
        this.contentEditorObservedBreaches.waitForVisible();
        browser.setValue("#breaches_observed",['training','ArrowDown','Enter']);
        this.contentEditorSaveButton.waitForVisible();
        this.contentEditorSaveButton.click();
        browser.pause(2000);
        expect(this.primaryBreachesValidation.getText()).to.eql(testData.search.primaryBreaches);
        expect(this.secondaryBreachesValidation.getText()).to.eql(testData.search.SecondaryBreaches);
        expect(this.supportingBreachesValidation.getText()).to.eql(testData.search.supportingBreaches);
        expect(this.observedBreachesValidation.getText()).to.eql(testData.search.observedBreaches);
    }

    clearAllTheBreachesPills() {
        this.contentEditorBreaches();
        this.editDocumentButton.waitForVisible();
        this.editDocumentButton.click();
        this.breachesCloseIcon(2).waitForVisible();
        this.breachesCloseIcon(2).click();
        browser.scroll();
        browser.waitUntil(
            function() {
              return (
                browser.isVisible(
                  `.MuiGrid-spacing-xs-2:nth-child(3) .MuiIconButton-label`
              ) === true
            );
          },
          30000,
          "secondary breaches is not visible even after 10s"
        );
        this.breachesCloseIcon(3).waitForVisible();
        this.breachesCloseIcon(3).click();
        this.breachesCloseIcon(4).waitForVisible();
        this.breachesCloseIcon(4).click();
        this.breachesCloseIcon(5).waitForVisible();
        this.breachesCloseIcon(5).click();
        this.contentEditorSaveButton.waitForVisible();
        this.contentEditorSaveButton.click();
        browser.pause(2000);
    }

    contentEditorOtherInformation() {
        this.searchPage();
        this.enforcementsDocumentTypes();
        this.finalNoticeEnforcementDocType.waitForVisible();
        this.finalNoticeEnforcementDocType.click();
        this.documentTitle(3).waitForVisible();
        this.documentTitle(3).click();
        this.editDocumentButton.waitForVisible();
        this.editDocumentButton.click();
        this.contentEditorSmf.waitForVisible();
        browser.setValue("#smf",['smf 1','ArrowDown','Enter']);
        this.contentEditorSimf.waitForVisible();
        browser.pause(1000);
        browser.setValue("#simf",['simf1','ArrowDown','Enter']);
        this.contentEditorCf.waitForVisible();
        browser.pause(1000);
        browser.setValue("#cf",['cf1','ArrowDown','Enter']);
        this.contentEditorSaveButton.waitForVisible();
        this.contentEditorSaveButton.click();
        browser.pause(2000);
        browser.scroll();
        expect(this.smfValidation.getText()).to.eql(testData.search.smf);
        expect(this.simfValidation.getText()).to.eql(testData.search.simf);
        expect(this.cfValidation.getText()).to.eql(testData.search.cf);
    }

    clearOtherInformationPills() {
        this.contentEditorOtherInformation();
        this.editDocumentButton.waitForVisible();
        this.editDocumentButton.click();
        this.smfCloseIcon.waitForVisible();
        this.smfCloseIcon.click();
        this.simfCloseIcon.waitForVisible();
        this.contentEditorSaveButton.waitForVisible();
        this.contentEditorSaveButton.click();
    }

    documentReviewed() {
        this.searchPage();
        this.enforcementsDocumentTypes();
        this.finalNoticeEnforcementDocType.waitForVisible();
        this.finalNoticeEnforcementDocType.click();
        this.documentTitle(3).waitForVisible();
        this.documentTitle(3).click();
        this.editDocumentButton.waitForVisible();
        this.editDocumentButton.click();
        this.documentReviewedButton.waitForVisible();
        this.documentReviewedButton.click();
        this.contentEditorSaveButton.waitForVisible();
        this.contentEditorSaveButton.click();
        const title = this.documentInformationDocumentTitle.getText();
        browser.pause(1000);
        this.backToSearchResultsButton.waitForVisible();
        this.backToSearchResultsButton.click();
        this.searchPageDocumentReviewedButton.waitForVisible();
        this.searchPageDocumentReviewedButton.click();
        this.reviewedDocument.waitForVisible();
        expect(this.reviewedDocument.getText()).to.eql(title);
    }
}

export default new Search();