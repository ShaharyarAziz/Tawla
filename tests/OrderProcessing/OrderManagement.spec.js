const { test, expect } = require('@playwright/test');
const path = require('path');
const { LoginPage } = require('../../pages/LoginPage');
const { OrderManagementPage } = require('../../pages/OrderProcessing/OrderManagement');
const { TakeOrderPage } = require('../../pages/OrderProcessing/TakeOrder');

require('dotenv').config({ path: path.resolve(__dirname, '../../utils/.env') });

test('User pays and serves order from Order Management', async ({ page }) => {
  test.setTimeout(120000);
  const login = new LoginPage(page);
  const orderManagement = new OrderManagementPage(page);
  const takeOrder = new TakeOrderPage(page);
  const itemName = process.env.TAWLA_ITEM;
  const note = 'order management note';

  if (!itemName) {
    throw new Error('TAWLA_ITEM is not set in utils/.env.');
  }

  await login.navigate();
  await login.login(process.env.EMAIL, process.env.PASSWORD);

  await expect(page).toHaveURL(/\/merchant\/dashboard/);

  await takeOrder.open();
  await takeOrder.searchForItem(itemName);
  await takeOrder.addItem(itemName);
  await takeOrder.increaseQuantity();
  await takeOrder.addNote(note);
  await takeOrder.addItemToCart();
  await takeOrder.selectTable('Outside', '1');
  await takeOrder.placeOrder();

  await page.goto(`${process.env.BASE_URL}/merchant/order`, { waitUntil: 'domcontentloaded' });
  await expect(orderManagement.title()).toBeVisible({ timeout: 30000 });
  await expect(orderManagement.allOrders()).toBeVisible({ timeout: 30000 });

  const orderCard = orderManagement.firstPendingOrder();
  await expect(orderCard).toBeVisible({ timeout: 30000 });

  const orderNumber = await orderManagement.orderNumber(orderCard);

  await orderManagement.openDetails(orderCard);
  await expect(orderManagement.detailsTitle()).toBeVisible({ timeout: 30000 });

  await orderManagement.payWithGooglePay();

  await orderManagement.open();
  await expect(orderManagement.orderCard(orderNumber)).toBeVisible({ timeout: 30000 });
  await expect(orderManagement.paymentBadge(orderNumber)).toContainText('Paid', { timeout: 30000 });

  await orderManagement.markServed(orderNumber);
  await expect(orderManagement.servingStatus(orderNumber)).toHaveText('Served', { timeout: 30000 });
});
