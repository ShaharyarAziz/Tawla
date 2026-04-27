# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Digital_Menu\DigitalMenu.spec.js >> User adds Items in Digital Menu
- Location: tests\Digital_Menu\DigitalMenu.spec.js:52:1

# Error details

```
TimeoutError: locator.scrollIntoViewIfNeeded: Timeout 10000ms exceeded.
Call log:
  - waiting for locator('#category-dropdown').getByText('Modern Marble Hat')
    - waiting for" http://13.51.170.24/merchant/login" navigation to finish...
    - navigated to "http://13.51.170.24/merchant/login"
    - waiting for" http://13.51.170.24/merchant/dashboard" navigation to finish...
    - navigated to "http://13.51.170.24/merchant/dashboard"

```

```
Error: page.waitForResponse: Test ended.
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
          - link "Digital menu icon Digital Menu" [active] [ref=e43] [cursor=pointer]:
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
          - generic [ref=e115]: 1 Orders
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
      - generic [ref=e230]:
        - grid [ref=e233]:
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
        - generic [ref=e247]:
          - grid:
            - rowgroup
    - generic [ref=e250]:
      - heading "Recent Activity" [level=2] [ref=e251]
      - generic [ref=e252]:
        - generic [ref=e253]:
          - button "Order" [ref=e254] [cursor=pointer]
          - generic [ref=e255]:
            - img [ref=e256]
            - generic [ref=e257]:
              - paragraph [ref=e258]: "New Order: Test_Dinner for table Rayan"
              - text: 12 minutes ago
        - generic [ref=e259]:
          - button "Order" [ref=e260] [cursor=pointer]
          - generic [ref=e261]:
            - img [ref=e262]
            - generic [ref=e263]:
              - paragraph [ref=e264]: "New Order: Test_Dinner for table Rayan"
              - text: 15 minutes ago
        - generic [ref=e265]:
          - button "Order" [ref=e266] [cursor=pointer]
          - generic [ref=e267]:
            - img [ref=e268]
            - generic [ref=e269]:
              - paragraph [ref=e270]: "New Order: Test_Dinner for table Rayan"
              - text: 16 minutes ago
        - generic [ref=e271]:
          - button "Order" [ref=e272] [cursor=pointer]
          - generic [ref=e273]:
            - img [ref=e274]
            - generic [ref=e275]:
              - paragraph [ref=e276]: "New Order: Test_Dinner for table Rayan"
              - text: 19 minutes ago
        - generic [ref=e277]:
          - button "Order" [ref=e278] [cursor=pointer]
          - generic [ref=e279]:
            - img [ref=e280]
            - generic [ref=e281]:
              - paragraph [ref=e282]: "New Order: Test_Dinner for table Rayan"
              - text: 19 minutes ago
```

# Test source

```ts
  1  | class DigitalMenuPage {
  2  |   constructor(page) {
  3  |     this.page = page;
  4  |     this.digitalMenuLink = page.getByRole("link", { name: "Digital Menu" });
  5  |   }
  6  | 
  7  |   async goToDigitalMenu() {
  8  |     await this.page.waitForLoadState("domcontentloaded");
  9  | 
  10 |     await this.digitalMenuLink.waitFor({ state: "visible" });
  11 |     await this.digitalMenuLink.scrollIntoViewIfNeeded();
  12 | 
  13 |     await Promise.all([
  14 |       // Wait for FINAL API (not 302 one)
> 15 |       this.page.waitForResponse(
     |                 ^ Error: page.waitForResponse: Test ended.
  16 |         (resp) =>
  17 |           resp.url().includes("digitalMenuSection") && resp.status() === 200,
  18 |       ),
  19 |       this.digitalMenuLink.click(),
  20 |     ]);
  21 |   }
  22 | }
  23 | 
  24 | module.exports = { DigitalMenuPage };
  25 | 
```