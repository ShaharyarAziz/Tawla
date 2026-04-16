# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: logout.spec.js >> LogOut Module >> User LogOut
- Location: tests\logout.spec.js:9:3

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: expect(locator).toBeVisible() failed

Locator:  locator('a.logout-btn')
Expected: visible
Received: hidden

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('a.logout-btn')
    7 × locator resolved to <a class="logout-btn" onclick="localStorage.clear();" href="http://13.51.170.24/merchant/logout">Logout</a>
      - unexpected value "hidden"

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
        - generic [ref=e84]: "Opened at: 11:16 AM"
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
            - text: 100.0%
          - img [ref=e116]
          - generic [ref=e118]: Orders
          - generic [ref=e119]: 0 Orders
        - generic [ref=e120]:
          - generic "Compared to yesterday" [ref=e122]: 0.0%
          - img [ref=e124]
          - generic [ref=e126]: Tips
          - generic [ref=e127]:
            - img [ref=e129]
            - generic [ref=e131]: "0"
        - generic [ref=e132]:
          - generic "Compared to last month" [ref=e134]:
            - img [ref=e135]
            - text: 100.0%
          - img [ref=e138]
          - generic [ref=e145]: QR
          - generic [ref=e146]: 0 Scans
        - generic [ref=e147]:
          - generic "Compared to previous period" [ref=e149]: 0.0%
          - img [ref=e151]
          - generic [ref=e156]: Refunds
          - generic [ref=e157]:
            - img [ref=e159]
            - generic [ref=e161]: "0"
    - generic [ref=e163]:
      - generic [ref=e164]:
        - heading "Sales & Turnover Trends" [level=2] [ref=e166]
        - generic [ref=e167] [cursor=pointer]:
          - generic [ref=e168]: Today
          - textbox "Today" [ref=e169]
          - img [ref=e170]
      - generic [ref=e174]:
        - generic [ref=e177]: Order Volume
        - generic [ref=e180]: Revenue
    - generic [ref=e182]:
      - heading "Quick Actions & Settings" [level=6] [ref=e183]
      - generic [ref=e184]:
        - generic [ref=e185]:
          - paragraph [ref=e186]: Quick Settings
          - generic [ref=e187]:
            - generic [ref=e188]: Enable Booking
            - generic [ref=e189]:
              - checkbox [checked]
          - generic [ref=e192]: Enable Ordering
          - generic [ref=e196]:
            - generic [ref=e197]: Subscription
            - generic [ref=e198]:
              - link "Diamond" [ref=e199] [cursor=pointer]:
                - /url: http://13.51.170.24/merchant/subscription
              - link "Upgrade Plan" [ref=e200] [cursor=pointer]:
                - /url: http://13.51.170.24/merchant/subscription
        - generic [ref=e201]:
          - paragraph [ref=e202]: Quick Actions
          - generic [ref=e203]:
            - link "Add Guest +" [ref=e205] [cursor=pointer]:
              - /url: javascript:void(0);
              - generic [ref=e206]: Add Guest
              - generic [ref=e207]: +
            - link "Create Table +" [ref=e209] [cursor=pointer]:
              - /url: javascript:void(0);
              - generic [ref=e210]: Create Table
              - generic [ref=e211]: +
            - link "Create QR +" [ref=e213] [cursor=pointer]:
              - /url: javascript:void(0);
              - generic [ref=e214]: Create QR
              - generic [ref=e215]: +
    - generic [ref=e218]:
      - heading "Upcoming Reservations" [level=2] [ref=e219]
      - generic [ref=e220]:
        - generic [ref=e222]:
          - heading "Total Entries" [level=3] [ref=e223]
          - generic [ref=e224]: "0"
        - generic [ref=e226]:
          - img [ref=e228]
          - textbox "Search Bookings" [ref=e231]
      - table [ref=e233]:
        - rowgroup [ref=e234]:
          - row "Name Booking Status Reservation Date Seating Smoking Reservation Time Booking Type Table for No. of Guests Booking Ref Action" [ref=e235]:
            - columnheader "Name" [ref=e236]
            - columnheader "Booking Status" [ref=e237]
            - columnheader "Reservation Date" [ref=e238]
            - columnheader "Seating" [ref=e239]
            - columnheader "Smoking" [ref=e240]
            - columnheader "Reservation Time" [ref=e241]
            - columnheader "Booking Type" [ref=e242]
            - columnheader "Table for" [ref=e243]
            - columnheader "No. of Guests" [ref=e244]
            - columnheader "Booking Ref" [ref=e245]
            - columnheader "Action" [ref=e246]
        - rowgroup
    - generic [ref=e249]:
      - heading "Recent Activity" [level=2] [ref=e250]
      - generic [ref=e251]:
        - generic [ref=e252]:
          - button "Order" [ref=e253] [cursor=pointer]
          - generic [ref=e254]:
            - img [ref=e255]
            - generic [ref=e256]:
              - paragraph [ref=e257]: "New Order: Strawberry with chocolate Small for table N/A"
              - text: 1 day ago
        - generic [ref=e258]:
          - button "Order" [ref=e259] [cursor=pointer]
          - generic [ref=e260]:
            - img [ref=e261]
            - generic [ref=e262]:
              - paragraph [ref=e263]: "New Order: Strawberry with chocolate Small for table Test Table"
              - text: 1 day ago
        - generic [ref=e264]:
          - button "Order" [ref=e265] [cursor=pointer]
          - generic [ref=e266]:
            - img [ref=e267]
            - generic [ref=e268]:
              - paragraph [ref=e269]: "New Order: Test_Dinner for table N/A"
              - text: 2 days ago
        - generic [ref=e270]:
          - button "Order" [ref=e271] [cursor=pointer]
          - generic [ref=e272]:
            - img [ref=e273]
            - generic [ref=e274]:
              - paragraph [ref=e275]: "New Order: Strawberry with chocolate Small for table Test Table"
              - text: 6 days ago
        - generic [ref=e276]:
          - button "Order" [ref=e277] [cursor=pointer]
          - generic [ref=e278]:
            - img [ref=e279]
            - generic [ref=e280]:
              - paragraph [ref=e281]: "New Order: Test_Dinner for table testbranch"
              - text: 1 week ago
```

# Test source

```ts
  1  | const { test, expect } = require("@playwright/test");
  2  | const { LogOutPage } = require("../pages/Logout");
  3  | const { LoginPage } = require("../pages/LoginPage");
  4  | const dotenv = require("dotenv");
  5  | 
  6  | dotenv.config();
  7  | 
  8  | test.describe("LogOut Module", () => {
  9  |   test("User LogOut", async ({ page }) => {
  10 |     const logout = new LogOutPage(page);
  11 |     const login = new LoginPage(page);
  12 | 
  13 |     await logout.navigate();
  14 | 
  15 |     await login.login(process.env.EMAIL, process.env.PASSWORD);
  16 | 
  17 |     // ✅ wait for dashboard
  18 |     await expect(page).toHaveURL(/dashboard/);
  19 | 
  20 |     await logout.avatar.click();
> 21 |     await expect(logout.logout_btn).toBeVisible();
     |                                     ^ Error: expect(locator).toBeVisible() failed
  22 |     await logout.logout_btn.click();
  23 |     await expect(page).toHaveURL("merchant/login");
  24 |   });
  25 | });
  26 | 
```