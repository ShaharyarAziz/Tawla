# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: OrderProcessing\OrderManagement.spec.js >> User pays and serves order from Order Management
- Location: tests\OrderProcessing\OrderManagement.spec.js:8:1

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('.order-management-card').filter({ hasText: 'I-2735' }).first()
Expected: visible
Timeout: 30000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 30000ms
  - waiting for locator('.order-management-card').filter({ hasText: 'I-2735' }).first()

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
  1  | const { test, expect } = require('@playwright/test');
  2  | const path = require('path');
  3  | const { LoginPage } = require('../../pages/LoginPage');
  4  | const { OrderManagementPage } = require('../../pages/OrderProcessing/OrderManagement');
  5  | 
  6  | require('dotenv').config({ path: path.resolve(__dirname, '../../utils/.env') });
  7  | 
  8  | test('User pays and serves order from Order Management', async ({ page }) => {
  9  |   test.setTimeout(120000);
  10 |   const login = new LoginPage(page);
  11 |   const orderManagement = new OrderManagementPage(page);
  12 | 
  13 |   await login.navigate();
  14 |   await login.login(process.env.EMAIL, process.env.PASSWORD);
  15 | 
  16 |   await expect(page).toHaveURL(/\/merchant\/dashboard/);
  17 | 
  18 |   await orderManagement.open();
  19 | 
  20 |   const allCards = page.locator('.order-management-card');
  21 |   await expect(allCards.first()).toBeVisible({ timeout: 30000 });
  22 | 
  23 |   const withDetails = allCards.filter({ has: page.getByRole('button', { name: 'View Details' }) });
  24 |   await expect(withDetails.first()).toBeVisible({ timeout: 30000 });
  25 | 
  26 |   const unpaidCards = withDetails.filter({ has: page.getByText('Unpaid', { exact: true }) });
  27 |   const paidCards = withDetails.filter({ has: page.getByText('Paid', { exact: true }) });
  28 |   const unpaidCount = await unpaidCards.count();
  29 |   const paidCount = await paidCards.count();
  30 | 
  31 |   const chosenCards = unpaidCount > 0 ? unpaidCards : paidCards;
  32 |   const chosenCount = unpaidCount > 0 ? unpaidCount : paidCount;
  33 |   expect(chosenCount, 'Expected at least 1 Unpaid or Paid order card').toBeGreaterThan(0);
  34 | 
  35 |   const randomIndex = Date.now() % chosenCount;
  36 |   const card = chosenCards.nth(randomIndex);
  37 |   await card.scrollIntoViewIfNeeded();
  38 | 
  39 |   const viewDetails = card.getByRole('button', { name: 'View Details' });
  40 |   await viewDetails.waitFor({ state: 'visible', timeout: 30000 });
  41 |   await viewDetails.click();
  42 | 
  43 |   await orderManagement.detailsTitle.waitFor({ state: 'visible', timeout: 30000 });
  44 |   await expect(orderManagement.orderDetailsHeader).toBeVisible({ timeout: 30000 });
  45 | 
  46 |   const wasPaid = await orderManagement.paidText.isVisible().catch(() => false);
  47 |   const payVisible = await orderManagement.payForOrderButton.isVisible().catch(() => false);
  48 |   const canPay = payVisible
  49 |     ? await orderManagement.payForOrderButton.isEnabled().catch(() => false)
  50 |     : false;
  51 |   let shouldServe = wasPaid;
  52 | 
  53 |   if (!wasPaid && canPay) {
  54 |     await orderManagement.payOrder();
  55 |     await expect(orderManagement.paidText).toBeVisible({ timeout: 30000 });
  56 |     shouldServe = true;
  57 |   } else if (wasPaid) {
  58 |     await expect(orderManagement.paidText).toBeVisible({ timeout: 30000 });
  59 |   }
  60 | 
  61 |   const orderNumber = await orderManagement.getOrderNumberFromDetails();
  62 |   expect(orderNumber, 'Order number should be readable in details header').toBeTruthy();
  63 | 
  64 |   if (shouldServe) {
  65 |     await orderManagement.backToList();
  66 |     const orderCard = orderManagement.order(orderNumber);
> 67 |     await expect(orderCard).toBeVisible({ timeout: 30000 });
     |                             ^ Error: expect(locator).toBeVisible() failed
  68 | 
  69 |     const alreadyServed = orderCard.getByText('Served', { exact: true });
  70 |     if (!(await alreadyServed.isVisible().catch(() => false))) {
  71 |       await orderManagement.serveOrder(orderNumber);
  72 |     }
  73 | 
  74 |     await expect(orderManagement.order(orderNumber)).toContainText('Served', { timeout: 30000 });
  75 |   }
  76 | 
  77 |   await page.waitForTimeout(2000);
  78 | });
  79 | 
```