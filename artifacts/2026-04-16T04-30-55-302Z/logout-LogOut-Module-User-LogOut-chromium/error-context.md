# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: logout.spec.js >> LogOut Module >> User LogOut
- Location: tests\logout.spec.js:9:3

# Error details

```
TimeoutError: locator.click: Timeout 10000ms exceeded.
Call log:
  - waiting for getByRole('link', { name: 'Logout' })

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
          - generic "Compared to yesterday" [ref=e98]: 0.0%
          - img [ref=e100]
          - generic [ref=e102]: Sales
          - generic [ref=e103]:
            - img [ref=e105]
            - generic [ref=e107]: "0"
        - generic [ref=e108]:
          - generic "Compared to yesterday" [ref=e110]: 0.0%
          - img [ref=e112]
          - generic [ref=e114]: Orders
          - generic [ref=e115]: 0 Orders
        - generic [ref=e116]:
          - generic "Compared to yesterday" [ref=e118]: 0.0%
          - img [ref=e120]
          - generic [ref=e122]: Tips
          - generic [ref=e123]:
            - img [ref=e125]
            - generic [ref=e127]: "0"
        - generic [ref=e128]:
          - generic "Compared to last month" [ref=e130]:
            - img [ref=e131]
            - text: 100.0%
          - img [ref=e134]
          - generic [ref=e141]: QR
          - generic [ref=e142]: 0 Scans
        - generic [ref=e143]:
          - generic "Compared to previous period" [ref=e145]: 0.0%
          - img [ref=e147]
          - generic [ref=e152]: Refunds
          - generic [ref=e153]:
            - img [ref=e155]
            - generic [ref=e157]: "0"
    - generic [ref=e159]:
      - generic [ref=e160]:
        - heading "Sales & Turnover Trends" [level=2] [ref=e162]
        - generic [ref=e163] [cursor=pointer]:
          - generic [ref=e164]: Today
          - textbox "Today" [ref=e165]
          - img [ref=e166]
      - generic [ref=e170]:
        - generic [ref=e173]: Order Volume
        - generic [ref=e176]: Revenue
    - generic [ref=e178]:
      - heading "Quick Actions & Settings" [level=6] [ref=e179]
      - generic [ref=e180]:
        - generic [ref=e181]:
          - paragraph [ref=e182]: Quick Settings
          - generic [ref=e183]:
            - generic [ref=e184]: Enable Booking
            - generic [ref=e185]:
              - checkbox [checked]
          - generic [ref=e188]: Enable Ordering
          - generic [ref=e192]:
            - generic [ref=e193]: Subscription
            - generic [ref=e194]:
              - link "Diamond" [ref=e195] [cursor=pointer]:
                - /url: http://13.51.170.24/merchant/subscription
              - link "Upgrade Plan" [ref=e196] [cursor=pointer]:
                - /url: http://13.51.170.24/merchant/subscription
        - generic [ref=e197]:
          - paragraph [ref=e198]: Quick Actions
          - generic [ref=e199]:
            - link "Add Guest +" [ref=e201] [cursor=pointer]:
              - /url: javascript:void(0);
              - generic [ref=e202]: Add Guest
              - generic [ref=e203]: +
            - link "Create Table +" [ref=e205] [cursor=pointer]:
              - /url: javascript:void(0);
              - generic [ref=e206]: Create Table
              - generic [ref=e207]: +
            - link "Create QR +" [ref=e209] [cursor=pointer]:
              - /url: javascript:void(0);
              - generic [ref=e210]: Create QR
              - generic [ref=e211]: +
    - generic [ref=e214]:
      - heading "Upcoming Reservations" [level=2] [ref=e215]
      - generic [ref=e216]:
        - generic [ref=e218]:
          - heading "Total Entries" [level=3] [ref=e219]
          - generic [ref=e220]: "0"
        - generic [ref=e222]:
          - img [ref=e224]
          - textbox "Search Bookings" [ref=e227]
      - generic [ref=e228]:
        - generic [ref=e230]:
          - grid [ref=e233]:
            - rowgroup [ref=e234]:
              - row "Name Booking Status Reservation Date Seating Smoking Reservation Time Booking Type Table for No. of Guests Booking Ref Action" [ref=e235]:
                - columnheader "Name" [ref=e236] [cursor=pointer]
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
          - grid [ref=e248]:
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
            - rowgroup [ref=e249]:
              - row "No data available in table" [ref=e250]:
                - gridcell "No data available in table" [ref=e251]
        - generic [ref=e252]:
          - generic [ref=e253]:
            - generic [ref=e254]: "Rows Per Page:"
            - combobox [ref=e255] [cursor=pointer]:
              - option "10" [selected]
              - option "25"
              - option "50"
              - option "100"
          - generic [ref=e256]:
            - button [disabled] [ref=e257] [cursor=pointer]:
              - img [ref=e258]
            - generic [ref=e260]:
              - button "1" [disabled]
              - button "2" [disabled]
              - generic [ref=e261]: ...
              - button "10" [disabled]
            - button [disabled] [ref=e262] [cursor=pointer]:
              - img [ref=e263]
    - generic [ref=e267]:
      - heading "Recent Activity" [level=2] [ref=e268]
      - generic [ref=e269]:
        - generic [ref=e270]:
          - button "Order" [ref=e271] [cursor=pointer]
          - generic [ref=e272]:
            - img [ref=e273]
            - generic [ref=e274]:
              - paragraph [ref=e275]: "New Order: Strawberry with chocolate Small for table N/A"
              - text: 1 day ago
        - generic [ref=e276]:
          - button "Order" [ref=e277] [cursor=pointer]
          - generic [ref=e278]:
            - img [ref=e279]
            - generic [ref=e280]:
              - paragraph [ref=e281]: "New Order: Strawberry with chocolate Small for table Test Table"
              - text: 1 day ago
        - generic [ref=e282]:
          - button "Order" [ref=e283] [cursor=pointer]
          - generic [ref=e284]:
            - img [ref=e285]
            - generic [ref=e286]:
              - paragraph [ref=e287]: "New Order: Test_Dinner for table N/A"
              - text: 2 days ago
        - generic [ref=e288]:
          - button "Order" [ref=e289] [cursor=pointer]
          - generic [ref=e290]:
            - img [ref=e291]
            - generic [ref=e292]:
              - paragraph [ref=e293]: "New Order: Strawberry with chocolate Small for table Test Table"
              - text: 6 days ago
        - generic [ref=e294]:
          - button "Order" [ref=e295] [cursor=pointer]
          - generic [ref=e296]:
            - img [ref=e297]
            - generic [ref=e298]:
              - paragraph [ref=e299]: "New Order: Test_Dinner for table testbranch"
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
  21 | 
  22 |     // wait for dropdown to actually appear
  23 |     // await logout.logout_btn.waitFor({ state: "visible" });
  24 | 
> 25 |     await logout.logout_btn.click();
     |                             ^ TimeoutError: locator.click: Timeout 10000ms exceeded.
  26 | 
  27 |     // verify redirect
  28 |     await expect(page).toHaveURL(/login/);
  29 |   });
  30 | });
  31 | 
```