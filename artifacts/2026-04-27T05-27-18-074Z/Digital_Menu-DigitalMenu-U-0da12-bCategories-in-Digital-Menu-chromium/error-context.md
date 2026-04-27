# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Digital_Menu\DigitalMenu.spec.js >> User adds SubCategories in Digital Menu
- Location: tests\Digital_Menu\DigitalMenu.spec.js:34:1

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
          - generic "Compared to yesterday" [ref=e110]:
            - img [ref=e111]
            - text: 100.0%
          - img [ref=e114]
          - generic [ref=e116]: Orders
          - generic [ref=e117]: 1 Orders
        - generic [ref=e118]:
          - generic "Compared to yesterday" [ref=e120]: 0.0%
          - img [ref=e122]
          - generic [ref=e124]: Tips
          - generic [ref=e125]:
            - img [ref=e127]
            - generic [ref=e129]: "0"
        - generic [ref=e130]:
          - generic "Compared to last month" [ref=e132]:
            - img [ref=e133]
            - text: 100.0%
          - img [ref=e136]
          - generic [ref=e143]: QR
          - generic [ref=e144]: 0 Scans
        - generic [ref=e145]:
          - generic "Compared to previous period" [ref=e147]: 0.0%
          - img [ref=e149]
          - generic [ref=e154]: Refunds
          - generic [ref=e155]:
            - img [ref=e157]
            - generic [ref=e159]: "0"
    - generic [ref=e161]:
      - generic [ref=e162]:
        - heading "Sales & Turnover Trends" [level=2] [ref=e164]
        - generic [ref=e165] [cursor=pointer]:
          - generic [ref=e166]: Today
          - textbox "Today" [ref=e167]
          - img [ref=e168]
      - generic [ref=e172]:
        - generic [ref=e175]: Order Volume
        - generic [ref=e178]: Revenue
    - generic [ref=e180]:
      - heading "Quick Actions & Settings" [level=6] [ref=e181]
      - generic [ref=e182]:
        - generic [ref=e183]:
          - paragraph [ref=e184]: Quick Settings
          - generic [ref=e185]:
            - generic [ref=e186]: Enable Booking
            - generic [ref=e187]:
              - checkbox [checked]
          - generic [ref=e190]: Enable Ordering
          - generic [ref=e194]:
            - generic [ref=e195]: Subscription
            - generic [ref=e196]:
              - link "Diamond" [ref=e197] [cursor=pointer]:
                - /url: http://13.51.170.24/merchant/subscription
              - link "Upgrade Plan" [ref=e198] [cursor=pointer]:
                - /url: http://13.51.170.24/merchant/subscription
        - generic [ref=e199]:
          - paragraph [ref=e200]: Quick Actions
          - generic [ref=e201]:
            - link "Add Guest +" [ref=e203] [cursor=pointer]:
              - /url: javascript:void(0);
              - generic [ref=e204]: Add Guest
              - generic [ref=e205]: +
            - link "Create Table +" [ref=e207] [cursor=pointer]:
              - /url: javascript:void(0);
              - generic [ref=e208]: Create Table
              - generic [ref=e209]: +
            - link "Create QR +" [ref=e211] [cursor=pointer]:
              - /url: javascript:void(0);
              - generic [ref=e212]: Create QR
              - generic [ref=e213]: +
    - generic [ref=e216]:
      - heading "Upcoming Reservations" [level=2] [ref=e217]
      - generic [ref=e218]:
        - generic [ref=e220]:
          - heading "Total Entries" [level=3] [ref=e221]
          - generic [ref=e222]: "0"
        - generic [ref=e224]:
          - img [ref=e226]
          - textbox "Search Bookings" [ref=e229]
      - table [ref=e231]:
        - rowgroup [ref=e232]:
          - row "Name Booking Status Reservation Date Seating Smoking Reservation Time Booking Type Table for No. of Guests Booking Ref Action" [ref=e233]:
            - columnheader "Name" [ref=e234]
            - columnheader "Booking Status" [ref=e235]
            - columnheader "Reservation Date" [ref=e236]
            - columnheader "Seating" [ref=e237]
            - columnheader "Smoking" [ref=e238]
            - columnheader "Reservation Time" [ref=e239]
            - columnheader "Booking Type" [ref=e240]
            - columnheader "Table for" [ref=e241]
            - columnheader "No. of Guests" [ref=e242]
            - columnheader "Booking Ref" [ref=e243]
            - columnheader "Action" [ref=e244]
        - rowgroup
    - generic [ref=e247]:
      - heading "Recent Activity" [level=2] [ref=e248]
      - generic [ref=e249]:
        - generic [ref=e250]:
          - button "Order" [ref=e251] [cursor=pointer]
          - generic [ref=e252]:
            - img [ref=e253]
            - generic [ref=e254]:
              - paragraph [ref=e255]: "New Order: Hot Pizza for table Outside"
              - text: 45 seconds ago
        - generic [ref=e256]:
          - button "Order" [ref=e257] [cursor=pointer]
          - generic [ref=e258]:
            - img [ref=e259]
            - generic [ref=e260]:
              - paragraph [ref=e261]: "New Order: Strawberry chocolate/KinderBueno kunafa for table Outside"
              - text: 2 days ago
        - generic [ref=e262]:
          - button "Order" [ref=e263] [cursor=pointer]
          - generic [ref=e264]:
            - img [ref=e265]
            - generic [ref=e266]:
              - paragraph [ref=e267]: "New Order: Strawberry chocolate/KinderBueno kunafa for table Outside"
              - text: 2 days ago
        - generic [ref=e268]:
          - button "Order" [ref=e269] [cursor=pointer]
          - generic [ref=e270]:
            - img [ref=e271]
            - generic [ref=e272]:
              - paragraph [ref=e273]: "New Order: Strawberry chocolate/KinderBueno kunafa for table Outside"
              - text: 2 days ago
        - generic [ref=e274]:
          - button "Order" [ref=e275] [cursor=pointer]
          - generic [ref=e276]:
            - img [ref=e277]
            - generic [ref=e278]:
              - paragraph [ref=e279]: "New Order: Strawberry chocolate/KinderBueno kunafa for table Outside"
              - text: 2 days ago
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
> 8  |     await this.page.waitForLoadState("domcontentloaded");
     |                     ^ Error: page.waitForLoadState: Test timeout of 30000ms exceeded.
  9  | 
  10 |     await this.digitalMenuLink.waitFor({ state: "visible" });
  11 |     await this.digitalMenuLink.scrollIntoViewIfNeeded();
  12 | 
  13 |     await Promise.all([
  14 |       // Wait for FINAL API (not 302 one)
  15 |       this.page.waitForResponse(
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