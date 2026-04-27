# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Digital_Menu\DigitalMenu.spec.js >> User adds Items in Digital Menu
- Location: tests\Digital_Menu\DigitalMenu.spec.js:52:1

# Error details

```
ReferenceError: price is not defined
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
                  - textbox "Item Name" [ref=e102]: BBQ Burger
                - generic [ref=e103]:
                  - generic [ref=e104]: Food Type
                  - generic [ref=e106] [cursor=pointer]:
                    - generic [ref=e107]:
                      - generic [ref=e108]:
                        - generic [ref=e109]: Vegetarian
                        - img [ref=e110]
                      - generic [ref=e112]:
                        - generic [ref=e113]: Non-Vegetarian
                        - img [ref=e114]
                    - img [ref=e116]
              - generic [ref=e118]:
                - generic [ref=e119]:
                  - generic [ref=e120]: Item Price
                  - generic [ref=e121]:
                    - textbox "Item Price" [active] [ref=e122]:
                      - /placeholder: Enter Price
                    - img [ref=e123]
                - generic [ref=e125]:
                  - generic [ref=e126]: Category
                  - generic [ref=e128] [cursor=pointer]:
                    - generic [ref=e129]: Select...
                    - img [ref=e130]
              - generic [ref=e132]:
                - generic [ref=e133]: Sub Category
                - generic [ref=e135] [cursor=pointer]:
                  - generic [ref=e136]: Select...
                  - img [ref=e137]
              - separator [ref=e139]
              - separator [ref=e140]
              - generic [ref=e142] [cursor=pointer]:
                - img [ref=e143]
                - paragraph [ref=e153]: Drag & drop your file(s) to start uploading
                - generic [ref=e156]: OR
                - button "Browse files" [ref=e158]
              - paragraph [ref=e159]: Recommended resolution of 500 x 500 px and max size of 1 MB
              - separator [ref=e160]
              - generic [ref=e161]:
                - generic [ref=e162]: Item Description
                - textbox "Item Description" [ref=e163]:
                  - /placeholder: Enter Item Description
              - generic [ref=e165]: Add Arabic Translation
            - generic [ref=e169]:
              - button "Cancel" [ref=e170] [cursor=pointer]
              - button "Save Item" [ref=e171] [cursor=pointer]
      - generic [ref=e172]:
        - heading "Super Admins" [level=2] [ref=e173]
        - textbox "Search Menu Item" [ref=e176]
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
  28 |   async openCreateItemModal() {
  29 |     await this.createItemBtn.click();
  30 |   }
  31 |   async saveItem(name) {
  32 |     await this.item_name.fill(name);
  33 |     await this.foodtypeDropdown.click();
  34 |     await this.vegeterian.click();
  35 |     await this.nonVegeterian.click();
  36 |     await this.item_price.click();
> 37 |     await this.item_price.fill(price);
     |                                ^ ReferenceError: price is not defined
  38 |     await this.categoryNameDropdown.click();
  39 |     await this.RecycledCottonCheese.click();
  40 |     await this.Marblehat.scrollIntoViewIfNeeded();
  41 |     await this.Marblehat.click();
  42 |     // await this.randomclick.click();
  43 |     // await this.subCategoryDropdown.click();
  44 |     // await this.spicyFries.scrollIntoViewIfNeeded();
  45 |     // await this.spicyFries.click();
  46 |   }
  47 | }
  48 | module.exports = { items };
  49 | 
```