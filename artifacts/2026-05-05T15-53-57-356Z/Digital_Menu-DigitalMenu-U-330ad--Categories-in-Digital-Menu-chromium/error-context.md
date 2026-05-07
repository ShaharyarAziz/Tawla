# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Digital_Menu\DigitalMenu.spec.js >> User adds Categories in Digital Menu
- Location: tests\Digital_Menu\DigitalMenu.spec.js:15:1

# Error details

```
TimeoutError: locator.waitFor: Timeout 10000ms exceeded.
Call log:
  - waiting for getByText('Vegetarian', { exact: true }) to be visible
    - waiting for" http://13.51.170.24/merchant/login" navigation to finish...
    - navigated to "http://13.51.170.24/merchant/login"
    - waiting for" http://13.51.170.24/merchant/dashboard" navigation to finish...

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
            - text: 1.8%
          - img [ref=e102]
          - generic [ref=e104]: Sales
          - generic [ref=e105]:
            - img [ref=e107]
            - generic [ref=e109]: "502"
        - generic [ref=e110]:
          - generic "Compared to yesterday" [ref=e112]:
            - img [ref=e113]
            - text: 50.0%
          - img [ref=e116]
          - generic [ref=e118]: Orders
          - generic [ref=e119]: 3 Orders
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
      - table [ref=e235]:
        - rowgroup [ref=e236]:
          - row "Name Booking Status Reservation Date Seating Smoking Reservation Time Booking Type Table for No. of Guests Booking Ref Action" [ref=e237]:
            - columnheader "Name" [ref=e238]
            - columnheader "Booking Status" [ref=e239]
            - columnheader "Reservation Date" [ref=e240]
            - columnheader "Seating" [ref=e241]
            - columnheader "Smoking" [ref=e242]
            - columnheader "Reservation Time" [ref=e243]
            - columnheader "Booking Type" [ref=e244]
            - columnheader "Table for" [ref=e245]
            - columnheader "No. of Guests" [ref=e246]
            - columnheader "Booking Ref" [ref=e247]
            - columnheader "Action" [ref=e248]
        - rowgroup
    - generic [ref=e251]:
      - heading "Recent Activity" [level=2] [ref=e252]
      - generic [ref=e253]:
        - generic [ref=e254]:
          - button "Order" [ref=e255] [cursor=pointer]
          - generic [ref=e256]:
            - img [ref=e257]
            - generic [ref=e258]:
              - paragraph [ref=e259]: "New Order: BBQ Pasta for table Test Table"
              - text: 3 minutes ago
        - generic [ref=e260]:
          - button "Order" [ref=e261] [cursor=pointer]
          - generic [ref=e262]:
            - img [ref=e263]
            - generic [ref=e264]:
              - paragraph [ref=e265]: "New Order: BBQ Pasta for table Test Table"
              - text: 5 minutes ago
        - generic [ref=e266]:
          - button "Order" [ref=e267] [cursor=pointer]
          - generic [ref=e268]:
            - img [ref=e269]
            - generic [ref=e270]:
              - paragraph [ref=e271]: "New Order: BBQ Pasta for table Test Table"
              - text: 6 hours ago
        - generic [ref=e272]:
          - button "Order" [ref=e273] [cursor=pointer]
          - generic [ref=e274]:
            - img [ref=e275]
            - generic [ref=e276]:
              - paragraph [ref=e277]: "New Order: BBQ Pasta for table Test Table"
              - text: 6 hours ago
        - generic [ref=e278]:
          - button "Order" [ref=e279] [cursor=pointer]
          - generic [ref=e280]:
            - img [ref=e281]
            - generic [ref=e282]:
              - paragraph [ref=e283]: "New Order: BBQ Pasta for table Test Table"
              - text: 7 hours ago
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
  8  |     await this.digitalMenuLink.waitFor({ state: "visible" });
  9  |     await this.digitalMenuLink.scrollIntoViewIfNeeded();
  10 |     await Promise.all([
> 11 |       this.page.waitForResponse(
     |                 ^ Error: page.waitForResponse: Test ended.
  12 |         (resp) =>
  13 |           resp.url().includes("digitalMenuSection") && resp.status() === 200,
  14 |       ),
  15 |       this.digitalMenuLink.click(),
  16 |     ]);
  17 |   }
  18 | }
  19 | 
  20 | module.exports = { DigitalMenuPage };
  21 | 
```