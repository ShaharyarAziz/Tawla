# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: logout.spec.js >> User LogOut
- Location: tests\logout.spec.js:7:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.waitForURL: Test timeout of 30000ms exceeded.
=========================== logs ===========================
waiting for navigation until "load"
  navigated to "http://13.51.170.24/merchant/login"
  "domcontentloaded" event fired
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
  1  | const { URLS } = require("../utils/url.js");
  2  | 
  3  | class LogOutPage {
  4  |   constructor(page) {
  5  |     this.page = page;
  6  |     this.avatar = page.locator("#dropdownToggle");
  7  |     this.logoutBtn = page.locator(".logout-btn").filter({ visible: true });
  8  |   }
  9  | 
  10 |   async navigate() {
  11 |     await this.page.goto(URLS.login, { waitUntil: "domcontentloaded" });
  12 |   }
  13 | 
  14 |   async logout() {
  15 |     await this.avatar.waitFor({ state: "visible", timeout: 30000 });
  16 |     await this.avatar.click();
  17 | 
  18 |     if (!(await this.logoutBtn.isVisible().catch(() => false))) {
  19 |       await this.avatar.click();
  20 |     }
  21 | 
  22 |     await this.logoutBtn.waitFor({ state: "visible", timeout: 10000 });
  23 |     await Promise.all([
> 24 |       this.page.waitForURL(/\/merchant\/login/, { timeout: 30000 }),
     |                 ^ Error: page.waitForURL: Test timeout of 30000ms exceeded.
  25 |       this.logoutBtn.click(),
  26 |     ]);
  27 |   }
  28 | }
  29 | 
  30 | module.exports = { LogOutPage };
  31 | 
```