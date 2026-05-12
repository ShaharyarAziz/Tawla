# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.spec.js >> Login Module >> Invalid Login
- Location: tests\login.spec.js:15:3

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.waitForURL: Test timeout of 30000ms exceeded.
=========================== logs ===========================
waiting for navigation until "load"
  navigated to "http://13.51.170.24/merchant/login"
============================================================
```

# Page snapshot

```yaml
- generic [ref=e4]:
  - generic [ref=e6]:
    - img "Tawla logo" [ref=e8]
    - generic [ref=e9]:
      - heading "All-in-One POS & Restaurant Management" [level=2] [ref=e10]
      - paragraph [ref=e11]: Manage orders, payments, bookings, and more — all from one platform.
  - generic [ref=e12]:
    - generic [ref=e13]:
      - heading "Log in to your account" [level=2] [ref=e14]
      - generic [ref=e15]:
        - generic [ref=e16]:
          - generic [ref=e17]: Email Address
          - textbox "Email Address Please Enter Your Email Address" [active] [ref=e18]:
            - /placeholder: Enter Your Email
        - generic [ref=e19]:
          - generic [ref=e20]: Password
          - generic [ref=e21]:
            - textbox "Password Password is required" [ref=e22]:
              - /placeholder: Enter Your Password
            - generic [ref=e25] [cursor=pointer]: 
          - link "Forgot your password?" [ref=e27] [cursor=pointer]:
            - /url: http://13.51.170.24/merchant/merchant/password/reset
        - button "Log in" [ref=e29] [cursor=pointer]
      - generic [ref=e30]: Or you can
      - link "Register Now" [ref=e32] [cursor=pointer]:
        - /url: http://13.51.170.24/merchant/demo-request
    - paragraph [ref=e33]: Your information is secure and confidential.
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
  12 |     await this.page.goto(URLS.login, { waitUntil: 'domcontentloaded' });
  13 |   }
  14 | 
  15 |   async login(email, pass) {
  16 |     await this.email.waitFor({ state: 'visible', timeout: 30000 });
  17 |     await this.email.fill(email);
  18 |     await this.password.fill(pass);
  19 |     await Promise.all([
> 20 |       this.page.waitForURL(/\/merchant\/dashboard/, { timeout: 30000 }),
     |                 ^ Error: page.waitForURL: Test timeout of 30000ms exceeded.
  21 |       this.loginBtn.click(),
  22 |     ]);
  23 |   }
  24 | } 
  25 | 
  26 | module.exports = { LoginPage };
  27 | 
```