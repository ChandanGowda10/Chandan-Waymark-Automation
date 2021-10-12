class ClearTextBoxValue {
    clearField(locator) {
      let count = 1;
      while (count <= 50) {
        browser.setValue(locator, ["Backspace"]);
        count++;
      }
    }
  }

  export default ClearTextBoxValue;