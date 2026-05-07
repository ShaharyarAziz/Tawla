# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: logout.spec.js >> User LogOut
- Location: tests\logout.spec.js:7:1

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected pattern: /login/
Received string:  "http://13.51.170.24/merchant/dashboard"
Timeout: 5000ms

Call log:
  - Expect "toHaveURL" with timeout 5000ms
    9 × unexpected value "http://13.51.170.24/merchant/dashboard"

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
  - alert [ref=e78]:
    - generic [ref=e79]:
      - img [ref=e81]
      - generic [ref=e84]:
        - generic [ref=e85]: Scheduled closing time has passed
        - generic [ref=e87]: You are operating beyond your configured business hours.
      - button "Dismiss" [ref=e88] [cursor=pointer]:
        - img [ref=e89]
  - generic [ref=e95]:
    - heading "Dashboard" [level=2] [ref=e97]
    - generic [ref=e100]:
      - generic [ref=e101]:
        - generic [ref=e102]: Till Open
        - generic [ref=e103]: "Opened at: 11:03 AM"
        - generic [ref=e104]: "Opening cash: AED 500.00"
      - button "Close Till" [ref=e105] [cursor=pointer]
    - generic [ref=e107]:
      - generic [ref=e108]:
        - heading "Overview" [level=3] [ref=e109]
        - generic [ref=e110] [cursor=pointer]:
          - textbox "Today" [ref=e111]
          - img [ref=e112]
      - generic [ref=e114]:
        - generic [ref=e115]:
          - generic "Compared to yesterday" [ref=e117]:
            - img [ref=e118]
            - text: 96.4%
          - img [ref=e121]
          - generic [ref=e123]: Sales
          - generic [ref=e124]:
            - img [ref=e126]
            - generic [ref=e128]: 1K
        - generic [ref=e129]:
          - generic "Compared to yesterday" [ref=e131]:
            - img [ref=e132]
            - text: 150.0%
          - img [ref=e135]
          - generic [ref=e137]: Orders
          - generic [ref=e138]: 5 Orders
        - generic [ref=e139]:
          - generic "Compared to yesterday" [ref=e141]:
            - img [ref=e142]
            - text: 100.0%
          - img [ref=e145]
          - generic [ref=e147]: Tips
          - generic [ref=e148]:
            - img [ref=e150]
            - generic [ref=e152]: "0"
        - generic [ref=e153]:
          - generic "Compared to last month" [ref=e155]:
            - img [ref=e156]
            - text: 100.0%
          - img [ref=e159]
          - generic [ref=e166]: QR
          - generic [ref=e167]: 0 Scans
        - generic [ref=e168]:
          - generic "Compared to previous period" [ref=e170]: 0.0%
          - img [ref=e172]
          - generic [ref=e177]: Refunds
          - generic [ref=e178]:
            - img [ref=e180]
            - generic [ref=e182]: "0"
    - generic [ref=e184]:
      - generic [ref=e185]:
        - heading "Sales & Turnover Trends" [level=2] [ref=e187]
        - generic [ref=e188] [cursor=pointer]:
          - generic [ref=e189]: Today
          - textbox "Today" [ref=e190]
          - img [ref=e191]
      - generic [ref=e195]:
        - generic [ref=e198]: Order Volume
        - generic [ref=e201]: Revenue
    - generic [ref=e203]:
      - heading "Quick Actions & Settings" [level=6] [ref=e204]
      - generic [ref=e205]:
        - generic [ref=e206]:
          - paragraph [ref=e207]: Quick Settings
          - generic [ref=e208]:
            - generic [ref=e209]: Enable Booking
            - generic [ref=e210]:
              - checkbox [checked]
          - generic [ref=e213]: Enable Ordering
          - generic [ref=e217]:
            - generic [ref=e218]: Subscription
            - generic [ref=e219]:
              - link "Diamond" [ref=e220] [cursor=pointer]:
                - /url: http://13.51.170.24/merchant/subscription
              - link "Upgrade Plan" [ref=e221] [cursor=pointer]:
                - /url: http://13.51.170.24/merchant/subscription
        - generic [ref=e222]:
          - paragraph [ref=e223]: Quick Actions
          - generic [ref=e224]:
            - link "Add Guest +" [ref=e226] [cursor=pointer]:
              - /url: javascript:void(0);
              - generic [ref=e227]: Add Guest
              - generic [ref=e228]: +
            - link "Create Table +" [ref=e230] [cursor=pointer]:
              - /url: javascript:void(0);
              - generic [ref=e231]: Create Table
              - generic [ref=e232]: +
            - link "Create QR +" [ref=e234] [cursor=pointer]:
              - /url: javascript:void(0);
              - generic [ref=e235]: Create QR
              - generic [ref=e236]: +
    - generic [ref=e239]:
      - heading "Upcoming Reservations" [level=2] [ref=e240]
      - generic [ref=e241]:
        - generic [ref=e243]:
          - heading "Total Entries" [level=3] [ref=e244]
          - generic [ref=e245]: "0"
        - generic [ref=e247]:
          - img [ref=e249]
          - textbox "Search Bookings" [ref=e252]
      - generic [ref=e253]:
        - generic [ref=e255]:
          - grid [ref=e258]:
            - rowgroup [ref=e259]:
              - row "Name Booking Status Reservation Date Seating Smoking Reservation Time Booking Type Table for No. of Guests Booking Ref Action" [ref=e260]:
                - columnheader "Name" [ref=e261] [cursor=pointer]
                - columnheader "Booking Status" [ref=e262]
                - columnheader "Reservation Date" [ref=e263]
                - columnheader "Seating" [ref=e264]
                - columnheader "Smoking" [ref=e265]
                - columnheader "Reservation Time" [ref=e266]
                - columnheader "Booking Type" [ref=e267]
                - columnheader "Table for" [ref=e268]
                - columnheader "No. of Guests" [ref=e269]
                - columnheader "Booking Ref" [ref=e270]
                - columnheader "Action" [ref=e271]
          - grid [ref=e273]:
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
            - rowgroup [ref=e274]:
              - row "No data available in table" [ref=e275]:
                - gridcell "No data available in table" [ref=e276]
        - generic [ref=e277]:
          - generic [ref=e278]:
            - generic [ref=e279]: "Rows Per Page:"
            - combobox [ref=e280] [cursor=pointer]:
              - option "10" [selected]
              - option "25"
              - option "50"
              - option "100"
          - generic [ref=e281]:
            - button [disabled] [ref=e282] [cursor=pointer]:
              - img [ref=e283]
            - generic [ref=e285]:
              - button "1" [disabled]
              - button "2" [disabled]
              - generic [ref=e286]: ...
              - button "10" [disabled]
            - button [disabled] [ref=e287] [cursor=pointer]:
              - img [ref=e288]
    - generic [ref=e292]:
      - heading "Recent Activity" [level=2] [ref=e293]
      - generic [ref=e294]:
        - generic [ref=e295]:
          - button "Order" [ref=e296] [cursor=pointer]
          - generic [ref=e297]:
            - img [ref=e298]
            - generic [ref=e299]:
              - paragraph [ref=e300]: "New Order: BBQ Pasta for table Test Table"
              - text: 6 minutes ago
        - generic [ref=e301]:
          - button "Order" [ref=e302] [cursor=pointer]
          - generic [ref=e303]:
            - img [ref=e304]
            - generic [ref=e305]:
              - paragraph [ref=e306]: "New Order: BBQ Pasta for table Test Table"
              - text: 14 minutes ago
        - generic [ref=e307]:
          - button "Order" [ref=e308] [cursor=pointer]
          - generic [ref=e309]:
            - img [ref=e310]
            - generic [ref=e311]:
              - paragraph [ref=e312]: "New Order: BBQ Pasta for table Test Table"
              - text: 18 minutes ago
        - generic [ref=e313]:
          - button "Order" [ref=e314] [cursor=pointer]
          - generic [ref=e315]:
            - img [ref=e316]
            - generic [ref=e317]:
              - paragraph [ref=e318]: "New Order: BBQ Pasta for table Test Table"
              - text: 20 minutes ago
        - generic [ref=e319]:
          - button "Order" [ref=e320] [cursor=pointer]
          - generic [ref=e321]:
            - img [ref=e322]
            - generic [ref=e323]:
              - paragraph [ref=e324]: "New Order: BBQ Pasta for table Test Table"
              - text: 6 hours ago
```

# Test source

```ts
  1  | const { test, expect } = require("@playwright/test");
  2  | const { LogOutPage } = require("../pages/Logout");
  3  | const { LoginPage } = require("../pages/LoginPage");
  4  | const dotenv = require("dotenv");
  5  | dotenv.config();
  6  | 
  7  | test("User LogOut", async ({ page }) => {
  8  |   const logout = new LogOutPage(page);
  9  |   const login = new LoginPage(page);
  10 |   await logout.navigate();
  11 |   await login.login(process.env.EMAIL, process.env.PASSWORD);
  12 |   await expect(page).toHaveURL(/dashboard/);
  13 |   await logout.logout();
  14 | 
> 15 |   await expect(page).toHaveURL(/login/);
     |                      ^ Error: expect(page).toHaveURL(expected) failed
  16 | });
  17 | 
```