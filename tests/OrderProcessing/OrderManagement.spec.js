const { test, expect } = require('@playwright/test');
const path = require('path');
const { LoginPage } = require('../../pages/LoginPage');
const { OrderManagementPage } = require('../../pages/OrderProcessing/OrderManagement');

require('dotenv').config({ path: path.resolve(__dirname, '../../utils/.env') });

test('User opens Order Management', async ({ page }) => {
  test.setTimeout(120000);
  const login = new LoginPage(page);
  const orderManagement = new OrderManagementPage(page);

  await login.navigate();
  await login.login(process.env.EMAIL, process.env.PASSWORD);

  await expect(page).toHaveURL(/\/merchant\/dashboard/);

  await orderManagement.open();
  await expect(page).toHaveURL(/\/merchant\/order/);
  await expect(orderManagement.title()).toBeVisible();
  await expect(orderManagement.allOrders()).toBeVisible();
});
