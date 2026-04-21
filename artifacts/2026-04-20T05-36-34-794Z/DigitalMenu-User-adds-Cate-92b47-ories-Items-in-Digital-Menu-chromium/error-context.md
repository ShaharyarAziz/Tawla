# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: DigitalMenu.spec.js >> User adds Categories,SubCategories & Items in Digital Menu
- Location: tests\DigitalMenu.spec.js:7:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.waitForLoadState: Test timeout of 30000ms exceeded.
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
      - table [ref=e229]:
        - rowgroup [ref=e230]:
          - row "Name Booking Status Reservation Date Seating Smoking Reservation Time Booking Type Table for No. of Guests Booking Ref Action" [ref=e231]:
            - columnheader "Name" [ref=e232]
            - columnheader "Booking Status" [ref=e233]
            - columnheader "Reservation Date" [ref=e234]
            - columnheader "Seating" [ref=e235]
            - columnheader "Smoking" [ref=e236]
            - columnheader "Reservation Time" [ref=e237]
            - columnheader "Booking Type" [ref=e238]
            - columnheader "Table for" [ref=e239]
            - columnheader "No. of Guests" [ref=e240]
            - columnheader "Booking Ref" [ref=e241]
            - columnheader "Action" [ref=e242]
        - rowgroup
    - generic [ref=e245]:
      - heading "Recent Activity" [level=2] [ref=e246]
      - generic [ref=e247]:
        - generic [ref=e248]:
          - button "Order" [ref=e249] [cursor=pointer]
          - generic [ref=e250]:
            - img [ref=e251]
            - generic [ref=e252]:
              - paragraph [ref=e253]: "New Order: Strawberry with chocolate Small for table N/A"
              - text: 5 days ago
        - generic [ref=e254]:
          - button "Order" [ref=e255] [cursor=pointer]
          - generic [ref=e256]:
            - img [ref=e257]
            - generic [ref=e258]:
              - paragraph [ref=e259]: "New Order: Strawberry with chocolate Small for table Test Table"
              - text: 5 days ago
        - generic [ref=e260]:
          - button "Order" [ref=e261] [cursor=pointer]
          - generic [ref=e262]:
            - img [ref=e263]
            - generic [ref=e264]:
              - paragraph [ref=e265]: "New Order: Test_Dinner for table N/A"
              - text: 6 days ago
        - generic [ref=e266]:
          - button "Order" [ref=e267] [cursor=pointer]
          - generic [ref=e268]:
            - img [ref=e269]
            - generic [ref=e270]:
              - paragraph [ref=e271]: "New Order: Strawberry with chocolate Small for table Test Table"
              - text: 1 week ago
        - generic [ref=e272]:
          - button "Order" [ref=e273] [cursor=pointer]
          - generic [ref=e274]:
            - img [ref=e275]
            - generic [ref=e276]:
              - paragraph [ref=e277]: "New Order: Test_Dinner for table testbranch"
              - text: 2 weeks ago
```

# Test source

```ts
  1  | export class DigitalMenuPage {
  2  |   constructor(page) {
  3  |     this.page = page;
  4  | 
  5  |     // Most stable locator (recommended)
  6  |     this.digitalMenuLink = page.getByRole("link", { name: "Digital Menu" });
  7  |   }
  8  | 
  9  |   async goToDigitalMenu() {
  10 |     // Wait for sidebar to be visible (important after login)
> 11 |     await this.page.waitForLoadState("networkidle");
     |                     ^ Error: page.waitForLoadState: Test timeout of 30000ms exceeded.
  12 | 
  13 |     // Ensure element is visible
  14 |     await this.digitalMenuLink.waitFor({ state: "visible" });
  15 | 
  16 |     // Scroll (in case sidebar has overflow)
  17 |     await this.digitalMenuLink.scrollIntoViewIfNeeded();
  18 | 
  19 |     // Click
  20 |     await this.digitalMenuLink.click();
  21 |   }
  22 | }
  23 | 
```