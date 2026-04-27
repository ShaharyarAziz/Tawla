# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Digital_Menu\DigitalMenu.spec.js >> User adds SubCategories in Digital Menu
- Location: tests\Digital_Menu\DigitalMenu.spec.js:35:6

# Error details

```
TimeoutError: locator.waitFor: Timeout 10000ms exceeded.
Call log:
  - waiting for getByRole('link', { name: 'Digital Menu' }) to be visible

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
      - generic [ref=e82]: Open till to start accepting orders
      - button "Start Till" [ref=e83] [cursor=pointer]
    - generic [ref=e85]:
      - generic [ref=e86]:
        - heading "Overview" [level=3] [ref=e87]
        - generic [ref=e88] [cursor=pointer]:
          - textbox "Today" [ref=e89]
          - img [ref=e90]
      - generic [ref=e92]:
        - generic [ref=e93]:
          - generic "Compared to yesterday" [ref=e95]:
            - img [ref=e96]
            - text: 100.0%
          - img [ref=e99]
          - generic [ref=e101]: Sales
          - generic [ref=e102]:
            - img [ref=e104]
            - generic [ref=e106]: 2K
        - generic [ref=e107]:
          - generic "Compared to yesterday" [ref=e109]:
            - img [ref=e110]
            - text: 100.0%
          - img [ref=e113]
          - generic [ref=e115]: Orders
          - generic [ref=e116]: 4 Orders
        - generic [ref=e117]:
          - generic "Compared to yesterday" [ref=e119]: 0.0%
          - img [ref=e121]
          - generic [ref=e123]: Tips
          - generic [ref=e124]:
            - img [ref=e126]
            - generic [ref=e128]: "0"
        - generic [ref=e129]:
          - generic "Compared to last month" [ref=e131]:
            - img [ref=e132]
            - text: 100.0%
          - img [ref=e135]
          - generic [ref=e142]: QR
          - generic [ref=e143]: 0 Scans
        - generic [ref=e144]:
          - generic "Compared to previous period" [ref=e146]: 0.0%
          - img [ref=e148]
          - generic [ref=e153]: Refunds
          - generic [ref=e154]:
            - img [ref=e156]
            - generic [ref=e158]: "0"
    - generic [ref=e160]:
      - generic [ref=e161]:
        - heading "Sales & Turnover Trends" [level=2] [ref=e163]
        - generic [ref=e164] [cursor=pointer]:
          - generic [ref=e165]: Today
          - textbox "Today" [ref=e166]
          - img [ref=e167]
      - generic [ref=e171]:
        - generic [ref=e174]: Order Volume
        - generic [ref=e177]: Revenue
    - generic [ref=e179]:
      - heading "Quick Actions & Settings" [level=6] [ref=e180]
      - generic [ref=e181]:
        - generic [ref=e182]:
          - paragraph [ref=e183]: Quick Settings
          - generic [ref=e184]:
            - generic [ref=e185]: Enable Booking
            - generic [ref=e186]:
              - checkbox [checked]
          - generic [ref=e188]:
            - generic [ref=e189]: Enable Ordering
            - generic "Start a till session to enable or disable ordering." [ref=e190]
          - generic [ref=e193]:
            - generic [ref=e194]: Subscription
            - generic [ref=e195]:
              - link "Diamond" [ref=e196] [cursor=pointer]:
                - /url: http://13.51.170.24/merchant/subscription
              - link "Upgrade Plan" [ref=e197] [cursor=pointer]:
                - /url: http://13.51.170.24/merchant/subscription
        - generic [ref=e198]:
          - paragraph [ref=e199]: Quick Actions
          - generic [ref=e200]:
            - link "Add Guest +" [ref=e202] [cursor=pointer]:
              - /url: javascript:void(0);
              - generic [ref=e203]: Add Guest
              - generic [ref=e204]: +
            - link "Create Table +" [ref=e206] [cursor=pointer]:
              - /url: javascript:void(0);
              - generic [ref=e207]: Create Table
              - generic [ref=e208]: +
            - link "Create QR +" [ref=e210] [cursor=pointer]:
              - /url: javascript:void(0);
              - generic [ref=e211]: Create QR
              - generic [ref=e212]: +
    - generic [ref=e215]:
      - heading "Upcoming Reservations" [level=2] [ref=e216]
      - generic [ref=e217]:
        - generic [ref=e219]:
          - heading "Total Entries" [level=3] [ref=e220]
          - generic [ref=e221]: "0"
        - generic [ref=e223]:
          - img [ref=e225]
          - textbox "Search Bookings" [ref=e228]
      - table [ref=e230]:
        - rowgroup [ref=e231]:
          - row "Name Booking Status Reservation Date Seating Smoking Reservation Time Booking Type Table for No. of Guests Booking Ref Action" [ref=e232]:
            - columnheader "Name" [ref=e233]
            - columnheader "Booking Status" [ref=e234]
            - columnheader "Reservation Date" [ref=e235]
            - columnheader "Seating" [ref=e236]
            - columnheader "Smoking" [ref=e237]
            - columnheader "Reservation Time" [ref=e238]
            - columnheader "Booking Type" [ref=e239]
            - columnheader "Table for" [ref=e240]
            - columnheader "No. of Guests" [ref=e241]
            - columnheader "Booking Ref" [ref=e242]
            - columnheader "Action" [ref=e243]
        - rowgroup
    - generic [ref=e246]:
      - heading "Recent Activity" [level=2] [ref=e247]
      - generic [ref=e248]:
        - generic [ref=e249]:
          - button "Order" [ref=e250] [cursor=pointer]
          - generic [ref=e251]:
            - img [ref=e252]
            - generic [ref=e253]:
              - paragraph [ref=e254]: "New Order: Hot Pizza for table Test Table"
              - text: 4 hours ago
        - generic [ref=e255]:
          - button "Order" [ref=e256] [cursor=pointer]
          - generic [ref=e257]:
            - img [ref=e258]
            - generic [ref=e259]:
              - paragraph [ref=e260]: "New Order: Hot Pizza for table Test Table"
              - text: 5 hours ago
        - generic [ref=e261]:
          - button "Order" [ref=e262] [cursor=pointer]
          - generic [ref=e263]:
            - img [ref=e264]
            - generic [ref=e265]:
              - paragraph [ref=e266]: "New Order: Hot Pizza for table Test Table"
              - text: 5 hours ago
        - generic [ref=e267]:
          - button "Order" [ref=e268] [cursor=pointer]
          - generic [ref=e269]:
            - img [ref=e270]
            - generic [ref=e271]:
              - paragraph [ref=e272]: "New Order: Hot Pizza for table Outside"
              - text: 5 hours ago
        - generic [ref=e273]:
          - button "Order" [ref=e274] [cursor=pointer]
          - generic [ref=e275]:
            - img [ref=e276]
            - generic [ref=e277]:
              - paragraph [ref=e278]: "New Order: Hot Pizza for table Test Table"
              - text: 5 hours ago
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
> 8  |     await this.digitalMenuLink.waitFor({ state: "visible" });
     |                                ^ TimeoutError: locator.waitFor: Timeout 10000ms exceeded.
  9  |     await this.digitalMenuLink.scrollIntoViewIfNeeded();
  10 | 
  11 |     await Promise.all([
  12 |       // Wait for FINAL API (not 302 one)
  13 |       this.page.waitForResponse(
  14 |         (resp) =>
  15 |           resp.url().includes("digitalMenuSection") && resp.status() === 200,
  16 |       ),
  17 |       this.digitalMenuLink.click(),
  18 |     ]);
  19 |   }
  20 | }
  21 | 
  22 | module.exports = { DigitalMenuPage };
  23 | 
```