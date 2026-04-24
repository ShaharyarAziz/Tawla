const { test, expect } = require('@playwright/test');
const path = require('path');
const { LoginPage } = require('../../pages/LoginPage');
const { OrderManagementPage } = require('../../pages/OrderProcessing/OrderManagement');
const { TakeOrderPage } = require('../../pages/OrderProcessing/TakeOrder');

require('dotenv').config({ path: path.resolve(__dirname, '../../utils/.env') });

test.use({ launchOptions: { slowMo: 1000 } });

test('User places order from Take Orders', async ({ page }) => {
  test.setTimeout(120000);
  const login = new LoginPage(page);
  const orderManagement = new OrderManagementPage(page);
  const takeOrder = new TakeOrderPage(page);
  const itemName = process.env.TAWLA_ITEM;
  const note = 'test note';

  if (!itemName) {
    throw new Error('TAWLA_ITEM is not set in utils/.env.');
  }

  await login.navigate();
  await login.login(process.env.EMAIL, process.env.PASSWORD);

  await expect(page).toHaveURL(/\/merchant\/dashboard/);

  await takeOrder.open();
  await expect(takeOrder.searchInput()).toBeVisible();
  await takeOrder.searchForItem(itemName);
  await takeOrder.addItem(itemName);
  await takeOrder.increaseQuantity();
  await takeOrder.addNote(note);
  await takeOrder.addItemToCart();
  await takeOrder.selectTable('Outside', '1');
  await takeOrder.placeOrder();

  await expect(orderManagement.title()).toBeVisible({ timeout: 30000 });
});