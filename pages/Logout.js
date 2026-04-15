import { URLS } from "../utils/url.js";

export class LogOutPage {
  constructor(page) {
    this.page = page;
    this.avatar = page.locator("img#dropdownToggle");
    this.logout_btn = page.locator(
      `a[href="${URLS.logout}"]`,
    );
  }
  async navigate() {
    await this.page.goto(URLS.login);
  }
}
