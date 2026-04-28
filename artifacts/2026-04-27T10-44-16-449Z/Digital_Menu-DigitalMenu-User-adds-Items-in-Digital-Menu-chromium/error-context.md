# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Digital_Menu\DigitalMenu.spec.js >> User adds Items in Digital Menu
- Location: tests\Digital_Menu\DigitalMenu.spec.js:54:6

# Error details

```
TypeError: "[data-dropdown="food-type-dropdown"]".waitFor is not a function
```

# Test source

```ts
  1  | const {
  2  |   generateRandomPrice,
  3  |   generateFoodDescription,
  4  | } = require("../../utils/testData");
  5  | 
  6  | class items {
  7  |   constructor(page) {
  8  |     this.page = page;
  9  |     this.createItemBtn = page.getByText("+ Create Item");
  10 |     this.item_name = page.locator("input#item_name");
  11 |     this.foodtypeDropdown = page.locator(
> 12 |       '[data-dropdown="food-type-dropdown"]'.waitFor({
     |                                              ^ TypeError: "[data-dropdown="food-type-dropdown"]".waitFor is not a function
  13 |         state: "visible",
  14 |         timeout: 30000,
  15 |       }),
  16 |     );
  17 |     this.vegeterian = page.getByText("Vegetarian", { exact: true });
  18 |     this.nonVegeterian = page.locator('input[value="non-vegetarian"]');
  19 |     this.item_price = page.locator("input#item_price");
  20 |     this.categoryNameDropdown = page.locator("span#category-label");
  21 |     this.Marblehat = page
  22 |       .locator("#category-dropdown")
  23 |       .getByText("Modern Marble Hat");
  24 | 
  25 |     this.RecycledCottonCheese = page
  26 |       .locator("#category-dropdown")
  27 |       .getByText("Recycled Cotton Cheese");
  28 | 
  29 |     this.subCategoryDropdown = page.locator(
  30 |       '[data-dropdown="subcategory-dropdown"]',
  31 |     );
  32 |     this.spicyFries = page
  33 |       .locator("#subcategory-options")
  34 |       .getByText("Spicy Fries");
  35 |     this.fileInput = page.locator("#item_image");
  36 |     this.itemDescription = page.locator("#description");
  37 |   }
  38 | 
  39 |   async openCreateItemModal() {
  40 |     await this.createItemBtn.click();
  41 |   }
  42 |   async saveItem(name, price) {
  43 |     await this.item_name.fill(name);
  44 |     await this.foodtypeDropdown.waitFor({ state: "visible", timeout: 30000 });
  45 |     await this.foodtypeDropdown.click();
  46 |     // await this.vegeterian.waitFor({ state: "visible", timeout: 30000 });
  47 |     await this.vegeterian.click();
  48 |     await this.nonVegeterian.click();
  49 |     await this.item_price.click();
  50 |     await this.item_price.fill(price);
  51 |     await this.categoryNameDropdown.click();
  52 |     await this.RecycledCottonCheese.click();
  53 |     await this.Marblehat.scrollIntoViewIfNeeded();
  54 |     await this.Marblehat.click();
  55 |     // await this.subCategoryDropdown.waitFor({ state: "visible" });
  56 |     await this.subCategoryDropdown.click();
  57 |     await this.spicyFries.scrollIntoViewIfNeeded();
  58 |     await this.spicyFries.click();
  59 |     await this.fileInput.setInputFiles(
  60 |       "E:/Automation_Testing/Tawla_Automation/utils/png-transparent-full-breakfast-british-cuisine-english-cuisine-breakfast-sausage-woodbury-commons-outlet-food-breakfast-recipe-thumbnail.png",
  61 |     );
  62 |     await this.itemDescription.fill(generateFoodDescription());
  63 |     await this.page.getByRole("button", { name: "Save Item" }).click();
  64 |   }
  65 | }
  66 | module.exports = { items };
  67 | 
```