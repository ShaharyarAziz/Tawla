const { URLS } = require("../utils/url.js");

class LogOutPage {
  constructor(page) {
    this.page = page;
    this.avatar = page.locator("#dropdownToggle");
    this.logoutBtn = page.locator(".logout-btn").filter({ visible: true });
  }

  async navigate() {
    await this.page.goto(URLS.login, { waitUntil: "domcontentloaded" });
  }

  async logout() {
    await this.avatar.waitFor({ state: "visible", timeout: 30000 });
    await this.avatar.click();

    if (!(await this.logoutBtn.isVisible().catch(() => false))) {
      await this.avatar.click();
    }

    await this.logoutBtn.waitFor({ state: "visible", timeout: 10000 });
    await Promise.all([
      this.page.waitForURL(/\/merchant\/login/, { timeout: 30000 }),
      this.logoutBtn.click(),
    ]);
  }
}

module.exports = { LogOutPage };
