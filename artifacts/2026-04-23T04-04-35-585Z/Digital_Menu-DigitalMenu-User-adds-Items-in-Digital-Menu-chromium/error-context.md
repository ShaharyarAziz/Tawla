# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Digital_Menu\DigitalMenu.spec.js >> User adds Items in Digital Menu
- Location: tests\Digital_Menu\DigitalMenu.spec.js:52:1

# Error details

```
Error: locator.click: Test ended.
Call log:
  - waiting for locator('input[value="vegetarian"]')
    - locator resolved to <input type="checkbox" value="vegetarian" class="food-type-checkbox custom-checkbox"/>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is not visible
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is not visible
    - retrying click action
      - waiting 100ms
    18 × waiting for element to be visible, enabled and stable
       - element is not visible
     - retrying click action
       - waiting 500ms

```

# Test source

```ts
  1  | const { generateRandomPrice } = require("../../utils/testData");
  2  | 
  3  | class items {
  4  |   constructor(page) {
  5  |     this.page = page;
  6  |     this.createItemBtn = page.getByText("+ Create Item");
  7  |     this.item_name = page.locator("input#item_name");
  8  |     this.foodtypeDropdown = page.locator("span#food-type-label");
  9  |     this.vegeterian = page.locator('input[value="vegetarian"]');
  10 |     this.nonVegeterian = page.locator('input[value="non-vegetarian"]');
  11 |     this.item_price = page.locator("input#item_price");
  12 |     this.categoryNameDropdown = page.locator("span#category-label");
  13 |     this.Marblehat = page
  14 |       .locator("#category-dropdown")
  15 |       .getByText("Modern Marble Hat");
  16 | 
  17 |     this.RecycledCottonCheese = page
  18 |       .locator("#category-dropdown")
  19 |       .getByText("Recycled Cotton Cheese");
  20 | 
  21 |     this.subCategoryDropdown = page.locator(
  22 |       '[data-dropdown="subcategory-dropdown"]',
  23 |     );
  24 |     this.spicyFries = page
  25 |       .locator("#subcategory-options")
  26 |       .getByText("Spicy Fries");
  27 |   }
  28 | 
  29 |   async openCreateItemModal() {
  30 |     await this.createItemBtn.click();
  31 |   }
  32 |   async saveItem(name, price) {
  33 |     await this.item_name.fill(name);
  34 |     await this.foodtypeDropdown.click();
> 35 |     await this.vegeterian.click();
     |                           ^ Error: locator.click: Test ended.
  36 |     await this.nonVegeterian.click();
  37 |     await this.item_price.click();
  38 |     await this.item_price.fill(price);
  39 |     await this.categoryNameDropdown.click();
  40 |     await this.RecycledCottonCheese.click();
  41 |     await this.Marblehat.scrollIntoViewIfNeeded();
  42 |     await this.Marblehat.click();
  43 |     // await this.subCategoryDropdown.click();
  44 |     // await this.spicyFries.scrollIntoViewIfNeeded();
  45 |     // await this.spicyFries.click();
  46 |   }
  47 | }
  48 | module.exports = { items };
  49 | 
```