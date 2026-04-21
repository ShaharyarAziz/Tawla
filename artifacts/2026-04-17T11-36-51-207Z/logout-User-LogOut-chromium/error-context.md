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