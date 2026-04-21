# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: DigitalMenu.spec.js >> User adds Categories,SubCategories & Items in Digital Menu
- Location: tests\DigitalMenu.spec.js:7:1

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected pattern: /.*merchant\/dashboard/
Received string:  "http://13.51.170.24/merchant/login"
Timeout: 5000ms

Call log:
  - Expect "toHaveURL" with timeout 5000ms
    9 × unexpected value "http://13.51.170.24/merchant/login"

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
          - textbox "Email Address" [ref=e18]:
            - /placeholder: Enter Your Email
            - text: angels.tawla@gmail.com
        - generic [ref=e19]:
          - generic [ref=e20]: Password
          - generic [ref=e21]:
            - textbox "Password" [ref=e22]:
              - /placeholder: Enter Your Password
              - text: Tawla@2025
            - generic [ref=e25] [cursor=pointer]: 
          - link "Forgot your password?" [ref=e27] [cursor=pointer]:
            - /url: http://13.51.170.24/merchant/merchant/password/reset
        - button " Logging in..." [disabled] [ref=e29]:
          - generic [ref=e30]: 
          - text: Logging in...
      - generic [ref=e31]: Or you can
      - link "Register Now" [ref=e33] [cursor=pointer]:
        - /url: http://13.51.170.24/merchant/demo-request
    - paragraph [ref=e34]: Your information is secure and confidential.
```

# Test source

```ts
  1  | const { test, expect } = require("@playwright/test");
  2  | const { LoginPage } = require("../pages/LoginPage");
  3  | const { DigitalMenuPage } = require("../pages/Digital_Menu");
  4  | const dotenv = require("dotenv");
  5  | dotenv.config();
  6  | 
  7  | test("User adds Categories,SubCategories & Items in Digital Menu", async ({
  8  |   page,
  9  | }) => {
  10 |   const login = new LoginPage(page);
  11 |   const digitalMenu = new DigitalMenuPage(page);
  12 | 
  13 |   await login.navigate();
  14 |   await login.login(process.env.EMAIL, process.env.PASSWORD);
  15 | 
> 16 |   await expect(page).toHaveURL(/.*merchant\/dashboard/);
     |                      ^ Error: expect(page).toHaveURL(expected) failed
  17 | 
  18 |   await digitalMenu.goToDigitalMenu();
  19 | 
  20 |   await page.pause();
  21 | });
  22 | 
```