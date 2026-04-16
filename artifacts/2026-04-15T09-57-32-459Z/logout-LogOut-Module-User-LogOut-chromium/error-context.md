# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: logout.spec.js >> LogOut Module >> User LogOut
- Location: tests\logout.spec.js:9:3

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
  6  |     this.avatar = page.locator("img#dropdownToggle");
  7  |     this.logout_btn = page.locator(`a[href="${URLS.logout}"]`);
  8  |   }
  9  |   async navigate() {
> 10 |     await this.page.goto(URLS.login);
     |                     ^ Error: page.goto: Test timeout of 30000ms exceeded.
  11 |   }
  12 | }
  13 | 
```