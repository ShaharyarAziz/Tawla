# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Digital_Menu\DigitalMenu.spec.js >> User adds Items in Digital Menu
- Location: tests\Digital_Menu\DigitalMenu.spec.js:47:6

# Error details

```
TypeError: this.vegeterian.click is not a function
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
                  - textbox "Item Name" [ref=e121]: Crispy Pizza
                - generic [ref=e122]:
                  - generic [ref=e123]: Food Type
                  - generic [ref=e124]:
                    - generic [ref=e125] [cursor=pointer]:
                      - generic [ref=e126]: Select...
                      - img [ref=e127]
                    - generic [ref=e130]:
                      - generic [ref=e131] [cursor=pointer]:
                        - checkbox "Vegetarian" [ref=e132]
                        - generic [ref=e133]: Vegetarian
                      - generic [ref=e134] [cursor=pointer]:
                        - checkbox "Non-Vegetarian" [ref=e135]
                        - generic [ref=e136]: Non-Vegetarian
                      - generic [ref=e137] [cursor=pointer]:
                        - checkbox "Variations" [ref=e138]
                        - generic [ref=e139]: Variations
              - generic [ref=e140]:
                - generic [ref=e141]:
                  - generic [ref=e142]: Item Price
                  - generic [ref=e143]:
                    - textbox "Item Price" [ref=e144]:
                      - /placeholder: Enter Price
                    - img [ref=e145]
                - generic [ref=e147]:
                  - generic [ref=e148]: Category
                  - generic [ref=e150] [cursor=pointer]:
                    - generic [ref=e151]: Select...
                    - img [ref=e152]
              - generic [ref=e154]:
                - generic [ref=e155]: Sub Category
                - generic [ref=e157] [cursor=pointer]:
                  - generic [ref=e158]: Select...
                  - img [ref=e159]
              - separator [ref=e161]
              - separator [ref=e162]
              - generic [ref=e164] [cursor=pointer]:
                - img [ref=e165]
                - paragraph [ref=e175]: Drag & drop your file(s) to start uploading
                - generic [ref=e178]: OR
                - button "Browse files" [ref=e180]
              - paragraph [ref=e181]: Recommended resolution of 500 x 500 px and max size of 1 MB
              - separator [ref=e182]
              - generic [ref=e183]:
                - generic [ref=e184]: Item Description
                - textbox "Item Description" [ref=e185]:
                  - /placeholder: Enter Item Description
              - generic [ref=e187]: Add Arabic Translation
            - generic [ref=e191]:
              - button "Cancel" [ref=e192] [cursor=pointer]
              - button "Save Item" [ref=e193] [cursor=pointer]
      - generic [ref=e194]:
        - heading "Super Admins" [level=2] [ref=e195]
        - textbox "Search Menu Item" [ref=e198]
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
  16  |     this.vegeterian = page.getByText("Vegetarian", { exact: true }).waitFor({
  17  |       state: "visible",
  18  |     });
  19  |     this.nonVegeterian = page.getByText("Non-Vegetarian", { exact: true });
  20  |     this.item_price = page.locator("input#item_price");
  21  | 
  22  |     this.categoryNameDropdown = page.locator("span#category-label");
  23  | 
  24  |     this.Marblehat = page
  25  |       .locator("#category-dropdown")
  26  |       .getByText("Modern Marble Hat");
  27  | 
  28  |     this.RecycledCottonCheese = page
  29  |       .locator("#category-dropdown")
  30  |       .getByText("Recycled Cotton Cheese");
  31  | 
  32  |     this.subCategoryDropdown = page.locator(
  33  |       '[data-dropdown="subcategory-dropdown"]',
  34  |     );
  35  | 
  36  |     this.fileInput = page.locator("#item_image");
  37  |     this.itemDescription = page.locator("#description");
  38  |   }
  39  | 
  40  |   async openCreateItemModal() {
  41  |     await this.createItemBtn.click();
  42  |   }
  43  | 
  44  |   // 🔥 NEW: reusable scroll function
  45  |   async scrollAndSelectSubCategory(text) {
  46  |     const container = this.page.locator("#subcategory-dropdown");
  47  | 
  48  |     await container.waitFor({ state: "visible" });
  49  | 
  50  |     let found = false;
  51  | 
  52  |     for (let i = 0; i < 15; i++) {
  53  |       const item = container.locator("span", { hasText: text });
  54  | 
  55  |       if ((await item.count()) > 0) {
  56  |         await item.first().click();
  57  |         found = true;
  58  |         break;
  59  |       }
  60  | 
  61  |       // 🔽 scroll inside dropdown
  62  |       await container.evaluate((el) => el.scrollBy(0, 200));
  63  |       await this.page.waitForTimeout(200);
  64  |     }
  65  | 
  66  |     if (!found) {
  67  |       throw new Error(`${text} not found in subcategory dropdown`);
  68  |     }
  69  |   }
  70  | 
  71  |   async saveItem(name, price) {
  72  |     await this.item_name.fill(name);
  73  | 
  74  |     await this.foodtypeDropdown.click();
> 75  |     await this.vegeterian.click();
      |                           ^ TypeError: this.vegeterian.click is not a function
  76  |     await this.nonVegeterian.click();
  77  |     await this.item_price.click();
  78  |     await this.item_price.fill(price);
  79  | 
  80  |     await this.categoryNameDropdown.click();
  81  |     await this.RecycledCottonCheese.click();
  82  | 
  83  |     await this.Marblehat.scrollIntoViewIfNeeded();
  84  |     await this.Marblehat.click();
  85  | 
  86  |     // ✅ Open subcategory dropdown
  87  |     await this.subCategoryDropdown.click();
  88  | 
  89  |     // 🔥 USE SCROLL FUNCTION HERE
  90  |     await this.scrollAndSelectSubCategory("Spicy Fries");
  91  | 
  92  |     await this.fileInput.setInputFiles(
  93  |       "E:/Automation_Testing/Tawla_Automation/utils/png-transparent-full-breakfast-british-cuisine-english-cuisine-breakfast-sausage-woodbury-commons-outlet-food-breakfast-recipe-thumbnail.png",
  94  |     );
  95  | 
  96  |     await this.itemDescription.fill(generateFoodDescription());
  97  | 
  98  |     await this.page.getByRole("button", { name: "Save Item" }).click();
  99  | 
  100 |     // await this.page.pause();
  101 |   }
  102 | }
  103 | 
  104 | module.exports = { items };
  105 | 
```