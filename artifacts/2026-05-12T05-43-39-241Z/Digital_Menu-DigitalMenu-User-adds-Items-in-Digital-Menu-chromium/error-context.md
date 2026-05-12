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
  - waiting for locator('#food-type-dropdown').getByText('Vegetarian', { exact: true })
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
                  - textbox "Item Name" [ref=e102]: Crispy Burger
                - generic [ref=e103]:
                  - generic [ref=e104]: Food Type
                  - generic [ref=e106] [cursor=pointer]:
                    - generic [ref=e107]: Select...
                    - img [ref=e108]
              - generic [ref=e110]:
                - generic [ref=e111]:
                  - generic [ref=e112]: Item Price
                  - generic [ref=e113]:
                    - textbox "Item Price" [ref=e114]:
                      - /placeholder: Enter Price
                    - img [ref=e115]
                - generic [ref=e117]:
                  - generic [ref=e118]: Category
                  - generic [ref=e120] [cursor=pointer]:
                    - generic [ref=e121]: Select...
                    - img [ref=e122]
              - generic [ref=e124]:
                - generic [ref=e125]: Sub Category
                - generic [ref=e127] [cursor=pointer]:
                  - generic [ref=e128]: Select...
                  - img [ref=e129]
              - separator [ref=e131]
              - separator [ref=e132]
              - generic [ref=e134] [cursor=pointer]:
                - img [ref=e135]
                - paragraph [ref=e145]: Drag & drop your file(s) to start uploading
                - generic [ref=e148]: OR
                - button "Browse files" [ref=e150]
              - paragraph [ref=e151]: Recommended resolution of 500 x 500 px and max size of 1 MB
              - separator [ref=e152]
              - generic [ref=e153]:
                - generic [ref=e154]: Item Description
                - textbox "Item Description" [ref=e155]:
                  - /placeholder: Enter Item Description
              - generic [ref=e157]: Add Arabic Translation
            - generic [ref=e161]:
              - button "Cancel" [ref=e162] [cursor=pointer]
              - button "Save Item" [ref=e163] [cursor=pointer]
      - generic [ref=e164]:
        - heading "Super Admins" [level=2] [ref=e165]
        - textbox "Search Menu Item" [ref=e168]
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
  12  |     // this.foodtypeDropdown = page.locator(
  13  |     //   'div.custom-dropdown-trigger[data-dropdown="food-type-dropdown"]',
  14  |     // );
  15  |     this.foodTypeArrow = page.locator(
  16  |       'div.custom-dropdown-trigger[data-dropdown="food-type-dropdown"] svg.dropdown-arrow',
  17  |     );
  18  |     this.foodtypeMenu = page.locator("#food-type-dropdown");
  19  | 
  20  |     this.vegeterian = this.foodtypeMenu.getByText("Vegetarian", {
  21  |       exact: true,
  22  |     });
  23  |     this.nonVegeterian = this.foodtypeMenu.getByText("Non-Vegetarian", {
  24  |       exact: true,
  25  |     });
  26  |     this.item_price = page.locator("input#item_price");
  27  | 
  28  |     this.categoryNameDropdown = page.locator("span#category-label");
  29  |     this.categoryDropdown = page.locator(
  30  |       'div.custom-dropdown-trigger[data-dropdown="category-dropdown"]',
  31  |     );
  32  |     this.categoryMenu = page.locator("#category-dropdown");
  33  | 
  34  |     this.Spicy_Biryani = this.categoryMenu.getByText("All Desert", {
  35  |       exact: true,
  36  |     });
  37  | 
  38  |     this.RecycledCottonCheese = this.categoryMenu.getByText("Drinks", {
  39  |       exact: true,
  40  |     });
  41  |     this.subCategoryDropdown = page.locator(
  42  |       '[data-dropdown="subcategory-dropdown"]',
  43  |     );
  44  |     this.subCategoryMenu = page.locator("#subcategory-dropdown");
  45  | 
  46  |     this.fileInput = page.locator("#item_image");
  47  |     this.itemDescription = page.locator("#description");
  48  |   }
  49  | 
  50  |   async openCreateItemModal() {
  51  |     await this.createItemBtn.click();
  52  |   }
  53  | 
  54  |   // 🔥 NEW: reusable scroll function
  55  |   async scrollAndSelectSubCategory(text) {
  56  |     const container = this.subCategoryMenu;
  57  | 
  58  |     await container.waitFor({ state: "visible" });
  59  | 
  60  |     let found = false;
  61  | 
  62  |     for (let i = 0; i < 15; i++) {
  63  |       const item = container.getByText(text, { exact: true });
  64  | 
  65  |       if ((await item.count()) > 0) {
  66  |         await item.first().click();
  67  |         found = true;
  68  |         break;
  69  |       }
  70  | 
  71  |       // 🔽 scroll inside dropdown
  72  |       await container.evaluate((el) => el.scrollBy(0, 200));
  73  |       await this.page.waitForTimeout(200);
  74  |     }
  75  | 
  76  |     if (!found) {
  77  |       throw new Error(`${text} not found in subcategory dropdown`);
  78  |     }
  79  |   }
  80  | 
  81  |   async saveItem(name, price) {
  82  |     await this.item_name.fill(name);
  83  |     await this.page.waitForTimeout(3000);
  84  | 
  85  |     await this.foodTypeArrow.click({ force: true });
> 86  |     await this.vegeterian.click();
      |                           ^ TimeoutError: locator.click: Timeout 10000ms exceeded.
  87  |     await this.nonVegeterian.click();
  88  |     await this.item_price.click();
  89  |     await this.item_price.fill(price);
  90  | 
  91  |     await this.categoryDropdown.click();
  92  |     await this.categoryMenu.waitFor({ state: "visible" });
  93  |     await this.RecycledCottonCheese.click();
  94  | 
  95  |     await this.Spicy_Biryani.scrollIntoViewIfNeeded();
  96  |     await this.Spicy_Biryani.click();
  97  | 
  98  |     // ✅ Open subcategory dropdown
  99  |     await this.subCategoryDropdown.click();
  100 | 
  101 |     // 🔥 USE SCROLL FUNCTION HERE
  102 |     await this.scrollAndSelectSubCategory("Strawberry with Belgian chocolate");
  103 |     await this.scrollAndSelectSubCategory("Milkshakes");
  104 | 
  105 |     await this.fileInput.setInputFiles(
  106 |       "E:/Automation_Testing/Tawla_Automation/utils/png-transparent-full-breakfast-british-cuisine-english-cuisine-breakfast-sausage-woodbury-commons-outlet-food-breakfast-recipe-thumbnail.png",
  107 |     );
  108 | 
  109 |     await this.itemDescription.fill(generateFoodDescription());
  110 | 
  111 |     await this.page.getByRole("button", { name: "Save Item" }).click();
  112 | 
  113 |     // await this.page.pause();
  114 |   }
  115 | }
  116 | 
  117 | module.exports = { items };
  118 | 
```