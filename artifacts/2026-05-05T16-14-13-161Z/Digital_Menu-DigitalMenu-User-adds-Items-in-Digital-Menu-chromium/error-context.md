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
  - waiting for getByText('Vegetarian', { exact: true })
    - locator resolved to <span>Vegetarian</span>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is not visible
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is not visible
    - retrying click action
      - waiting 100ms
    19 × waiting for element to be visible, enabled and stable
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
                  - textbox "Item Name" [ref=e121]: Cheesy Fries
                - generic [ref=e122]:
                  - generic [ref=e123]: Food Type
                  - generic [ref=e125] [cursor=pointer]:
                    - generic [ref=e126]: Select...
                    - img [ref=e127]
              - generic [ref=e129]:
                - generic [ref=e130]:
                  - generic [ref=e131]: Item Price
                  - generic [ref=e132]:
                    - textbox "Item Price" [ref=e133]:
                      - /placeholder: Enter Price
                    - img [ref=e134]
                - generic [ref=e136]:
                  - generic [ref=e137]: Category
                  - generic [ref=e139] [cursor=pointer]:
                    - generic [ref=e140]: Select...
                    - img [ref=e141]
              - generic [ref=e143]:
                - generic [ref=e144]: Sub Category
                - generic [ref=e146] [cursor=pointer]:
                  - generic [ref=e147]: Select...
                  - img [ref=e148]
              - separator [ref=e150]
              - separator [ref=e151]
              - generic [ref=e153] [cursor=pointer]:
                - img [ref=e154]
                - paragraph [ref=e164]: Drag & drop your file(s) to start uploading
                - generic [ref=e167]: OR
                - button "Browse files" [ref=e169]
              - paragraph [ref=e170]: Recommended resolution of 500 x 500 px and max size of 1 MB
              - separator [ref=e171]
              - generic [ref=e172]:
                - generic [ref=e173]: Item Description
                - textbox "Item Description" [ref=e174]:
                  - /placeholder: Enter Item Description
              - generic [ref=e176]: Add Arabic Translation
            - generic [ref=e180]:
              - button "Cancel" [ref=e181] [cursor=pointer]
              - button "Save Item" [ref=e182] [cursor=pointer]
      - generic [ref=e183]:
        - heading "Super Admins" [level=2] [ref=e184]
        - textbox "Search Menu Item" [ref=e187]
      - table [ref=e189]:
        - rowgroup [ref=e190]:
          - row
          - row "Spicy Biryani Add sub category" [ref=e191]:
            - cell "Spicy Biryani" [ref=e192]: Spicy Biryani
            - cell "Add sub category" [ref=e195]:
              - link "Add sub category" [ref=e196] [cursor=pointer]:
                - /url: javascript:void(0);
            - cell [ref=e197]:
              - generic [ref=e198]:
                - link [ref=e199] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e200]
                - link [ref=e205] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e206]
                - link [ref=e208] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e209]
                - checkbox [checked] [ref=e212]
          - row
          - row "Crispy Pizza Add sub category" [ref=e214]:
            - cell "Crispy Pizza" [ref=e215]: Crispy Pizza
            - cell "Add sub category" [ref=e218]:
              - link "Add sub category" [ref=e219] [cursor=pointer]:
                - /url: javascript:void(0);
            - cell [ref=e220]:
              - generic [ref=e221]:
                - link [ref=e222] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e223]
                - link [ref=e228] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e229]
                - link [ref=e231] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e232]
                - checkbox [checked] [ref=e235]
          - row
          - row "Hot Sandwich Add sub category" [ref=e237]:
            - cell "Hot Sandwich" [ref=e238]: Hot Sandwich
            - cell "Add sub category" [ref=e241]:
              - link "Add sub category" [ref=e242] [cursor=pointer]:
                - /url: javascript:void(0);
            - cell [ref=e243]:
              - generic [ref=e244]:
                - link [ref=e245] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e246]
                - link [ref=e251] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e252]
                - link [ref=e254] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e255]
                - checkbox [checked] [ref=e258]
          - row
          - row "Grilled Burger Add sub category" [ref=e260]:
            - cell "Grilled Burger" [ref=e261]: Grilled Burger
            - cell "Add sub category" [ref=e264]:
              - link "Add sub category" [ref=e265] [cursor=pointer]:
                - /url: javascript:void(0);
            - cell [ref=e266]:
              - generic [ref=e267]:
                - link [ref=e268] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e269]
                - link [ref=e274] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e275]
                - link [ref=e277] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e278]
                - checkbox [checked] [ref=e281]
          - row
          - row "Recycled Cotton Cheese Add sub category" [ref=e283]:
            - cell "Recycled Cotton Cheese" [ref=e284]: Recycled Cotton Cheese
            - cell "Add sub category" [ref=e287]:
              - link "Add sub category" [ref=e288] [cursor=pointer]:
                - /url: javascript:void(0);
            - cell [ref=e289]:
              - generic [ref=e290]:
                - link [ref=e291] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e292]
                - link [ref=e297] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e298]
                - link [ref=e300] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e301]
                - checkbox [checked] [ref=e304]
          - row
          - row "testing_Abc Add sub category" [ref=e306]:
            - cell "testing_Abc" [ref=e307]: testing_Abc
            - cell "Add sub category" [ref=e310]:
              - link "Add sub category" [ref=e311] [cursor=pointer]:
                - /url: javascript:void(0);
            - cell [ref=e312]:
              - generic [ref=e313]:
                - link [ref=e314] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e315]
                - link [ref=e320] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e321]
                - link [ref=e323] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e324]
                - checkbox [checked] [ref=e327]
          - row
          - row "Biryani Add sub category" [ref=e329]:
            - cell "Biryani" [ref=e330]: Biryani
            - cell "Add sub category" [ref=e333]:
              - link "Add sub category" [ref=e334] [cursor=pointer]:
                - /url: javascript:void(0);
            - cell [ref=e335]:
              - generic [ref=e336]:
                - link [ref=e337] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e338]
                - link [ref=e343] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e344]
                - link [ref=e346] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e347]
                - checkbox [checked] [ref=e350]
          - row
          - row "All Desert Add sub category" [ref=e352]:
            - cell "All Desert" [ref=e353]: All Desert
            - cell "Add sub category" [ref=e356]:
              - link "Add sub category" [ref=e357] [cursor=pointer]:
                - /url: javascript:void(0);
            - cell [ref=e358]:
              - generic [ref=e359]:
                - link [ref=e360] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e361]
                - link [ref=e366] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e367]
                - link [ref=e369] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e370]
                - checkbox [checked] [ref=e373]
          - row
          - row "Drinks Add sub category" [ref=e375]:
            - cell "Drinks" [ref=e376]: Drinks
            - cell "Add sub category" [ref=e379]:
              - link "Add sub category" [ref=e380] [cursor=pointer]:
                - /url: javascript:void(0);
            - cell [ref=e381]:
              - generic [ref=e382]:
                - link [ref=e383] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e384]
                - link [ref=e389] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e390]
                - link [ref=e392] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e393]
                - checkbox [checked] [ref=e396]
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
  22  |     this.Spicy_Biryani = page
  23  |       .locator("#category-dropdown")
  24  |       .getByText("Spicy Biryani");
  25  | 
  26  |     this.RecycledCottonCheese = page
  27  |       .locator("#category-dropdown")
  28  |       .getByText("Recycled Cotton Cheese");
  29  |     this.subCategoryDropdown = page.locator(
  30  |       '[data-dropdown="subcategory-dropdown"]',
  31  |     );
  32  | 
  33  |     this.fileInput = page.locator("#item_image");
  34  |     this.itemDescription = page.locator("#description");
  35  |   }
  36  | 
  37  |   async openCreateItemModal() {
  38  |     await this.createItemBtn.click();
  39  |   }
  40  | 
  41  |   // 🔥 NEW: reusable scroll function
  42  |   async scrollAndSelectSubCategory(text) {
  43  |     const container = this.page.locator("#subcategory-dropdown");
  44  | 
  45  |     await container.waitFor({ state: "visible" });
  46  | 
  47  |     let found = false;
  48  | 
  49  |     for (let i = 0; i < 15; i++) {
  50  |       const item = container.locator("span", { hasText: text });
  51  | 
  52  |       if ((await item.count()) > 0) {
  53  |         await item.first().click();
  54  |         found = true;
  55  |         break;
  56  |       }
  57  | 
  58  |       // 🔽 scroll inside dropdown
  59  |       await container.evaluate((el) => el.scrollBy(0, 200));
  60  |       await this.page.waitForTimeout(200);
  61  |     }
  62  | 
  63  |     if (!found) {
  64  |       throw new Error(`${text} not found in subcategory dropdown`);
  65  |     }
  66  |   }
  67  | 
  68  |   async saveItem(name, price) {
  69  |     await this.item_name.fill(name);
  70  | 
  71  |     await this.foodtypeDropdown.click();
> 72  |     await this.vegeterian.click();
      |                           ^ TimeoutError: locator.click: Timeout 10000ms exceeded.
  73  |     await this.nonVegeterian.click();
  74  |     await this.item_price.click();
  75  |     await this.item_price.fill(price);
  76  | 
  77  |     await this.categoryNameDropdown.click();
  78  |     await this.RecycledCottonCheese.click();
  79  | 
  80  |     await this.Spicy_Biryani.scrollIntoViewIfNeeded();
  81  |     await this.Spicy_Biryani.click();
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
  97  |     // await this.page.pause();
  98  |   }
  99  | }
  100 | 
  101 | module.exports = { items };
  102 | 
```