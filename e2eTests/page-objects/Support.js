import { waituntilisvisible } from "../page-objects/Utils.js";

class Support {
    get supportButton() {
        return $("//*[text()='Support']");
    }

    get intercomText() {
        return $("//*[text()='Send us a message']");
    }

    get closeIntercom() {
        return $(".intercom-1wfu0cf.euc31aa1");
    }

    intercom() {
        this.supportButton.waitForVisible();
        this.supportButton.click();
    }
}

export default new Support();