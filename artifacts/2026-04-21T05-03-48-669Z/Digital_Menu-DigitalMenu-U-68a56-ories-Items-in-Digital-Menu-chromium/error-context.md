# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Digital_Menu\DigitalMenu.spec.js >> User adds Categories,SubCategories & Items in Digital Menu
- Location: tests\Digital_Menu\DigitalMenu.spec.js:28:1

# Error details

```
ReferenceError: category is not defined
```

```
Error: page.waitForNavigation: Test ended.
=========================== logs ===========================
waiting for navigation until "load"
============================================================
```

# Page snapshot

```yaml
- generic [ref=e2]:
  - navigation [ref=e3]:
    - generic [ref=e4]:
      - button "Angels Sweets-main branch" [ref=e7] [cursor=pointer]:
        - generic [ref=e8]: Angels Sweets-main branch
      - img "User Profile" [ref=e12] [cursor=pointer]
  - link [ref=e14] [cursor=pointer]:
    - /url: javascript:void(0);
    - img [ref=e15]
  - complementary [ref=e19]:
    - link "Merchant Logo Tawla" [ref=e20] [cursor=pointer]:
      - /url: http://13.51.170.24/merchant/dashboard
      - generic [ref=e21]:
        - img "Merchant Logo" [ref=e22]
        - generic [ref=e23]: Tawla
    - navigation [ref=e25]:
      - list [ref=e26]:
        - listitem [ref=e27]:
          - link "Dashboard icon Dashboard" [ref=e28] [cursor=pointer]:
            - /url: http://13.51.170.24/merchant/dashboard
            - img "Dashboard icon" [ref=e30]
            - generic [ref=e31]: Dashboard
        - listitem [ref=e32]:
          - link "Take orders icon Take Orders" [ref=e33] [cursor=pointer]:
            - /url: http://13.51.170.24/merchant/pos
            - img "Take orders icon" [ref=e35]
            - generic [ref=e36]: Take Orders
        - listitem [ref=e37]:
          - link "Order Management icon Order Management" [ref=e38] [cursor=pointer]:
            - /url: http://13.51.170.24/merchant/order
            - img "Order Management icon" [ref=e40]
            - generic [ref=e41]: Order Management
        - listitem [ref=e42]:
          - link "Digital menu icon Digital Menu" [ref=e43] [cursor=pointer]:
            - /url: http://13.51.170.24/merchant/digitalmenu
            - img "Digital menu icon" [ref=e45]
            - generic [ref=e46]: Digital Menu
        - listitem [ref=e47]:
          - link "QR code and tables icon QR Code & Tables" [ref=e48] [cursor=pointer]:
            - /url: http://13.51.170.24/merchant/qrcode/indexcar
            - img "QR code and tables icon" [ref=e50]
            - generic [ref=e51]: QR Code & Tables
        - listitem [ref=e52]:
          - link "Reports icon Reports" [ref=e53] [cursor=pointer]:
            - /url: http://13.51.170.24/merchant/analytics
            - img "Reports icon" [ref=e55]
            - generic [ref=e56]: Reports
        - listitem [ref=e57]:
          - button "System setup icon System Setup" [ref=e58] [cursor=pointer]:
            - img "System setup icon" [ref=e60]
            - generic [ref=e61]: System Setup
            - img [ref=e63]
        - listitem [ref=e65]:
          - button "More menu icon More" [ref=e66] [cursor=pointer]:
            - img "More menu icon" [ref=e68]
            - generic [ref=e69]: More
            - img [ref=e71]
  - generic [ref=e73]:
    - heading "Digital Menu" [level=1] [ref=e74]
    - generic [ref=e75]:
      - link "Menu" [ref=e76] [cursor=pointer]:
        - /url: http://13.51.170.24/merchant/digitalmenu/menu/digitalMenuSection
      - link "Settings" [ref=e77] [cursor=pointer]:
        - /url: http://13.51.170.24/merchant/digitalmenu/settings
    - generic [ref=e79]:
      - generic [ref=e80]:
        - text: Main Menu
        - list [ref=e81]:
          - listitem [ref=e82]:
            - generic [ref=e83] [cursor=pointer]: + Create Category
          - listitem [ref=e84]:
            - generic [ref=e85] [cursor=pointer]: + Create Sub Category
          - listitem [ref=e86]:
            - generic [ref=e87] [cursor=pointer]: + Create Item
      - generic [ref=e88]:
        - heading "Super Admins" [level=2] [ref=e89]
        - textbox "Search Menu Item" [ref=e92]
```

# Test source

```ts
  1  | const { test, expect } = require("@playwright/test");
  2  | const { LoginPage } = require("../../pages/LoginPage");
  3  | const { DigitalMenuPage } = require("../../pages/Digtial_Menu/Digital_Menu");
  4  | const dotenv = require("dotenv");
  5  | const { getRandomFoodCategory } = require("../../utils/testData");
  6  | const { Category } = require("./Category.spec");
  7  | const Sub_Category = require("../../tests/Digital_Menu/Sub_Category.spec");
  8  | dotenv.config();
  9  | 
  10 | test("User adds Categories in Digital Menu", async ({ page }) => {
  11 |   const login = new LoginPage(page);
  12 |   const digitalMenu = new DigitalMenuPage(page);
  13 |   const category = new Category(page);
  14 |   const sub_category = new Sub_Category(page);
  15 | 
  16 |   await login.navigate();
  17 |   await login.login(process.env.EMAIL, process.env.PASSWORD);
  18 | 
  19 |   await expect(page).toHaveURL(/\/merchant\/dashboard/);
  20 | 
  21 |   await digitalMenu.goToDigitalMenu();
  22 |   await expect(page).toHaveURL(
  23 |     /\/merchant\/digitalmenu\/menu\/digitalMenuSection/,
  24 |   );
  25 |   await category.openCategoryModal();
  26 |   await category.saveCategory(getRandomFoodCategory());
  27 | });
  28 | test("User adds Categories,SubCategories & Items in Digital Menu", async ({
  29 |   page,
  30 | }) => {
  31 |   const login = new LoginPage(page);
  32 |   const digitalMenu = new DigitalMenuPage(page);
  33 |   const sub_category = new Sub_Category(page);
  34 | 
  35 |   await login.navigate();
  36 |   await login.login(process.env.EMAIL, process.env.PASSWORD);
  37 | 
  38 |   await expect(page).toHaveURL(/\/merchant\/dashboard/);
  39 | 
  40 |   await digitalMenu.goToDigitalMenu();
  41 |   await expect(page).toHaveURL(
  42 |     /\/merchant\/digitalmenu\/menu\/digitalMenuSection/,
  43 |   );
  44 |   await Promise.all([
> 45 |     page.waitForNavigation(), // waits for reload
     |          ^ Error: page.waitForNavigation: Test ended.
  46 |     category.saveCategory(), // action that triggers reload
  47 |   ]);
  48 |   await sub_category.openSubCategoryModal();
  49 |   await sub_category.saveSubCategory();
  50 |   // await page.pause();
  51 | });
  52 | 
```