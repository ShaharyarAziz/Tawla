# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Digital_Menu\DigitalMenu.spec.js >> User adds Items in Digital Menu
- Location: tests\Digital_Menu\DigitalMenu.spec.js:47:6

# Error details

```
TimeoutError: locator.scrollIntoViewIfNeeded: Timeout 10000ms exceeded.
Call log:
  - waiting for locator('#category-dropdown').getByText('Modern Marble Hat')

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
                  - textbox "Item Name" [ref=e121]: Hot Burger
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
                      - text: "380.00"
                    - img [ref=e142]
                - generic [ref=e144]:
                  - generic [ref=e145]: Category
                  - generic [ref=e146]:
                    - generic [ref=e147] [cursor=pointer]:
                      - generic [ref=e149]:
                        - generic [ref=e150]: Recycled Cotton Cheese
                        - img [ref=e151]
                      - img [ref=e153]
                    - generic [ref=e156]:
                      - generic [ref=e157] [cursor=pointer]:
                        - checkbox "All Desert" [ref=e158]
                        - generic [ref=e159]: All Desert
                      - generic [ref=e160] [cursor=pointer]:
                        - checkbox "Drinks" [ref=e161]
                        - generic [ref=e162]: Drinks
                      - generic [ref=e163] [cursor=pointer]:
                        - checkbox "Biryani" [ref=e164]
                        - generic [ref=e165]: Biryani
                      - generic [ref=e166] [cursor=pointer]:
                        - checkbox "testing_Abc" [ref=e167]
                        - generic [ref=e168]: testing_Abc
                      - generic [ref=e169] [cursor=pointer]:
                        - checkbox "Recycled Cotton Cheese" [checked] [active] [ref=e170]
                        - generic [ref=e171]: Recycled Cotton Cheese
              - generic [ref=e172]:
                - generic [ref=e173]: Sub Category
                - generic [ref=e175] [cursor=pointer]:
                  - generic [ref=e176]: Select...
                  - img [ref=e177]
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
          - row "Recycled Cotton Cheese Add sub category" [ref=e220]:
            - cell "Recycled Cotton Cheese" [ref=e221]: Recycled Cotton Cheese
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
          - row "testing_Abc Add sub category" [ref=e243]:
            - cell "testing_Abc" [ref=e244]: testing_Abc
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
          - row "Biryani Add sub category" [ref=e266]:
            - cell "Biryani" [ref=e267]: Biryani
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
          - row "All Desert Add sub category" [ref=e289]:
            - cell "All Desert" [ref=e290]: All Desert
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
          - row "Drinks Add sub category" [ref=e312]:
            - cell "Drinks" [ref=e313]: Drinks
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
  75  |     await this.item_price.click();
  76  |     await this.item_price.fill(price);
  77  | 
  78  |     await this.categoryNameDropdown.click();
  79  |     await this.RecycledCottonCheese.click();
  80  | 
> 81  |     await this.Marblehat.scrollIntoViewIfNeeded();
      |                          ^ TimeoutError: locator.scrollIntoViewIfNeeded: Timeout 10000ms exceeded.
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
  98  |     // await this.page.pause();
  99  |   }
  100 | }
  101 | 
  102 | module.exports = { items };
  103 | 
```