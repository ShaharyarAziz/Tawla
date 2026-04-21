# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Digital_Menu\DigitalMenu.spec.js >> User adds Categories,SubCategories & Items in Digital Menu
- Location: tests\Digital_Menu\DigitalMenu.spec.js:28:1

# Error details

```
Error: locator.click: Error: strict mode violation: getByText('Recycled Cotton Cheese') resolved to 4 elements:
    1) <option value="266" data-select2-id="14">Recycled Cotton Cheese</option> aka locator('#for_catergories')
    2) <option value="266" data-arabic-name="recycled_cotton_cheese_0">Recycled Cotton Cheese</option> aka locator('#lang_for_catergories').getByText('Recycled Cotton Cheese')
    3) <span>Recycled Cotton Cheese</span> aka locator('#category-dropdown').getByText('Recycled Cotton Cheese')
    4) <li role="option" aria-selected="false" class="select2-results__option" id="select2-for_catergories-result-77g2-266" data-select2-id="select2-for_catergories-result-77g2-266">Recycled Cotton Cheese</li> aka getByRole('option', { name: 'Recycled Cotton Cheese' })

Call log:
  - waiting for getByText('Recycled Cotton Cheese')

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
  - searchbox [ref=e161]
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
  9  |     this.dropdownOptions = this.page.getByText("Recycled Cotton Cheese")
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
     |                                ^ Error: locator.click: Error: strict mode violation: getByText('Recycled Cotton Cheese') resolved to 4 elements:
  20 |     await this.itemselect.click();
  21 |   }
  22 | }
  23 | module.exports = Sub_Category;
  24 | 
```