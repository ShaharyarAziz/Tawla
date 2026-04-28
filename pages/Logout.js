const { URLS } = require("../utils/url.js");

class LogOutPage {
  constructor(page) {
    this.page = page;
    this.avatar = page.locator("#dropdownToggle");
    this.logout_btn = page.locator(".logout-btn:visible");
  }

  async navigate() {
    await this.page.goto(URLS.login);
  }
  async logout() {
    await this.avatar.click();
    try {
      await this.page
        .locator(".logout-btn:visible")
        .waitFor({ state: "visible", timeout: 3000 });
    } catch {
      await this.page.locator("#dropdownToggle").dispatchEvent("click");
    }

    await this.page.locator(".logout-btn:visible").click();
  }
}

module.exports = { LogOutPage };
