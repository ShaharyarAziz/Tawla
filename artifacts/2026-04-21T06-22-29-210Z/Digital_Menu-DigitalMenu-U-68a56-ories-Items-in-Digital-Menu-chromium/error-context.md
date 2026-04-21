# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Digital_Menu\DigitalMenu.spec.js >> User adds Categories,SubCategories & Items in Digital Menu
- Location: tests\Digital_Menu\DigitalMenu.spec.js:31:1

# Error details

```
ReferenceError: Sub_Category is not defined
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
  11 | dotenv.config();
  12 | 
  13 | test("User adds Categories in Digital Menu", async ({ page }) => {
  14 |   const login = new LoginPage(page);
  15 |   const digitalMenu = new DigitalMenuPage(page);
  16 |   const category = new Category(page);
  17 |   const subcategory = new SubCategory(page);
  18 | 
  19 |   await login.navigate();
  20 |   await login.login(process.env.EMAIL, process.env.PASSWORD);
  21 | 
  22 |   await expect(page).toHaveURL(/\/merchant\/dashboard/);
  23 | 
  24 |   await digitalMenu.goToDigitalMenu();
  25 |   await expect(page).toHaveURL(
  26 |     /\/merchant\/digitalmenu\/menu\/digitalMenuSection/,
  27 |   );
  28 |   await category.openCategoryModal();
  29 |   await category.saveCategory(getRandomFoodCategory());
  30 | });
  31 | test("User adds Categories,SubCategories & Items in Digital Menu", async ({
  32 |   page,
  33 | }) => {
  34 |   const login = new LoginPage(page);
  35 |   const digitalMenu = new DigitalMenuPage(page);
> 36 |   const sub_category = new Sub_Category(page);
     |                        ^ ReferenceError: Sub_Category is not defined
  37 | 
  38 |   await login.navigate();
  39 |   await login.login(process.env.EMAIL, process.env.PASSWORD);
  40 | 
  41 |   await expect(page).toHaveURL(/\/merchant\/dashboard/);
  42 | 
  43 |   await digitalMenu.goToDigitalMenu();
  44 |   await expect(page).toHaveURL(
  45 |     /\/merchant\/digitalmenu\/menu\/digitalMenuSection/,
  46 |   );
  47 |   await sub_category.openSubCategoryModal();
  48 |   await sub_category.saveSubCategory(getRandomFoodCategory());
  49 |   // await page.pause();
  50 | });
  51 | 
```