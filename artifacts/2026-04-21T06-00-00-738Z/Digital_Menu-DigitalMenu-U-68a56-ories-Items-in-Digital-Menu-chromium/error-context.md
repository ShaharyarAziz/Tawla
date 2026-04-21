# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Digital_Menu\DigitalMenu.spec.js >> User adds Categories,SubCategories & Items in Digital Menu
- Location: tests\Digital_Menu\DigitalMenu.spec.js:31:1

# Error details

```
TimeoutError: locator.click: Timeout 10000ms exceeded.
Call log:
  - waiting for locator('span').filter({ hasText: 'Create Sub Category' })

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
                  - combobox "×Recycled Cotton Cheese" [ref=e105] [cursor=pointer]:
                    - textbox "Recycled Cotton Cheese" [ref=e106]:
                      - generic "Remove all items" [ref=e107]: ×
                - generic [ref=e108]:
                  - generic [ref=e109]: Enter Sub Category
                  - textbox "Enter Sub Category" [active] [ref=e110]: Crispy Fries
              - generic [ref=e112] [cursor=pointer]:
                - img [ref=e113]
                - paragraph [ref=e123]: Drag & drop your file(s) to start uploading
                - generic [ref=e126]: OR
                - button "Browse files" [ref=e128]
              - paragraph [ref=e129]: Recommended resolution of 500 x 500 px and max size of 1 MB
              - generic [ref=e131]:
                - img [ref=e132]
                - generic [ref=e133]:
                  - paragraph [ref=e134]: 1764155658-ARUGULA%20STEAK.webp
                  - paragraph [ref=e135]: 20 KB
                - button [ref=e136] [cursor=pointer]:
                  - img [ref=e137]
              - separator [ref=e139]
              - generic [ref=e141]: Add Arabic Translation
            - generic [ref=e145]:
              - button "Cancel" [ref=e146] [cursor=pointer]
              - button "Save Sub Category" [ref=e147] [cursor=pointer]
      - generic [ref=e148]:
        - heading "Super Admins" [level=2] [ref=e149]
        - textbox "Search Menu Item" [ref=e152]
      - table [ref=e154]:
        - rowgroup [ref=e155]:
          - row
          - row "Tasty Aluminum Gloves Add sub category" [ref=e156]:
            - cell "Tasty Aluminum Gloves" [ref=e157]: Tasty Aluminum Gloves
            - cell "Add sub category" [ref=e160]:
              - link "Add sub category" [ref=e161] [cursor=pointer]:
                - /url: javascript:void(0);
            - cell [ref=e162]:
              - generic [ref=e163]:
                - link [ref=e164] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e165]
                - link [ref=e170] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e171]
                - link [ref=e173] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e174]
                - checkbox [checked] [ref=e177]
          - row
          - row "Modern Marble Hat Add sub category" [ref=e179]:
            - cell "Modern Marble Hat" [ref=e180]: Modern Marble Hat
            - cell "Add sub category" [ref=e183]:
              - link "Add sub category" [ref=e184] [cursor=pointer]:
                - /url: javascript:void(0);
            - cell [ref=e185]:
              - generic [ref=e186]:
                - link [ref=e187] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e188]
                - link [ref=e193] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e194]
                - link [ref=e196] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e197]
                - checkbox [checked] [ref=e200]
          - row
          - row "Elegant Concrete Bike Add sub category" [ref=e202]:
            - cell "Elegant Concrete Bike" [ref=e203]: Elegant Concrete Bike
            - cell "Add sub category" [ref=e206]:
              - link "Add sub category" [ref=e207] [cursor=pointer]:
                - /url: javascript:void(0);
            - cell [ref=e208]:
              - generic [ref=e209]:
                - link [ref=e210] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e211]
                - link [ref=e216] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e217]
                - link [ref=e219] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e220]
                - checkbox [checked] [ref=e223]
          - row
          - row "Frozen Aluminum Chair Add sub category" [ref=e225]:
            - cell "Frozen Aluminum Chair" [ref=e226]: Frozen Aluminum Chair
            - cell "Add sub category" [ref=e229]:
              - link "Add sub category" [ref=e230] [cursor=pointer]:
                - /url: javascript:void(0);
            - cell [ref=e231]:
              - generic [ref=e232]:
                - link [ref=e233] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e234]
                - link [ref=e239] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e240]
                - link [ref=e242] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e243]
                - checkbox [checked] [ref=e246]
          - row
          - row "Soft Wooden Chair Add sub category" [ref=e248]:
            - cell "Soft Wooden Chair" [ref=e249]: Soft Wooden Chair
            - cell "Add sub category" [ref=e252]:
              - link "Add sub category" [ref=e253] [cursor=pointer]:
                - /url: javascript:void(0);
            - cell [ref=e254]:
              - generic [ref=e255]:
                - link [ref=e256] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e257]
                - link [ref=e262] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e263]
                - link [ref=e265] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e266]
                - checkbox [checked] [ref=e269]
          - row
          - row "Cheesy Pizza 2372 Add sub category" [ref=e271]:
            - cell "Cheesy Pizza 2372" [ref=e272]: Cheesy Pizza 2372
            - cell "Add sub category" [ref=e275]:
              - link "Add sub category" [ref=e276] [cursor=pointer]:
                - /url: javascript:void(0);
            - cell [ref=e277]:
              - generic [ref=e278]:
                - link [ref=e279] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e280]
                - link [ref=e285] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e286]
                - link [ref=e288] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e289]
                - checkbox [checked] [ref=e292]
          - row
          - 'row "Spicy Pasta // {faker.number.int(9999)} Add sub category" [ref=e294]':
            - 'cell "Spicy Pasta // {faker.number.int(9999)}" [ref=e295]': "Spicy Pasta // {faker.number.int(9999)}"
            - cell "Add sub category" [ref=e298]:
              - link "Add sub category" [ref=e299] [cursor=pointer]:
                - /url: javascript:void(0);
            - cell [ref=e300]:
              - generic [ref=e301]:
                - link [ref=e302] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e303]
                - link [ref=e308] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e309]
                - link [ref=e311] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e312]
                - checkbox [checked] [ref=e315]
          - row
          - row "Grilled Pizza Add sub category" [ref=e317]:
            - cell "Grilled Pizza" [ref=e318]: Grilled Pizza
            - cell "Add sub category" [ref=e321]:
              - link "Add sub category" [ref=e322] [cursor=pointer]:
                - /url: javascript:void(0);
            - cell [ref=e323]:
              - generic [ref=e324]:
                - link [ref=e325] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e326]
                - link [ref=e331] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e332]
                - link [ref=e334] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e335]
                - checkbox [checked] [ref=e338]
          - row
          - row "Test Category Add sub category" [ref=e340]:
            - cell "Test Category" [ref=e341]: Test Category
            - cell "Add sub category" [ref=e344]:
              - link "Add sub category" [ref=e345] [cursor=pointer]:
                - /url: javascript:void(0);
            - cell [ref=e346]:
              - generic [ref=e347]:
                - link [ref=e348] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e349]
                - link [ref=e354] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e355]
                - link [ref=e357] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e358]
                - checkbox [checked] [ref=e361]
          - row
          - row "Recycled Cotton Cheese Add sub category" [ref=e363]:
            - cell "Recycled Cotton Cheese" [ref=e364]: Recycled Cotton Cheese
            - cell "Add sub category" [ref=e367]:
              - link "Add sub category" [ref=e368] [cursor=pointer]:
                - /url: javascript:void(0);
            - cell [ref=e369]:
              - generic [ref=e370]:
                - link [ref=e371] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e372]
                - link [ref=e377] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e378]
                - link [ref=e380] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e381]
                - checkbox [checked] [ref=e384]
          - row
          - row "testing_Abc Add sub category" [ref=e386]:
            - cell "testing_Abc" [ref=e387]: testing_Abc
            - cell "Add sub category" [ref=e390]:
              - link "Add sub category" [ref=e391] [cursor=pointer]:
                - /url: javascript:void(0);
            - cell [ref=e392]:
              - generic [ref=e393]:
                - link [ref=e394] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e395]
                - link [ref=e400] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e401]
                - link [ref=e403] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e404]
                - checkbox [checked] [ref=e407]
          - row
          - row "Biryani Add sub category" [ref=e409]:
            - cell "Biryani" [ref=e410]: Biryani
            - cell "Add sub category" [ref=e413]:
              - link "Add sub category" [ref=e414] [cursor=pointer]:
                - /url: javascript:void(0);
            - cell [ref=e415]:
              - generic [ref=e416]:
                - link [ref=e417] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e418]
                - link [ref=e423] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e424]
                - link [ref=e426] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e427]
                - checkbox [checked] [ref=e430]
          - row
          - row "All Desert Add sub category" [ref=e432]:
            - cell "All Desert" [ref=e433]: All Desert
            - cell "Add sub category" [ref=e436]:
              - link "Add sub category" [ref=e437] [cursor=pointer]:
                - /url: javascript:void(0);
            - cell [ref=e438]:
              - generic [ref=e439]:
                - link [ref=e440] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e441]
                - link [ref=e446] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e447]
                - link [ref=e449] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e450]
                - checkbox [checked] [ref=e453]
          - row
          - row "Drinks Add sub category" [ref=e455]:
            - cell "Drinks" [ref=e456]: Drinks
            - cell "Add sub category" [ref=e459]:
              - link "Add sub category" [ref=e460] [cursor=pointer]:
                - /url: javascript:void(0);
            - cell [ref=e461]:
              - generic [ref=e462]:
                - link [ref=e463] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e464]
                - link [ref=e469] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e470]
                - link [ref=e472] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e473]
                - checkbox [checked] [ref=e476]
```

# Test source

```ts
  1  | class Sub_Category {
  2  |   constructor(page) {
  3  |     this.page = page;
  4  |     this.createSubCategoryBtn = page.getByText("+ Create Sub Category");
  5  |     this.selectCategoryDropdown = this.page
  6  |       .locator('span[role="combobox"]')
  7  |       .locator("span")
  8  |       .first();
  9  |     this.dropdownOptions = this.page.getByRole("option", {
  10 |       name: "Recycled Cotton Cheese",
  11 |     });
  12 |     this.enterSubCategoryNameInput = page.locator("input#sub_category_name");
  13 |     this.imageUploadInput = page.locator("#subcat_image");
  14 |     this.saveSubCategoryBtn = page.locator("span", {
  15 |       hasText: "Create Sub Category",
  16 |     });
  17 |   }
  18 |   async openSubCategoryModal() {
  19 |     await this.createSubCategoryBtn.click();
  20 |   }
  21 |   async saveSubCategory(name) {
  22 |     await this.selectCategoryDropdown.click();
  23 |     await this.dropdownOptions.click();
  24 |     await this.enterSubCategoryNameInput.fill(name);
  25 |     await this.imageUploadInput.setInputFiles(
  26 |       "E:/Automation_Testing/Tawla_Automation/utils/1764155658-ARUGULA%20STEAK.webp",
  27 |     );
> 28 |     await this.saveSubCategoryBtn.click();
     |                                   ^ TimeoutError: locator.click: Timeout 10000ms exceeded.
  29 |   }
  30 | }
  31 | module.exports = Sub_Category;
  32 | 
```