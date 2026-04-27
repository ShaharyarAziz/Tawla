# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Digital_Menu\DigitalMenu.spec.js >> User adds Items in Digital Menu
- Location: tests\Digital_Menu\DigitalMenu.spec.js:52:1

# Error details

```
TimeoutError: locator.click: Timeout 10000ms exceeded.
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
    19 × waiting for element to be visible, enabled and stable
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
  13 |     this.categoryOption = page
  14 |       .locator("#category-dropdown")
  15 |       .getByText("Recycled Cotton Cheese");
  16 |   }
  17 |   async openCreateItemModal() {
  18 |     await this.createItemBtn.click();
  19 |   }
  20 |   async saveItem(name, price) {
  21 |     await this.item_name.fill(name);
  22 |     await this.foodtypeDropdown.click();
> 23 |     await this.vegeterian.click();
     |                           ^ TimeoutError: locator.click: Timeout 10000ms exceeded.
  24 |     await this.nonVegeterian.click();
  25 |     await this.item_price.click();
  26 |     await this.item_price.fill(price);
  27 |     await this.categoryNameDropdown.click();
  28 |     await this.categoryOption.click();
  29 |   }
  30 | }
  31 | module.exports = { items };
  32 | 
```