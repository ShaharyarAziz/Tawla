const { test, expect } = require('@playwright/test');
const path = require('path');
const { LoginPage } = require('../../pages/LoginPage');
const { OrderManagementPage } = require('../../pages/OrderProcessing/OrderManagement');

require('dotenv').config({ path: path.resolve(__dirname, '../../utils/.env') });

test('User pays and serves order from Order Management', async ({ page }) => {
  test.setTimeout(120000);
  const login = new LoginPage(page);
  const orderManagement = new OrderManagementPage(page);

  await login.navigate();
  await login.login(process.env.EMAIL, process.env.PASSWORD);

  await expect(page).toHaveURL(/\/merchant\/dashboard/);

  await orderManagement.open();
  await expect(orderManagement.pendingOrder).toBeVisible({ timeout: 30000 });

  const orderNumber = await orderManagement.getOrderNumber();

  await orderManagement.openDetails();
  await orderManagement.payOrder();
  await expect(orderManagement.paidText).toBeVisible({ timeout: 30000 });

  await page.goto(`${process.env.BASE_URL}/merchant/order`, { waitUntil: 'domcontentloaded' });
  await orderManagement.serveOrder(orderNumber);
  await expect(orderManagement.order(orderNumber)).toContainText('Served', { timeout: 30000 });
});
