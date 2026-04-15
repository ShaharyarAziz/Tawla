# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.spec.js >> Login Module >> Invalid Login
- Location: tests\login.spec.js:15:3

# Error details

```
Error: page.goto: net::ERR_NETWORK_CHANGED at http://13.51.170.24/merchant/login
Call log:
  - navigating to "http://13.51.170.24/merchant/login", waiting until "load"

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e6]:
    - heading "Your connection was interrupted" [level=1] [ref=e7]
    - paragraph [ref=e8]: A network change was detected.
    - generic [ref=e9]: ERR_NETWORK_CHANGED
  - button "Reload" [ref=e12] [cursor=pointer]
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
     |                     ^ Error: page.goto: net::ERR_NETWORK_CHANGED at http://13.51.170.24/merchant/login
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