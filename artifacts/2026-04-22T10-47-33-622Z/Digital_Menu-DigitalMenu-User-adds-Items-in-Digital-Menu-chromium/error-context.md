# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Digital_Menu\DigitalMenu.spec.js >> User adds Items in Digital Menu
- Location: tests\Digital_Menu\DigitalMenu.spec.js:52:1

# Error details

```
TimeoutError: locator.scrollIntoViewIfNeeded: Timeout 10000ms exceeded.
Call log:
  - waiting for locator('#subcategory-options').getByText('Modern Marble Hat')

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
                  - textbox "Item Name" [ref=e102]: Spicy Pasta
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
                      - text: "154.00"
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
              - separator [ref=e179]
              - separator [ref=e180]
              - generic [ref=e182] [cursor=pointer]:
                - img [ref=e183]
                - paragraph [ref=e193]: Drag & drop your file(s) to start uploading
                - generic [ref=e196]: OR
                - button "Browse files" [ref=e198]
              - paragraph [ref=e199]: Recommended resolution of 500 x 500 px and max size of 1 MB
              - separator [ref=e200]
              - generic [ref=e201]:
                - generic [ref=e202]: Item Description
                - textbox "Item Description" [ref=e203]:
                  - /placeholder: Enter Item Description
              - generic [ref=e205]: Add Arabic Translation
            - generic [ref=e209]:
              - button "Cancel" [ref=e210] [cursor=pointer]
              - button "Save Item" [ref=e211] [cursor=pointer]
      - generic [ref=e212]:
        - heading "Super Admins" [level=2] [ref=e213]
        - textbox "Search Menu Item" [ref=e216]
      - table [ref=e218]:
        - rowgroup [ref=e219]:
          - row
          - row "Tasty Aluminum Gloves Add sub category" [ref=e220]:
            - cell "Tasty Aluminum Gloves" [ref=e221]: Tasty Aluminum Gloves
            - cell "Add sub category" [ref=e224]:
              - link "Add sub category" [ref=e225] [cursor=pointer]:
                - /url: javascript:void(0);
            - cell [ref=e226]:
              - generic [ref=e227]:
                - link [ref=e228] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e229]
                - link [ref=e234] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e235]
                - link [ref=e237] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e238]
                - checkbox [checked] [ref=e241]
          - row
          - row "Modern Marble Hat Add sub category" [ref=e243]:
            - cell "Modern Marble Hat" [ref=e244]: Modern Marble Hat
            - cell "Add sub category" [ref=e247]:
              - link "Add sub category" [ref=e248] [cursor=pointer]:
                - /url: javascript:void(0);
            - cell [ref=e249]:
              - generic [ref=e250]:
                - link [ref=e251] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e252]
                - link [ref=e257] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e258]
                - link [ref=e260] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e261]
                - checkbox [checked] [ref=e264]
          - row
          - row "Elegant Concrete Bike Add sub category" [ref=e266]:
            - cell "Elegant Concrete Bike" [ref=e267]: Elegant Concrete Bike
            - cell "Add sub category" [ref=e270]:
              - link "Add sub category" [ref=e271] [cursor=pointer]:
                - /url: javascript:void(0);
            - cell [ref=e272]:
              - generic [ref=e273]:
                - link [ref=e274] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e275]
                - link [ref=e280] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e281]
                - link [ref=e283] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e284]
                - checkbox [checked] [ref=e287]
          - row
          - row "Frozen Aluminum Chair Add sub category" [ref=e289]:
            - cell "Frozen Aluminum Chair" [ref=e290]: Frozen Aluminum Chair
            - cell "Add sub category" [ref=e293]:
              - link "Add sub category" [ref=e294] [cursor=pointer]:
                - /url: javascript:void(0);
            - cell [ref=e295]:
              - generic [ref=e296]:
                - link [ref=e297] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e298]
                - link [ref=e303] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e304]
                - link [ref=e306] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e307]
                - checkbox [checked] [ref=e310]
          - row
          - row "Soft Wooden Chair Add sub category" [ref=e312]:
            - cell "Soft Wooden Chair" [ref=e313]: Soft Wooden Chair
            - cell "Add sub category" [ref=e316]:
              - link "Add sub category" [ref=e317] [cursor=pointer]:
                - /url: javascript:void(0);
            - cell [ref=e318]:
              - generic [ref=e319]:
                - link [ref=e320] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e321]
                - link [ref=e326] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e327]
                - link [ref=e329] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e330]
                - checkbox [checked] [ref=e333]
          - row
          - row "Cheesy Pizza 2372 Add sub category" [ref=e335]:
            - cell "Cheesy Pizza 2372" [ref=e336]: Cheesy Pizza 2372
            - cell "Add sub category" [ref=e339]:
              - link "Add sub category" [ref=e340] [cursor=pointer]:
                - /url: javascript:void(0);
            - cell [ref=e341]:
              - generic [ref=e342]:
                - link [ref=e343] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e344]
                - link [ref=e349] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e350]
                - link [ref=e352] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e353]
                - checkbox [checked] [ref=e356]
          - row
          - 'row "Spicy Pasta // {faker.number.int(9999)} Add sub category" [ref=e358]':
            - 'cell "Spicy Pasta // {faker.number.int(9999)}" [ref=e359]': "Spicy Pasta // {faker.number.int(9999)}"
            - cell "Add sub category" [ref=e362]:
              - link "Add sub category" [ref=e363] [cursor=pointer]:
                - /url: javascript:void(0);
            - cell [ref=e364]:
              - generic [ref=e365]:
                - link [ref=e366] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e367]
                - link [ref=e372] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e373]
                - link [ref=e375] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e376]
                - checkbox [checked] [ref=e379]
          - row
          - row "Grilled Pizza Add sub category" [ref=e381]:
            - cell "Grilled Pizza" [ref=e382]: Grilled Pizza
            - cell "Add sub category" [ref=e385]:
              - link "Add sub category" [ref=e386] [cursor=pointer]:
                - /url: javascript:void(0);
            - cell [ref=e387]:
              - generic [ref=e388]:
                - link [ref=e389] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e390]
                - link [ref=e395] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e396]
                - link [ref=e398] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e399]
                - checkbox [checked] [ref=e402]
          - row
          - row "Test Category Add sub category" [ref=e404]:
            - cell "Test Category" [ref=e405]: Test Category
            - cell "Add sub category" [ref=e408]:
              - link "Add sub category" [ref=e409] [cursor=pointer]:
                - /url: javascript:void(0);
            - cell [ref=e410]:
              - generic [ref=e411]:
                - link [ref=e412] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e413]
                - link [ref=e418] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e419]
                - link [ref=e421] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e422]
                - checkbox [checked] [ref=e425]
          - row
          - row "Recycled Cotton Cheese Add sub category" [ref=e427]:
            - cell "Recycled Cotton Cheese" [ref=e428]: Recycled Cotton Cheese
            - cell "Add sub category" [ref=e431]:
              - link "Add sub category" [ref=e432] [cursor=pointer]:
                - /url: javascript:void(0);
            - cell [ref=e433]:
              - generic [ref=e434]:
                - link [ref=e435] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e436]
                - link [ref=e441] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e442]
                - link [ref=e444] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e445]
                - checkbox [checked] [ref=e448]
          - row
          - row "testing_Abc Add sub category" [ref=e450]:
            - cell "testing_Abc" [ref=e451]: testing_Abc
            - cell "Add sub category" [ref=e454]:
              - link "Add sub category" [ref=e455] [cursor=pointer]:
                - /url: javascript:void(0);
            - cell [ref=e456]:
              - generic [ref=e457]:
                - link [ref=e458] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e459]
                - link [ref=e464] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e465]
                - link [ref=e467] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e468]
                - checkbox [checked] [ref=e471]
          - row
          - row "Biryani Add sub category" [ref=e473]:
            - cell "Biryani" [ref=e474]: Biryani
            - cell "Add sub category" [ref=e477]:
              - link "Add sub category" [ref=e478] [cursor=pointer]:
                - /url: javascript:void(0);
            - cell [ref=e479]:
              - generic [ref=e480]:
                - link [ref=e481] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e482]
                - link [ref=e487] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e488]
                - link [ref=e490] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e491]
                - checkbox [checked] [ref=e494]
          - row
          - row "All Desert Add sub category" [ref=e496]:
            - cell "All Desert" [ref=e497]: All Desert
            - cell "Add sub category" [ref=e500]:
              - link "Add sub category" [ref=e501] [cursor=pointer]:
                - /url: javascript:void(0);
            - cell [ref=e502]:
              - generic [ref=e503]:
                - link [ref=e504] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e505]
                - link [ref=e510] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e511]
                - link [ref=e513] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e514]
                - checkbox [checked] [ref=e517]
          - row
          - row "Drinks Add sub category" [ref=e519]:
            - cell "Drinks" [ref=e520]: Drinks
            - cell "Add sub category" [ref=e523]:
              - link "Add sub category" [ref=e524] [cursor=pointer]:
                - /url: javascript:void(0);
            - cell [ref=e525]:
              - generic [ref=e526]:
                - link [ref=e527] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e528]
                - link [ref=e533] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e534]
                - link [ref=e536] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e537]
                - checkbox [checked] [ref=e540]
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
  26 |       .getByText("Modern Marble Hat");
  27 |   }
  28 |   async openCreateItemModal() {
  29 |     await this.createItemBtn.click();
  30 |   }
  31 |   async saveItem(name, price) {
  32 |     await this.item_name.fill(name);
  33 |     await this.foodtypeDropdown.click();
  34 |     await this.vegeterian.click();
  35 |     await this.nonVegeterian.click();
  36 |     await this.item_price.click();
  37 |     await this.item_price.fill(price);
  38 |     await this.categoryNameDropdown.click();
  39 |     await this.RecycledCottonCheese.click();
  40 |     await this.Marblehat.scrollIntoViewIfNeeded();
  41 |     await this.Marblehat.click();
  42 |     await this.subCategoryDropdown.click();
> 43 |     await this.spicyFries.scrollIntoViewIfNeeded();
     |                           ^ TimeoutError: locator.scrollIntoViewIfNeeded: Timeout 10000ms exceeded.
  44 |     await this.spicyFries.click();
  45 |   }
  46 | }
  47 | module.exports = { items };
  48 | 
```