# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Digital_Menu\DigitalMenu.spec.js >> User adds SubCategories in Digital Menu
- Location: tests\Digital_Menu\DigitalMenu.spec.js:31:6

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: expect(page).toHaveURL(expected) failed

Expected pattern: /\/merchant\/dashboard/
Received string:  "http://13.51.170.24/merchant/login"

Call log:
  - Expect "toHaveURL" with timeout 5000ms
    3 × unexpected value "http://13.51.170.24/merchant/login"
    - waiting for navigation to finish...

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
  16 |   const login = new LoginPage(page);
  17 |   const digitalMenu = new DigitalMenuPage(page);
  18 |   const category = new Category(page);
  19 |   const subcategory = new SubCategory(page);
  20 |   const item = new items(page);
  21 |   await login.navigate();
  22 |   await login.login(process.env.EMAIL, process.env.PASSWORD);
  23 |   await expect(page).toHaveURL(/\/merchant\/dashboard/);
  24 |   await digitalMenu.goToDigitalMenu();
  25 |   await expect(page).toHaveURL(
  26 |     /\/merchant\/digitalmenu\/menu\/digitalMenuSection/,
  27 |   );
  28 |   await category.openCategoryModal();
  29 |   await category.saveCategory(getRandomFoodCategory());
  30 | });
  31 | test.only("User adds SubCategories in Digital Menu", async ({ page }) => {
  32 |   const login = new LoginPage(page);
  33 |   const digitalMenu = new DigitalMenuPage(page);
  34 |   const subcategory = new SubCategory(page);
  35 |   await login.navigate();
  36 |   await login.login(process.env.EMAIL, process.env.PASSWORD);
  37 | 
> 38 |   await expect(page).toHaveURL(/\/merchant\/dashboard/);
     |                      ^ Error: expect(page).toHaveURL(expected) failed
  39 | 
  40 |   await digitalMenu.goToDigitalMenu();
  41 |   await expect(page).toHaveURL(
  42 |     /\/merchant\/digitalmenu\/menu\/digitalMenuSection/,
  43 |   );
  44 |   await subcategory.openSubCategoryModal();
  45 |   await subcategory.saveSubCategory(getRandomFoodCategory());
  46 | });
  47 | test.only("User adds Items in Digital Menu", async ({ page }) => {
  48 |   const login = new LoginPage(page);
  49 |   const digitalMenu = new DigitalMenuPage(page);
  50 |   const item = new items(page);
  51 |   await login.navigate();
  52 |   await login.login(process.env.EMAIL, process.env.PASSWORD);
  53 |   await expect(page).toHaveURL(/\/merchant\/dashboard/);
  54 |   await digitalMenu.goToDigitalMenu();
  55 |   await item.openCreateItemModal();
  56 |   await item.saveItem(generateSubCategoryName(), generateRandomPrice());
  57 | });
  58 | 
```