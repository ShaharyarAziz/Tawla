# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Digital_Menu\DigitalMenu.spec.js >> User adds Items in Digital Menu
- Location: tests\Digital_Menu\DigitalMenu.spec.js:52:1

# Error details

```
Error: page.goto: Test ended.
Call log:
  - navigating to "http://13.51.170.24/merchant/login", waiting until "load"

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
> 12 |     await this.page.goto(URLS.login);
     |                     ^ Error: page.goto: Test ended.
  13 |   }
  14 | 
  15 |   async login(email, pass) {
  16 |     await this.email.fill(email);
  17 |     await this.password.fill(pass);
  18 |     await this.loginBtn.click();
  19 |   }
  20 | } 
  21 | 
  22 | module.exports = { LoginPage };
  23 | 
```