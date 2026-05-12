# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: logout.spec.js >> User LogOut
- Location: tests\logout.spec.js:7:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
TimeoutError: page.waitForURL: Timeout 30000ms exceeded.
=========================== logs ===========================
waiting for navigation until "load"
  navigated to "http://13.51.170.24/merchant/dashboard"
  "domcontentloaded" event fired
============================================================
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
  - generic [ref=e76]:
    - heading "Dashboard" [level=2] [ref=e78]
    - generic [ref=e81]:
      - generic [ref=e82]:
        - generic [ref=e83]: Till Open
        - generic [ref=e84]: "Opened at: 11:03 AM"
        - generic [ref=e85]: "Opening cash: AED 500.00"
      - button "Close Till" [ref=e86] [cursor=pointer]
    - generic [ref=e88]:
      - generic [ref=e89]:
        - heading "Overview" [level=3] [ref=e90]
        - generic [ref=e91] [cursor=pointer]:
          - textbox "Today" [ref=e92]
          - img [ref=e93]
      - generic [ref=e95]:
        - generic [ref=e96]:
          - generic "Compared to yesterday" [ref=e98]:
            - img [ref=e99]
            - text: 100.0%
          - img [ref=e102]
          - generic [ref=e104]: Sales
          - generic [ref=e105]:
            - img [ref=e107]
            - generic [ref=e109]: "0"
        - generic [ref=e110]:
          - generic "Compared to yesterday" [ref=e112]:
            - img [ref=e113]
            - text: 75.0%
          - img [ref=e116]
          - generic [ref=e118]: Orders
          - generic [ref=e119]: 1 Orders
        - generic [ref=e120]:
          - generic "Compared to yesterday" [ref=e122]:
            - img [ref=e123]
            - text: 100.0%
          - img [ref=e126]
          - generic [ref=e128]: Tips
          - generic [ref=e129]:
            - img [ref=e131]
            - generic [ref=e133]: "0"
        - generic [ref=e134]:
          - generic "Compared to last month" [ref=e136]:
            - img [ref=e137]
            - text: 100.0%
          - img [ref=e140]
          - generic [ref=e147]: QR
          - generic [ref=e148]: 0 Scans
        - generic [ref=e149]:
          - generic "Compared to previous period" [ref=e151]: 0.0%
          - img [ref=e153]
          - generic [ref=e158]: Refunds
          - generic [ref=e159]:
            - img [ref=e161]
            - generic [ref=e163]: "0"
    - generic [ref=e165]:
      - generic [ref=e166]:
        - heading "Sales & Turnover Trends" [level=2] [ref=e168]
        - generic [ref=e169] [cursor=pointer]:
          - generic [ref=e170]: Today
          - textbox "Today" [ref=e171]
          - img [ref=e172]
      - generic [ref=e176]:
        - generic [ref=e179]: Order Volume
        - generic [ref=e182]: Revenue
    - generic [ref=e184]:
      - heading "Quick Actions & Settings" [level=6] [ref=e185]
      - generic [ref=e186]:
        - generic [ref=e187]:
          - paragraph [ref=e188]: Quick Settings
          - generic [ref=e189]:
            - generic [ref=e190]: Enable Booking
            - generic [ref=e191]:
              - checkbox [checked]
          - generic [ref=e194]: Enable Ordering
          - generic [ref=e198]:
            - generic [ref=e199]: Subscription
            - generic [ref=e200]:
              - link "Diamond" [ref=e201] [cursor=pointer]:
                - /url: http://13.51.170.24/merchant/subscription
              - link "Upgrade Plan" [ref=e202] [cursor=pointer]:
                - /url: http://13.51.170.24/merchant/subscription
        - generic [ref=e203]:
          - paragraph [ref=e204]: Quick Actions
          - generic [ref=e205]:
            - link "Add Guest +" [ref=e207] [cursor=pointer]:
              - /url: javascript:void(0);
              - generic [ref=e208]: Add Guest
              - generic [ref=e209]: +
            - link "Create Table +" [ref=e211] [cursor=pointer]:
              - /url: javascript:void(0);
              - generic [ref=e212]: Create Table
              - generic [ref=e213]: +
            - link "Create QR +" [ref=e215] [cursor=pointer]:
              - /url: javascript:void(0);
              - generic [ref=e216]: Create QR
              - generic [ref=e217]: +
    - generic [ref=e220]:
      - heading "Upcoming Reservations" [level=2] [ref=e221]
      - generic [ref=e222]:
        - generic [ref=e224]:
          - heading "Total Entries" [level=3] [ref=e225]
          - generic [ref=e226]: "0"
        - generic [ref=e228]:
          - img [ref=e230]
          - textbox "Search Bookings" [ref=e233]
      - generic [ref=e234]:
        - generic [ref=e236]:
          - grid [ref=e239]:
            - rowgroup [ref=e240]:
              - row "Name Booking Status Reservation Date Seating Smoking Reservation Time Booking Type Table for No. of Guests Booking Ref Action" [ref=e241]:
                - columnheader "Name" [ref=e242] [cursor=pointer]
                - columnheader "Booking Status" [ref=e243]
                - columnheader "Reservation Date" [ref=e244]
                - columnheader "Seating" [ref=e245]
                - columnheader "Smoking" [ref=e246]
                - columnheader "Reservation Time" [ref=e247]
                - columnheader "Booking Type" [ref=e248]
                - columnheader "Table for" [ref=e249]
                - columnheader "No. of Guests" [ref=e250]
                - columnheader "Booking Ref" [ref=e251]
                - columnheader "Action" [ref=e252]
          - grid [ref=e254]:
            - rowgroup:
              - row "Name Booking Status Reservation Date Seating Smoking Reservation Time Booking Type Table for No. of Guests Booking Ref Action":
                - columnheader "Name":
                  - generic: Name
                - columnheader "Booking Status":
                  - generic: Booking Status
                - columnheader "Reservation Date":
                  - generic: Reservation Date
                - columnheader "Seating":
                  - generic: Seating
                - columnheader "Smoking":
                  - generic: Smoking
                - columnheader "Reservation Time":
                  - generic: Reservation Time
                - columnheader "Booking Type":
                  - generic: Booking Type
                - columnheader "Table for":
                  - generic: Table for
                - columnheader "No. of Guests":
                  - generic: No. of Guests
                - columnheader "Booking Ref":
                  - generic: Booking Ref
                - columnheader "Action":
                  - generic: Action
            - rowgroup [ref=e255]:
              - row "No data available in table" [ref=e256]:
                - gridcell "No data available in table" [ref=e257]
        - generic [ref=e258]:
          - generic [ref=e259]:
            - generic [ref=e260]: "Rows Per Page:"
            - combobox [ref=e261] [cursor=pointer]:
              - option "10" [selected]
              - option "25"
              - option "50"
              - option "100"
          - generic [ref=e262]:
            - button [disabled] [ref=e263] [cursor=pointer]:
              - img [ref=e264]
            - generic [ref=e266]:
              - button "1" [disabled]
              - button "2" [disabled]
              - generic [ref=e267]: ...
              - button "10" [disabled]
            - button [disabled] [ref=e268] [cursor=pointer]:
              - img [ref=e269]
    - generic [ref=e273]:
      - heading "Recent Activity" [level=2] [ref=e274]
      - generic [ref=e275]:
        - generic [ref=e276]:
          - button "Order" [ref=e277] [cursor=pointer]
          - generic [ref=e278]:
            - img [ref=e279]
            - generic [ref=e280]:
              - paragraph [ref=e281]: "New Order: Strawberry with chocolate Small for table Table-A"
              - text: 23 minutes ago
        - generic [ref=e282]:
          - button "Order" [ref=e283] [cursor=pointer]
          - generic [ref=e284]:
            - img [ref=e285]
            - generic [ref=e286]:
              - paragraph [ref=e287]: "New Order: Strawberry with chocolate Small for table Table-A"
              - text: 17 hours ago
        - generic [ref=e288]:
          - button "Order" [ref=e289] [cursor=pointer]
          - generic [ref=e290]:
            - img [ref=e291]
            - generic [ref=e292]:
              - paragraph [ref=e293]: "New Order: Strawberry with chocolate Small for table N/A"
              - text: 17 hours ago
        - generic [ref=e294]:
          - button "Order" [ref=e295] [cursor=pointer]
          - generic [ref=e296]:
            - img [ref=e297]
            - generic [ref=e298]:
              - paragraph [ref=e299]: "New Order: Strawberry chocolate/KinderBueno kunafa for table Auto fvlwa"
              - text: 17 hours ago
        - generic [ref=e300]:
          - button "Order" [ref=e301] [cursor=pointer]
          - generic [ref=e302]:
            - img [ref=e303]
            - generic [ref=e304]:
              - paragraph [ref=e305]: "New Order: Strawberry chocolate & lotus kunafa S for table Auto fvlwa"
              - text: 17 hours ago
```

# Test source

```ts
  1  | const { URLS } = require('../utils/url.js');
  2  | 
  3  | class LoginPage {
  4  |   constructor(page) {
  5  |     this.page = page;
  6  |     this.email = page.locator('input#email');
  7  |     this.password = page.locator('input#password');
  8  |     this.loginBtn = page.locator('button[type="submit"]');
  9  |   }
  10 | 
  11 |   async navigate() {
  12 |     await this.page.goto(URLS.login, { waitUntil: 'domcontentloaded' });
  13 |   }
  14 | 
  15 |   async login(email, pass) {
  16 |     await this.email.waitFor({ state: 'visible', timeout: 30000 });
  17 |     await this.email.fill(email);
  18 |     await this.password.fill(pass);
  19 |     await this.loginBtn.click();
  20 |   }
  21 | 
  22 |   async loginAndWaitForDashboard(email, pass) {
  23 |     await this.email.waitFor({ state: 'visible', timeout: 30000 });
  24 |     await this.email.fill(email);
  25 |     await this.password.fill(pass);
  26 |     await Promise.all([
> 27 |       this.page.waitForURL(/\/merchant\/dashboard/, { timeout: 30000 }),
     |                 ^ TimeoutError: page.waitForURL: Timeout 30000ms exceeded.
  28 |       this.loginBtn.click(),
  29 |     ]);
  30 |   }
  31 | } 
  32 | 
  33 | module.exports = { LoginPage };
  34 | 
```