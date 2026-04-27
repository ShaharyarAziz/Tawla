# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Digital_Menu\DigitalMenu.spec.js >> User adds Items in Digital Menu
- Location: tests\Digital_Menu\DigitalMenu.spec.js:54:6

# Error details

```
Error: locator.scrollIntoViewIfNeeded: Error: strict mode violation: locator('#subcategory-options').getByText('Spicy Fries') resolved to 2 elements:
    1) <span>Spicy Fries</span> aka getByText('Spicy Fries').first()
    2) <span>Spicy Fries</span> aka getByText('Spicy Fries').nth(1)

Call log:
  - waiting for locator('#subcategory-options').getByText('Spicy Fries')

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
  - alert [ref=e78]:
    - generic [ref=e79]:
      - img [ref=e81]
      - generic [ref=e84]:
        - generic [ref=e85]: Scheduled closing time has passed
        - generic [ref=e87]: You are operating beyond your configured business hours.
      - button "Dismiss" [ref=e88] [cursor=pointer]:
        - img [ref=e89]
  - generic [ref=e92]:
    - heading "Digital Menu" [level=1] [ref=e93]
    - generic [ref=e94]:
      - link "Menu" [ref=e95] [cursor=pointer]:
        - /url: http://13.51.170.24/merchant/digitalmenu/menu/digitalMenuSection
      - link "Settings" [ref=e96] [cursor=pointer]:
        - /url: http://13.51.170.24/merchant/digitalmenu/settings
    - generic [ref=e98]:
      - generic [ref=e99]:
        - text: Main Menu
        - list [ref=e100]:
          - listitem [ref=e101]:
            - generic [ref=e102] [cursor=pointer]: + Create Category
          - listitem [ref=e103]:
            - generic [ref=e104] [cursor=pointer]: + Create Sub Category
          - listitem [ref=e105]:
            - generic [ref=e106] [cursor=pointer]: + Create Item
      - dialog [ref=e107]:
        - generic [ref=e109]:
          - generic [ref=e110]:
            - heading "Create Item" [level=2] [ref=e111]
            - button [ref=e112] [cursor=pointer]:
              - img [ref=e113]
          - generic [ref=e116]:
            - generic [ref=e117]:
              - generic [ref=e118]:
                - generic [ref=e119]:
                  - generic [ref=e120]: Item Name
                  - textbox "Item Name" [ref=e121]: Hot Pizza
                - generic [ref=e122]:
                  - generic [ref=e123]: Food Type
                  - generic [ref=e125] [cursor=pointer]:
                    - generic [ref=e126]:
                      - generic [ref=e127]:
                        - generic [ref=e128]: Vegetarian
                        - img [ref=e129]
                      - generic [ref=e131]:
                        - generic [ref=e132]: Non-Vegetarian
                        - img [ref=e133]
                    - img [ref=e135]
              - generic [ref=e137]:
                - generic [ref=e138]:
                  - generic [ref=e139]: Item Price
                  - generic [ref=e140]:
                    - textbox "Item Price" [ref=e141]:
                      - /placeholder: Enter Price
                      - text: "417.00"
                    - img [ref=e142]
                - generic [ref=e144]:
                  - generic [ref=e145]: Category
                  - generic [ref=e147] [cursor=pointer]:
                    - generic [ref=e148]:
                      - generic [ref=e149]:
                        - generic [ref=e150]: Recycled Cotton Cheese
                        - img [ref=e151]
                      - generic [ref=e153]:
                        - generic [ref=e154]: Modern Marble Hat
                        - img [ref=e155]
                    - img [ref=e157]
              - generic [ref=e159]:
                - generic [ref=e160]: Sub Category
                - generic [ref=e161]:
                  - generic [ref=e162] [cursor=pointer]:
                    - generic [ref=e163]: Select...
                    - img [ref=e164]
                  - generic [ref=e167]:
                    - generic [ref=e168] [cursor=pointer]:
                      - checkbox "BBQ Biryani" [ref=e169]
                      - generic [ref=e170]: BBQ Biryani
                    - generic [ref=e171] [cursor=pointer]:
                      - checkbox "Crispy Pasta" [ref=e172]
                      - generic [ref=e173]: Crispy Pasta
                    - generic [ref=e174] [cursor=pointer]:
                      - checkbox "BBQ Pizza" [ref=e175]
                      - generic [ref=e176]: BBQ Pizza
                    - generic [ref=e177] [cursor=pointer]:
                      - checkbox "Spicy Pizza" [ref=e178]
                      - generic [ref=e179]: Spicy Pizza
                    - generic [ref=e180] [cursor=pointer]:
                      - checkbox "Cheesy Burger" [ref=e181]
                      - generic [ref=e182]: Cheesy Burger
                    - generic [ref=e183] [cursor=pointer]:
                      - checkbox "Spicy Fries" [ref=e184]
                      - generic [ref=e185]: Spicy Fries
                    - generic [ref=e186] [cursor=pointer]:
                      - checkbox "Cheesy Sandwich" [ref=e187]
                      - generic [ref=e188]: Cheesy Sandwich
                    - generic [ref=e189] [cursor=pointer]:
                      - checkbox "Crispy Biryani" [ref=e190]
                      - generic [ref=e191]: Crispy Biryani
                    - generic [ref=e192] [cursor=pointer]:
                      - checkbox "Spicy Pizza" [ref=e193]
                      - generic [ref=e194]: Spicy Pizza
                    - generic [ref=e195] [cursor=pointer]:
                      - checkbox "Grilled Burger" [ref=e196]
                      - generic [ref=e197]: Grilled Burger
                    - generic [ref=e198] [cursor=pointer]:
                      - checkbox "Spicy Biryani" [ref=e199]
                      - generic [ref=e200]: Spicy Biryani
                    - generic [ref=e201] [cursor=pointer]:
                      - checkbox "Hot Biryani" [ref=e202]
                      - generic [ref=e203]: Hot Biryani
                    - generic [ref=e204] [cursor=pointer]:
                      - checkbox "Spicy Biryani" [ref=e205]
                      - generic [ref=e206]: Spicy Biryani
                    - generic [ref=e207] [cursor=pointer]:
                      - checkbox "Spicy Fries" [ref=e208]
                      - generic [ref=e209]: Spicy Fries
                    - generic [ref=e210] [cursor=pointer]:
                      - checkbox "BBQ Pasta" [ref=e211]
                      - generic [ref=e212]: BBQ Pasta
                    - generic [ref=e213] [cursor=pointer]:
                      - checkbox "Hot Sandwich" [ref=e214]
                      - generic [ref=e215]: Hot Sandwich
                    - generic [ref=e216] [cursor=pointer]:
                      - checkbox "Crispy Sandwich" [ref=e217]
                      - generic [ref=e218]: Crispy Sandwich
                    - generic [ref=e219] [cursor=pointer]:
                      - checkbox "Hot Sandwich" [ref=e220]
                      - generic [ref=e221]: Hot Sandwich
                    - generic [ref=e222] [cursor=pointer]:
                      - checkbox "Crispy Pizza" [ref=e223]
                      - generic [ref=e224]: Crispy Pizza
              - separator [ref=e225]
              - separator [ref=e226]
              - generic [ref=e228] [cursor=pointer]:
                - img [ref=e229]
                - paragraph [ref=e239]: Drag & drop your file(s) to start uploading
                - generic [ref=e242]: OR
                - button "Browse files" [ref=e244]
              - paragraph [ref=e245]: Recommended resolution of 500 x 500 px and max size of 1 MB
              - separator [ref=e246]
              - generic [ref=e247]:
                - generic [ref=e248]: Item Description
                - textbox "Item Description" [ref=e249]:
                  - /placeholder: Enter Item Description
              - generic [ref=e251]: Add Arabic Translation
            - generic [ref=e255]:
              - button "Cancel" [ref=e256] [cursor=pointer]
              - button "Save Item" [ref=e257] [cursor=pointer]
      - generic [ref=e258]:
        - heading "Super Admins" [level=2] [ref=e259]
        - textbox "Search Menu Item" [ref=e262]
      - table [ref=e264]:
        - rowgroup [ref=e265]:
          - row
          - row "Tasty Aluminum Gloves Add sub category" [ref=e266]:
            - cell "Tasty Aluminum Gloves" [ref=e267]: Tasty Aluminum Gloves
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
          - row "Modern Marble Hat Add sub category" [ref=e289]:
            - cell "Modern Marble Hat" [ref=e290]: Modern Marble Hat
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
          - row "Elegant Concrete Bike Add sub category" [ref=e312]:
            - cell "Elegant Concrete Bike" [ref=e313]: Elegant Concrete Bike
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
          - row "Frozen Aluminum Chair Add sub category" [ref=e335]:
            - cell "Frozen Aluminum Chair" [ref=e336]: Frozen Aluminum Chair
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
          - row "Soft Wooden Chair Add sub category" [ref=e358]:
            - cell "Soft Wooden Chair" [ref=e359]: Soft Wooden Chair
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
          - row "Cheesy Pizza 2372 Add sub category" [ref=e381]:
            - cell "Cheesy Pizza 2372" [ref=e382]: Cheesy Pizza 2372
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
          - 'row "Spicy Pasta // {faker.number.int(9999)} Add sub category" [ref=e404]':
            - 'cell "Spicy Pasta // {faker.number.int(9999)}" [ref=e405]': "Spicy Pasta // {faker.number.int(9999)}"
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
          - row "Grilled Pizza Add sub category" [ref=e427]:
            - cell "Grilled Pizza" [ref=e428]: Grilled Pizza
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
          - row "Test Category Add sub category" [ref=e450]:
            - cell "Test Category" [ref=e451]: Test Category
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
          - row "Recycled Cotton Cheese Add sub category" [ref=e473]:
            - cell "Recycled Cotton Cheese" [ref=e474]: Recycled Cotton Cheese
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
          - row "testing_Abc Add sub category" [ref=e496]:
            - cell "testing_Abc" [ref=e497]: testing_Abc
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
          - row "Biryani Add sub category" [ref=e519]:
            - cell "Biryani" [ref=e520]: Biryani
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
          - row
          - row "All Desert Add sub category" [ref=e542]:
            - cell "All Desert" [ref=e543]: All Desert
            - cell "Add sub category" [ref=e546]:
              - link "Add sub category" [ref=e547] [cursor=pointer]:
                - /url: javascript:void(0);
            - cell [ref=e548]:
              - generic [ref=e549]:
                - link [ref=e550] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e551]
                - link [ref=e556] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e557]
                - link [ref=e559] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e560]
                - checkbox [checked] [ref=e563]
          - row
          - row "Drinks Add sub category" [ref=e565]:
            - cell "Drinks" [ref=e566]: Drinks
            - cell "Add sub category" [ref=e569]:
              - link "Add sub category" [ref=e570] [cursor=pointer]:
                - /url: javascript:void(0);
            - cell [ref=e571]:
              - generic [ref=e572]:
                - link [ref=e573] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e574]
                - link [ref=e579] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e580]
                - link [ref=e582] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e583]
                - checkbox [checked] [ref=e586]
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
  11 |     this.foodtypeDropdown = this.page.locator(
  12 |       '[data-dropdown="food-type-dropdown"]',
  13 |     );
  14 |     this.vegeterian = page.getByText("Vegetarian", { exact: true });
  15 |     this.nonVegeterian = page.locator('input[value="non-vegetarian"]');
  16 |     this.item_price = page.locator("input#item_price");
  17 |     this.categoryNameDropdown = page.locator("span#category-label");
  18 |     this.Marblehat = page
  19 |       .locator("#category-dropdown")
  20 |       .getByText("Modern Marble Hat");
  21 | 
  22 |     this.RecycledCottonCheese = page
  23 |       .locator("#category-dropdown")
  24 |       .getByText("Recycled Cotton Cheese");
  25 | 
  26 |     this.subCategoryDropdown = page.locator(
  27 |       '[data-dropdown="subcategory-dropdown"]',
  28 |     );
  29 |     this.spicyFries = page
  30 |       .locator("#subcategory-options")
  31 |       .getByText("Spicy Fries");
  32 |     this.fileInput = page.locator("#item_image");
  33 |     this.itemDescription = page.locator("#description");
  34 |   }
  35 | 
  36 |   async openCreateItemModal() {
  37 |     await this.createItemBtn.click();
  38 |   }
  39 |   async saveItem(name, price) {
  40 |     await this.item_name.fill(name);
  41 |     await this.foodtypeDropdown.click();
  42 |     await this.vegeterian.click();
  43 |     await this.nonVegeterian.click();
  44 |     await this.item_price.click();
  45 |     await this.item_price.fill(price);
  46 |     await this.categoryNameDropdown.click();
  47 |     await this.RecycledCottonCheese.click();
  48 |     await this.Marblehat.scrollIntoViewIfNeeded();
  49 |     await this.Marblehat.click();
  50 |     // await this.subCategoryDropdown.waitFor({ state: "visible" });
  51 |     await this.subCategoryDropdown.click();
> 52 |     await this.spicyFries.scrollIntoViewIfNeeded();
     |                           ^ Error: locator.scrollIntoViewIfNeeded: Error: strict mode violation: locator('#subcategory-options').getByText('Spicy Fries') resolved to 2 elements:
  53 |     await this.spicyFries.click();
  54 |     await this.fileInput.setInputFiles(
  55 |       "E:/Automation_Testing/Tawla_Automation/utils/png-transparent-full-breakfast-british-cuisine-english-cuisine-breakfast-sausage-woodbury-commons-outlet-food-breakfast-recipe-thumbnail.png",
  56 |     );
  57 |     await this.itemDescription.fill(generateFoodDescription());
  58 |     await this.page.getByRole("button", { name: "Save Item" }).click();
  59 |     await this.page.pause();
  60 |   }
  61 | }
  62 | module.exports = { items };
  63 | 
```