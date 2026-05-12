# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Digital_Menu\DigitalMenu.spec.js >> User adds Items in Digital Menu
- Location: tests\Digital_Menu\DigitalMenu.spec.js:47:6

# Error details

```
TimeoutError: locator.waitFor: Timeout 10000ms exceeded.
Call log:
  - waiting for locator('#food-type-dropdown') to be visible
    24 × locator resolved to hidden <div id="food-type-dropdown" class="custom-dropdown-menu">…</div>

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
                  - textbox "Item Name" [ref=e102]: Hot Burger
                - generic [ref=e103]:
                  - generic [ref=e104]: Food Type
                  - generic [ref=e105]:
                    - generic [ref=e106] [cursor=pointer]:
                      - generic [ref=e107]: Select...
                      - img [ref=e108]
                    - generic [ref=e111]:
                      - generic [ref=e112] [cursor=pointer]:
                        - checkbox "Vegetarian" [ref=e113]
                        - generic [ref=e114]: Vegetarian
                      - generic [ref=e115] [cursor=pointer]:
                        - checkbox "Non-Vegetarian" [ref=e116]
                        - generic [ref=e117]: Non-Vegetarian
                      - generic [ref=e118] [cursor=pointer]:
                        - checkbox "Variations" [ref=e119]
                        - generic [ref=e120]: Variations
              - generic [ref=e121]:
                - generic [ref=e122]:
                  - generic [ref=e123]: Item Price
                  - generic [ref=e124]:
                    - textbox "Item Price" [ref=e125]:
                      - /placeholder: Enter Price
                    - img [ref=e126]
                - generic [ref=e128]:
                  - generic [ref=e129]: Category
                  - generic [ref=e131] [cursor=pointer]:
                    - generic [ref=e132]: Select...
                    - img [ref=e133]
              - generic [ref=e135]:
                - generic [ref=e136]: Sub Category
                - generic [ref=e138] [cursor=pointer]:
                  - generic [ref=e139]: Select...
                  - img [ref=e140]
              - separator [ref=e142]
              - separator [ref=e143]
              - generic [ref=e145] [cursor=pointer]:
                - img [ref=e146]
                - paragraph [ref=e156]: Drag & drop your file(s) to start uploading
                - generic [ref=e159]: OR
                - button "Browse files" [ref=e161]
              - paragraph [ref=e162]: Recommended resolution of 500 x 500 px and max size of 1 MB
              - separator [ref=e163]
              - generic [ref=e164]:
                - generic [ref=e165]: Item Description
                - textbox "Item Description" [ref=e166]:
                  - /placeholder: Enter Item Description
              - generic [ref=e168]: Add Arabic Translation
            - generic [ref=e172]:
              - button "Cancel" [ref=e173] [cursor=pointer]
              - button "Save Item" [ref=e174] [cursor=pointer]
      - generic [ref=e175]:
        - heading "Super Admins" [level=2] [ref=e176]
        - textbox "Search Menu Item" [ref=e179]
      - table [ref=e181]:
        - rowgroup [ref=e182]:
          - row
          - row "BBQ Pasta Add sub category" [ref=e183]:
            - cell "BBQ Pasta" [ref=e184]: BBQ Pasta
            - cell "Add sub category" [ref=e187]:
              - link "Add sub category" [ref=e188] [cursor=pointer]:
                - /url: javascript:void(0);
            - cell [ref=e189]:
              - generic [ref=e190]:
                - link [ref=e191] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e192]
                - link [ref=e197] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e198]
                - link [ref=e200] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e201]
                - checkbox [checked] [ref=e204]
          - row
          - row "Hot Burger Add sub category" [ref=e206]:
            - cell "Hot Burger" [ref=e207]: Hot Burger
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
          - row "Cheesy Burger Add sub category" [ref=e229]:
            - cell "Cheesy Burger" [ref=e230]: Cheesy Burger
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
          - row "Biryani Add sub category" [ref=e252]:
            - cell "Biryani" [ref=e253]: Biryani
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
          - row "All Desert Add sub category" [ref=e275]:
            - cell "All Desert" [ref=e276]: All Desert
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
          - row "Drinks Add sub category" [ref=e298]:
            - cell "Drinks" [ref=e299]: Drinks
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
  15  |     this.foodtypeMenu = page.locator("#food-type-dropdown");
  16  | 
  17  |     this.vegeterian = this.foodtypeMenu.getByText("Vegetarian", {
  18  |       exact: true,
  19  |     });
  20  |     this.nonVegeterian = this.foodtypeMenu.getByText("Non-Vegetarian", {
  21  |       exact: true,
  22  |     });
  23  |     this.item_price = page.locator("input#item_price");
  24  | 
  25  |     this.categoryNameDropdown = page.locator("span#category-label");
  26  |     this.categoryDropdown = page.locator('[data-dropdown="category-dropdown"]');
  27  |     this.categoryMenu = page.locator("#category-dropdown");
  28  | 
  29  |     this.Spicy_Biryani = this.categoryMenu.getByText("All Dessert", {
  30  |       exact: true,
  31  |     });
  32  | 
  33  |     this.RecycledCottonCheese = this.categoryMenu.getByText(
  34  |       "Drinks",
  35  |       { exact: true },
  36  |     );
  37  |     this.subCategoryDropdown = page.locator(
  38  |       '[data-dropdown="subcategory-dropdown"]',
  39  |     );
  40  |     this.subCategoryMenu = page.locator("#subcategory-dropdown");
  41  | 
  42  |     this.fileInput = page.locator("#item_image");
  43  |     this.itemDescription = page.locator("#description");
  44  |   }
  45  | 
  46  |   async openCreateItemModal() {
  47  |     await this.createItemBtn.click();
  48  |   }
  49  | 
  50  |   // 🔥 NEW: reusable scroll function
  51  |   async scrollAndSelectSubCategory(text) {
  52  |     const container = this.subCategoryMenu;
  53  | 
  54  |     await container.waitFor({ state: "visible" });
  55  | 
  56  |     let found = false;
  57  | 
  58  |     for (let i = 0; i < 15; i++) {
  59  |       const item = container.getByText(text, { exact: true });
  60  | 
  61  |       if ((await item.count()) > 0) {
  62  |         await item.first().click();
  63  |         found = true;
  64  |         break;
  65  |       }
  66  | 
  67  |       // 🔽 scroll inside dropdown
  68  |       await container.evaluate((el) => el.scrollBy(0, 200));
  69  |       await this.page.waitForTimeout(200);
  70  |     }
  71  | 
  72  |     if (!found) {
  73  |       throw new Error(`${text} not found in subcategory dropdown`);
  74  |     }
  75  |   }
  76  | 
  77  |   async saveItem(name, price) {
  78  |     await this.item_name.fill(name);
  79  | 
  80  |     await this.foodtypeDropdown.click();
> 81  |     await this.foodtypeMenu.waitFor({ state: "visible" });
      |                             ^ TimeoutError: locator.waitFor: Timeout 10000ms exceeded.
  82  |     await this.vegeterian.click();
  83  |     await this.nonVegeterian.click();
  84  |     await this.item_price.click();
  85  |     await this.item_price.fill(price);
  86  | 
  87  |     await this.categoryDropdown.click();
  88  |     await this.categoryMenu.waitFor({ state: "visible" });
  89  |     await this.RecycledCottonCheese.click();
  90  | 
  91  |     await this.Spicy_Biryani.scrollIntoViewIfNeeded();
  92  |     await this.Spicy_Biryani.click();
  93  | 
  94  |     // ✅ Open subcategory dropdown
  95  |     await this.subCategoryDropdown.click();
  96  | 
  97  |     // 🔥 USE SCROLL FUNCTION HERE
  98  |     await this.scrollAndSelectSubCategory("Spicy Fries");
  99  | 
  100 |     await this.fileInput.setInputFiles(
  101 |       "E:/Automation_Testing/Tawla_Automation/utils/png-transparent-full-breakfast-british-cuisine-english-cuisine-breakfast-sausage-woodbury-commons-outlet-food-breakfast-recipe-thumbnail.png",
  102 |     );
  103 | 
  104 |     await this.itemDescription.fill(generateFoodDescription());
  105 | 
  106 |     await this.page.getByRole("button", { name: "Save Item" }).click();
  107 | 
  108 |     // await this.page.pause();
  109 |   }
  110 | }
  111 | 
  112 | module.exports = { items };
  113 | 
```