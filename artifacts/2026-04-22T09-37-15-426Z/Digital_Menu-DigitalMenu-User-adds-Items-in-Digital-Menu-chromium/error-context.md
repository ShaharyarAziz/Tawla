# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Digital_Menu\DigitalMenu.spec.js >> User adds Items in Digital Menu
- Location: tests\Digital_Menu\DigitalMenu.spec.js:51:1

# Error details

```
ReferenceError: generateRandomPrice is not defined
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
      - dialog [ref=e88]:
        - generic [ref=e90]:
          - generic [ref=e91]:
            - heading "Create Item" [level=2] [ref=e92]
            - button [ref=e93] [cursor=pointer]:
              - img [ref=e94]
          - generic [ref=e97]:
            - generic [ref=e98]:
              - generic [ref=e99]:
                - generic [ref=e100]:
                  - generic [ref=e101]: Item Name
                  - textbox "Item Name" [ref=e102]
                - generic [ref=e103]:
                  - generic [ref=e104]: Food Type
                  - generic [ref=e106] [cursor=pointer]:
                    - generic [ref=e107]: Select...
                    - img [ref=e108]
              - generic [ref=e110]:
                - generic [ref=e111]:
                  - generic [ref=e112]: Item Price
                  - generic [ref=e113]:
                    - textbox "Item Price" [ref=e114]:
                      - /placeholder: Enter Price
                    - img [ref=e115]
                - generic [ref=e117]:
                  - generic [ref=e118]: Category
                  - generic [ref=e120] [cursor=pointer]:
                    - generic [ref=e121]: Select...
                    - img [ref=e122]
              - generic [ref=e124]:
                - generic [ref=e125]: Sub Category
                - generic [ref=e127] [cursor=pointer]:
                  - generic [ref=e128]: Select...
                  - img [ref=e129]
              - separator [ref=e131]
              - separator [ref=e132]
              - generic [ref=e134] [cursor=pointer]:
                - img [ref=e135]
                - paragraph [ref=e145]: Drag & drop your file(s) to start uploading
                - generic [ref=e148]: OR
                - button "Browse files" [ref=e150]
              - paragraph [ref=e151]: Recommended resolution of 500 x 500 px and max size of 1 MB
              - separator [ref=e152]
              - generic [ref=e153]:
                - generic [ref=e154]: Item Description
                - textbox "Item Description" [ref=e155]:
                  - /placeholder: Enter Item Description
              - generic [ref=e157]: Add Arabic Translation
            - generic [ref=e161]:
              - button "Cancel" [ref=e162] [cursor=pointer]
              - button "Save Item" [ref=e163] [cursor=pointer]
      - generic [ref=e164]:
        - heading "Super Admins" [level=2] [ref=e165]
        - textbox "Search Menu Item" [ref=e168]
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
  8  | } = require("../../utils/testData");
  9  | const { Category } = require("../../pages/Digtial_Menu/Category.js");
  10 | const { SubCategory } = require("../../pages/Digtial_Menu/SubCategory.js");
  11 | const { items } = require("../../pages/Digtial_Menu/items.js");
  12 | dotenv.config();
  13 | 
  14 | // test("User adds Categories in Digital Menu", async ({ page }) => {
  15 | //   const login = new LoginPage(page);
  16 | //   const digitalMenu = new DigitalMenuPage(page);
  17 | //   const category = new Category(page);
  18 | //   const subcategory = new SubCategory(page);
  19 | //   const item = new items(page);
  20 | 
  21 | //   await login.navigate();
  22 | //   await login.login(process.env.EMAIL, process.env.PASSWORD);
  23 | 
  24 | //   await expect(page).toHaveURL(/\/merchant\/dashboard/);
  25 | 
  26 | //   await digitalMenu.goToDigitalMenu();
  27 | //   await expect(page).toHaveURL(
  28 | //     /\/merchant\/digitalmenu\/menu\/digitalMenuSection/,
  29 | //   );
  30 | //   await category.openCategoryModal();
  31 | //   await category.saveCategory(getRandomFoodCategory());
  32 | // });
  33 | // test("User adds SubCategories in Digital Menu", async ({ page }) => {
  34 | //   const login = new LoginPage(page);
  35 | //   const digitalMenu = new DigitalMenuPage(page);
  36 | //   const subcategory = new SubCategory(page);
  37 | //   await login.navigate();
  38 | //   await login.login(process.env.EMAIL, process.env.PASSWORD);
  39 | 
  40 | //   await expect(page).toHaveURL(/\/merchant\/dashboard/);
  41 | 
  42 | //   await digitalMenu.goToDigitalMenu();
  43 | //   await expect(page).toHaveURL(
  44 | //     /\/merchant\/digitalmenu\/menu\/digitalMenuSection/,
  45 | //   );
  46 | //   await subcategory.openSubCategoryModal();
  47 | //   await subcategory.saveSubCategory(getRandomFoodCategory());
  48 | 
  49 | //   // await page.pause();
  50 | // });
  51 | test("User adds Items in Digital Menu", async ({ page }) => {
  52 |   const login = new LoginPage(page);
  53 |   const digitalMenu = new DigitalMenuPage(page);
  54 |   const item = new items(page);
  55 |   await login.navigate();
  56 |   await login.login(process.env.EMAIL, process.env.PASSWORD);
  57 |   await expect(page).toHaveURL(/\/merchant\/dashboard/);
  58 | 
  59 |   await digitalMenu.goToDigitalMenu();
  60 |   await item.openCreateItemModal();
> 61 |   await item.saveItem(generateSubCategoryName(), generateRandomPrice());
     |                       ^ ReferenceError: generateRandomPrice is not defined
  62 |   await page.pause();
  63 | });
  64 | 
```