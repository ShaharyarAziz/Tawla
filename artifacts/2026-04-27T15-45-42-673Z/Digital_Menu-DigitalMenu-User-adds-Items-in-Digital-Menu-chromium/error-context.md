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
      - element is not stable
    - retrying click action
    - waiting 20ms
    - waiting for element to be visible, enabled and stable
    - element is not stable
  2 × retrying click action
      - waiting 100ms
      - waiting for element to be visible, enabled and stable
      - element is not visible
  18 × retrying click action
       - waiting 500ms
       - waiting for element to be visible, enabled and stable
       - element is not visible
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
      - generic [ref=e107]:
        - heading "Super Admins" [level=2] [ref=e108]
        - textbox "Search Menu Item" [ref=e111]
      - table [ref=e113]:
        - rowgroup [ref=e114]:
          - row
          - row "Tasty Aluminum Gloves Add sub category" [ref=e115]:
            - cell "Tasty Aluminum Gloves" [ref=e116]: Tasty Aluminum Gloves
            - cell "Add sub category" [ref=e119]:
              - link "Add sub category" [ref=e120] [cursor=pointer]:
                - /url: javascript:void(0);
            - cell [ref=e121]:
              - generic [ref=e122]:
                - link [ref=e123] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e124]
                - link [ref=e129] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e130]
                - link [ref=e132] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e133]
                - checkbox [checked] [ref=e136]
          - row
          - row "Modern Marble Hat Add sub category" [ref=e138]:
            - cell "Modern Marble Hat" [ref=e139]: Modern Marble Hat
            - cell "Add sub category" [ref=e142]:
              - link "Add sub category" [ref=e143] [cursor=pointer]:
                - /url: javascript:void(0);
            - cell [ref=e144]:
              - generic [ref=e145]:
                - link [ref=e146] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e147]
                - link [ref=e152] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e153]
                - link [ref=e155] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e156]
                - checkbox [checked] [ref=e159]
          - row
          - row "Elegant Concrete Bike Add sub category" [ref=e161]:
            - cell "Elegant Concrete Bike" [ref=e162]: Elegant Concrete Bike
            - cell "Add sub category" [ref=e165]:
              - link "Add sub category" [ref=e166] [cursor=pointer]:
                - /url: javascript:void(0);
            - cell [ref=e167]:
              - generic [ref=e168]:
                - link [ref=e169] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e170]
                - link [ref=e175] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e176]
                - link [ref=e178] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e179]
                - checkbox [checked] [ref=e182]
          - row
          - row "Frozen Aluminum Chair Add sub category" [ref=e184]:
            - cell "Frozen Aluminum Chair" [ref=e185]: Frozen Aluminum Chair
            - cell "Add sub category" [ref=e188]:
              - link "Add sub category" [ref=e189] [cursor=pointer]:
                - /url: javascript:void(0);
            - cell [ref=e190]:
              - generic [ref=e191]:
                - link [ref=e192] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e193]
                - link [ref=e198] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e199]
                - link [ref=e201] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e202]
                - checkbox [checked] [ref=e205]
          - row
          - row "Soft Wooden Chair Add sub category" [ref=e207]:
            - cell "Soft Wooden Chair" [ref=e208]: Soft Wooden Chair
            - cell "Add sub category" [ref=e211]:
              - link "Add sub category" [ref=e212] [cursor=pointer]:
                - /url: javascript:void(0);
            - cell [ref=e213]:
              - generic [ref=e214]:
                - link [ref=e215] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e216]
                - link [ref=e221] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e222]
                - link [ref=e224] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e225]
                - checkbox [checked] [ref=e228]
          - row
          - row "Cheesy Pizza 2372 Add sub category" [ref=e230]:
            - cell "Cheesy Pizza 2372" [ref=e231]: Cheesy Pizza 2372
            - cell "Add sub category" [ref=e234]:
              - link "Add sub category" [ref=e235] [cursor=pointer]:
                - /url: javascript:void(0);
            - cell [ref=e236]:
              - generic [ref=e237]:
                - link [ref=e238] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e239]
                - link [ref=e244] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e245]
                - link [ref=e247] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e248]
                - checkbox [checked] [ref=e251]
          - row
          - 'row "Spicy Pasta // {faker.number.int(9999)} Add sub category" [ref=e253]':
            - 'cell "Spicy Pasta // {faker.number.int(9999)}" [ref=e254]': "Spicy Pasta // {faker.number.int(9999)}"
            - cell "Add sub category" [ref=e257]:
              - link "Add sub category" [ref=e258] [cursor=pointer]:
                - /url: javascript:void(0);
            - cell [ref=e259]:
              - generic [ref=e260]:
                - link [ref=e261] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e262]
                - link [ref=e267] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e268]
                - link [ref=e270] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e271]
                - checkbox [checked] [ref=e274]
          - row
          - row "Grilled Pizza Add sub category" [ref=e276]:
            - cell "Grilled Pizza" [ref=e277]: Grilled Pizza
            - cell "Add sub category" [ref=e280]:
              - link "Add sub category" [ref=e281] [cursor=pointer]:
                - /url: javascript:void(0);
            - cell [ref=e282]:
              - generic [ref=e283]:
                - link [ref=e284] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e285]
                - link [ref=e290] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e291]
                - link [ref=e293] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e294]
                - checkbox [checked] [ref=e297]
          - row
          - row "Test Category Add sub category" [ref=e299]:
            - cell "Test Category" [ref=e300]: Test Category
            - cell "Add sub category" [ref=e303]:
              - link "Add sub category" [ref=e304] [cursor=pointer]:
                - /url: javascript:void(0);
            - cell [ref=e305]:
              - generic [ref=e306]:
                - link [ref=e307] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e308]
                - link [ref=e313] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e314]
                - link [ref=e316] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e317]
                - checkbox [checked] [ref=e320]
          - row
          - row "Recycled Cotton Cheese Add sub category" [ref=e322]:
            - cell "Recycled Cotton Cheese" [ref=e323]: Recycled Cotton Cheese
            - cell "Add sub category" [ref=e326]:
              - link "Add sub category" [ref=e327] [cursor=pointer]:
                - /url: javascript:void(0);
            - cell [ref=e328]:
              - generic [ref=e329]:
                - link [ref=e330] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e331]
                - link [ref=e336] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e337]
                - link [ref=e339] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e340]
                - checkbox [checked] [ref=e343]
          - row
          - row "testing_Abc Add sub category" [ref=e345]:
            - cell "testing_Abc" [ref=e346]: testing_Abc
            - cell "Add sub category" [ref=e349]:
              - link "Add sub category" [ref=e350] [cursor=pointer]:
                - /url: javascript:void(0);
            - cell [ref=e351]:
              - generic [ref=e352]:
                - link [ref=e353] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e354]
                - link [ref=e359] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e360]
                - link [ref=e362] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e363]
                - checkbox [checked] [ref=e366]
          - row
          - row "Biryani Add sub category" [ref=e368]:
            - cell "Biryani" [ref=e369]: Biryani
            - cell "Add sub category" [ref=e372]:
              - link "Add sub category" [ref=e373] [cursor=pointer]:
                - /url: javascript:void(0);
            - cell [ref=e374]:
              - generic [ref=e375]:
                - link [ref=e376] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e377]
                - link [ref=e382] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e383]
                - link [ref=e385] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e386]
                - checkbox [checked] [ref=e389]
          - row
          - row "All Desert Add sub category" [ref=e391]:
            - cell "All Desert" [ref=e392]: All Desert
            - cell "Add sub category" [ref=e395]:
              - link "Add sub category" [ref=e396] [cursor=pointer]:
                - /url: javascript:void(0);
            - cell [ref=e397]:
              - generic [ref=e398]:
                - link [ref=e399] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e400]
                - link [ref=e405] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e406]
                - link [ref=e408] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e409]
                - checkbox [checked] [ref=e412]
          - row
          - row "Drinks Add sub category" [ref=e414]:
            - cell "Drinks" [ref=e415]: Drinks
            - cell "Add sub category" [ref=e418]:
              - link "Add sub category" [ref=e419] [cursor=pointer]:
                - /url: javascript:void(0);
            - cell [ref=e420]:
              - generic [ref=e421]:
                - link [ref=e422] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e423]
                - link [ref=e428] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e429]
                - link [ref=e431] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e432]
                - checkbox [checked] [ref=e435]
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
  77  |     await this.categoryNameDropdown.click();
  78  |     await this.RecycledCottonCheese.click();
  79  | 
  80  |     await this.Marblehat.scrollIntoViewIfNeeded();
  81  |     await this.Marblehat.click();
  82  | 
  83  |     // ✅ Open subcategory dropdown
  84  |     await this.subCategoryDropdown.click();
  85  | 
  86  |     // 🔥 USE SCROLL FUNCTION HERE
> 87  |     await this.scrollAndSelectSubCategory("Spicy Fries");
      |                                     ^ TimeoutError: locator.click: Timeout 10000ms exceeded.
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