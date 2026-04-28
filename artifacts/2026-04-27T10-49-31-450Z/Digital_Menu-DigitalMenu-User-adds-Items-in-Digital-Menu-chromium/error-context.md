# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Digital_Menu\DigitalMenu.spec.js >> User adds Items in Digital Menu
- Location: tests\Digital_Menu\DigitalMenu.spec.js:54:6

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected pattern: /\/merchant\/dashboard/
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
  2  | const { LoginPage } = require("../../pages/LoginPage");
  3  | const { DigitalMenuPage } = require("../../pages/Digtial_Menu/Digital_Menu");
  4  | const dotenv = require("dotenv");
  5  | const {
  6  |   getRandomFoodCategory,
  7  |   generateSubCategoryName,
  8  |   generateRandomPrice,
  9  | } = require("../../utils/testData");
  10 | const { Category } = require("../../pages/Digtial_Menu/Category.js");
  11 | const { SubCategory } = require("../../pages/Digtial_Menu/SubCategory.js");
  12 | const { items } = require("../../pages/Digtial_Menu/items.js");
  13 | dotenv.config();
  14 | 
  15 | test("User adds Categories in Digital Menu", async ({ page }) => {
  16 |   test.setTimeout(120000);
  17 |   const login = new LoginPage(page);
  18 |   const digitalMenu = new DigitalMenuPage(page);
  19 |   const category = new Category(page);
  20 |   const subcategory = new SubCategory(page);
  21 |   const item = new items(page);
  22 | 
  23 |   await login.navigate();
  24 |   await login.login(process.env.EMAIL, process.env.PASSWORD);
  25 | 
  26 |   await expect(page).toHaveURL(/\/merchant\/dashboard/);
  27 | 
  28 |   await digitalMenu.goToDigitalMenu();
  29 |   await expect(page).toHaveURL(
  30 |     /\/merchant\/digitalmenu\/menu\/digitalMenuSection/,
  31 |   );
  32 |   await category.openCategoryModal();
  33 |   await category.saveCategory(getRandomFoodCategory());
  34 | });
  35 | test("User adds SubCategories in Digital Menu", async ({ page }) => {
  36 |   test.setTimeout(120000);
  37 |   const login = new LoginPage(page);
  38 |   const digitalMenu = new DigitalMenuPage(page);
  39 |   const subcategory = new SubCategory(page);
  40 |   await login.navigate();
  41 |   await login.login(process.env.EMAIL, process.env.PASSWORD);
  42 | 
  43 |   await expect(page).toHaveURL(/\/merchant\/dashboard/);
  44 | 
  45 |   await digitalMenu.goToDigitalMenu();
  46 |   await expect(page).toHaveURL(
  47 |     /\/merchant\/digitalmenu\/menu\/digitalMenuSection/,
  48 |   );
  49 |   await subcategory.openSubCategoryModal();
  50 |   await subcategory.saveSubCategory(getRandomFoodCategory());
  51 | 
  52 |   // await page.pause();
  53 | });
  54 | test.only("User adds Items in Digital Menu", async ({ page }) => {
  55 |   // test.setTimeout(120000);
  56 |   const login = new LoginPage(page);
  57 |   const digitalMenu = new DigitalMenuPage(page);
  58 |   const item = new items(page);
  59 |   await login.navigate();
  60 |   await login.login(process.env.EMAIL, process.env.PASSWORD);
> 61 |   await expect(page).toHaveURL(/\/merchant\/dashboard/);
     |                      ^ Error: expect(page).toHaveURL(expected) failed
  62 | 
  63 |   await digitalMenu.goToDigitalMenu();
  64 |   await item.openCreateItemModal();
  65 |   await item.saveItem(generateSubCategoryName(), generateRandomPrice());
  66 |   // await page.pause();
  67 | });
  68 | 
```