import testData from "../constants/testData.json";
import ClearTextBoxValue from "./ClearTextBoxValue";

class Workflows extends ClearTextBoxValue{
    get workflowButton() {
        return $("//*[text()='Workflows']");
    }

    get addWorkflowButton() {
        return $(".MuiGrid-justify-xs-space-between .MuiGrid-item:nth-child(2) .MuiButtonBase-root");
    }

    get workflowName() {
        return $("#name");
    }

    get workflowDescription() {
        return $("#description");
    }

    get workflowNextButton() {
        return $(".MuiGrid-spacing-xs-1 .MuiButtonBase-root");
    }

    get taskName() {
        return $("[id='tasks.0.task_name']");
    }

    get taskDescription() {
        return $("[id='tasks.0.task_details']");
    }

    get documentReviewRadioButton() {
        return $(".Mui-checked .MuiIconButton-label");
    }

    get taskAssignee() {
        return $("[id='tasks.0.assign_to']");
    }

    get taskAssignToUser() {
        return $(".MuiMenuItem-gutters.MuiListItem-button:nth-child(1)");
    }

    get taskAssignToGroup() {
        return $(".MuiMenuItem-gutters.MuiListItem-button:nth-child(2)");
    }

    get taskAssignToUserOrGroupDropdown() {
        return $("[id='tasks.0.assignee']");
    }

    get chooseResponseDropdown() {
        return $("//*[text()='Choose a response']");
    }

    get urlField() {
        return $("[id='is_response_url_enabled']");
    }

    get textField() {
        return $("[id='is_response_text_enabled']");
    }

    get dropdown() {
        return $("[id='is_outcome_dropdown_enabled']");
    }

    get saveButton() {
        return $(".MuiGrid-spacing-xs-1 .MuiGrid-item:nth-child(2) .MuiButtonBase-root");
    }

    get addDropdownOptionsButton() {
        return $("//*[text()='ADD DROPDOWN OPTIONS']");
    }

    get optionName() {
        return $("[id='options.0.name']");
    }

    get deleteIcon() {
        return $(".MuiGrid-grid-xs-12:nth-child(2) .MuiGrid-grid-xs-2 .MuiIconButton-root .MuiIconButton-label");
    }

    get workflowSaveButton() {
        return $(".MuiGrid-spacing-xs-1 .MuiGrid-item .MuiButtonBase-root");
    }

    get removeWorkflowButton() {
        return $("//*[text()='REMOVE WORKFLOW']");
    }

    get clickOnWorkflow() {
        return $(".MuiTypography-h5.MuiTypography-displayBlock");
    }

    get deletePopupYesButton() {
        return $(".MuiGrid-spacing-xs-2 .MuiGrid-item:nth-child(1)");
    }

    get editWorkflowButton() {
        return $("//*[text()='EDIT WORKFLOW']");
    }

    get validationForRemoveWorkflow() {
        return $(".MuiTypography-caption.MuiTypography-displayBlock");
    }

    get validationForCreatingWorkflow() {
        return $("//span[.='Test Workflow']");
    }

    get validationForEditingWorkflow() {
        return $("//span[.='Test Workflow 1']");
    }

    workflowPage() {
        this.workflowButton.waitForVisible();
        this.workflowButton.click();
    }

    workflowCreation() {
        this.workflowPage();
        this.addWorkflowButton.waitForVisible();
        this.addWorkflowButton.click();
        this.workflowName.waitForVisible();
        this.workflowName.setValue(testData.workflows.workflowName);
        this.workflowDescription.waitForVisible();
        this.workflowDescription.setValue(testData.workflows.workflowDescription);
        this.workflowNextButton.waitForVisible();
        this.workflowNextButton.click();
        this.taskName.waitForVisible();
        this.taskName.setValue(testData.workflows.taskName);
        this.taskDescription.waitForVisible();
        this.taskDescription.setValue(testData.workflows.taskDescription);
        this.taskAssignee.waitForVisible();
        this.taskAssignee.click();
        this.taskAssignToUser.waitForVisible();
        this.taskAssignToUser.click();
        this.taskAssignToUserOrGroupDropdown.waitForVisible();
        browser.setValue("[id='tasks.0.assignee']",['yatheesh@calibrecode.com','ArrowDown','Enter']);
        //this.chooseResponseDropdown.waitForVisible();
        //this.chooseResponseDropdown.click();
        //this.textField.waitForVisible();
        //this.textField.click();
        //this.urlField.waitForVisible();
        //this.urlField.click();
        //this.dropdown.waitForVisible();
        //this.dropdown.click();
        //this.saveButton.waitForVisible();
        //this.saveButton.click();
        //this.addDropdownOptionsButton.waitForVisible();
        //this.addDropdownOptionsButton.click();
        //this.optionName.waitForVisible();
        //this.optionName.setValue(testData.workflows.optionName);
        //this.deleteIcon.waitForVisible();
        //this.deleteIcon.click();
        //this.saveButton.waitForVisible();
        //this.saveButton.click();
        this.workflowSaveButton.waitForVisible();
        this.workflowSaveButton.click();
    }

    removeWorkflow() {
        this.workflowPage();
        this.clickOnWorkflow.waitForVisible();
        this.clickOnWorkflow.click();
        this.removeWorkflowButton.waitForVisible();
        this.removeWorkflowButton.click();
        this.deletePopupYesButton.waitForVisible();
        this.deletePopupYesButton.click();
    }

    editWorkflow() {
        this.workflowPage();
        this.clickOnWorkflow.waitForVisible();
        this.clickOnWorkflow.click();
        this.editWorkflowButton.waitForVisible();
        this.editWorkflowButton.click();
        this.workflowName.waitForVisible();
        this.clearField("#name");
        this.workflowName.setValue(testData.workflows.editWorflowName);
        this.workflowDescription.waitForVisible();
        this.clearField("#description");
        this.workflowDescription.setValue(testData.workflows.editWorkflowDescription);
        this.workflowNextButton.waitForVisible();
        this.workflowNextButton.click();
        this.taskName.waitForVisible();
        this.clearField("[id='tasks.0.task_name']");
        this.taskName.setValue(testData.workflows.editTaskName);
        this.taskDescription.waitForVisible();
        this.clearField("[id='tasks.0.task_details']");
        this.taskDescription.setValue(testData.workflows.editTaskDescription);
        this.taskAssignToUserOrGroupDropdown.waitForVisible();
        browser.setValue("[id='tasks.0.assignee']",['Marge','ArrowDown','Enter']); 
    }
}

export default new Workflows();