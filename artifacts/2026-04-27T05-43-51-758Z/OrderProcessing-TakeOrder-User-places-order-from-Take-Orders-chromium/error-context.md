# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: OrderProcessing\TakeOrder.spec.js >> User places order from Take Orders
- Location: tests\OrderProcessing\TakeOrder.spec.js:11:1

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
  9  | test.use({ launchOptions: { slowMo: 1000 } });
  10 | 
  11 | test('User places order from Take Orders', async ({ page }) => {
  12 |   test.setTimeout(120000);
  13 |   const login = new LoginPage(page);
  14 |   const orderManagement = new OrderManagementPage(page);
  15 |   const takeOrder = new TakeOrderPage(page);
  16 |   const itemName = process.env.TAWLA_ITEM;
  17 |   const note = 'test note';
  18 | 
  19 |   if (!itemName) {
> 20 |     throw new Error('TAWLA_ITEM is not set in utils/.env.');
     |           ^ Error: TAWLA_ITEM is not set in utils/.env.
  21 |   }
  22 | 
  23 |   await login.navigate();
  24 |   await login.login(process.env.EMAIL, process.env.PASSWORD);
  25 | 
  26 |   await expect(page).toHaveURL(/\/merchant\/dashboard/);
  27 | 
  28 |   await takeOrder.open();
  29 |   await expect(takeOrder.searchInput()).toBeVisible();
  30 |   await takeOrder.searchForItem(itemName);
  31 |   await takeOrder.addItem(itemName);
  32 |   await takeOrder.increaseQuantity();
  33 |   await takeOrder.addNote(note);
  34 |   await takeOrder.addItemToCart();
  35 |   await takeOrder.selectTable('Outside', '1');
  36 |   await takeOrder.placeOrder();
  37 | 
  38 |   await expect(orderManagement.title()).toBeVisible({ timeout: 30000 });
  39 | });
```