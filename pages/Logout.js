import { URLS } from "../utils/url.js";

export class LogOutPage {
  constructor(page) {
    this.page = page;
    this.avatar = page.locator("img#dropdownToggle");
    this.logout_btn = page.locator(
      'a[href="http://13.51.170.24/merchant/logout"]',
    );
  }
  async navigate() {
    await this.page.goto(URLS.login);
  }
}
