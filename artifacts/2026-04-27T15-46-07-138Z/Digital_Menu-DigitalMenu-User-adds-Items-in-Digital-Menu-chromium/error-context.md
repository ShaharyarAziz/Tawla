# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Digital_Menu\DigitalMenu.spec.js >> User adds Items in Digital Menu
- Location: tests\Digital_Menu\DigitalMenu.spec.js:54:6

# Error details

```
TimeoutError: locator.click: Timeout 10000ms exceeded.
Call log:
  - waiting for locator('span#category-label')
    - locator resolved to <span id="category-label">Select...</span>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <span>Non-Vegetarian</span> from <div>…</div> subtree intercepts pointer events
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <span>Non-Vegetarian</span> from <div>…</div> subtree intercepts pointer events
    - retrying click action
      - waiting 100ms
    19 × waiting for element to be visible, enabled and stable
       - element is visible, enabled and stable
       - scrolling into view if needed
       - done scrolling
       - <span>Non-Vegetarian</span> from <div>…</div> subtree intercepts pointer events
     - retrying click action
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
                  - textbox "Item Name" [ref=e121]: Hot Sandwich
                - generic [ref=e122]:
                  - generic [ref=e123]: Food Type
                  - generic [ref=e124]:
                    - generic [ref=e125] [cursor=pointer]:
                      - generic [ref=e127]:
                        - generic [ref=e128]: Vegetarian
                        - img [ref=e129]
                      - img [ref=e131]
                    - generic [ref=e134]:
                      - generic [ref=e135] [cursor=pointer]:
                        - checkbox "Vegetarian" [checked] [ref=e136]
                        - generic [ref=e137]: Vegetarian
                      - generic [ref=e138] [cursor=pointer]:
                        - checkbox "Non-Vegetarian" [ref=e139]
                        - generic [ref=e140]: Non-Vegetarian
                      - generic [ref=e141] [cursor=pointer]:
                        - checkbox "Variations" [ref=e142]
                        - generic [ref=e143]: Variations
              - generic [ref=e144]:
                - generic [ref=e145]:
                  - generic [ref=e146]: Item Price
                  - generic [ref=e147]:
                    - textbox "Item Price" [active] [ref=e148]:
                      - /placeholder: Enter Price
                      - text: "150.00"
                    - img [ref=e149]
                - generic [ref=e151]:
                  - generic [ref=e152]: Category
                  - generic [ref=e154] [cursor=pointer]:
                    - generic [ref=e155]: Select...
                    - img [ref=e156]
              - generic [ref=e158]:
                - generic [ref=e159]: Sub Category
                - generic [ref=e161] [cursor=pointer]:
                  - generic [ref=e162]: Select...
                  - img [ref=e163]
              - separator [ref=e165]
              - separator [ref=e166]
              - generic [ref=e168] [cursor=pointer]:
                - img [ref=e169]
                - paragraph [ref=e179]: Drag & drop your file(s) to start uploading
                - generic [ref=e182]: OR
                - button "Browse files" [ref=e184]
              - paragraph [ref=e185]: Recommended resolution of 500 x 500 px and max size of 1 MB
              - separator [ref=e186]
              - generic [ref=e187]:
                - generic [ref=e188]: Item Description
                - textbox "Item Description" [ref=e189]:
                  - /placeholder: Enter Item Description
              - generic [ref=e191]: Add Arabic Translation
            - generic [ref=e195]:
              - button "Cancel" [ref=e196] [cursor=pointer]
              - button "Save Item" [ref=e197] [cursor=pointer]
      - generic [ref=e198]:
        - heading "Super Admins" [level=2] [ref=e199]
        - textbox "Search Menu Item" [ref=e202]
      - table [ref=e204]:
        - rowgroup [ref=e205]:
          - row
          - row "Tasty Aluminum Gloves Add sub category" [ref=e206]:
            - cell "Tasty Aluminum Gloves" [ref=e207]: Tasty Aluminum Gloves
            - cell "Add sub category" [ref=e210]:
              - link "Add sub category" [ref=e211] [cursor=pointer]:
                - /url: javascript:void(0);
            - cell [ref=e212]:
              - generic [ref=e213]:
                - link [ref=e214] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e215]
                - link [ref=e220] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e221]
                - link [ref=e223] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e224]
                - checkbox [checked] [ref=e227]
          - row
          - row "Modern Marble Hat Add sub category" [ref=e229]:
            - cell "Modern Marble Hat" [ref=e230]: Modern Marble Hat
            - cell "Add sub category" [ref=e233]:
              - link "Add sub category" [ref=e234] [cursor=pointer]:
                - /url: javascript:void(0);
            - cell [ref=e235]:
              - generic [ref=e236]:
                - link [ref=e237] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e238]
                - link [ref=e243] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e244]
                - link [ref=e246] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e247]
                - checkbox [checked] [ref=e250]
          - row
          - row "Elegant Concrete Bike Add sub category" [ref=e252]:
            - cell "Elegant Concrete Bike" [ref=e253]: Elegant Concrete Bike
            - cell "Add sub category" [ref=e256]:
              - link "Add sub category" [ref=e257] [cursor=pointer]:
                - /url: javascript:void(0);
            - cell [ref=e258]:
              - generic [ref=e259]:
                - link [ref=e260] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e261]
                - link [ref=e266] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e267]
                - link [ref=e269] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e270]
                - checkbox [checked] [ref=e273]
          - row
          - row "Frozen Aluminum Chair Add sub category" [ref=e275]:
            - cell "Frozen Aluminum Chair" [ref=e276]: Frozen Aluminum Chair
            - cell "Add sub category" [ref=e279]:
              - link "Add sub category" [ref=e280] [cursor=pointer]:
                - /url: javascript:void(0);
            - cell [ref=e281]:
              - generic [ref=e282]:
                - link [ref=e283] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e284]
                - link [ref=e289] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e290]
                - link [ref=e292] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e293]
                - checkbox [checked] [ref=e296]
          - row
          - row "Soft Wooden Chair Add sub category" [ref=e298]:
            - cell "Soft Wooden Chair" [ref=e299]: Soft Wooden Chair
            - cell "Add sub category" [ref=e302]:
              - link "Add sub category" [ref=e303] [cursor=pointer]:
                - /url: javascript:void(0);
            - cell [ref=e304]:
              - generic [ref=e305]:
                - link [ref=e306] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e307]
                - link [ref=e312] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e313]
                - link [ref=e315] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e316]
                - checkbox [checked] [ref=e319]
          - row
          - row "Cheesy Pizza 2372 Add sub category" [ref=e321]:
            - cell "Cheesy Pizza 2372" [ref=e322]: Cheesy Pizza 2372
            - cell "Add sub category" [ref=e325]:
              - link "Add sub category" [ref=e326] [cursor=pointer]:
                - /url: javascript:void(0);
            - cell [ref=e327]:
              - generic [ref=e328]:
                - link [ref=e329] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e330]
                - link [ref=e335] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e336]
                - link [ref=e338] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e339]
                - checkbox [checked] [ref=e342]
          - row
          - 'row "Spicy Pasta // {faker.number.int(9999)} Add sub category" [ref=e344]':
            - 'cell "Spicy Pasta // {faker.number.int(9999)}" [ref=e345]': "Spicy Pasta // {faker.number.int(9999)}"
            - cell "Add sub category" [ref=e348]:
              - link "Add sub category" [ref=e349] [cursor=pointer]:
                - /url: javascript:void(0);
            - cell [ref=e350]:
              - generic [ref=e351]:
                - link [ref=e352] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e353]
                - link [ref=e358] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e359]
                - link [ref=e361] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e362]
                - checkbox [checked] [ref=e365]
          - row
          - row "Grilled Pizza Add sub category" [ref=e367]:
            - cell "Grilled Pizza" [ref=e368]: Grilled Pizza
            - cell "Add sub category" [ref=e371]:
              - link "Add sub category" [ref=e372] [cursor=pointer]:
                - /url: javascript:void(0);
            - cell [ref=e373]:
              - generic [ref=e374]:
                - link [ref=e375] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e376]
                - link [ref=e381] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e382]
                - link [ref=e384] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e385]
                - checkbox [checked] [ref=e388]
          - row
          - row "Test Category Add sub category" [ref=e390]:
            - cell "Test Category" [ref=e391]: Test Category
            - cell "Add sub category" [ref=e394]:
              - link "Add sub category" [ref=e395] [cursor=pointer]:
                - /url: javascript:void(0);
            - cell [ref=e396]:
              - generic [ref=e397]:
                - link [ref=e398] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e399]
                - link [ref=e404] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e405]
                - link [ref=e407] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e408]
                - checkbox [checked] [ref=e411]
          - row
          - row "Recycled Cotton Cheese Add sub category" [ref=e413]:
            - cell "Recycled Cotton Cheese" [ref=e414]: Recycled Cotton Cheese
            - cell "Add sub category" [ref=e417]:
              - link "Add sub category" [ref=e418] [cursor=pointer]:
                - /url: javascript:void(0);
            - cell [ref=e419]:
              - generic [ref=e420]:
                - link [ref=e421] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e422]
                - link [ref=e427] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e428]
                - link [ref=e430] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e431]
                - checkbox [checked] [ref=e434]
          - row
          - row "testing_Abc Add sub category" [ref=e436]:
            - cell "testing_Abc" [ref=e437]: testing_Abc
            - cell "Add sub category" [ref=e440]:
              - link "Add sub category" [ref=e441] [cursor=pointer]:
                - /url: javascript:void(0);
            - cell [ref=e442]:
              - generic [ref=e443]:
                - link [ref=e444] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e445]
                - link [ref=e450] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e451]
                - link [ref=e453] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e454]
                - checkbox [checked] [ref=e457]
          - row
          - row "Biryani Add sub category" [ref=e459]:
            - cell "Biryani" [ref=e460]: Biryani
            - cell "Add sub category" [ref=e463]:
              - link "Add sub category" [ref=e464] [cursor=pointer]:
                - /url: javascript:void(0);
            - cell [ref=e465]:
              - generic [ref=e466]:
                - link [ref=e467] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e468]
                - link [ref=e473] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e474]
                - link [ref=e476] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e477]
                - checkbox [checked] [ref=e480]
          - row
          - row "All Desert Add sub category" [ref=e482]:
            - cell "All Desert" [ref=e483]: All Desert
            - cell "Add sub category" [ref=e486]:
              - link "Add sub category" [ref=e487] [cursor=pointer]:
                - /url: javascript:void(0);
            - cell [ref=e488]:
              - generic [ref=e489]:
                - link [ref=e490] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e491]
                - link [ref=e496] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e497]
                - link [ref=e499] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e500]
                - checkbox [checked] [ref=e503]
          - row
          - row "Drinks Add sub category" [ref=e505]:
            - cell "Drinks" [ref=e506]: Drinks
            - cell "Add sub category" [ref=e509]:
              - link "Add sub category" [ref=e510] [cursor=pointer]:
                - /url: javascript:void(0);
            - cell [ref=e511]:
              - generic [ref=e512]:
                - link [ref=e513] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e514]
                - link [ref=e519] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e520]
                - link [ref=e522] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e523]
                - checkbox [checked] [ref=e526]
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
  12  |     this.foodtypeDropdown = page.locator(
  13  |       '[data-dropdown="food-type-dropdown"]',
  14  |     );
  15  | 
  16  |     this.vegeterian = page.getByText("Vegetarian", { exact: true });
  17  | 
  18  |     this.item_price = page.locator("input#item_price");
  19  | 
  20  |     this.categoryNameDropdown = page.locator("span#category-label");
  21  | 
  22  |     this.Marblehat = page
  23  |       .locator("#category-dropdown")
  24  |       .getByText("Modern Marble Hat");
  25  | 
  26  |     this.RecycledCottonCheese = page
  27  |       .locator("#category-dropdown")
  28  |       .getByText("Recycled Cotton Cheese");
  29  | 
  30  |     this.subCategoryDropdown = page.locator(
  31  |       '[data-dropdown="subcategory-dropdown"]',
  32  |     );
  33  | 
  34  |     this.fileInput = page.locator("#item_image");
  35  |     this.itemDescription = page.locator("#description");
  36  |   }
  37  | 
  38  |   async openCreateItemModal() {
  39  |     await this.createItemBtn.click();
  40  |   }
  41  | 
  42  |   // 🔥 NEW: reusable scroll function
  43  |   async scrollAndSelectSubCategory(text) {
  44  |     const container = this.page.locator("#subcategory-dropdown");
  45  | 
  46  |     await container.waitFor({ state: "visible" });
  47  | 
  48  |     let found = false;
  49  | 
  50  |     for (let i = 0; i < 15; i++) {
  51  |       const item = container.locator("span", { hasText: text });
  52  | 
  53  |       if ((await item.count()) > 0) {
  54  |         await item.first().click();
  55  |         found = true;
  56  |         break;
  57  |       }
  58  | 
  59  |       // 🔽 scroll inside dropdown
  60  |       await container.evaluate((el) => el.scrollBy(0, 200));
  61  |       await this.page.waitForTimeout(200);
  62  |     }
  63  | 
  64  |     if (!found) {
  65  |       throw new Error(`❌ ${text} not found in subcategory dropdown`);
  66  |     }
  67  |   }
  68  | 
  69  |   async saveItem(name, price) {
  70  |     await this.item_name.fill(name);
  71  | 
  72  |     await this.foodtypeDropdown.click();
  73  |     await this.vegeterian.click();
  74  | 
  75  |     await this.item_price.fill(price);
  76  | 
> 77  |     await this.categoryNameDropdown.click();
      |                                     ^ TimeoutError: locator.click: Timeout 10000ms exceeded.
  78  |     await this.RecycledCottonCheese.click();
  79  | 
  80  |     await this.Marblehat.scrollIntoViewIfNeeded();
  81  |     await this.Marblehat.click();
  82  | 
  83  |     // ✅ Open subcategory dropdown
  84  |     await this.subCategoryDropdown.click();
  85  | 
  86  |     // 🔥 USE SCROLL FUNCTION HERE
  87  |     await this.scrollAndSelectSubCategory("Spicy Fries");
  88  | 
  89  |     await this.fileInput.setInputFiles(
  90  |       "E:/Automation_Testing/Tawla_Automation/utils/png-transparent-full-breakfast-british-cuisine-english-cuisine-breakfast-sausage-woodbury-commons-outlet-food-breakfast-recipe-thumbnail.png",
  91  |     );
  92  | 
  93  |     await this.itemDescription.fill(generateFoodDescription());
  94  | 
  95  |     await this.page.getByRole("button", { name: "Save Item" }).click();
  96  | 
  97  |     await this.page.pause();
  98  |   }
  99  | }
  100 | 
  101 | module.exports = { items };
  102 | 
```