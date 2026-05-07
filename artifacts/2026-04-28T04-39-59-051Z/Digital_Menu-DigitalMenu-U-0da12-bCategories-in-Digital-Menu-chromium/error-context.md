# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Digital_Menu\DigitalMenu.spec.js >> User adds SubCategories in Digital Menu
- Location: tests\Digital_Menu\DigitalMenu.spec.js:31:6

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('span[role="combobox"]').locator('span').first()

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
                  - combobox "Select Category" [ref=e102]:
                    - option "Select a category" [selected]
                    - option "All Desert"
                    - option "Drinks"
                    - option "Biryani"
                    - option "testing_Abc"
                    - option "Test Category"
                    - option "Recycled Cotton Cheese"
                    - option "Tasty Aluminum Gloves"
                    - option "Modern Marble Hat"
                    - option "Elegant Concrete Bike"
                    - option "Frozen Aluminum Chair"
                    - option "Soft Wooden Chair"
                    - option "Cheesy Pizza 2372"
                    - 'option "Spicy Pasta // {faker.number.int(9999)}"'
                    - option "Grilled Pizza"
                    - option "Spicy Pizza"
                    - option "Spicy Pasta"
                    - option "Grilled Pasta"
                - generic [ref=e103]:
                  - generic [ref=e104]: Enter Sub Category
                  - textbox "Enter Sub Category" [ref=e105]
              - generic [ref=e107] [cursor=pointer]:
                - img [ref=e108]
                - paragraph [ref=e118]: Drag & drop your file(s) to start uploading
                - generic [ref=e121]: OR
                - button "Browse files" [ref=e123]
              - paragraph [ref=e124]: Recommended resolution of 500 x 500 px and max size of 1 MB
              - separator [ref=e125]
              - generic [ref=e127]: Add Arabic Translation
            - generic [ref=e131]:
              - button "Cancel" [ref=e132] [cursor=pointer]
              - button "Save Sub Category" [ref=e133] [cursor=pointer]
      - generic [ref=e134]:
        - heading "Super Admins" [level=2] [ref=e135]
        - textbox "Search Menu Item" [ref=e138]
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
> 20 |     await this.selectCategoryDropdown.click();
     |                                       ^ Error: locator.click: Test timeout of 30000ms exceeded.
  21 |     await this.dropdownOptions.click();
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