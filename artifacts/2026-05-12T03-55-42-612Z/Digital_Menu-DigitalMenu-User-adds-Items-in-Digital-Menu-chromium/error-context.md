# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Digital_Menu\DigitalMenu.spec.js >> User adds Items in Digital Menu
- Location: tests\Digital_Menu\DigitalMenu.spec.js:47:1

# Error details

```
TimeoutError: locator.click: Timeout 10000ms exceeded.
Call log:
  - waiting for locator('#category-dropdown').getByText('Recycled Cotton Cheese', { exact: true })

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
                  - textbox "Item Name" [ref=e102]: Grilled Pasta
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
                      - text: "424.00"
                    - img [ref=e123]
                - generic [ref=e125]:
                  - generic [ref=e126]: Category
                  - generic [ref=e127]:
                    - generic [ref=e128] [cursor=pointer]:
                      - generic [ref=e129]: Select...
                      - img [ref=e130]
                    - generic [ref=e133]:
                      - generic [ref=e134] [cursor=pointer]:
                        - checkbox "All Desert" [ref=e135]
                        - generic [ref=e136]: All Desert
                      - generic [ref=e137] [cursor=pointer]:
                        - checkbox "Drinks" [ref=e138]
                        - generic [ref=e139]: Drinks
                      - generic [ref=e140] [cursor=pointer]:
                        - checkbox "Biryani" [ref=e141]
                        - generic [ref=e142]: Biryani
                      - generic [ref=e143] [cursor=pointer]:
                        - checkbox "BBQ Pasta" [ref=e144]
                        - generic [ref=e145]: BBQ Pasta
                      - generic [ref=e146] [cursor=pointer]:
                        - checkbox "Hot Burger" [ref=e147]
                        - generic [ref=e148]: Hot Burger
                      - generic [ref=e149] [cursor=pointer]:
                        - checkbox "Cheesy Burger" [ref=e150]
                        - generic [ref=e151]: Cheesy Burger
              - generic [ref=e152]:
                - generic [ref=e153]: Sub Category
                - generic [ref=e155] [cursor=pointer]:
                  - generic [ref=e156]: Select...
                  - img [ref=e157]
              - separator [ref=e159]
              - separator [ref=e160]
              - generic [ref=e162] [cursor=pointer]:
                - img [ref=e163]
                - paragraph [ref=e173]: Drag & drop your file(s) to start uploading
                - generic [ref=e176]: OR
                - button "Browse files" [ref=e178]
              - paragraph [ref=e179]: Recommended resolution of 500 x 500 px and max size of 1 MB
              - separator [ref=e180]
              - generic [ref=e181]:
                - generic [ref=e182]: Item Description
                - textbox "Item Description" [ref=e183]:
                  - /placeholder: Enter Item Description
              - generic [ref=e185]: Add Arabic Translation
            - generic [ref=e189]:
              - button "Cancel" [ref=e190] [cursor=pointer]
              - button "Save Item" [ref=e191] [cursor=pointer]
      - generic [ref=e192]:
        - heading "Super Admins" [level=2] [ref=e193]
        - textbox "Search Menu Item" [ref=e196]
      - table [ref=e198]:
        - rowgroup [ref=e199]:
          - row
          - row "BBQ Pasta Add sub category" [ref=e200]:
            - cell "BBQ Pasta" [ref=e201]: BBQ Pasta
            - cell "Add sub category" [ref=e204]:
              - link "Add sub category" [ref=e205] [cursor=pointer]:
                - /url: javascript:void(0);
            - cell [ref=e206]:
              - generic [ref=e207]:
                - link [ref=e208] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e209]
                - link [ref=e214] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e215]
                - link [ref=e217] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e218]
                - checkbox [checked] [ref=e221]
          - row
          - row "Hot Burger Add sub category" [ref=e223]:
            - cell "Hot Burger" [ref=e224]: Hot Burger
            - cell "Add sub category" [ref=e227]:
              - link "Add sub category" [ref=e228] [cursor=pointer]:
                - /url: javascript:void(0);
            - cell [ref=e229]:
              - generic [ref=e230]:
                - link [ref=e231] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e232]
                - link [ref=e237] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e238]
                - link [ref=e240] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e241]
                - checkbox [checked] [ref=e244]
          - row
          - row "Cheesy Burger Add sub category" [ref=e246]:
            - cell "Cheesy Burger" [ref=e247]: Cheesy Burger
            - cell "Add sub category" [ref=e250]:
              - link "Add sub category" [ref=e251] [cursor=pointer]:
                - /url: javascript:void(0);
            - cell [ref=e252]:
              - generic [ref=e253]:
                - link [ref=e254] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e255]
                - link [ref=e260] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e261]
                - link [ref=e263] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e264]
                - checkbox [checked] [ref=e267]
          - row
          - row "Biryani Add sub category" [ref=e269]:
            - cell "Biryani" [ref=e270]: Biryani
            - cell "Add sub category" [ref=e273]:
              - link "Add sub category" [ref=e274] [cursor=pointer]:
                - /url: javascript:void(0);
            - cell [ref=e275]:
              - generic [ref=e276]:
                - link [ref=e277] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e278]
                - link [ref=e283] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e284]
                - link [ref=e286] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e287]
                - checkbox [checked] [ref=e290]
          - row
          - row "All Desert Add sub category" [ref=e292]:
            - cell "All Desert" [ref=e293]: All Desert
            - cell "Add sub category" [ref=e296]:
              - link "Add sub category" [ref=e297] [cursor=pointer]:
                - /url: javascript:void(0);
            - cell [ref=e298]:
              - generic [ref=e299]:
                - link [ref=e300] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e301]
                - link [ref=e306] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e307]
                - link [ref=e309] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e310]
                - checkbox [checked] [ref=e313]
          - row
          - row "Drinks Add sub category" [ref=e315]:
            - cell "Drinks" [ref=e316]: Drinks
            - cell "Add sub category" [ref=e319]:
              - link "Add sub category" [ref=e320] [cursor=pointer]:
                - /url: javascript:void(0);
            - cell [ref=e321]:
              - generic [ref=e322]:
                - link [ref=e323] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e324]
                - link [ref=e329] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e330]
                - link [ref=e332] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e333]
                - checkbox [checked] [ref=e336]
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
  29  |     this.Spicy_Biryani = this.categoryMenu.getByText("Spicy Biryani", {
  30  |       exact: true,
  31  |     });
  32  | 
  33  |     this.RecycledCottonCheese = this.categoryMenu.getByText(
  34  |       "Recycled Cotton Cheese",
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
  81  |     await this.foodtypeMenu.waitFor({ state: "visible" });
  82  |     await this.vegeterian.click();
  83  |     await this.nonVegeterian.click();
  84  |     await this.item_price.click();
  85  |     await this.item_price.fill(price);
  86  | 
  87  |     await this.categoryDropdown.click();
  88  |     await this.categoryMenu.waitFor({ state: "visible" });
> 89  |     await this.RecycledCottonCheese.click();
      |                                     ^ TimeoutError: locator.click: Timeout 10000ms exceeded.
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