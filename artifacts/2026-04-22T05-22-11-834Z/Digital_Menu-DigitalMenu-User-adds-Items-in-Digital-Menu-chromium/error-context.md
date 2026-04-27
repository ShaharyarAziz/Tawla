# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Digital_Menu\DigitalMenu.spec.js >> User adds Items in Digital Menu
- Location: tests\Digital_Menu\DigitalMenu.spec.js:51:1

# Error details

```
TypeError: Cannot read properties of undefined (reading 'click')
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
                  - textbox "Item Name" [ref=e102]: Crispy Sandwich
                - generic [ref=e103]:
                  - generic [ref=e104]: Food Type
                  - generic [ref=e105]:
                    - generic [ref=e106] [cursor=pointer]:
                      - generic [ref=e107]: Select...
                      - img [ref=e108]
                    - generic [ref=e111]:
                      - generic [ref=e112] [cursor=pointer]:
                        - checkbox "Vegetarian" [ref=e113]
                        - generic [ref=e114]: Vegetarian
                      - generic [ref=e115] [cursor=pointer]:
                        - checkbox "Non-Vegetarian" [ref=e116]
                        - generic [ref=e117]: Non-Vegetarian
                      - generic [ref=e118] [cursor=pointer]:
                        - checkbox "Variations" [ref=e119]
                        - generic [ref=e120]: Variations
              - generic [ref=e121]:
                - generic [ref=e122]:
                  - generic [ref=e123]: Item Price
                  - generic [ref=e124]:
                    - textbox "Item Price" [ref=e125]:
                      - /placeholder: Enter Price
                    - img [ref=e126]
                - generic [ref=e128]:
                  - generic [ref=e129]: Category
                  - generic [ref=e131] [cursor=pointer]:
                    - generic [ref=e132]: Select...
                    - img [ref=e133]
              - generic [ref=e135]:
                - generic [ref=e136]: Sub Category
                - generic [ref=e138] [cursor=pointer]:
                  - generic [ref=e139]: Select...
                  - img [ref=e140]
              - separator [ref=e142]
              - separator [ref=e143]
              - generic [ref=e145] [cursor=pointer]:
                - img [ref=e146]
                - paragraph [ref=e156]: Drag & drop your file(s) to start uploading
                - generic [ref=e159]: OR
                - button "Browse files" [ref=e161]
              - paragraph [ref=e162]: Recommended resolution of 500 x 500 px and max size of 1 MB
              - separator [ref=e163]
              - generic [ref=e164]:
                - generic [ref=e165]: Item Description
                - textbox "Item Description" [ref=e166]:
                  - /placeholder: Enter Item Description
              - generic [ref=e168]: Add Arabic Translation
            - generic [ref=e172]:
              - button "Cancel" [ref=e173] [cursor=pointer]
              - button "Save Item" [ref=e174] [cursor=pointer]
      - generic [ref=e175]:
        - heading "Super Admins" [level=2] [ref=e176]
        - textbox "Search Menu Item" [ref=e179]
```

# Test source

```ts
  1  | class items {
  2  |   constructor(page) {
  3  |     this.page = page;
  4  |     this.createItemBtn = page.getByText("+ Create Item");
  5  |     this.item_name = page.locator("input#item_name");
  6  |     this.foodtypeDropdown = page.locator("#food-type-label");
  7  |     this.vegeterian = page.getByText("Vegetarian");
  8  |     this.nonVegeterian = page.getByText("Non-Vegetarian");
  9  |   }
  10 |   async openCreateItemModal() {
  11 |     await this.createItemBtn.click();
  12 |   }
  13 |   async saveItem(name) {
  14 |     await this.item_name.fill(name);
  15 |     await this.foodtypeDropdown.click();
> 16 |     await this.foodtypeOptions.click();
     |                                ^ TypeError: Cannot read properties of undefined (reading 'click')
  17 |   }
  18 | }
  19 | module.exports = { items };
  20 | 
```