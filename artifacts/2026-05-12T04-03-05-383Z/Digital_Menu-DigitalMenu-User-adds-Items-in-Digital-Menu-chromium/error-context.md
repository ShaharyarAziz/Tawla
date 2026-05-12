# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Digital_Menu\DigitalMenu.spec.js >> User adds Items in Digital Menu
- Location: tests\Digital_Menu\DigitalMenu.spec.js:47:6

# Error details

```
Error: Spicy Fries not found in subcategory dropdown
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
                  - textbox "Item Name" [ref=e102]: Spicy Pizza
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
                      - text: "347.00"
                    - img [ref=e123]
                - generic [ref=e125]:
                  - generic [ref=e126]: Category
                  - generic [ref=e128] [cursor=pointer]:
                    - generic [ref=e129]:
                      - generic [ref=e130]:
                        - generic [ref=e131]: All Desert
                        - img [ref=e132]
                      - generic [ref=e134]:
                        - generic [ref=e135]: Drinks
                        - img [ref=e136]
                    - img [ref=e138]
              - generic [ref=e140]:
                - generic [ref=e141]: Sub Category
                - generic [ref=e142]:
                  - generic [ref=e143] [cursor=pointer]:
                    - generic [ref=e144]: Select...
                    - img [ref=e145]
                  - generic [ref=e148]:
                    - generic [ref=e149] [cursor=pointer]:
                      - checkbox "Strawberry with Belgian chocolate" [ref=e150]
                      - generic [ref=e151]: Strawberry with Belgian chocolate
                    - generic [ref=e152] [cursor=pointer]:
                      - checkbox "Milkshakes" [ref=e153]
                      - generic [ref=e154]: Milkshakes
                    - generic [ref=e155] [cursor=pointer]:
                      - checkbox "Iced Coffee" [ref=e156]
                      - generic [ref=e157]: Iced Coffee
                    - generic [ref=e158] [cursor=pointer]:
                      - checkbox "Matcha" [ref=e159]
                      - generic [ref=e160]: Matcha
                    - generic [ref=e161] [cursor=pointer]:
                      - checkbox "Hot Drinks" [ref=e162]
                      - generic [ref=e163]: Hot Drinks
                    - generic [ref=e164] [cursor=pointer]:
                      - checkbox "Waffles" [ref=e165]
                      - generic [ref=e166]: Waffles
                    - generic [ref=e167] [cursor=pointer]:
                      - checkbox "Crepes" [ref=e168]
                      - generic [ref=e169]: Crepes
                    - generic [ref=e170] [cursor=pointer]:
                      - checkbox "Fruit" [ref=e171]
                      - generic [ref=e172]: Fruit
                    - generic [ref=e173] [cursor=pointer]:
                      - checkbox "Chia pudding" [ref=e174]
                      - generic [ref=e175]: Chia pudding
                    - generic [ref=e176] [cursor=pointer]:
                      - checkbox "cookies" [ref=e177]
                      - generic [ref=e178]: cookies
                    - generic [ref=e179] [cursor=pointer]:
                      - checkbox "hhh" [ref=e180]
                      - generic [ref=e181]: hhh
                    - generic [ref=e182] [cursor=pointer]:
                      - checkbox "testing add image" [ref=e183]
                      - generic [ref=e184]: testing add image
                    - generic [ref=e185] [cursor=pointer]:
                      - checkbox "testing again" [ref=e186]
                      - generic [ref=e187]: testing again
                    - generic [ref=e188] [cursor=pointer]:
                      - checkbox "new test" [ref=e189]
                      - generic [ref=e190]: new test
                    - generic [ref=e191] [cursor=pointer]:
                      - checkbox "fwe" [ref=e192]
                      - generic [ref=e193]: fwe
                    - generic [ref=e194] [cursor=pointer]:
                      - checkbox "after fix" [ref=e195]
                      - generic [ref=e196]: after fix
                    - generic [ref=e197] [cursor=pointer]:
                      - checkbox "hhh" [ref=e198]
                      - generic [ref=e199]: hhh
                    - generic [ref=e200] [cursor=pointer]:
                      - checkbox "wague beef" [ref=e201]
                      - generic [ref=e202]: wague beef
                    - generic [ref=e203] [cursor=pointer]:
                      - checkbox "BBQ Fries" [ref=e204]
                      - generic [ref=e205]: BBQ Fries
                    - generic [ref=e206] [cursor=pointer]:
                      - checkbox "Crispy Fries" [ref=e207]
                      - generic [ref=e208]: Crispy Fries
              - separator [ref=e209]
              - separator [ref=e210]
              - generic [ref=e212] [cursor=pointer]:
                - img [ref=e213]
                - paragraph [ref=e223]: Drag & drop your file(s) to start uploading
                - generic [ref=e226]: OR
                - button "Browse files" [ref=e228]
              - paragraph [ref=e229]: Recommended resolution of 500 x 500 px and max size of 1 MB
              - separator [ref=e230]
              - generic [ref=e231]:
                - generic [ref=e232]: Item Description
                - textbox "Item Description" [ref=e233]:
                  - /placeholder: Enter Item Description
              - generic [ref=e235]: Add Arabic Translation
            - generic [ref=e239]:
              - button "Cancel" [ref=e240] [cursor=pointer]
              - button "Save Item" [ref=e241] [cursor=pointer]
      - generic [ref=e242]:
        - heading "Super Admins" [level=2] [ref=e243]
        - textbox "Search Menu Item" [ref=e246]
      - table [ref=e248]:
        - rowgroup [ref=e249]:
          - row
          - row "BBQ Pasta Add sub category" [ref=e250]:
            - cell "BBQ Pasta" [ref=e251]: BBQ Pasta
            - cell "Add sub category" [ref=e254]:
              - link "Add sub category" [ref=e255] [cursor=pointer]:
                - /url: javascript:void(0);
            - cell [ref=e256]:
              - generic [ref=e257]:
                - link [ref=e258] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e259]
                - link [ref=e264] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e265]
                - link [ref=e267] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e268]
                - checkbox [checked] [ref=e271]
          - row
          - row "Hot Burger Add sub category" [ref=e273]:
            - cell "Hot Burger" [ref=e274]: Hot Burger
            - cell "Add sub category" [ref=e277]:
              - link "Add sub category" [ref=e278] [cursor=pointer]:
                - /url: javascript:void(0);
            - cell [ref=e279]:
              - generic [ref=e280]:
                - link [ref=e281] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e282]
                - link [ref=e287] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e288]
                - link [ref=e290] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e291]
                - checkbox [checked] [ref=e294]
          - row
          - row "Cheesy Burger Add sub category" [ref=e296]:
            - cell "Cheesy Burger" [ref=e297]: Cheesy Burger
            - cell "Add sub category" [ref=e300]:
              - link "Add sub category" [ref=e301] [cursor=pointer]:
                - /url: javascript:void(0);
            - cell [ref=e302]:
              - generic [ref=e303]:
                - link [ref=e304] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e305]
                - link [ref=e310] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e311]
                - link [ref=e313] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e314]
                - checkbox [checked] [ref=e317]
          - row
          - row "Biryani Add sub category" [ref=e319]:
            - cell "Biryani" [ref=e320]: Biryani
            - cell "Add sub category" [ref=e323]:
              - link "Add sub category" [ref=e324] [cursor=pointer]:
                - /url: javascript:void(0);
            - cell [ref=e325]:
              - generic [ref=e326]:
                - link [ref=e327] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e328]
                - link [ref=e333] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e334]
                - link [ref=e336] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e337]
                - checkbox [checked] [ref=e340]
          - row
          - row "All Desert Add sub category" [ref=e342]:
            - cell "All Desert" [ref=e343]: All Desert
            - cell "Add sub category" [ref=e346]:
              - link "Add sub category" [ref=e347] [cursor=pointer]:
                - /url: javascript:void(0);
            - cell [ref=e348]:
              - generic [ref=e349]:
                - link [ref=e350] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e351]
                - link [ref=e356] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e357]
                - link [ref=e359] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e360]
                - checkbox [checked] [ref=e363]
          - row
          - row "Drinks Add sub category" [ref=e365]:
            - cell "Drinks" [ref=e366]: Drinks
            - cell "Add sub category" [ref=e369]:
              - link "Add sub category" [ref=e370] [cursor=pointer]:
                - /url: javascript:void(0);
            - cell [ref=e371]:
              - generic [ref=e372]:
                - link [ref=e373] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e374]
                - link [ref=e379] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e380]
                - link [ref=e382] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e383]
                - checkbox [checked] [ref=e386]
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
  29  |     this.Spicy_Biryani = this.categoryMenu.getByText("All Desert", {
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
> 73  |       throw new Error(`${text} not found in subcategory dropdown`);
      |             ^ Error: Spicy Fries not found in subcategory dropdown
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