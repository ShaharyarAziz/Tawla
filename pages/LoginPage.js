const { URLS } = require('../utils/url.js');

class LoginPage {
  constructor(page) {
    this.page = page;
    this.email = page.locator('input#email');
    this.password = page.locator('input#password');
    this.loginBtn = page.locator('button[type="submit"]');
  }

  async navigate() {
    await this.page.goto(URLS.login);
  }

  async login(email, pass) {
    await this.email.fill(email);
    await this.password.fill(pass);
    await this.loginBtn.click();
  }
}

module.exports = { LoginPage };
