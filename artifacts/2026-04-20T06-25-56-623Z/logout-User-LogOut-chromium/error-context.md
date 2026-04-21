# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: logout.spec.js >> User LogOut
- Location: tests\logout.spec.js:8:1

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected pattern: /dashboard/
Received string:  "http://13.51.170.24/merchant/login"
Timeout: 5000ms

Call log:
  - Expect "toHaveURL" with timeout 5000ms
    5 × unexpected value "http://13.51.170.24/merchant/login"
    - waiting for" http://13.51.170.24/merchant/dashboard" navigation to finish...

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
  8  | test("User LogOut", async ({ page }) => {
  9  |   const logout = new LogOutPage(page);
  10 |   const login = new LoginPage(page);
  11 | 
  12 |   await logout.navigate();
  13 |   await login.login(process.env.EMAIL, process.env.PASSWORD);
  14 | 
> 15 |   await expect(page).toHaveURL(/dashboard/);
     |                      ^ Error: expect(page).toHaveURL(expected) failed
  16 | 
  17 |   // ✅ call action method
  18 |   await logout.logout();
  19 | 
  20 |   await expect(page).toHaveURL(/login/);
  21 | });
  22 | 
```