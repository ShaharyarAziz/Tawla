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
  - waiting for getByRole('button', { name: 'Confirm Payment' })

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
    - generic [ref=e74]:
      - link "Order Management" [ref=e75] [cursor=pointer]:
        - /url: http://13.51.170.24/merchant/order
      - img [ref=e76]
      - generic [ref=e78]: Order Details
    - generic [ref=e80]:
      - generic [ref=e82]:
        - generic [ref=e83]:
          - generic [ref=e84]:
            - generic [ref=e85]: "Order #I-2720"
            - generic [ref=e87]:
              - generic [ref=e88]: "Payment Status:"
              - generic [ref=e89]: Unpaid
            - generic [ref=e91]:
              - generic [ref=e92]: "Serving Status:"
              - generic [ref=e93]: Not Served
            - generic [ref=e95]:
              - generic [ref=e96]: "Refund:"
              - generic [ref=e97]: None
          - generic [ref=e98]: Tuesday, 05 May, 2026, 07:48 PM
          - generic [ref=e99]:
            - generic [ref=e100]:
              - generic [ref=e101]: "Total Items:"
              - generic [ref=e102]: "1"
            - generic [ref=e103]:
              - generic [ref=e104]: "Table Name & No:"
              - generic [ref=e105]: Test Table 5
        - generic [ref=e106]:
          - generic [ref=e107]:
            - button "Pay For Order" [active] [ref=e108] [cursor=pointer]
            - link "Cancel Order" [ref=e109] [cursor=pointer]:
              - /url: javascript:void(0);
          - generic [ref=e110]:
            - button "Refund Receipt" [ref=e111] [cursor=pointer]
            - button "Print Receipt" [ref=e114] [cursor=pointer]:
              - text: Print Receipt
              - img [ref=e115]
            - link "Print Kitchen Slip" [ref=e117] [cursor=pointer]:
              - /url: javascript:void(0);
      - generic [ref=e118]:
        - generic [ref=e119]:
          - heading "Order Details" [level=3] [ref=e120]
          - separator [ref=e121]
          - generic [ref=e123]:
            - generic [ref=e124]:
              - heading "Order Notes:" [level=3] [ref=e125]
              - button "Add Note" [ref=e126] [cursor=pointer]: Add Note
            - paragraph [ref=e128]: No notes added.
          - separator [ref=e129]
          - list [ref=e130]:
            - listitem [ref=e131]:
              - generic [ref=e132]:
                - img "BBQ Pasta" [ref=e134]
                - generic [ref=e135]:
                  - generic [ref=e136]:
                    - generic [ref=e137]: BBQ Pasta
                    - generic [ref=e138]:
                      - img [ref=e139]
                      - generic [ref=e141]: "246"
                  - generic [ref=e142]:
                    - button "Decrease quantity" [ref=e143] [cursor=pointer]:
                      - img [ref=e144]
                    - generic [ref=e146]: "2"
                    - button "Increase quantity" [ref=e147] [cursor=pointer]:
                      - img [ref=e148]
                  - generic [ref=e151]: "Note: 2 x popup note check"
                  - button "Edit" [ref=e153] [cursor=pointer]: Edit
        - generic [ref=e156]:
          - heading "Payment Summary" [level=4] [ref=e157]
          - list [ref=e159]:
            - listitem [ref=e160]:
              - generic [ref=e161]: Subtotal
              - generic [ref=e162]:
                - img [ref=e163]
                - text: "246"
            - listitem [ref=e165]:
              - text: Service Fees
              - generic [ref=e166]:
                - img [ref=e167]
                - text: "5"
            - listitem [ref=e169]:
              - text: Tip Amount
              - generic [ref=e170]:
                - img [ref=e171]
                - text: "0"
            - listitem [ref=e173]:
              - text: "Discount:"
              - generic [ref=e174]:
                - img [ref=e175]
                - text: "0"
            - listitem [ref=e177]:
              - text: "Paid:"
              - generic [ref=e178]:
                - img [ref=e179]
                - text: "0.0"
            - listitem [ref=e181]:
              - link "Balance:" [ref=e182] [cursor=pointer]:
                - /url: javascript:void(0);
              - generic [ref=e183]:
                - img [ref=e184]
                - text: "251.00"
          - generic [ref=e188]:
            - generic [ref=e189]:
              - textbox "Voucher Name" [ref=e190]
              - combobox [ref=e191]:
                - option "Discount Type" [selected]
                - option "Amount"
                - option "Percentage"
              - textbox "Enter Discount" [ref=e192]
            - generic [ref=e193]:
              - button "Cancel" [ref=e194] [cursor=pointer]
              - button "Apply Voucher" [ref=e195] [cursor=pointer]
  - text: ✓ This method requires the full bill amount to be captured in a single transaction. This method requires the full bill amount to be captured in a single transaction.
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
     |                                     ^ TimeoutError: locator.click: Timeout 10000ms exceeded.
```