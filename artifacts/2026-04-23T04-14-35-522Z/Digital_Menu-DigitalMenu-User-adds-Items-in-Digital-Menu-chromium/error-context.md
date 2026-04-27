# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Digital_Menu\DigitalMenu.spec.js >> User adds Items in Digital Menu
- Location: tests\Digital_Menu\DigitalMenu.spec.js:52:1

# Error details

```
Error: locator.waitFor: Error: strict mode violation: locator('text=Create Item') resolved to 2 elements:
    1) <a data-toggle="modal" data-target="#itemModel" class="btn btn-theme-simple">+ Create Item</a> aka getByText('+ Create Item')
    2) <h2 class="item_heading">Create Item</h2> aka getByText('Create Item', { exact: true })

Call log:
  - waiting for locator('text=Create Item') to be visible

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
    - generic [ref=e80]:
      - text: Main Menu
      - list [ref=e81]:
        - listitem [ref=e82]:
          - generic [ref=e83] [cursor=pointer]: + Create Category
        - listitem [ref=e84]:
          - generic [ref=e85] [cursor=pointer]: + Create Sub Category
        - listitem [ref=e86]:
          - generic [ref=e87] [cursor=pointer]: + Create Item
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
  32 |  async saveItem(name, price) {
  33 | 
  34 |   // 🔥 WAIT FOR MODAL (CRITICAL FIX)
> 35 |   await this.page.locator('text=Create Item').waitFor();
     |                                               ^ Error: locator.waitFor: Error: strict mode violation: locator('text=Create Item') resolved to 2 elements:
  36 | 
  37 |   await this.item_name.fill(name);
  38 | 
  39 |   // 🔥 FOOD TYPE
  40 |   const foodTrigger = this.page.locator('#food-type-label');
  41 | 
  42 |   await foodTrigger.waitFor({ state: 'visible' });
  43 |   await foodTrigger.click();
  44 | 
  45 |   const foodMenu = this.page.locator('#food-type-dropdown');
  46 |   await foodMenu.waitFor({ state: 'visible' });
  47 | 
  48 |   await foodMenu.getByText('Vegetarian').click();
  49 |   await foodMenu.getByText('Non-Vegetarian').click();
  50 | 
  51 |   // 💰 PRICE
  52 |   await this.item_price.fill(price.toString());
  53 | 
  54 |   // CATEGORY
  55 |   const categoryTrigger = this.page.locator('[data-dropdown="category-dropdown"]');
  56 |   await categoryTrigger.click();
  57 | 
  58 |   const categoryMenu = this.page.locator('#category-dropdown');
  59 |   await categoryMenu.waitFor({ state: 'visible' });
  60 | 
  61 |   await categoryMenu.getByText('Recycled Cotton Cheese').click();
  62 | 
  63 |   const marble = categoryMenu.getByText('Modern Marble Hat');
  64 |   await marble.scrollIntoViewIfNeeded();
  65 |   await marble.click();
  66 | 
  67 |   // SUBCATEGORY
  68 |   const subTrigger = this.page.locator('[data-dropdown="subcategory-dropdown"]');
  69 |   await subTrigger.click();
  70 | 
  71 |   const subMenu = this.page.locator('#subcategory-dropdown');
  72 |   await subMenu.waitFor({ state: 'visible' });
  73 | 
  74 |   const spicy = subMenu.getByText('Spicy Fries');
  75 |   await spicy.scrollIntoViewIfNeeded();
  76 |   await spicy.click();
  77 | }
  78 | }
  79 | module.exports = { items };
  80 | 
```