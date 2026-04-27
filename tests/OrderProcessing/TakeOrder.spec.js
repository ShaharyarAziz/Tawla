const { test, expect } = require('@playwright/test');
const path = require('path');
const { LoginPage } = require('../../pages/LoginPage');
const { TakeOrderPage } = require('../../pages/OrderProcessing/TakeOrder');

require('dotenv').config({ path: path.resolve(__dirname, '../../utils/.env') });

test.use({ launchOptions: { slowMo: 1000 } });

test('User places order from Take Orders', async ({ page }) => {
  test.setTimeout(120000);
  const login = new LoginPage(page);
  const takeOrder = new TakeOrderPage(page);
  const note = 'popup note check';

  await login.navigate();
  await login.login(process.env.EMAIL, process.env.PASSWORD);

  await expect(page).toHaveURL(/\/merchant\/dashboard/);

  await takeOrder.open();
  await takeOrder.addItem(note);
  await takeOrder.showCart();
  await takeOrder.selectTable();
  await takeOrder.placeOrder();
  await expect(takeOrder.orderPlacedSuccessMessage()).toBeVisible({ timeout: 30000 });
});