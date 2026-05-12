# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Digital_Menu\DigitalMenu.spec.js >> User adds Categories in Digital Menu
- Location: tests\Digital_Menu\DigitalMenu.spec.js:15:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.goto: net::ERR_ABORTED; maybe frame was detached?
Call log:
  - navigating to "http://13.51.170.24/merchant/login", waiting until "domcontentloaded"

```

# Test source

```ts
  1  | const { URLS } = require('../utils/url.js');
  2  | 
  3  | class LoginPage {
  4  |   constructor(page) {
  5  |     this.page = page;
  6  |     this.email = page.locator('input#email');
  7  |     this.password = page.locator('input#password');
  8  |     this.loginBtn = page.locator('button[type="submit"]');
  9  |   }
  10 | 
  11 |   async navigate() {
> 12 |     await this.page.goto(URLS.login, { waitUntil: 'domcontentloaded' });
     |                     ^ Error: page.goto: net::ERR_ABORTED; maybe frame was detached?
  13 |   }
  14 | 
  15 |   async login(email, pass) {
  16 |     await this.email.waitFor({ state: 'visible', timeout: 30000 });
  17 |     await this.email.fill(email);
  18 |     await this.password.fill(pass);
  19 |     await this.loginBtn.click();
  20 |   }
  21 | 
  22 |   async loginAndWaitForDashboard(email, pass) {
  23 |     await this.email.waitFor({ state: 'visible', timeout: 30000 });
  24 |     await this.email.fill(email);
  25 |     await this.password.fill(pass);
  26 |     await Promise.all([
  27 |       this.page.waitForURL(/\/merchant\/dashboard/, { timeout: 30000 }),
  28 |       this.loginBtn.click(),
  29 |     ]);
  30 |   }
  31 | } 
  32 | 
  33 | module.exports = { LoginPage };
  34 | 
```