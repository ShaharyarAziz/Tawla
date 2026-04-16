import { URLS } from "../utils/url.js";

export class LogOutPage {
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
      // fallback if click didn't trigger dropdown properly
      await this.page.locator("#dropdownToggle").dispatchEvent("click");
    }

    await this.page.locator(".logout-btn:visible").click();
  }
}
