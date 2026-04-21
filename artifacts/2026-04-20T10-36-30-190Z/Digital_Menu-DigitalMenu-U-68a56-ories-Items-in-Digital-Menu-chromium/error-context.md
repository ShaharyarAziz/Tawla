# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Digital_Menu\DigitalMenu.spec.js >> User adds Categories,SubCategories & Items in Digital Menu
- Location: tests\Digital_Menu\DigitalMenu.spec.js:8:1

# Error details

```
TimeoutError: locator.click: Timeout 10000ms exceeded.
Call log:
  - waiting for locator('a[data-target="#categoryModel"]')
    - locator resolved to <a data-toggle="modal" class="btn btn-theme-simple" data-target="#categoryModel">↵                                    + Create Cat…</a>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <input type="text" name="catergories[]" class="form-control" id="category_name_create" placeholder="Enter Category Name"/> from <div role="dialog" aria-modal="true" id="categoryModel" class="modal fade show">…</div> subtree intercepts pointer events
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <label for="category_name_create">Enter Category Name</label> from <div role="dialog" aria-modal="true" id="categoryModel" class="modal fade show">…</div> subtree intercepts pointer events
    - retrying click action
      - waiting 100ms
    3 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <label for="category_name_create">Enter Category Name</label> from <div role="dialog" aria-modal="true" id="categoryModel" class="modal fade show">…</div> subtree intercepts pointer events
    - retrying click action
      - waiting 500ms
    4 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div>…</div> from <div role="dialog" aria-modal="true" id="categoryModel" class="modal fade show">…</div> subtree intercepts pointer events
    - retrying click action
      - waiting 500ms
      - waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div>…</div> from <div role="dialog" aria-modal="true" id="categoryModel" class="modal fade show">…</div> subtree intercepts pointer events
    - retrying click action
      - waiting 500ms
      - waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <label for="category_name_create">Enter Category Name</label> from <div role="dialog" aria-modal="true" id="categoryModel" class="modal fade show">…</div> subtree intercepts pointer events
    - retrying click action
      - waiting 500ms
      - waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <label for="category_name_create">Enter Category Name</label> from <div role="dialog" aria-modal="true" id="categoryModel" class="modal fade show">…</div> subtree intercepts pointer events
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
            - heading "Create Category" [level=2] [ref=e92]
            - button [ref=e93] [cursor=pointer]:
              - img [ref=e94]
          - generic [ref=e97]:
            - generic [ref=e98]:
              - generic [ref=e99]:
                - generic [ref=e100]: Enter Category Name
                - textbox "Enter Category Name" [ref=e101]
              - separator [ref=e102]
              - generic [ref=e104]: Add Arabic Translation
            - generic [ref=e108]:
              - button "Cancel" [ref=e109] [cursor=pointer]
              - button "Save Category" [ref=e110] [cursor=pointer]
      - generic [ref=e111]:
        - heading "Super Admins" [level=2] [ref=e112]
        - textbox "Search Menu Item" [ref=e115]
      - table [ref=e117]:
        - rowgroup [ref=e118]:
          - row
          - row "testing_Abc Add sub category" [ref=e119]:
            - cell "testing_Abc" [ref=e120]: testing_Abc
            - cell "Add sub category" [ref=e123]:
              - link "Add sub category" [ref=e124] [cursor=pointer]:
                - /url: javascript:void(0);
            - cell [ref=e125]:
              - generic [ref=e126]:
                - link [ref=e127] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e128]
                - link [ref=e133] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e134]
                - link [ref=e136] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e137]
                - checkbox [checked] [ref=e140]
          - row
          - row "Biryani Add sub category" [ref=e142]:
            - cell "Biryani" [ref=e143]: Biryani
            - cell "Add sub category" [ref=e146]:
              - link "Add sub category" [ref=e147] [cursor=pointer]:
                - /url: javascript:void(0);
            - cell [ref=e148]:
              - generic [ref=e149]:
                - link [ref=e150] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e151]
                - link [ref=e156] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e157]
                - link [ref=e159] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e160]
                - checkbox [checked] [ref=e163]
          - row
          - row "All Desert Add sub category" [ref=e165]:
            - cell "All Desert" [ref=e166]: All Desert
            - cell "Add sub category" [ref=e169]:
              - link "Add sub category" [ref=e170] [cursor=pointer]:
                - /url: javascript:void(0);
            - cell [ref=e171]:
              - generic [ref=e172]:
                - link [ref=e173] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e174]
                - link [ref=e179] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e180]
                - link [ref=e182] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e183]
                - checkbox [checked] [ref=e186]
          - row
          - row "Drinks Add sub category" [ref=e188]:
            - cell "Drinks" [ref=e189]: Drinks
            - cell "Add sub category" [ref=e192]:
              - link "Add sub category" [ref=e193] [cursor=pointer]:
                - /url: javascript:void(0);
            - cell [ref=e194]:
              - generic [ref=e195]:
                - link [ref=e196] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e197]
                - link [ref=e202] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e203]
                - link [ref=e205] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e206]
                - checkbox [checked] [ref=e209]
```

# Test source

```ts
  1  | class Category {
  2  |   constructor(page) {
  3  |     this.page = page;
  4  | 
  5  |     this.createCategoryBtn = page.locator('a[data-target="#categoryModel"]');
  6  |     this.categoryInput = page.locator('#category_name_create');
  7  |     this.saveCategoryBtn = page.getByRole('button', { name: 'Save Category' });
  8  | 
  9  |     this.modal = page.locator('#categoryModel');
  10 |   }
  11 | 
  12 |   async openCategoryModal() {
  13 |     await this.createCategoryBtn.waitFor({ state: 'visible' });
> 14 |     await this.createCategoryBtn.click();
     |                                  ^ TimeoutError: locator.click: Timeout 10000ms exceeded.
  15 | 
  16 |     // wait for modal
  17 |     await this.modal.waitFor({ state: 'visible' });
  18 |   }
  19 | 
  20 |   async saveCategory(name) {
  21 |     await this.categoryInput.fill(name);
  22 |     await this.saveCategoryBtn.click();
  23 | 
  24 |     // wait for modal to close
  25 |     await this.modal.waitFor({ state: 'hidden' });
  26 |   }
  27 | 
  28 |   async addCategory(name) {
  29 |     await this.openCategoryModal();
  30 |     await this.saveCategory(name);
  31 | 
  32 |     // validation (important)
  33 |     await this.page.getByText(name).waitFor();
  34 |   }
  35 | }
  36 | 
  37 | module.exports = { Category };
  38 | 
```