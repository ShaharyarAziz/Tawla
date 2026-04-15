# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.spec.js >> Login Module >> Valid Login
- Location: tests\login.spec.js:8:3

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected pattern: /\/merchant\/dashboard$/
Received string:  "http://13.51.170.24/merchant/login"
Timeout: 5000ms

Call log:
  - Expect "toHaveURL" with timeout 5000ms
    3 × unexpected value "http://13.51.170.24/merchant/login"
    - waiting for" http://13.51.170.24/merchant/dashboard" navigation to finish...

```

# Test source

```ts
  1  | const { test, expect } = require('@playwright/test');
  2  | const { LoginPage } = require('../pages/LoginPage');
  3  | const dotenv = require('dotenv');
  4  | 
  5  | dotenv.config();
  6  | 
  7  | test.describe('Login Module', () => {
  8  |   test('Valid Login', async ({ page }) => {
  9  |     const login = new LoginPage(page);
  10 |     await login.navigate();
  11 |     await login.login(process.env.EMAIL, process.env.PASSWORD);
> 12 |     await expect(page).toHaveURL(/\/merchant\/dashboard$/);
     |                        ^ Error: expect(page).toHaveURL(expected) failed
  13 |   });
  14 | 
  15 |   test('Invalid Login', async ({ page }) => {
  16 |     const login = new LoginPage(page);
  17 |     await login.navigate();
  18 |     await login.login(process.env.InvalidEmail, process.env.InvalidPassword);
  19 |     await expect(page).toHaveURL(/\/merchant\/login$/);
  20 |   });
  21 | });
  22 | 
```