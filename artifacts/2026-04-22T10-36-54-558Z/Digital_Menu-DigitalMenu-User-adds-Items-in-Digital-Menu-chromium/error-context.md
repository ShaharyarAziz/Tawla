# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Digital_Menu\DigitalMenu.spec.js >> User adds Items in Digital Menu
- Location: tests\Digital_Menu\DigitalMenu.spec.js:52:1

# Error details

```
TimeoutError: locator.click: Timeout 10000ms exceeded.
Call log:
  - waiting for locator('input[value="vegetarian"]')
    - locator resolved to <input type="checkbox" value="vegetarian" class="food-type-checkbox custom-checkbox"/>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is not visible
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is not visible
    - retrying click action
      - waiting 100ms
    19 × waiting for element to be visible, enabled and stable
       - element is not visible
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
            - heading "Create Item" [level=2] [ref=e92]
            - button [ref=e93] [cursor=pointer]:
              - img [ref=e94]
          - generic [ref=e97]:
            - generic [ref=e98]:
              - generic [ref=e99]:
                - generic [ref=e100]:
                  - generic [ref=e101]: Item Name
                  - textbox "Item Name" [ref=e102]: Spicy Pasta
                - generic [ref=e103]:
                  - generic [ref=e104]: Food Type
                  - generic [ref=e106] [cursor=pointer]:
                    - generic [ref=e107]: Select...
                    - img [ref=e108]
              - generic [ref=e110]:
                - generic [ref=e111]:
                  - generic [ref=e112]: Item Price
                  - generic [ref=e113]:
                    - textbox "Item Price" [ref=e114]:
                      - /placeholder: Enter Price
                    - img [ref=e115]
                - generic [ref=e117]:
                  - generic [ref=e118]: Category
                  - generic [ref=e119]:
                    - generic [ref=e120] [cursor=pointer]:
                      - generic [ref=e121]: Select...
                      - img [ref=e122]
                    - generic [ref=e125]:
                      - generic [ref=e126] [cursor=pointer]:
                        - checkbox "All Desert" [ref=e127]
                        - generic [ref=e128]: All Desert
                      - generic [ref=e129] [cursor=pointer]:
                        - checkbox "Drinks" [ref=e130]
                        - generic [ref=e131]: Drinks
                      - generic [ref=e132] [cursor=pointer]:
                        - checkbox "Biryani" [ref=e133]
                        - generic [ref=e134]: Biryani
                      - generic [ref=e135] [cursor=pointer]:
                        - checkbox "testing_Abc" [ref=e136]
                        - generic [ref=e137]: testing_Abc
                      - generic [ref=e138] [cursor=pointer]:
                        - checkbox "Test Category" [ref=e139]
                        - generic [ref=e140]: Test Category
                      - generic [ref=e141] [cursor=pointer]:
                        - checkbox "Recycled Cotton Cheese" [ref=e142]
                        - generic [ref=e143]: Recycled Cotton Cheese
                      - generic [ref=e144] [cursor=pointer]:
                        - checkbox "Tasty Aluminum Gloves" [ref=e145]
                        - generic [ref=e146]: Tasty Aluminum Gloves
                      - generic [ref=e147] [cursor=pointer]:
                        - checkbox "Modern Marble Hat" [ref=e148]
                        - generic [ref=e149]: Modern Marble Hat
                      - generic [ref=e150] [cursor=pointer]:
                        - checkbox "Elegant Concrete Bike" [ref=e151]
                        - generic [ref=e152]: Elegant Concrete Bike
                      - generic [ref=e153] [cursor=pointer]:
                        - checkbox "Frozen Aluminum Chair" [ref=e154]
                        - generic [ref=e155]: Frozen Aluminum Chair
                      - generic [ref=e156] [cursor=pointer]:
                        - checkbox "Soft Wooden Chair" [ref=e157]
                        - generic [ref=e158]: Soft Wooden Chair
                      - generic [ref=e159] [cursor=pointer]:
                        - checkbox "Cheesy Pizza 2372" [ref=e160]
                        - generic [ref=e161]: Cheesy Pizza 2372
                      - generic [ref=e162] [cursor=pointer]:
                        - 'checkbox "Spicy Pasta // {faker.number.int(9999)}" [ref=e163]'
                        - generic [ref=e164]: "Spicy Pasta // {faker.number.int(9999)}"
                      - generic [ref=e165] [cursor=pointer]:
                        - checkbox "Grilled Pizza" [ref=e166]
                        - generic [ref=e167]: Grilled Pizza
              - generic [ref=e168]:
                - generic [ref=e169]: Sub Category
                - generic [ref=e171] [cursor=pointer]:
                  - generic [ref=e172]: Select...
                  - img [ref=e173]
              - separator [ref=e175]
              - separator [ref=e176]
              - generic [ref=e178] [cursor=pointer]:
                - img [ref=e179]
                - paragraph [ref=e189]: Drag & drop your file(s) to start uploading
                - generic [ref=e192]: OR
                - button "Browse files" [ref=e194]
              - paragraph [ref=e195]: Recommended resolution of 500 x 500 px and max size of 1 MB
              - separator [ref=e196]
              - generic [ref=e197]:
                - generic [ref=e198]: Item Description
                - textbox "Item Description" [ref=e199]:
                  - /placeholder: Enter Item Description
              - generic [ref=e201]: Add Arabic Translation
            - generic [ref=e205]:
              - button "Cancel" [ref=e206] [cursor=pointer]
              - button "Save Item" [ref=e207] [cursor=pointer]
      - generic [ref=e208]:
        - heading "Super Admins" [level=2] [ref=e209]
        - textbox "Search Menu Item" [ref=e212]
      - table [ref=e214]:
        - rowgroup [ref=e215]:
          - row
          - row "Tasty Aluminum Gloves Add sub category" [ref=e216]:
            - cell "Tasty Aluminum Gloves" [ref=e217]: Tasty Aluminum Gloves
            - cell "Add sub category" [ref=e220]:
              - link "Add sub category" [ref=e221] [cursor=pointer]:
                - /url: javascript:void(0);
            - cell [ref=e222]:
              - generic [ref=e223]:
                - link [ref=e224] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e225]
                - link [ref=e230] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e231]
                - link [ref=e233] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e234]
                - checkbox [checked] [ref=e237]
          - row
          - row "Modern Marble Hat Add sub category" [ref=e239]:
            - cell "Modern Marble Hat" [ref=e240]: Modern Marble Hat
            - cell "Add sub category" [ref=e243]:
              - link "Add sub category" [ref=e244] [cursor=pointer]:
                - /url: javascript:void(0);
            - cell [ref=e245]:
              - generic [ref=e246]:
                - link [ref=e247] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e248]
                - link [ref=e253] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e254]
                - link [ref=e256] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e257]
                - checkbox [checked] [ref=e260]
          - row
          - row "Elegant Concrete Bike Add sub category" [ref=e262]:
            - cell "Elegant Concrete Bike" [ref=e263]: Elegant Concrete Bike
            - cell "Add sub category" [ref=e266]:
              - link "Add sub category" [ref=e267] [cursor=pointer]:
                - /url: javascript:void(0);
            - cell [ref=e268]:
              - generic [ref=e269]:
                - link [ref=e270] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e271]
                - link [ref=e276] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e277]
                - link [ref=e279] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e280]
                - checkbox [checked] [ref=e283]
          - row
          - row "Frozen Aluminum Chair Add sub category" [ref=e285]:
            - cell "Frozen Aluminum Chair" [ref=e286]: Frozen Aluminum Chair
            - cell "Add sub category" [ref=e289]:
              - link "Add sub category" [ref=e290] [cursor=pointer]:
                - /url: javascript:void(0);
            - cell [ref=e291]:
              - generic [ref=e292]:
                - link [ref=e293] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e294]
                - link [ref=e299] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e300]
                - link [ref=e302] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e303]
                - checkbox [checked] [ref=e306]
          - row
          - row "Soft Wooden Chair Add sub category" [ref=e308]:
            - cell "Soft Wooden Chair" [ref=e309]: Soft Wooden Chair
            - cell "Add sub category" [ref=e312]:
              - link "Add sub category" [ref=e313] [cursor=pointer]:
                - /url: javascript:void(0);
            - cell [ref=e314]:
              - generic [ref=e315]:
                - link [ref=e316] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e317]
                - link [ref=e322] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e323]
                - link [ref=e325] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e326]
                - checkbox [checked] [ref=e329]
          - row
          - row "Cheesy Pizza 2372 Add sub category" [ref=e331]:
            - cell "Cheesy Pizza 2372" [ref=e332]: Cheesy Pizza 2372
            - cell "Add sub category" [ref=e335]:
              - link "Add sub category" [ref=e336] [cursor=pointer]:
                - /url: javascript:void(0);
            - cell [ref=e337]:
              - generic [ref=e338]:
                - link [ref=e339] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e340]
                - link [ref=e345] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e346]
                - link [ref=e348] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e349]
                - checkbox [checked] [ref=e352]
          - row
          - 'row "Spicy Pasta // {faker.number.int(9999)} Add sub category" [ref=e354]':
            - 'cell "Spicy Pasta // {faker.number.int(9999)}" [ref=e355]': "Spicy Pasta // {faker.number.int(9999)}"
            - cell "Add sub category" [ref=e358]:
              - link "Add sub category" [ref=e359] [cursor=pointer]:
                - /url: javascript:void(0);
            - cell [ref=e360]:
              - generic [ref=e361]:
                - link [ref=e362] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e363]
                - link [ref=e368] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e369]
                - link [ref=e371] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e372]
                - checkbox [checked] [ref=e375]
          - row
          - row "Grilled Pizza Add sub category" [ref=e377]:
            - cell "Grilled Pizza" [ref=e378]: Grilled Pizza
            - cell "Add sub category" [ref=e381]:
              - link "Add sub category" [ref=e382] [cursor=pointer]:
                - /url: javascript:void(0);
            - cell [ref=e383]:
              - generic [ref=e384]:
                - link [ref=e385] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e386]
                - link [ref=e391] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e392]
                - link [ref=e394] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e395]
                - checkbox [checked] [ref=e398]
          - row
          - row "Test Category Add sub category" [ref=e400]:
            - cell "Test Category" [ref=e401]: Test Category
            - cell "Add sub category" [ref=e404]:
              - link "Add sub category" [ref=e405] [cursor=pointer]:
                - /url: javascript:void(0);
            - cell [ref=e406]:
              - generic [ref=e407]:
                - link [ref=e408] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e409]
                - link [ref=e414] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e415]
                - link [ref=e417] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e418]
                - checkbox [checked] [ref=e421]
          - row
          - row "Recycled Cotton Cheese Add sub category" [ref=e423]:
            - cell "Recycled Cotton Cheese" [ref=e424]: Recycled Cotton Cheese
            - cell "Add sub category" [ref=e427]:
              - link "Add sub category" [ref=e428] [cursor=pointer]:
                - /url: javascript:void(0);
            - cell [ref=e429]:
              - generic [ref=e430]:
                - link [ref=e431] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e432]
                - link [ref=e437] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e438]
                - link [ref=e440] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e441]
                - checkbox [checked] [ref=e444]
          - row
          - row "testing_Abc Add sub category" [ref=e446]:
            - cell "testing_Abc" [ref=e447]: testing_Abc
            - cell "Add sub category" [ref=e450]:
              - link "Add sub category" [ref=e451] [cursor=pointer]:
                - /url: javascript:void(0);
            - cell [ref=e452]:
              - generic [ref=e453]:
                - link [ref=e454] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e455]
                - link [ref=e460] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e461]
                - link [ref=e463] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e464]
                - checkbox [checked] [ref=e467]
          - row
          - row "Biryani Add sub category" [ref=e469]:
            - cell "Biryani" [ref=e470]: Biryani
            - cell "Add sub category" [ref=e473]:
              - link "Add sub category" [ref=e474] [cursor=pointer]:
                - /url: javascript:void(0);
            - cell [ref=e475]:
              - generic [ref=e476]:
                - link [ref=e477] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e478]
                - link [ref=e483] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e484]
                - link [ref=e486] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e487]
                - checkbox [checked] [ref=e490]
          - row
          - row "All Desert Add sub category" [ref=e492]:
            - cell "All Desert" [ref=e493]: All Desert
            - cell "Add sub category" [ref=e496]:
              - link "Add sub category" [ref=e497] [cursor=pointer]:
                - /url: javascript:void(0);
            - cell [ref=e498]:
              - generic [ref=e499]:
                - link [ref=e500] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e501]
                - link [ref=e506] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e507]
                - link [ref=e509] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e510]
                - checkbox [checked] [ref=e513]
          - row
          - row "Drinks Add sub category" [ref=e515]:
            - cell "Drinks" [ref=e516]: Drinks
            - cell "Add sub category" [ref=e519]:
              - link "Add sub category" [ref=e520] [cursor=pointer]:
                - /url: javascript:void(0);
            - cell [ref=e521]:
              - generic [ref=e522]:
                - link [ref=e523] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e524]
                - link [ref=e529] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e530]
                - link [ref=e532] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e533]
                - checkbox [checked] [ref=e536]
```

# Test source

```ts
  1  | const { generateRandomPrice } = require("../../utils/testData");
  2  | 
  3  | class items {
  4  |   constructor(page) {
  5  |     this.page = page;
  6  |     this.createItemBtn = page.getByText("+ Create Item");
  7  |     this.item_name = page.locator("input#item_name");
  8  |     this.foodtypeDropdown = page.locator("span#food-type-label");
  9  |     this.vegeterian = page.locator('input[value="vegetarian"]');
  10 |     this.nonVegeterian = page.locator('input[value="non-vegetarian"]');
  11 |     this.item_price = page.locator("input#item_price");
  12 |     this.categoryNameDropdown = page.locator("span#category-label");
  13 |     this.Marblehat = page
  14 |       .locator("#category-dropdown")
  15 |       .getByText("Modern Marble Hat");
  16 |   }
  17 |   async openCreateItemModal() {
  18 |     await this.createItemBtn.click();
  19 |   }
  20 |   async saveItem(name, price) {
  21 |     await this.item_name.fill(name);
  22 |     await this.foodtypeDropdown.click();
> 23 |     await this.vegeterian.click();
     |                           ^ TimeoutError: locator.click: Timeout 10000ms exceeded.
  24 |     await this.nonVegeterian.click();
  25 |     await this.item_price.click();
  26 |     await this.item_price.fill(price);
  27 |     await this.categoryNameDropdown.click();
  28 |     await this.Marblehat.scrollIntoViewIfNeeded();
  29 |     await this.Marblehat.click();
  30 |   }
  31 | }
  32 | module.exports = { items };
  33 | 
```