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
  - waiting for getByText('Recycled Cotton Cheese').nth(5)

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
                        - option "testing_Abc" [ref=e111]
                        - option "Test Category" [ref=e112]
                        - option "Recycled Cotton Cheese" [ref=e113]
                        - option "Tasty Aluminum Gloves" [ref=e114]
                        - option "Modern Marble Hat" [ref=e115]
                        - option "Elegant Concrete Bike" [ref=e116]
                        - option "Frozen Aluminum Chair" [ref=e117]
                        - option "Soft Wooden Chair" [ref=e118]
                        - option "Cheesy Pizza 2372" [ref=e119]
                        - 'option "Spicy Pasta // {faker.number.int(9999)}" [ref=e120]'
                        - option "Grilled Pizza" [ref=e121]
                  - generic [ref=e122]:
                    - generic [ref=e123]: Enter Sub Category
                    - textbox "Enter Sub Category" [ref=e124]
                - generic [ref=e126] [cursor=pointer]:
                  - img [ref=e127]
                  - paragraph [ref=e137]: Drag & drop your file(s) to start uploading
                  - generic [ref=e140]: OR
                  - button "Browse files" [ref=e142]
                - paragraph [ref=e143]: Recommended resolution of 500 x 500 px and max size of 1 MB
                - separator [ref=e144]
                - generic [ref=e146]: Add Arabic Translation
              - generic [ref=e150]:
                - button "Cancel" [ref=e151] [cursor=pointer]
                - button "Save Sub Category" [ref=e152] [cursor=pointer]
        - generic [ref=e153]:
          - heading "Super Admins" [level=2] [ref=e154]
          - textbox "Search Menu Item" [ref=e157]
        - table [ref=e159]:
          - rowgroup [ref=e160]:
            - row
            - row "Tasty Aluminum Gloves Add sub category" [ref=e161]:
              - cell "Tasty Aluminum Gloves" [ref=e162]: Tasty Aluminum Gloves
              - cell "Add sub category" [ref=e165]:
                - link "Add sub category" [ref=e166] [cursor=pointer]:
                  - /url: javascript:void(0);
              - cell [ref=e167]:
                - generic [ref=e168]:
                  - link [ref=e169] [cursor=pointer]:
                    - /url: javascript:void(0);
                    - img [ref=e170]
                  - link [ref=e175] [cursor=pointer]:
                    - /url: javascript:void(0);
                    - img [ref=e176]
                  - link [ref=e178] [cursor=pointer]:
                    - /url: javascript:void(0);
                    - img [ref=e179]
                  - checkbox [checked] [ref=e182]
            - row
            - row "Modern Marble Hat Add sub category" [ref=e184]:
              - cell "Modern Marble Hat" [ref=e185]: Modern Marble Hat
              - cell "Add sub category" [ref=e188]:
                - link "Add sub category" [ref=e189] [cursor=pointer]:
                  - /url: javascript:void(0);
              - cell [ref=e190]:
                - generic [ref=e191]:
                  - link [ref=e192] [cursor=pointer]:
                    - /url: javascript:void(0);
                    - img [ref=e193]
                  - link [ref=e198] [cursor=pointer]:
                    - /url: javascript:void(0);
                    - img [ref=e199]
                  - link [ref=e201] [cursor=pointer]:
                    - /url: javascript:void(0);
                    - img [ref=e202]
                  - checkbox [checked] [ref=e205]
            - row
            - row "Elegant Concrete Bike Add sub category" [ref=e207]:
              - cell "Elegant Concrete Bike" [ref=e208]: Elegant Concrete Bike
              - cell "Add sub category" [ref=e211]:
                - link "Add sub category" [ref=e212] [cursor=pointer]:
                  - /url: javascript:void(0);
              - cell [ref=e213]:
                - generic [ref=e214]:
                  - link [ref=e215] [cursor=pointer]:
                    - /url: javascript:void(0);
                    - img [ref=e216]
                  - link [ref=e221] [cursor=pointer]:
                    - /url: javascript:void(0);
                    - img [ref=e222]
                  - link [ref=e224] [cursor=pointer]:
                    - /url: javascript:void(0);
                    - img [ref=e225]
                  - checkbox [checked] [ref=e228]
            - row
            - row "Frozen Aluminum Chair Add sub category" [ref=e230]:
              - cell "Frozen Aluminum Chair" [ref=e231]: Frozen Aluminum Chair
              - cell "Add sub category" [ref=e234]:
                - link "Add sub category" [ref=e235] [cursor=pointer]:
                  - /url: javascript:void(0);
              - cell [ref=e236]:
                - generic [ref=e237]:
                  - link [ref=e238] [cursor=pointer]:
                    - /url: javascript:void(0);
                    - img [ref=e239]
                  - link [ref=e244] [cursor=pointer]:
                    - /url: javascript:void(0);
                    - img [ref=e245]
                  - link [ref=e247] [cursor=pointer]:
                    - /url: javascript:void(0);
                    - img [ref=e248]
                  - checkbox [checked] [ref=e251]
            - row
            - row "Soft Wooden Chair Add sub category" [ref=e253]:
              - cell "Soft Wooden Chair" [ref=e254]: Soft Wooden Chair
              - cell "Add sub category" [ref=e257]:
                - link "Add sub category" [ref=e258] [cursor=pointer]:
                  - /url: javascript:void(0);
              - cell [ref=e259]:
                - generic [ref=e260]:
                  - link [ref=e261] [cursor=pointer]:
                    - /url: javascript:void(0);
                    - img [ref=e262]
                  - link [ref=e267] [cursor=pointer]:
                    - /url: javascript:void(0);
                    - img [ref=e268]
                  - link [ref=e270] [cursor=pointer]:
                    - /url: javascript:void(0);
                    - img [ref=e271]
                  - checkbox [checked] [ref=e274]
            - row
            - row "Cheesy Pizza 2372 Add sub category" [ref=e276]:
              - cell "Cheesy Pizza 2372" [ref=e277]: Cheesy Pizza 2372
              - cell "Add sub category" [ref=e280]:
                - link "Add sub category" [ref=e281] [cursor=pointer]:
                  - /url: javascript:void(0);
              - cell [ref=e282]:
                - generic [ref=e283]:
                  - link [ref=e284] [cursor=pointer]:
                    - /url: javascript:void(0);
                    - img [ref=e285]
                  - link [ref=e290] [cursor=pointer]:
                    - /url: javascript:void(0);
                    - img [ref=e291]
                  - link [ref=e293] [cursor=pointer]:
                    - /url: javascript:void(0);
                    - img [ref=e294]
                  - checkbox [checked] [ref=e297]
            - row
            - 'row "Spicy Pasta // {faker.number.int(9999)} Add sub category" [ref=e299]':
              - 'cell "Spicy Pasta // {faker.number.int(9999)}" [ref=e300]': "Spicy Pasta // {faker.number.int(9999)}"
              - cell "Add sub category" [ref=e303]:
                - link "Add sub category" [ref=e304] [cursor=pointer]:
                  - /url: javascript:void(0);
              - cell [ref=e305]:
                - generic [ref=e306]:
                  - link [ref=e307] [cursor=pointer]:
                    - /url: javascript:void(0);
                    - img [ref=e308]
                  - link [ref=e313] [cursor=pointer]:
                    - /url: javascript:void(0);
                    - img [ref=e314]
                  - link [ref=e316] [cursor=pointer]:
                    - /url: javascript:void(0);
                    - img [ref=e317]
                  - checkbox [checked] [ref=e320]
            - row
            - row "Grilled Pizza Add sub category" [ref=e322]:
              - cell "Grilled Pizza" [ref=e323]: Grilled Pizza
              - cell "Add sub category" [ref=e326]:
                - link "Add sub category" [ref=e327] [cursor=pointer]:
                  - /url: javascript:void(0);
              - cell [ref=e328]:
                - generic [ref=e329]:
                  - link [ref=e330] [cursor=pointer]:
                    - /url: javascript:void(0);
                    - img [ref=e331]
                  - link [ref=e336] [cursor=pointer]:
                    - /url: javascript:void(0);
                    - img [ref=e337]
                  - link [ref=e339] [cursor=pointer]:
                    - /url: javascript:void(0);
                    - img [ref=e340]
                  - checkbox [checked] [ref=e343]
            - row
            - row "Test Category Add sub category" [ref=e345]:
              - cell "Test Category" [ref=e346]: Test Category
              - cell "Add sub category" [ref=e349]:
                - link "Add sub category" [ref=e350] [cursor=pointer]:
                  - /url: javascript:void(0);
              - cell [ref=e351]:
                - generic [ref=e352]:
                  - link [ref=e353] [cursor=pointer]:
                    - /url: javascript:void(0);
                    - img [ref=e354]
                  - link [ref=e359] [cursor=pointer]:
                    - /url: javascript:void(0);
                    - img [ref=e360]
                  - link [ref=e362] [cursor=pointer]:
                    - /url: javascript:void(0);
                    - img [ref=e363]
                  - checkbox [checked] [ref=e366]
            - row
            - row "Recycled Cotton Cheese Add sub category" [ref=e368]:
              - cell "Recycled Cotton Cheese" [ref=e369]: Recycled Cotton Cheese
              - cell "Add sub category" [ref=e372]:
                - link "Add sub category" [ref=e373] [cursor=pointer]:
                  - /url: javascript:void(0);
              - cell [ref=e374]:
                - generic [ref=e375]:
                  - link [ref=e376] [cursor=pointer]:
                    - /url: javascript:void(0);
                    - img [ref=e377]
                  - link [ref=e382] [cursor=pointer]:
                    - /url: javascript:void(0);
                    - img [ref=e383]
                  - link [ref=e385] [cursor=pointer]:
                    - /url: javascript:void(0);
                    - img [ref=e386]
                  - checkbox [checked] [ref=e389]
            - row
            - row "testing_Abc Add sub category" [ref=e391]:
              - cell "testing_Abc" [ref=e392]: testing_Abc
              - cell "Add sub category" [ref=e395]:
                - link "Add sub category" [ref=e396] [cursor=pointer]:
                  - /url: javascript:void(0);
              - cell [ref=e397]:
                - generic [ref=e398]:
                  - link [ref=e399] [cursor=pointer]:
                    - /url: javascript:void(0);
                    - img [ref=e400]
                  - link [ref=e405] [cursor=pointer]:
                    - /url: javascript:void(0);
                    - img [ref=e406]
                  - link [ref=e408] [cursor=pointer]:
                    - /url: javascript:void(0);
                    - img [ref=e409]
                  - checkbox [checked] [ref=e412]
            - row
            - row "Biryani Add sub category" [ref=e414]:
              - cell "Biryani" [ref=e415]: Biryani
              - cell "Add sub category" [ref=e418]:
                - link "Add sub category" [ref=e419] [cursor=pointer]:
                  - /url: javascript:void(0);
              - cell [ref=e420]:
                - generic [ref=e421]:
                  - link [ref=e422] [cursor=pointer]:
                    - /url: javascript:void(0);
                    - img [ref=e423]
                  - link [ref=e428] [cursor=pointer]:
                    - /url: javascript:void(0);
                    - img [ref=e429]
                  - link [ref=e431] [cursor=pointer]:
                    - /url: javascript:void(0);
                    - img [ref=e432]
                  - checkbox [checked] [ref=e435]
            - row
            - row "All Desert Add sub category" [ref=e437]:
              - cell "All Desert" [ref=e438]: All Desert
              - cell "Add sub category" [ref=e441]:
                - link "Add sub category" [ref=e442] [cursor=pointer]:
                  - /url: javascript:void(0);
              - cell [ref=e443]:
                - generic [ref=e444]:
                  - link [ref=e445] [cursor=pointer]:
                    - /url: javascript:void(0);
                    - img [ref=e446]
                  - link [ref=e451] [cursor=pointer]:
                    - /url: javascript:void(0);
                    - img [ref=e452]
                  - link [ref=e454] [cursor=pointer]:
                    - /url: javascript:void(0);
                    - img [ref=e455]
                  - checkbox [checked] [ref=e458]
            - row
            - row "Drinks Add sub category" [ref=e460]:
              - cell "Drinks" [ref=e461]: Drinks
              - cell "Add sub category" [ref=e464]:
                - link "Add sub category" [ref=e465] [cursor=pointer]:
                  - /url: javascript:void(0);
              - cell [ref=e466]:
                - generic [ref=e467]:
                  - link [ref=e468] [cursor=pointer]:
                    - /url: javascript:void(0);
                    - img [ref=e469]
                  - link [ref=e474] [cursor=pointer]:
                    - /url: javascript:void(0);
                    - img [ref=e475]
                  - link [ref=e477] [cursor=pointer]:
                    - /url: javascript:void(0);
                    - img [ref=e478]
                  - checkbox [checked] [ref=e481]
  - searchbox [ref=e486]
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
  9  |     this.dropdownOptions = this.page.getByText("Recycled Cotton Cheese").nth(5);
  10 |     this.itemselect = this.page.getByRole("option", {
  11 |       name: "Recycled Cotton Cheese",
  12 |     });
  13 |   }
  14 |   async openSubCategoryModal() {
  15 |     await this.createSubCategoryBtn.click();
  16 |   }
  17 |   async saveSubCategory() {
  18 |     await this.selectCategoryDropdown.click();
> 19 |     await this.dropdownOptions.click();
     |                                ^ TimeoutError: locator.click: Timeout 10000ms exceeded.
  20 |     await this.itemselect.click();
  21 |   }
  22 | }
  23 | module.exports = Sub_Category;
  24 | 
```