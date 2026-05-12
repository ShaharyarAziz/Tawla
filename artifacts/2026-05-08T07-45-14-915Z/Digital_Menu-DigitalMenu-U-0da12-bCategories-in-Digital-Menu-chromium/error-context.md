# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Digital_Menu\DigitalMenu.spec.js >> User adds SubCategories in Digital Menu
- Location: tests\Digital_Menu\DigitalMenu.spec.js:31:1

# Error details

```
TimeoutError: locator.click: Timeout 10000ms exceeded.
Call log:
  - waiting for getByRole('option', { name: 'Recycled Cotton Cheese' })

```

# Page snapshot

```yaml
- generic [ref=e1]:
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
                    - combobox "Select a category" [expanded] [active] [ref=e105] [cursor=pointer]:
                      - textbox [ref=e106]
                      - listbox [expanded] [ref=e107]:
                        - option "All Desert" [ref=e108]
                        - option "Drinks" [ref=e109]
                        - option "Biryani" [ref=e110]
                        - option "BBQ Pasta" [ref=e111]
                        - option "Hot Burger" [ref=e112]
                  - generic [ref=e113]:
                    - generic [ref=e114]: Enter Sub Category
                    - textbox "Enter Sub Category" [ref=e115]
                - generic [ref=e117] [cursor=pointer]:
                  - img [ref=e118]
                  - paragraph [ref=e128]: Drag & drop your file(s) to start uploading
                  - generic [ref=e131]: OR
                  - button "Browse files" [ref=e133]
                - paragraph [ref=e134]: Recommended resolution of 500 x 500 px and max size of 1 MB
                - separator [ref=e135]
                - generic [ref=e137]: Add Arabic Translation
              - generic [ref=e141]:
                - button "Cancel" [ref=e142] [cursor=pointer]
                - button "Save Sub Category" [ref=e143] [cursor=pointer]
        - generic [ref=e144]:
          - heading "Super Admins" [level=2] [ref=e145]
          - textbox "Search Menu Item" [ref=e148]
        - table [ref=e150]:
          - rowgroup [ref=e151]:
            - row
            - row "BBQ Pasta Add sub category" [ref=e152]:
              - cell "BBQ Pasta" [ref=e153]: BBQ Pasta
              - cell "Add sub category" [ref=e156]:
                - link "Add sub category" [ref=e157] [cursor=pointer]:
                  - /url: javascript:void(0);
              - cell [ref=e158]:
                - generic [ref=e159]:
                  - link [ref=e160] [cursor=pointer]:
                    - /url: javascript:void(0);
                    - img [ref=e161]
                  - link [ref=e166] [cursor=pointer]:
                    - /url: javascript:void(0);
                    - img [ref=e167]
                  - link [ref=e169] [cursor=pointer]:
                    - /url: javascript:void(0);
                    - img [ref=e170]
                  - checkbox [checked] [ref=e173]
            - row
            - row "Hot Burger Add sub category" [ref=e175]:
              - cell "Hot Burger" [ref=e176]: Hot Burger
              - cell "Add sub category" [ref=e179]:
                - link "Add sub category" [ref=e180] [cursor=pointer]:
                  - /url: javascript:void(0);
              - cell [ref=e181]:
                - generic [ref=e182]:
                  - link [ref=e183] [cursor=pointer]:
                    - /url: javascript:void(0);
                    - img [ref=e184]
                  - link [ref=e189] [cursor=pointer]:
                    - /url: javascript:void(0);
                    - img [ref=e190]
                  - link [ref=e192] [cursor=pointer]:
                    - /url: javascript:void(0);
                    - img [ref=e193]
                  - checkbox [checked] [ref=e196]
            - row
            - row "Biryani Add sub category" [ref=e198]:
              - cell "Biryani" [ref=e199]: Biryani
              - cell "Add sub category" [ref=e202]:
                - link "Add sub category" [ref=e203] [cursor=pointer]:
                  - /url: javascript:void(0);
              - cell [ref=e204]:
                - generic [ref=e205]:
                  - link [ref=e206] [cursor=pointer]:
                    - /url: javascript:void(0);
                    - img [ref=e207]
                  - link [ref=e212] [cursor=pointer]:
                    - /url: javascript:void(0);
                    - img [ref=e213]
                  - link [ref=e215] [cursor=pointer]:
                    - /url: javascript:void(0);
                    - img [ref=e216]
                  - checkbox [checked] [ref=e219]
            - row
            - row "All Desert Add sub category" [ref=e221]:
              - cell "All Desert" [ref=e222]: All Desert
              - cell "Add sub category" [ref=e225]:
                - link "Add sub category" [ref=e226] [cursor=pointer]:
                  - /url: javascript:void(0);
              - cell [ref=e227]:
                - generic [ref=e228]:
                  - link [ref=e229] [cursor=pointer]:
                    - /url: javascript:void(0);
                    - img [ref=e230]
                  - link [ref=e235] [cursor=pointer]:
                    - /url: javascript:void(0);
                    - img [ref=e236]
                  - link [ref=e238] [cursor=pointer]:
                    - /url: javascript:void(0);
                    - img [ref=e239]
                  - checkbox [checked] [ref=e242]
            - row
            - row "Drinks Add sub category" [ref=e244]:
              - cell "Drinks" [ref=e245]: Drinks
              - cell "Add sub category" [ref=e248]:
                - link "Add sub category" [ref=e249] [cursor=pointer]:
                  - /url: javascript:void(0);
              - cell [ref=e250]:
                - generic [ref=e251]:
                  - link [ref=e252] [cursor=pointer]:
                    - /url: javascript:void(0);
                    - img [ref=e253]
                  - link [ref=e258] [cursor=pointer]:
                    - /url: javascript:void(0);
                    - img [ref=e259]
                  - link [ref=e261] [cursor=pointer]:
                    - /url: javascript:void(0);
                    - img [ref=e262]
                  - checkbox [checked] [ref=e265]
  - searchbox [ref=e270]
```

# Test source

```ts
  1  | class SubCategory {
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
  14 |     this.saveSubCategoryBtn = page.locator(".submitSubCategory");
  15 |   }
  16 |   async openSubCategoryModal() {
  17 |     await this.createSubCategoryBtn.click();
  18 |   }
  19 |   async saveSubCategory(name) {
  20 |     await this.selectCategoryDropdown.click();
> 21 |     await this.dropdownOptions.click();
     |                                ^ TimeoutError: locator.click: Timeout 10000ms exceeded.
  22 |     await this.enterSubCategoryNameInput.fill(name);
  23 |     await this.imageUploadInput.setInputFiles(
  24 |       "E:/Automation_Testing/Tawla_Automation/utils/1764155658-ARUGULA%20STEAK.webp",
  25 |     );
  26 |     await this.saveSubCategoryBtn.click();
  27 |   }
  28 | }
  29 | module.exports = { SubCategory };
  30 | 
```