# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: OrderProcessing\OrderManagement.spec.js >> User pays and serves order from Order Management
- Location: tests\OrderProcessing\OrderManagement.spec.js:8:1

# Error details

```
TimeoutError: locator.click: Timeout 10000ms exceeded.
Call log:
  - waiting for locator('.order-management-card').filter({ hasText: 'Order #I-2719' }).first().getByRole('button', { name: 'Change Status' })

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
  - generic [ref=e73]:
    - heading "Order Management" [level=1] [ref=e74]
    - generic [ref=e75]:
      - link "Orders" [ref=e76] [cursor=pointer]:
        - /url: http://13.51.170.24/merchant/order
      - link "Reports" [ref=e77] [cursor=pointer]:
        - /url: http://13.51.170.24/merchant/order/report
    - generic [ref=e78]:
      - generic [ref=e79]:
        - generic [ref=e80]:
          - link "All Orders" [ref=e81] [cursor=pointer]:
            - /url: javascript:void(0);
          - link "Dine-In Orders" [ref=e82] [cursor=pointer]:
            - /url: javascript:void(0);
          - link "Outdoor Orders" [ref=e83] [cursor=pointer]:
            - /url: javascript:void(0);
        - generic [ref=e84]:
          - combobox [ref=e85] [cursor=pointer]:
            - option "Select Table Name" [selected]
            - option "Outside"
            - option "Outside"
            - option "Outside"
            - option "Outside"
            - option "Test Table"
            - option "EatMania"
            - option "EatMania"
            - option "courier"
            - option "EatMania"
            - option "EatMania"
            - option "Rayan"
            - option "Rayan"
            - option "TESTING"
            - option "Aisel"
            - option "Rayan"
            - option "courier"
            - option "Test"
            - option "Aisel"
            - option "testbranch"
            - option "Table-B"
            - option "Table-B"
            - option "Table-A"
            - option "Table-B"
            - option "Table-B"
            - option "Table-A"
            - option "Table-A"
            - option "Table-A"
            - option "Table-A"
            - option "outside"
          - combobox [ref=e86] [cursor=pointer]:
            - option "Select Table Number" [disabled] [selected]
      - button "Filters" [ref=e88] [cursor=pointer]:
        - img [ref=e89]
        - text: Filters
```

# Test source

```ts
  1  | class OrderManagementPage {
  2  |   constructor(page) {
  3  |     this.page = page;
  4  |     this.orderManagementLink = page.getByRole('link', { name: 'Order Management' });
  5  |     this.dismissButton = page.getByRole('button', { name: 'Dismiss' });
  6  |     this.title = page.getByText('Order Management', { exact: true }).last();
  7  |     this.allOrdersTab = page.getByText('All Orders', { exact: true });
  8  |     this.pendingOrder = page.locator('.order-management-card').filter({ hasText: 'Unpaid' }).filter({ hasText: 'Not Served' }).first();
  9  |     this.detailsTitle = page.getByText('Order Details', { exact: true }).first();
  10 |     this.payForOrderButton = page.getByRole('button', { name: 'Pay For Order' });
  11 |     this.applePayButton = page.locator('input[name="payment_method"][value="2"]').first();
  12 |     this.confirmPaymentButton = page.getByRole('button', { name: 'Confirm Payment' });
  13 |     this.paidText = page.getByText('Paid', { exact: true }).first();
  14 |   }
  15 | 
  16 |   async dismissPopup() {
  17 |     if (await this.dismissButton.isVisible().catch(() => false)) {
  18 |       await this.dismissButton.click();
  19 |     }
  20 |   }
  21 | 
  22 |   order(orderNumber) {
  23 |     return this.page.locator('.order-management-card').filter({ hasText: orderNumber }).first();
  24 |   }
  25 | 
  26 |   async open() {
  27 |     await this.page.waitForLoadState('domcontentloaded');
  28 |     await this.orderManagementLink.waitFor({ state: 'visible' });
  29 |     await this.orderManagementLink.scrollIntoViewIfNeeded();
  30 |     await this.dismissPopup();
  31 |     await this.orderManagementLink.click();
  32 |     await this.page.waitForURL('**/merchant/order**', { timeout: 30000 });
  33 |     await this.title.waitFor({ state: 'visible', timeout: 30000 });
  34 |     await this.allOrdersTab.waitFor({ state: 'visible', timeout: 30000 });
  35 |   }
  36 | 
  37 |   async openDetails() {
  38 |     await this.pendingOrder.getByRole('button', { name: 'View Details' }).click({ force: true });
  39 |     await this.detailsTitle.waitFor({ state: 'visible', timeout: 30000 });
  40 |   }
  41 | 
  42 |   async getOrderNumber() {
  43 |     return (await this.pendingOrder.locator('.order-number').innerText()).trim();
  44 |   }
  45 | 
  46 |   async payOrder() {
  47 |     await this.payForOrderButton.click({ force: true });
  48 |     await this.applePayButton.evaluate((button) => button.click());
  49 |     await this.confirmPaymentButton.click({ force: true });
  50 |     await this.page.waitForTimeout(2000);
  51 |   }
  52 | 
  53 |   async serveOrder(orderNumber) {
  54 |     await this.order(orderNumber).getByRole('button', { name: 'Change Status' }).click({ force: true });
  55 |     await this.order(orderNumber).getByText('Served', { exact: true }).click({ force: true });
  56 |   }
  57 | }
  58 | 
  59 | module.exports = { OrderManagementPage };
  60 | 
     |        ^ TimeoutError: locator.click: Timeout 10000ms exceeded.
```