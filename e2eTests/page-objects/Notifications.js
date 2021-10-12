import { waituntilisvisible } from "../page-objects/Utils.js";

class Notifications {
    get bellIcon() {
        return $(".MuiGrid-item:nth-child(4) .MuiBadge-root");
    }

    get validationNotificationText() {
        return $("//*[text()='Notifications']");
    }

    get closeIcon() {
        return $(".MuiGrid-justify-xs-space-between .MuiGrid-item:nth-child(2) .MuiIconButton-label");
    }

    notificationPanel() {
        this.bellIcon.waitForVisible();
        this.bellIcon.click();
        waituntilisvisible(
            "//*[text()='Notifications']",
            2500,
            "Notification panel is not visible even after 25 sec",
            true
          );
    }
}

export default new Notifications();