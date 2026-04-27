# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Digital_Menu\DigitalMenu.spec.js >> User adds Items in Digital Menu
- Location: tests\Digital_Menu\DigitalMenu.spec.js:54:6

# Error details

```
TimeoutError: locator.waitFor: Timeout 10000ms exceeded.
Call log:
  - waiting for getByText('+ Create Item') to be visible
    - waiting for" http://13.51.170.24/merchant/login" navigation to finish...
    - navigated to "http://13.51.170.24/merchant/login"
    - waiting for" http://13.51.170.24/merchant/dashboard" navigation to finish...
    - navigated to "http://13.51.170.24/merchant/dashboard"
    - waiting for" http://13.51.170.24/merchant/digitalmenu" navigation to finish...

```

```
TypeError: this.createItemBtn.click is not a function
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
  1  | const {
  2  |   generateRandomPrice,
  3  |   generateFoodDescription,
  4  | } = require("../../utils/testData");
  5  | 
  6  | class items {
  7  |   constructor(page) {
  8  |     this.page = page;
  9  |     this.createItemBtn = page
  10 |       .getByText("+ Create Item")
  11 |       .waitFor({ state: "visible" });
  12 |     this.item_name = page.locator("input#item_name");
  13 |     this.foodtypeDropdown = this.page.locator(
  14 |       '[data-dropdown="food-type-dropdown"]',
  15 |     );
  16 |     this.vegeterian = page.getByText("Vegetarian", { exact: true });
  17 |     this.nonVegeterian = page.locator('input[value="non-vegetarian"]');
  18 |     this.item_price = page.locator("input#item_price");
  19 |     this.categoryNameDropdown = page.locator("span#category-label");
  20 |     this.Marblehat = page
  21 |       .locator("#category-dropdown")
  22 |       .getByText("Modern Marble Hat");
  23 | 
  24 |     this.RecycledCottonCheese = page
  25 |       .locator("#category-dropdown")
  26 |       .getByText("Recycled Cotton Cheese");
  27 | 
  28 |     this.subCategoryDropdown = page.locator(
  29 |       '[data-dropdown="subcategory-dropdown"]',
  30 |     );
  31 |     this.spicyFries = page
  32 |       .locator("#subcategory-options")
  33 |       .getByText("Spicy Fries");
  34 |     this.fileInput = page.locator("#item_image");
  35 |     this.itemDescription = page.locator("#description");
  36 |   }
  37 | 
  38 |   async openCreateItemModal() {
> 39 |     await this.createItemBtn.click();
     |                              ^ TypeError: this.createItemBtn.click is not a function
  40 |   }
  41 |   async saveItem(name, price) {
  42 |     await this.item_name.fill(name);
  43 |     await this.foodtypeDropdown.click();
  44 |     await this.vegeterian.click();
  45 |     await this.nonVegeterian.click();
  46 |     // await this.item_price.click();
  47 |     // await this.item_price.fill(price);
  48 |     // await this.categoryNameDropdown.click();
  49 |     // await this.RecycledCottonCheese.click();
  50 |     // await this.Marblehat.scrollIntoViewIfNeeded();
  51 |     // await this.Marblehat.click();
  52 |     // // await this.subCategoryDropdown.waitFor({ state: "visible" });
  53 |     // await this.subCategoryDropdown.click();
  54 |     // await this.spicyFries.scrollIntoViewIfNeeded();
  55 |     // await this.spicyFries.click();
  56 |     // await this.fileInput.setInputFiles(
  57 |     //   "E:/Automation_Testing/Tawla_Automation/utils/png-transparent-full-breakfast-british-cuisine-english-cuisine-breakfast-sausage-woodbury-commons-outlet-food-breakfast-recipe-thumbnail.png",
  58 |     // );
  59 |     // await this.itemDescription.fill(generateFoodDescription());
  60 |     // await this.page.getByRole("button", { name: "Save Item" }).click();
  61 |     await this.page.pause();
  62 |   }
  63 | }
  64 | module.exports = { items };
  65 | 
```