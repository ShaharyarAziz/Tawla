# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Digital_Menu\DigitalMenu.spec.js >> User adds Items in Digital Menu
- Location: tests\Digital_Menu\DigitalMenu.spec.js:47:6

# Error details

```
Error: locator.click: Test ended.
Call log:
  - waiting for getByText('+ Create Item')

```

# Test source

```ts
  1   | const {
  2   |   generateRandomPrice,
  3   |   generateFoodDescription,
  4   | } = require("../../utils/testData");
  5   | 
  6   | class items {
  7   |   constructor(page) {
  8   |     this.page = page;
  9   |     this.createItemBtn = page.getByText("+ Create Item");
  10  |     this.item_name = page.locator("input#item_name");
  11  | 
  12  |     // this.foodtypeDropdown = page.locator(
  13  |     //   'div.custom-dropdown-trigger[data-dropdown="food-type-dropdown"]',
  14  |     // );
  15  |     this.foodTypeArrow = page.locator(
  16  |       'div.custom-dropdown-trigger[data-dropdown="food-type-dropdown"] svg.dropdown-arrow',
  17  |     );
  18  |     this.foodtypeMenu = page.locator("#food-type-dropdown");
  19  | 
  20  |     this.vegeterian = this.foodtypeMenu.getByText("Vegetarian", {
  21  |       exact: true,
  22  |     });
  23  |     this.nonVegeterian = this.foodtypeMenu.getByText("Non-Vegetarian", {
  24  |       exact: true,
  25  |     });
  26  |     this.item_price = page.locator("input#item_price");
  27  | 
  28  |     this.categoryNameDropdown = page.locator("span#category-label");
  29  |     this.categoryDropdown = page.locator(
  30  |       'div.custom-dropdown-trigger[data-dropdown="category-dropdown"]',
  31  |     );
  32  |     this.categoryMenu = page.locator("#category-dropdown");
  33  | 
  34  |     this.Spicy_Biryani = this.categoryMenu.getByText("All Desert", {
  35  |       exact: true,
  36  |     });
  37  | 
  38  |     this.RecycledCottonCheese = this.categoryMenu.getByText("Drinks", {
  39  |       exact: true,
  40  |     });
  41  |     this.subCategoryDropdown = page.locator(
  42  |       '[data-dropdown="subcategory-dropdown"]',
  43  |     );
  44  |     this.subCategoryMenu = page.locator("#subcategory-dropdown");
  45  | 
  46  |     this.fileInput = page.locator("#item_image");
  47  |     this.itemDescription = page.locator("#description");
  48  |   }
  49  | 
  50  |   async openCreateItemModal() {
> 51  |     await this.createItemBtn.click();
      |                              ^ Error: locator.click: Test ended.
  52  |   }
  53  | 
  54  |   // 🔥 NEW: reusable scroll function
  55  |   async scrollAndSelectSubCategory(text) {
  56  |     const container = this.subCategoryMenu;
  57  | 
  58  |     await container.waitFor({ state: "visible" });
  59  | 
  60  |     let found = false;
  61  | 
  62  |     for (let i = 0; i < 15; i++) {
  63  |       const item = container.getByText(text, { exact: true });
  64  | 
  65  |       if ((await item.count()) > 0) {
  66  |         await item.first().click();
  67  |         found = true;
  68  |         break;
  69  |       }
  70  | 
  71  |       // 🔽 scroll inside dropdown
  72  |       await container.evaluate((el) => el.scrollBy(0, 200));
  73  |       await this.page.waitForTimeout(200);
  74  |     }
  75  | 
  76  |     if (!found) {
  77  |       throw new Error(`${text} not found in subcategory dropdown`);
  78  |     }
  79  |   }
  80  | 
  81  |   async saveItem(name, price) {
  82  |     await this.item_name.fill(name);
  83  |     await this.page.waitForTimeout(3000);
  84  | 
  85  |     await this.foodTypeArrow.click({ force: true });
  86  |     await this.vegeterian.click();
  87  |     await this.nonVegeterian.click();
  88  |     await this.item_price.click();
  89  |     await this.item_price.fill(price);
  90  | 
  91  |     await this.categoryDropdown.click();
  92  |     await this.categoryMenu.waitFor({ state: "visible" });
  93  |     await this.RecycledCottonCheese.click();
  94  | 
  95  |     await this.Spicy_Biryani.scrollIntoViewIfNeeded();
  96  |     await this.Spicy_Biryani.click();
  97  | 
  98  |     // ✅ Open subcategory dropdown
  99  |     await this.subCategoryDropdown.click();
  100 | 
  101 |     // 🔥 USE SCROLL FUNCTION HERE
  102 |     await this.scrollAndSelectSubCategory("Strawberry with Belgian chocolate");
  103 |     await this.scrollAndSelectSubCategory("Milkshakes");
  104 | 
  105 |     await this.fileInput.setInputFiles(
  106 |       "E:/Automation_Testing/Tawla_Automation/utils/png-transparent-full-breakfast-british-cuisine-english-cuisine-breakfast-sausage-woodbury-commons-outlet-food-breakfast-recipe-thumbnail.png",
  107 |     );
  108 | 
  109 |     await this.itemDescription.fill(generateFoodDescription());
  110 | 
  111 |     await this.page.getByRole("button", { name: "Save Item" }).click();
  112 | 
  113 |     // await this.page.pause();
  114 |   }
  115 | }
  116 | 
  117 | module.exports = { items };
  118 | 
```