# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Digital_Menu\DigitalMenu.spec.js >> User adds Items in Digital Menu
- Location: tests\Digital_Menu\DigitalMenu.spec.js:52:1

# Error details

```
Error: locator.scrollIntoViewIfNeeded: Element is not attached to the DOM
Call log:
  - attempting scroll into view action
    - waiting for element to be stable
    - element is not stable
  - retrying scroll into view action
    - waiting for element to be stable

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
                  - textbox "Item Name" [ref=e102]: BBQ Fries
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
                    - textbox "Item Price" [ref=e122]:
                      - /placeholder: Enter Price
                      - text: "248.00"
                    - img [ref=e123]
                - generic [ref=e125]:
                  - generic [ref=e126]: Category
                  - generic [ref=e128] [cursor=pointer]:
                    - generic [ref=e129]:
                      - generic [ref=e130]:
                        - generic [ref=e131]: Recycled Cotton Cheese
                        - img [ref=e132]
                      - generic [ref=e134]:
                        - generic [ref=e135]: Modern Marble Hat
                        - img [ref=e136]
                    - img [ref=e138]
              - generic [ref=e140]:
                - generic [ref=e141]: Sub Category
                - generic [ref=e142]:
                  - generic [ref=e143] [cursor=pointer]:
                    - generic [ref=e144]: Select...
                    - img [ref=e145]
                  - generic [ref=e148]:
                    - generic [ref=e149] [cursor=pointer]:
                      - checkbox "BBQ Biryani" [ref=e150]
                      - generic [ref=e151]: BBQ Biryani
                    - generic [ref=e152] [cursor=pointer]:
                      - checkbox "Crispy Pasta" [ref=e153]
                      - generic [ref=e154]: Crispy Pasta
                    - generic [ref=e155] [cursor=pointer]:
                      - checkbox "BBQ Pizza" [ref=e156]
                      - generic [ref=e157]: BBQ Pizza
                    - generic [ref=e158] [cursor=pointer]:
                      - checkbox "Spicy Pizza" [ref=e159]
                      - generic [ref=e160]: Spicy Pizza
                    - generic [ref=e161] [cursor=pointer]:
                      - checkbox "Cheesy Burger" [ref=e162]
                      - generic [ref=e163]: Cheesy Burger
                    - generic [ref=e164] [cursor=pointer]:
                      - checkbox "Spicy Fries" [ref=e165]
                      - generic [ref=e166]: Spicy Fries
                    - generic [ref=e167] [cursor=pointer]:
                      - checkbox "Cheesy Sandwich" [ref=e168]
                      - generic [ref=e169]: Cheesy Sandwich
                    - generic [ref=e170] [cursor=pointer]:
                      - checkbox "Crispy Biryani" [ref=e171]
                      - generic [ref=e172]: Crispy Biryani
                    - generic [ref=e173] [cursor=pointer]:
                      - checkbox "Spicy Pizza" [ref=e174]
                      - generic [ref=e175]: Spicy Pizza
                    - generic [ref=e176] [cursor=pointer]:
                      - checkbox "Grilled Burger" [ref=e177]
                      - generic [ref=e178]: Grilled Burger
                    - generic [ref=e179] [cursor=pointer]:
                      - checkbox "Spicy Biryani" [ref=e180]
                      - generic [ref=e181]: Spicy Biryani
              - separator [ref=e182]
              - separator [ref=e183]
              - generic [ref=e185] [cursor=pointer]:
                - img [ref=e186]
                - paragraph [ref=e196]: Drag & drop your file(s) to start uploading
                - generic [ref=e199]: OR
                - button "Browse files" [ref=e201]
              - paragraph [ref=e202]: Recommended resolution of 500 x 500 px and max size of 1 MB
              - separator [ref=e203]
              - generic [ref=e204]:
                - generic [ref=e205]: Item Description
                - textbox "Item Description" [ref=e206]:
                  - /placeholder: Enter Item Description
              - generic [ref=e208]: Add Arabic Translation
            - generic [ref=e212]:
              - button "Cancel" [ref=e213] [cursor=pointer]
              - button "Save Item" [ref=e214] [cursor=pointer]
      - generic [ref=e215]:
        - heading "Super Admins" [level=2] [ref=e216]
        - textbox "Search Menu Item" [ref=e219]
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
  27 |     this.fileInput = page.locator("#item_image");
  28 |   }
  29 | 
  30 |   async openCreateItemModal() {
  31 |     await this.createItemBtn.click();
  32 |   }
  33 |   async saveItem(name, price) {
  34 |     await this.item_name.fill(name);
  35 |     await this.foodtypeDropdown.click();
  36 |     await this.vegeterian.click();
  37 |     await this.nonVegeterian.click();
  38 |     await this.item_price.click();
  39 |     await this.item_price.fill(price);
  40 |     await this.categoryNameDropdown.click();
  41 |     await this.RecycledCottonCheese.click();
  42 |     await this.Marblehat.scrollIntoViewIfNeeded();
  43 |     await this.Marblehat.click();
  44 |     // await this.subCategoryDropdown.waitFor({ state: "visible" });
  45 |     await this.subCategoryDropdown.click();
> 46 |     await this.spicyFries.scrollIntoViewIfNeeded();
     |                           ^ Error: locator.scrollIntoViewIfNeeded: Element is not attached to the DOM
  47 |     await this.spicyFries.click();
  48 |     await this.fileInput.setInputFiles(
  49 |       "E:/Automation_Testing/Tawla_Automation/utils/png-transparent-full-breakfast-british-cuisine-english-cuisine-breakfast-sausage-woodbury-commons-outlet-food-breakfast-recipe-thumbnail.png",
  50 |     );
  51 |   }
  52 | }
  53 | module.exports = { items };
  54 | 
```