# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Digital_Menu\DigitalMenu.spec.js >> User adds Items in Digital Menu
- Location: tests\Digital_Menu\DigitalMenu.spec.js:52:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('input#item_name')
    - locator resolved to <input type="text" id="item_name" name="item_name" class="form-control" placeholder="Item Name"/>
    - fill("Spicy Pizza")
  - attempting fill action
    2 × waiting for element to be visible, enabled and editable
      - element is not visible
    - retrying fill action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and editable
      - element is not visible
    - retrying fill action
      - waiting 100ms
    19 × waiting for element to be visible, enabled and editable
       - element is not visible
     - retrying fill action
       - waiting 500ms

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
      - table [ref=e94]:
        - rowgroup [ref=e95]:
          - row
          - row "Tasty Aluminum Gloves Add sub category" [ref=e96]:
            - cell "Tasty Aluminum Gloves" [ref=e97]: Tasty Aluminum Gloves
            - cell "Add sub category" [ref=e100]:
              - link "Add sub category" [ref=e101] [cursor=pointer]:
                - /url: javascript:void(0);
            - cell [ref=e102]:
              - generic [ref=e103]:
                - link [ref=e104] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e105]
                - link [ref=e110] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e111]
                - link [ref=e113] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e114]
                - checkbox [checked] [ref=e117]
          - row
          - row "Modern Marble Hat Add sub category" [ref=e119]:
            - cell "Modern Marble Hat" [ref=e120]: Modern Marble Hat
            - cell "Add sub category" [ref=e123]:
              - link "Add sub category" [ref=e124] [cursor=pointer]:
                - /url: javascript:void(0);
            - cell [ref=e125]:
              - generic [ref=e126]:
                - link [ref=e127] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e128]
                - link [ref=e133] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e134]
                - link [ref=e136] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e137]
                - checkbox [checked] [ref=e140]
          - row
          - row "Elegant Concrete Bike Add sub category" [ref=e142]:
            - cell "Elegant Concrete Bike" [ref=e143]: Elegant Concrete Bike
            - cell "Add sub category" [ref=e146]:
              - link "Add sub category" [ref=e147] [cursor=pointer]:
                - /url: javascript:void(0);
            - cell [ref=e148]:
              - generic [ref=e149]:
                - link [ref=e150] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e151]
                - link [ref=e156] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e157]
                - link [ref=e159] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e160]
                - checkbox [checked] [ref=e163]
          - row
          - row "Frozen Aluminum Chair Add sub category" [ref=e165]:
            - cell "Frozen Aluminum Chair" [ref=e166]: Frozen Aluminum Chair
            - cell "Add sub category" [ref=e169]:
              - link "Add sub category" [ref=e170] [cursor=pointer]:
                - /url: javascript:void(0);
            - cell [ref=e171]:
              - generic [ref=e172]:
                - link [ref=e173] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e174]
                - link [ref=e179] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e180]
                - link [ref=e182] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e183]
                - checkbox [checked] [ref=e186]
          - row
          - row "Soft Wooden Chair Add sub category" [ref=e188]:
            - cell "Soft Wooden Chair" [ref=e189]: Soft Wooden Chair
            - cell "Add sub category" [ref=e192]:
              - link "Add sub category" [ref=e193] [cursor=pointer]:
                - /url: javascript:void(0);
            - cell [ref=e194]:
              - generic [ref=e195]:
                - link [ref=e196] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e197]
                - link [ref=e202] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e203]
                - link [ref=e205] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e206]
                - checkbox [checked] [ref=e209]
          - row
          - row "Cheesy Pizza 2372 Add sub category" [ref=e211]:
            - cell "Cheesy Pizza 2372" [ref=e212]: Cheesy Pizza 2372
            - cell "Add sub category" [ref=e215]:
              - link "Add sub category" [ref=e216] [cursor=pointer]:
                - /url: javascript:void(0);
            - cell [ref=e217]:
              - generic [ref=e218]:
                - link [ref=e219] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e220]
                - link [ref=e225] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e226]
                - link [ref=e228] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e229]
                - checkbox [checked] [ref=e232]
          - row
          - 'row "Spicy Pasta // {faker.number.int(9999)} Add sub category" [ref=e234]':
            - 'cell "Spicy Pasta // {faker.number.int(9999)}" [ref=e235]': "Spicy Pasta // {faker.number.int(9999)}"
            - cell "Add sub category" [ref=e238]:
              - link "Add sub category" [ref=e239] [cursor=pointer]:
                - /url: javascript:void(0);
            - cell [ref=e240]:
              - generic [ref=e241]:
                - link [ref=e242] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e243]
                - link [ref=e248] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e249]
                - link [ref=e251] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e252]
                - checkbox [checked] [ref=e255]
          - row
          - row "Grilled Pizza Add sub category" [ref=e257]:
            - cell "Grilled Pizza" [ref=e258]: Grilled Pizza
            - cell "Add sub category" [ref=e261]:
              - link "Add sub category" [ref=e262] [cursor=pointer]:
                - /url: javascript:void(0);
            - cell [ref=e263]:
              - generic [ref=e264]:
                - link [ref=e265] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e266]
                - link [ref=e271] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e272]
                - link [ref=e274] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e275]
                - checkbox [checked] [ref=e278]
          - row
          - row "Test Category Add sub category" [ref=e280]:
            - cell "Test Category" [ref=e281]: Test Category
            - cell "Add sub category" [ref=e284]:
              - link "Add sub category" [ref=e285] [cursor=pointer]:
                - /url: javascript:void(0);
            - cell [ref=e286]:
              - generic [ref=e287]:
                - link [ref=e288] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e289]
                - link [ref=e294] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e295]
                - link [ref=e297] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e298]
                - checkbox [checked] [ref=e301]
          - row
          - row "Recycled Cotton Cheese Add sub category" [ref=e303]:
            - cell "Recycled Cotton Cheese" [ref=e304]: Recycled Cotton Cheese
            - cell "Add sub category" [ref=e307]:
              - link "Add sub category" [ref=e308] [cursor=pointer]:
                - /url: javascript:void(0);
            - cell [ref=e309]:
              - generic [ref=e310]:
                - link [ref=e311] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e312]
                - link [ref=e317] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e318]
                - link [ref=e320] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e321]
                - checkbox [checked] [ref=e324]
          - row
          - row "testing_Abc Add sub category" [ref=e326]:
            - cell "testing_Abc" [ref=e327]: testing_Abc
            - cell "Add sub category" [ref=e330]:
              - link "Add sub category" [ref=e331] [cursor=pointer]:
                - /url: javascript:void(0);
            - cell [ref=e332]:
              - generic [ref=e333]:
                - link [ref=e334] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e335]
                - link [ref=e340] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e341]
                - link [ref=e343] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e344]
                - checkbox [checked] [ref=e347]
          - row
          - row "Biryani Add sub category" [ref=e349]:
            - cell "Biryani" [ref=e350]: Biryani
            - cell "Add sub category" [ref=e353]:
              - link "Add sub category" [ref=e354] [cursor=pointer]:
                - /url: javascript:void(0);
            - cell [ref=e355]:
              - generic [ref=e356]:
                - link [ref=e357] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e358]
                - link [ref=e363] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e364]
                - link [ref=e366] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e367]
                - checkbox [checked] [ref=e370]
          - row
          - row "All Desert Add sub category" [ref=e372]:
            - cell "All Desert" [ref=e373]: All Desert
            - cell "Add sub category" [ref=e376]:
              - link "Add sub category" [ref=e377] [cursor=pointer]:
                - /url: javascript:void(0);
            - cell [ref=e378]:
              - generic [ref=e379]:
                - link [ref=e380] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e381]
                - link [ref=e386] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e387]
                - link [ref=e389] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e390]
                - checkbox [checked] [ref=e393]
          - row
          - row "Drinks Add sub category" [ref=e395]:
            - cell "Drinks" [ref=e396]: Drinks
            - cell "Add sub category" [ref=e399]:
              - link "Add sub category" [ref=e400] [cursor=pointer]:
                - /url: javascript:void(0);
            - cell [ref=e401]:
              - generic [ref=e402]:
                - link [ref=e403] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e404]
                - link [ref=e409] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e410]
                - link [ref=e412] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e413]
                - checkbox [checked] [ref=e416]
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
> 33 |     await this.item_name.fill(name);
     |                          ^ Error: locator.fill: Test timeout of 30000ms exceeded.
  34 |     await this.foodtypeDropdown.click();
  35 |     await this.vegeterian.click();
  36 |     await this.nonVegeterian.click();
  37 |     await this.item_price.click();
  38 |     await this.item_price.fill(price);
  39 |     await this.categoryNameDropdown.click();
  40 |     await this.RecycledCottonCheese.click();
  41 |     await this.Marblehat.scrollIntoViewIfNeeded();
  42 |     await this.Marblehat.click();
  43 |     // await this.subCategoryDropdown.waitFor({ state: "visible" });
  44 |     // await this.subCategoryDropdown.click();
  45 |     // await this.spicyFries.scrollIntoViewIfNeeded();
  46 |     // await this.spicyFries.click();
  47 |   }
  48 | }
  49 | module.exports = { items };
  50 | 
```