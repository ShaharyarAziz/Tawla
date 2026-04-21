# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: logout.spec.js >> User LogOut
- Location: tests\logout.spec.js:8:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "http://13.51.170.24/merchant/login", waiting until "load"

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
  1  | import { URLS } from "../utils/url.js";
  2  | 
  3  | export class LogOutPage {
  4  |   constructor(page) {
  5  |     this.page = page;
  6  |     this.avatar = page.locator("#dropdownToggle");
  7  |     this.logout_btn = page.locator(".logout-btn:visible");
  8  |   }
  9  | 
  10 |   async navigate() {
> 11 |     await this.page.goto(URLS.login);
     |                     ^ Error: page.goto: Test timeout of 30000ms exceeded.
  12 |   }
  13 |   async logout() {
  14 |     await this.avatar.click();
  15 | 
  16 |     try {
  17 |       await this.page
  18 |         .locator(".logout-btn:visible")
  19 |         .waitFor({ state: "visible", timeout: 3000 });
  20 |     } catch {
  21 |       // fallback if click didn't trigger dropdown properly
  22 |       await this.page.locator("#dropdownToggle").dispatchEvent("click");
  23 |     }
  24 | 
  25 |     await this.page.locator(".logout-btn:visible").click();
  26 |   }
  27 | }
  28 | 
```