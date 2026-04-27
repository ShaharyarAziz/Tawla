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
                  - textbox "Item Name" [ref=e121]: Crispy Fries
                - generic [ref=e122]:
                  - generic [ref=e123]: Food Type
                  - generic [ref=e124]:
                    - generic [ref=e125] [cursor=pointer]:
                      - generic [ref=e126]:
                        - generic [ref=e127]:
                          - generic [ref=e128]: Vegetarian
                          - img [ref=e129]
                        - generic [ref=e131]:
                          - generic [ref=e132]: Non-Vegetarian
                          - img [ref=e133]
                      - img [ref=e135]
                    - generic [ref=e138]:
                      - generic [ref=e139] [cursor=pointer]:
                        - checkbox "Vegetarian" [checked] [ref=e140]
                        - generic [ref=e141]: Vegetarian
                      - generic [ref=e142] [cursor=pointer]:
                        - checkbox "Non-Vegetarian" [checked] [ref=e143]
                        - generic [ref=e144]: Non-Vegetarian
                      - generic [ref=e145] [cursor=pointer]:
                        - checkbox "Variations" [ref=e146]
                        - generic [ref=e147]: Variations
              - generic [ref=e148]:
                - generic [ref=e149]:
                  - generic [ref=e150]: Item Price
                  - generic [ref=e151]:
                    - textbox "Item Price" [active] [ref=e152]:
                      - /placeholder: Enter Price
                      - text: "145.00"
                    - img [ref=e153]
                - generic [ref=e155]:
                  - generic [ref=e156]: Category
                  - generic [ref=e158] [cursor=pointer]:
                    - generic [ref=e159]: Select...
                    - img [ref=e160]
              - generic [ref=e162]:
                - generic [ref=e163]: Sub Category
                - generic [ref=e165] [cursor=pointer]:
                  - generic [ref=e166]: Select...
                  - img [ref=e167]
              - separator [ref=e169]
              - separator [ref=e170]
              - generic [ref=e172] [cursor=pointer]:
                - img [ref=e173]
                - paragraph [ref=e183]: Drag & drop your file(s) to start uploading
                - generic [ref=e186]: OR
                - button "Browse files" [ref=e188]
              - paragraph [ref=e189]: Recommended resolution of 500 x 500 px and max size of 1 MB
              - separator [ref=e190]
              - generic [ref=e191]:
                - generic [ref=e192]: Item Description
                - textbox "Item Description" [ref=e193]:
                  - /placeholder: Enter Item Description
              - generic [ref=e195]: Add Arabic Translation
            - generic [ref=e199]:
              - button "Cancel" [ref=e200] [cursor=pointer]
              - button "Save Item" [ref=e201] [cursor=pointer]
      - generic [ref=e202]:
        - heading "Super Admins" [level=2] [ref=e203]
        - textbox "Search Menu Item" [ref=e206]
      - table [ref=e208]:
        - rowgroup [ref=e209]:
          - row
          - row "Tasty Aluminum Gloves Add sub category" [ref=e210]:
            - cell "Tasty Aluminum Gloves" [ref=e211]: Tasty Aluminum Gloves
            - cell "Add sub category" [ref=e214]:
              - link "Add sub category" [ref=e215] [cursor=pointer]:
                - /url: javascript:void(0);
            - cell [ref=e216]:
              - generic [ref=e217]:
                - link [ref=e218] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e219]
                - link [ref=e224] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e225]
                - link [ref=e227] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e228]
                - checkbox [checked] [ref=e231]
          - row
          - row "Modern Marble Hat Add sub category" [ref=e233]:
            - cell "Modern Marble Hat" [ref=e234]: Modern Marble Hat
            - cell "Add sub category" [ref=e237]:
              - link "Add sub category" [ref=e238] [cursor=pointer]:
                - /url: javascript:void(0);
            - cell [ref=e239]:
              - generic [ref=e240]:
                - link [ref=e241] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e242]
                - link [ref=e247] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e248]
                - link [ref=e250] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e251]
                - checkbox [checked] [ref=e254]
          - row
          - row "Elegant Concrete Bike Add sub category" [ref=e256]:
            - cell "Elegant Concrete Bike" [ref=e257]: Elegant Concrete Bike
            - cell "Add sub category" [ref=e260]:
              - link "Add sub category" [ref=e261] [cursor=pointer]:
                - /url: javascript:void(0);
            - cell [ref=e262]:
              - generic [ref=e263]:
                - link [ref=e264] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e265]
                - link [ref=e270] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e271]
                - link [ref=e273] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e274]
                - checkbox [checked] [ref=e277]
          - row
          - row "Frozen Aluminum Chair Add sub category" [ref=e279]:
            - cell "Frozen Aluminum Chair" [ref=e280]: Frozen Aluminum Chair
            - cell "Add sub category" [ref=e283]:
              - link "Add sub category" [ref=e284] [cursor=pointer]:
                - /url: javascript:void(0);
            - cell [ref=e285]:
              - generic [ref=e286]:
                - link [ref=e287] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e288]
                - link [ref=e293] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e294]
                - link [ref=e296] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e297]
                - checkbox [checked] [ref=e300]
          - row
          - row "Soft Wooden Chair Add sub category" [ref=e302]:
            - cell "Soft Wooden Chair" [ref=e303]: Soft Wooden Chair
            - cell "Add sub category" [ref=e306]:
              - link "Add sub category" [ref=e307] [cursor=pointer]:
                - /url: javascript:void(0);
            - cell [ref=e308]:
              - generic [ref=e309]:
                - link [ref=e310] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e311]
                - link [ref=e316] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e317]
                - link [ref=e319] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e320]
                - checkbox [checked] [ref=e323]
          - row
          - row "Cheesy Pizza 2372 Add sub category" [ref=e325]:
            - cell "Cheesy Pizza 2372" [ref=e326]: Cheesy Pizza 2372
            - cell "Add sub category" [ref=e329]:
              - link "Add sub category" [ref=e330] [cursor=pointer]:
                - /url: javascript:void(0);
            - cell [ref=e331]:
              - generic [ref=e332]:
                - link [ref=e333] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e334]
                - link [ref=e339] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e340]
                - link [ref=e342] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e343]
                - checkbox [checked] [ref=e346]
          - row
          - 'row "Spicy Pasta // {faker.number.int(9999)} Add sub category" [ref=e348]':
            - 'cell "Spicy Pasta // {faker.number.int(9999)}" [ref=e349]': "Spicy Pasta // {faker.number.int(9999)}"
            - cell "Add sub category" [ref=e352]:
              - link "Add sub category" [ref=e353] [cursor=pointer]:
                - /url: javascript:void(0);
            - cell [ref=e354]:
              - generic [ref=e355]:
                - link [ref=e356] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e357]
                - link [ref=e362] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e363]
                - link [ref=e365] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e366]
                - checkbox [checked] [ref=e369]
          - row
          - row "Grilled Pizza Add sub category" [ref=e371]:
            - cell "Grilled Pizza" [ref=e372]: Grilled Pizza
            - cell "Add sub category" [ref=e375]:
              - link "Add sub category" [ref=e376] [cursor=pointer]:
                - /url: javascript:void(0);
            - cell [ref=e377]:
              - generic [ref=e378]:
                - link [ref=e379] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e380]
                - link [ref=e385] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e386]
                - link [ref=e388] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e389]
                - checkbox [checked] [ref=e392]
          - row
          - row "Test Category Add sub category" [ref=e394]:
            - cell "Test Category" [ref=e395]: Test Category
            - cell "Add sub category" [ref=e398]:
              - link "Add sub category" [ref=e399] [cursor=pointer]:
                - /url: javascript:void(0);
            - cell [ref=e400]:
              - generic [ref=e401]:
                - link [ref=e402] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e403]
                - link [ref=e408] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e409]
                - link [ref=e411] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e412]
                - checkbox [checked] [ref=e415]
          - row
          - row "Recycled Cotton Cheese Add sub category" [ref=e417]:
            - cell "Recycled Cotton Cheese" [ref=e418]: Recycled Cotton Cheese
            - cell "Add sub category" [ref=e421]:
              - link "Add sub category" [ref=e422] [cursor=pointer]:
                - /url: javascript:void(0);
            - cell [ref=e423]:
              - generic [ref=e424]:
                - link [ref=e425] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e426]
                - link [ref=e431] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e432]
                - link [ref=e434] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e435]
                - checkbox [checked] [ref=e438]
          - row
          - row "testing_Abc Add sub category" [ref=e440]:
            - cell "testing_Abc" [ref=e441]: testing_Abc
            - cell "Add sub category" [ref=e444]:
              - link "Add sub category" [ref=e445] [cursor=pointer]:
                - /url: javascript:void(0);
            - cell [ref=e446]:
              - generic [ref=e447]:
                - link [ref=e448] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e449]
                - link [ref=e454] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e455]
                - link [ref=e457] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e458]
                - checkbox [checked] [ref=e461]
          - row
          - row "Biryani Add sub category" [ref=e463]:
            - cell "Biryani" [ref=e464]: Biryani
            - cell "Add sub category" [ref=e467]:
              - link "Add sub category" [ref=e468] [cursor=pointer]:
                - /url: javascript:void(0);
            - cell [ref=e469]:
              - generic [ref=e470]:
                - link [ref=e471] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e472]
                - link [ref=e477] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e478]
                - link [ref=e480] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e481]
                - checkbox [checked] [ref=e484]
          - row
          - row "All Desert Add sub category" [ref=e486]:
            - cell "All Desert" [ref=e487]: All Desert
            - cell "Add sub category" [ref=e490]:
              - link "Add sub category" [ref=e491] [cursor=pointer]:
                - /url: javascript:void(0);
            - cell [ref=e492]:
              - generic [ref=e493]:
                - link [ref=e494] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e495]
                - link [ref=e500] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e501]
                - link [ref=e503] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e504]
                - checkbox [checked] [ref=e507]
          - row
          - row "Drinks Add sub category" [ref=e509]:
            - cell "Drinks" [ref=e510]: Drinks
            - cell "Add sub category" [ref=e513]:
              - link "Add sub category" [ref=e514] [cursor=pointer]:
                - /url: javascript:void(0);
            - cell [ref=e515]:
              - generic [ref=e516]:
                - link [ref=e517] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e518]
                - link [ref=e523] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e524]
                - link [ref=e526] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e527]
                - checkbox [checked] [ref=e530]
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
  17  |     this.nonVegeterian = page.getByText("Non-Vegetarian", { exact: true });
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
  74  |     await this.nonVegeterian.click();
  75  | 
  76  |     await this.item_price.fill(price);
  77  | 
> 78  |     await this.categoryNameDropdown.click();
      |                                     ^ TimeoutError: locator.click: Timeout 10000ms exceeded.
  79  |     await this.RecycledCottonCheese.click();
  80  | 
  81  |     await this.Marblehat.scrollIntoViewIfNeeded();
  82  |     await this.Marblehat.click();
  83  | 
  84  |     // ✅ Open subcategory dropdown
  85  |     await this.subCategoryDropdown.click();
  86  | 
  87  |     // 🔥 USE SCROLL FUNCTION HERE
  88  |     await this.scrollAndSelectSubCategory("Spicy Fries");
  89  | 
  90  |     await this.fileInput.setInputFiles(
  91  |       "E:/Automation_Testing/Tawla_Automation/utils/png-transparent-full-breakfast-british-cuisine-english-cuisine-breakfast-sausage-woodbury-commons-outlet-food-breakfast-recipe-thumbnail.png",
  92  |     );
  93  | 
  94  |     await this.itemDescription.fill(generateFoodDescription());
  95  | 
  96  |     await this.page.getByRole("button", { name: "Save Item" }).click();
  97  | 
  98  |     await this.page.pause();
  99  |   }
  100 | }
  101 | 
  102 | module.exports = { items };
  103 | 
```