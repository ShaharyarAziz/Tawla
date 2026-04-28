# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: OrderProcessing\OrderManagement.spec.js >> User pays and serves order from Order Management
- Location: tests\OrderProcessing\OrderManagement.spec.js:9:1

# Error details

```
Error: TAWLA_ITEM is not set in utils/.env.
```

# Test source

```ts
  1  | const { test, expect } = require('@playwright/test');
  2  | const path = require('path');
  3  | const { LoginPage } = require('../../pages/LoginPage');
  4  | const { OrderManagementPage } = require('../../pages/OrderProcessing/OrderManagement');
  5  | const { TakeOrderPage } = require('../../pages/OrderProcessing/TakeOrder');
  6  | 
  7  | require('dotenv').config({ path: path.resolve(__dirname, '../../utils/.env') });
  8  | 
  9  | test('User pays and serves order from Order Management', async ({ page }) => {
  10 |   test.setTimeout(120000);
  11 |   const login = new LoginPage(page);
  12 |   const orderManagement = new OrderManagementPage(page);
  13 |   const takeOrder = new TakeOrderPage(page);
  14 |   const itemName = process.env.TAWLA_ITEM;
  15 |   const note = 'order management note';
  16 | 
  17 |   if (!itemName) {
> 18 |     throw new Error('TAWLA_ITEM is not set in utils/.env.');
     |           ^ Error: TAWLA_ITEM is not set in utils/.env.
  19 |   }
  20 | 
  21 |   await login.navigate();
  22 |   await login.login(process.env.EMAIL, process.env.PASSWORD);
  23 | 
  24 |   await expect(page).toHaveURL(/\/merchant\/dashboard/);
  25 | 
  26 |   await takeOrder.open();
  27 |   await takeOrder.searchForItem(itemName);
  28 |   await takeOrder.addItem(itemName);
  29 |   await takeOrder.increaseQuantity();
  30 |   await takeOrder.addNote(note);
  31 |   await takeOrder.addItemToCart();
  32 |   await takeOrder.selectTable('Outside', '1');
  33 |   await takeOrder.placeOrder();
  34 | 
  35 |   await page.goto(`${process.env.BASE_URL}/merchant/order`, { waitUntil: 'domcontentloaded' });
  36 |   await expect(orderManagement.title()).toBeVisible({ timeout: 30000 });
  37 |   await expect(orderManagement.allOrders()).toBeVisible({ timeout: 30000 });
  38 | 
  39 |   const orderCard = orderManagement.firstPendingOrder();
  40 |   await expect(orderCard).toBeVisible({ timeout: 30000 });
  41 | 
  42 |   const orderNumber = await orderManagement.orderNumber(orderCard);
  43 | 
  44 |   await orderManagement.openDetails(orderCard);
  45 |   await expect(orderManagement.detailsTitle()).toBeVisible({ timeout: 30000 });
  46 | 
  47 |   await orderManagement.payWithGooglePay();
  48 | 
  49 |   await orderManagement.open();
  50 |   await expect(orderManagement.orderCard(orderNumber)).toBeVisible({ timeout: 30000 });
  51 |   await expect(orderManagement.paymentBadge(orderNumber)).toContainText('Paid', { timeout: 30000 });
  52 | 
  53 |   await orderManagement.markServed(orderNumber);
  54 |   await expect(orderManagement.servingStatus(orderNumber)).toHaveText('Served', { timeout: 30000 });
  55 | });
  56 | 
```