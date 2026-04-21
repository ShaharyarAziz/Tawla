# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Digital_Menu\DigitalMenu.spec.js >> User adds Categories,SubCategories & Items in Digital Menu
- Location: tests\Digital_Menu\DigitalMenu.spec.js:10:1

# Error details

```
TypeError: Sub_Category is not a constructor
```

# Test source

```ts
  1  | const { test, expect } = require("@playwright/test");
  2  | const { LoginPage } = require("../../pages/LoginPage");
  3  | const { DigitalMenuPage } = require("../../pages/Digtial_Menu/Digital_Menu");
  4  | const dotenv = require("dotenv");
  5  | const { getRandomFoodCategory } = require("../../utils/testData");
  6  | const { Category } = require("./Category.spec");
  7  | const { Sub_Category } = require("../../tests/Digital_Menu/Sub_Category.spec");
  8  | dotenv.config();
  9  | 
  10 | test("User adds Categories,SubCategories & Items in Digital Menu", async ({
  11 |   page,
  12 | }) => {
  13 |   const login = new LoginPage(page);
  14 |   const digitalMenu = new DigitalMenuPage(page);
  15 |   const category = new Category(page);
> 16 |   const sub_category = new Sub_Category(page);
     |                        ^ TypeError: Sub_Category is not a constructor
  17 | 
  18 |   await login.navigate();
  19 |   await login.login(process.env.EMAIL, process.env.PASSWORD);
  20 | 
  21 |   await expect(page).toHaveURL(/\/merchant\/dashboard/);
  22 | 
  23 |   await digitalMenu.goToDigitalMenu();
  24 |   await expect(page).toHaveURL(
  25 |     /\/merchant\/digitalmenu\/menu\/digitalMenuSection/,
  26 |   );
  27 |   await category.openCategoryModal();
  28 |   await category.saveCategory(getRandomFoodCategory());
  29 |   await sub_category.openSubCategoryModal();
  30 |   await sub_category.saveSubCategory();
  31 |   // await page.pause();
  32 | });
  33 | 
```