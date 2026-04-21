# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: logout.spec.js >> User LogOut
- Location: tests\logout.spec.js:8:1

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected pattern: /login/
Received string:  "http://13.51.170.24/merchant/dashboard"
Timeout: 5000ms

Call log:
  - Expect "toHaveURL" with timeout 5000ms
    8 × unexpected value "http://13.51.170.24/merchant/dashboard"

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
      - generic [ref=e232]:
        - generic [ref=e234]:
          - grid [ref=e237]:
            - rowgroup [ref=e238]:
              - row "Name Booking Status Reservation Date Seating Smoking Reservation Time Booking Type Table for No. of Guests Booking Ref Action" [ref=e239]:
                - columnheader "Name" [ref=e240] [cursor=pointer]
                - columnheader "Booking Status" [ref=e241]
                - columnheader "Reservation Date" [ref=e242]
                - columnheader "Seating" [ref=e243]
                - columnheader "Smoking" [ref=e244]
                - columnheader "Reservation Time" [ref=e245]
                - columnheader "Booking Type" [ref=e246]
                - columnheader "Table for" [ref=e247]
                - columnheader "No. of Guests" [ref=e248]
                - columnheader "Booking Ref" [ref=e249]
                - columnheader "Action" [ref=e250]
          - grid [ref=e252]:
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
            - rowgroup [ref=e253]:
              - row "No data available in table" [ref=e254]:
                - gridcell "No data available in table" [ref=e255]
        - generic [ref=e256]:
          - generic [ref=e257]:
            - generic [ref=e258]: "Rows Per Page:"
            - combobox [ref=e259] [cursor=pointer]:
              - option "10" [selected]
              - option "25"
              - option "50"
              - option "100"
          - generic [ref=e260]:
            - button [disabled] [ref=e261] [cursor=pointer]:
              - img [ref=e262]
            - generic [ref=e264]:
              - button "1" [disabled]
              - button "2" [disabled]
              - generic [ref=e265]: ...
              - button "10" [disabled]
            - button [disabled] [ref=e266] [cursor=pointer]:
              - img [ref=e267]
    - generic [ref=e271]:
      - heading "Recent Activity" [level=2] [ref=e272]
      - generic [ref=e273]:
        - generic [ref=e274]:
          - button "Order" [ref=e275] [cursor=pointer]
          - generic [ref=e276]:
            - img [ref=e277]
            - generic [ref=e278]:
              - paragraph [ref=e279]: "New Order: Test_Dinner for table courier"
              - text: 21 hours ago
        - generic [ref=e280]:
          - button "Order" [ref=e281] [cursor=pointer]
          - generic [ref=e282]:
            - img [ref=e283]
            - generic [ref=e284]:
              - paragraph [ref=e285]: "New Order: Test_Dinner for table Rayan"
              - text: 21 hours ago
        - generic [ref=e286]:
          - button "Order" [ref=e287] [cursor=pointer]
          - generic [ref=e288]:
            - img [ref=e289]
            - generic [ref=e290]:
              - paragraph [ref=e291]: "New Order: Strawberry with chocolate Small for table N/A"
              - text: 6 days ago
        - generic [ref=e292]:
          - button "Order" [ref=e293] [cursor=pointer]
          - generic [ref=e294]:
            - img [ref=e295]
            - generic [ref=e296]:
              - paragraph [ref=e297]: "New Order: Strawberry with chocolate Small for table Test Table"
              - text: 6 days ago
        - generic [ref=e298]:
          - button "Order" [ref=e299] [cursor=pointer]
          - generic [ref=e300]:
            - img [ref=e301]
            - generic [ref=e302]:
              - paragraph [ref=e303]: "New Order: Test_Dinner for table N/A"
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
  8  | test("User LogOut", async ({ page }) => {
  9  |   const logout = new LogOutPage(page);
  10 |   const login = new LoginPage(page);
  11 | 
  12 |   await logout.navigate();
  13 |   await login.login(process.env.EMAIL, process.env.PASSWORD);
  14 | 
  15 |   await expect(page).toHaveURL(/dashboard/);
  16 | 
  17 |   // ✅ call action method
  18 |   await logout.logout();
  19 | 
> 20 |   await expect(page).toHaveURL(/login/);
     |                      ^ Error: expect(page).toHaveURL(expected) failed
  21 | });
  22 | 
```