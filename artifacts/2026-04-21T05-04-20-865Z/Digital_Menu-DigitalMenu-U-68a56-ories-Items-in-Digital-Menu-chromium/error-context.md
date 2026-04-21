# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Digital_Menu\DigitalMenu.spec.js >> User adds Categories,SubCategories & Items in Digital Menu
- Location: tests\Digital_Menu\DigitalMenu.spec.js:28:1

# Error details

```
TimeoutError: locator.click: Timeout 10000ms exceeded.
Call log:
  - waiting for locator('div[role="option"]')

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
            - heading "Create Sub Category" [level=2] [ref=e92]
            - button [ref=e93] [cursor=pointer]:
              - img [ref=e94]
          - generic [ref=e97]:
            - generic [ref=e98]:
              - generic [ref=e99]:
                - generic [ref=e100]:
                  - generic [ref=e101]: Select Category
                  - combobox [ref=e102]
                  - combobox "Select a category" [ref=e105] [cursor=pointer]:
                    - textbox [ref=e106]
                - generic [ref=e107]:
                  - generic [ref=e108]: Enter Sub Category
                  - textbox "Enter Sub Category" [ref=e109]
              - generic [ref=e111] [cursor=pointer]:
                - img [ref=e112]
                - paragraph [ref=e122]: Drag & drop your file(s) to start uploading
                - generic [ref=e125]: OR
                - button "Browse files" [ref=e127]
              - paragraph [ref=e128]: Recommended resolution of 500 x 500 px and max size of 1 MB
              - separator [ref=e129]
              - generic [ref=e131]: Add Arabic Translation
            - generic [ref=e135]:
              - button "Cancel" [ref=e136] [cursor=pointer]
              - button "Save Sub Category" [ref=e137] [cursor=pointer]
      - generic [ref=e138]:
        - heading "Super Admins" [level=2] [ref=e139]
        - textbox "Search Menu Item" [ref=e142]
      - table [ref=e144]:
        - rowgroup [ref=e145]:
          - row
          - row "Tasty Aluminum Gloves Add sub category" [ref=e146]:
            - cell "Tasty Aluminum Gloves" [ref=e147]: Tasty Aluminum Gloves
            - cell "Add sub category" [ref=e150]:
              - link "Add sub category" [ref=e151] [cursor=pointer]:
                - /url: javascript:void(0);
            - cell [ref=e152]:
              - generic [ref=e153]:
                - link [ref=e154] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e155]
                - link [ref=e160] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e161]
                - link [ref=e163] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e164]
                - checkbox [checked] [ref=e167]
          - row
          - row "Modern Marble Hat Add sub category" [ref=e169]:
            - cell "Modern Marble Hat" [ref=e170]: Modern Marble Hat
            - cell "Add sub category" [ref=e173]:
              - link "Add sub category" [ref=e174] [cursor=pointer]:
                - /url: javascript:void(0);
            - cell [ref=e175]:
              - generic [ref=e176]:
                - link [ref=e177] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e178]
                - link [ref=e183] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e184]
                - link [ref=e186] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e187]
                - checkbox [checked] [ref=e190]
          - row
          - row "Elegant Concrete Bike Add sub category" [ref=e192]:
            - cell "Elegant Concrete Bike" [ref=e193]: Elegant Concrete Bike
            - cell "Add sub category" [ref=e196]:
              - link "Add sub category" [ref=e197] [cursor=pointer]:
                - /url: javascript:void(0);
            - cell [ref=e198]:
              - generic [ref=e199]:
                - link [ref=e200] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e201]
                - link [ref=e206] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e207]
                - link [ref=e209] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e210]
                - checkbox [checked] [ref=e213]
          - row
          - row "Frozen Aluminum Chair Add sub category" [ref=e215]:
            - cell "Frozen Aluminum Chair" [ref=e216]: Frozen Aluminum Chair
            - cell "Add sub category" [ref=e219]:
              - link "Add sub category" [ref=e220] [cursor=pointer]:
                - /url: javascript:void(0);
            - cell [ref=e221]:
              - generic [ref=e222]:
                - link [ref=e223] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e224]
                - link [ref=e229] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e230]
                - link [ref=e232] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e233]
                - checkbox [checked] [ref=e236]
          - row
          - row "Soft Wooden Chair Add sub category" [ref=e238]:
            - cell "Soft Wooden Chair" [ref=e239]: Soft Wooden Chair
            - cell "Add sub category" [ref=e242]:
              - link "Add sub category" [ref=e243] [cursor=pointer]:
                - /url: javascript:void(0);
            - cell [ref=e244]:
              - generic [ref=e245]:
                - link [ref=e246] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e247]
                - link [ref=e252] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e253]
                - link [ref=e255] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e256]
                - checkbox [checked] [ref=e259]
          - row
          - row "Cheesy Pizza 2372 Add sub category" [ref=e261]:
            - cell "Cheesy Pizza 2372" [ref=e262]: Cheesy Pizza 2372
            - cell "Add sub category" [ref=e265]:
              - link "Add sub category" [ref=e266] [cursor=pointer]:
                - /url: javascript:void(0);
            - cell [ref=e267]:
              - generic [ref=e268]:
                - link [ref=e269] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e270]
                - link [ref=e275] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e276]
                - link [ref=e278] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e279]
                - checkbox [checked] [ref=e282]
          - row
          - 'row "Spicy Pasta // {faker.number.int(9999)} Add sub category" [ref=e284]':
            - 'cell "Spicy Pasta // {faker.number.int(9999)}" [ref=e285]': "Spicy Pasta // {faker.number.int(9999)}"
            - cell "Add sub category" [ref=e288]:
              - link "Add sub category" [ref=e289] [cursor=pointer]:
                - /url: javascript:void(0);
            - cell [ref=e290]:
              - generic [ref=e291]:
                - link [ref=e292] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e293]
                - link [ref=e298] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e299]
                - link [ref=e301] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e302]
                - checkbox [checked] [ref=e305]
          - row
          - row "Grilled Pizza Add sub category" [ref=e307]:
            - cell "Grilled Pizza" [ref=e308]: Grilled Pizza
            - cell "Add sub category" [ref=e311]:
              - link "Add sub category" [ref=e312] [cursor=pointer]:
                - /url: javascript:void(0);
            - cell [ref=e313]:
              - generic [ref=e314]:
                - link [ref=e315] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e316]
                - link [ref=e321] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e322]
                - link [ref=e324] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e325]
                - checkbox [checked] [ref=e328]
          - row
          - row "Test Category Add sub category" [ref=e330]:
            - cell "Test Category" [ref=e331]: Test Category
            - cell "Add sub category" [ref=e334]:
              - link "Add sub category" [ref=e335] [cursor=pointer]:
                - /url: javascript:void(0);
            - cell [ref=e336]:
              - generic [ref=e337]:
                - link [ref=e338] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e339]
                - link [ref=e344] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e345]
                - link [ref=e347] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e348]
                - checkbox [checked] [ref=e351]
          - row
          - row "Recycled Cotton Cheese Add sub category" [ref=e353]:
            - cell "Recycled Cotton Cheese" [ref=e354]: Recycled Cotton Cheese
            - cell "Add sub category" [ref=e357]:
              - link "Add sub category" [ref=e358] [cursor=pointer]:
                - /url: javascript:void(0);
            - cell [ref=e359]:
              - generic [ref=e360]:
                - link [ref=e361] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e362]
                - link [ref=e367] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e368]
                - link [ref=e370] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e371]
                - checkbox [checked] [ref=e374]
          - row
          - row "testing_Abc Add sub category" [ref=e376]:
            - cell "testing_Abc" [ref=e377]: testing_Abc
            - cell "Add sub category" [ref=e380]:
              - link "Add sub category" [ref=e381] [cursor=pointer]:
                - /url: javascript:void(0);
            - cell [ref=e382]:
              - generic [ref=e383]:
                - link [ref=e384] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e385]
                - link [ref=e390] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e391]
                - link [ref=e393] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e394]
                - checkbox [checked] [ref=e397]
          - row
          - row "Biryani Add sub category" [ref=e399]:
            - cell "Biryani" [ref=e400]: Biryani
            - cell "Add sub category" [ref=e403]:
              - link "Add sub category" [ref=e404] [cursor=pointer]:
                - /url: javascript:void(0);
            - cell [ref=e405]:
              - generic [ref=e406]:
                - link [ref=e407] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e408]
                - link [ref=e413] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e414]
                - link [ref=e416] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e417]
                - checkbox [checked] [ref=e420]
          - row
          - row "All Desert Add sub category" [ref=e422]:
            - cell "All Desert" [ref=e423]: All Desert
            - cell "Add sub category" [ref=e426]:
              - link "Add sub category" [ref=e427] [cursor=pointer]:
                - /url: javascript:void(0);
            - cell [ref=e428]:
              - generic [ref=e429]:
                - link [ref=e430] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e431]
                - link [ref=e436] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e437]
                - link [ref=e439] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e440]
                - checkbox [checked] [ref=e443]
          - row
          - row "Drinks Add sub category" [ref=e445]:
            - cell "Drinks" [ref=e446]: Drinks
            - cell "Add sub category" [ref=e449]:
              - link "Add sub category" [ref=e450] [cursor=pointer]:
                - /url: javascript:void(0);
            - cell [ref=e451]:
              - generic [ref=e452]:
                - link [ref=e453] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e454]
                - link [ref=e459] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e460]
                - link [ref=e462] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e463]
                - checkbox [checked] [ref=e466]
```

# Test source

```ts
  1  | class Sub_Category {
  2  |   constructor(page) {
  3  |     this.page = page;
  4  |     this.createSubCategoryBtn = page.getByText("+ Create Sub Category");
  5  |     this.selectCategoryDropdown = this.page
  6  |       .locator('span[role="textbox"]')
  7  |       .nth(0);
  8  |     this.dropdownOptions = this.page.locator('div[role="option"]');
  9  |     this.itemselect = this.page.getByRole("option", {
  10 |       name: "Recycled Cotton Cheese",
  11 |     });
  12 |   }
  13 |   async openSubCategoryModal() {
  14 |     await this.createSubCategoryBtn.click();
  15 |   }
  16 |   async saveSubCategory() {
  17 |     const saveSubCategoryBtn = this.page.getByRole("button", {
  18 |       name: "Save Sub Category",
  19 |     });
> 20 |     await this.dropdownOptions.click();
     |                                ^ TimeoutError: locator.click: Timeout 10000ms exceeded.
  21 |     await this.itemselect.click();
  22 |   }
  23 | }
  24 | module.exports = Sub_Category;
  25 | 
```