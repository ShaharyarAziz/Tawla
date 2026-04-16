# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: logout.spec.js >> LogOut Module >> User LogOut
- Location: tests\logout.spec.js:9:3

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected pattern: /dashboard/
Received string:  "http://13.51.170.24/merchant/login"
Timeout: 5000ms

Call log:
  - Expect "toHaveURL" with timeout 5000ms
    7 × unexpected value "http://13.51.170.24/merchant/login"
    - waiting for" http://13.51.170.24/merchant/dashboard" navigation to finish...
    - navigated to "http://13.51.170.24/merchant/dashboard"

```

# Test source

```ts
  1  | const { test, expect } = require("@playwright/test");
  2  | const { LogOutPage } = require("../pages/Logout");
  3  | const { LoginPage } = require("../pages/LoginPage");
  4  | const dotenv = require("dotenv");
  5  | 
  6  | dotenv.config();
  7  | 
  8  | test.describe("LogOut Module", () => {
  9  |   test("User LogOut", async ({ page }) => {
  10 |     const logout = new LogOutPage(page);
  11 |     const login = new LoginPage(page);
  12 | 
  13 |     await logout.navigate();
  14 | 
  15 |     await login.login(process.env.EMAIL, process.env.PASSWORD);
  16 | 
  17 |     // ✅ wait for dashboard
> 18 |     await expect(page).toHaveURL(/dashboard/);
     |                        ^ Error: expect(page).toHaveURL(expected) failed
  19 | 
  20 |     await logout.avatar.click();
  21 |     await logout.logout_btn.waitFor({ state: "visible" });
  22 |     await logout.logout_btn.click();
  23 |     await expect(page).toHaveURL("merchant/login");
  24 |   });
  25 | });
  26 | 
```