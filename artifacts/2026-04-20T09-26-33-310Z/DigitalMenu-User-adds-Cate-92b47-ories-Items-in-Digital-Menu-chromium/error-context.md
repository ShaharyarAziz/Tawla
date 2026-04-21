# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: DigitalMenu.spec.js >> User adds Categories,SubCategories & Items in Digital Menu
- Location: tests\DigitalMenu.spec.js:7:1

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('link', { name: 'Categories' })
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByRole('link', { name: 'Categories' })

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
      - generic [ref=e88]:
        - heading "Super Admins" [level=2] [ref=e89]
        - textbox "Search Menu Item" [ref=e92]
      - table [ref=e94]:
        - rowgroup [ref=e95]:
          - row
          - row "testing_Abc Add sub category" [ref=e96]:
            - cell "testing_Abc" [ref=e97]: testing_Abc
            - cell "Add sub category" [ref=e100]:
              - link "Add sub category" [ref=e101] [cursor=pointer]:
                - /url: javascript:void(0);
            - cell [ref=e102]:
              - generic [ref=e103]:
                - link [ref=e104] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e105]
                - link [ref=e110] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e111]
                - link [ref=e113] [cursor=pointer]:
                  - /url: javascript:void(0);
                  - img [ref=e114]
                - checkbox [checked] [ref=e117]
          - row
          - row "Biryani Add sub category" [ref=e119]:
            - cell "Biryani" [ref=e120]: Biryani
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
          - row "All Desert Add sub category" [ref=e142]:
            - cell "All Desert" [ref=e143]: All Desert
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
          - row "Drinks Add sub category" [ref=e165]:
            - cell "Drinks" [ref=e166]: Drinks
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
```

# Test source

```ts
  1  | const { test, expect } = require("@playwright/test");
  2  | const { LoginPage } = require("../pages/LoginPage");
  3  | const { DigitalMenuPage } = require("../pages/Digital_Menu");
  4  | const dotenv = require("dotenv");
  5  | dotenv.config();
  6  | 
  7  | test("User adds Categories,SubCategories & Items in Digital Menu", async ({
  8  |   page,
  9  | }) => {
  10 |   const login = new LoginPage(page);
  11 |   const digitalMenu = new DigitalMenuPage(page);
  12 | 
  13 |   await login.navigate();
  14 |   await login.login(process.env.EMAIL, process.env.PASSWORD);
  15 | 
  16 |   await expect(page).toHaveURL(/\/merchant\/dashboard/);
  17 | 
  18 |   await digitalMenu.goToDigitalMenu();
  19 |   await expect(page).toHaveURL(
  20 |     /\/merchant\/digitalmenu\/menu\/digitalMenuSection/,
  21 |   );
> 22 |   await expect(digitalMenu.CategorysLink).toBeVisible();
     |                                           ^ Error: expect(locator).toBeVisible() failed
  23 |   await expect(digitalMenu.SubCategorysLink).toBeVisible();
  24 |   await expect(digitalMenu.ItemsLink).toBeVisible();
  25 |   await digitalMenu.CategorysLink.click();
  26 |   //   await page.pause();
  27 | });
  28 | 
```