const { test, expect } = require('@playwright/test');
const path = require('path');
const { LoginPage } = require('../../pages/LoginPage');
const { TakeOrderPage } = require('../../pages/OrderProcessing/TakeOrder');

require('dotenv').config({ path: path.resolve(__dirname, '../../utils/.env') });

test('User places order from Take Orders', async ({ page }) => {
  test.setTimeout(120000);
  const login = new LoginPage(page);
  const takeOrder = new TakeOrderPage(page);
  const itemName =
    process.env.TAWLA_ITEM || 'Strawberry chocolate/KinderBueno kunafa';

  await login.navigate();
  await login.login(process.env.EMAIL, process.env.PASSWORD);

  await expect(page).toHaveURL(/\/merchant\/dashboard/);

  await takeOrder.open();
  await expect(takeOrder.searchInput()).toBeVisible();
  await takeOrder.searchForItem(itemName);
  await expect(takeOrder.searchInput()).toHaveValue(itemName);
  await expect(takeOrder.resultAddButtons()).toHaveCount(1);
  await expect(takeOrder.addButton()).toBeVisible();
  await takeOrder.addFirstResult();
});
const { test, expect } = require('@playwright/test');
const path = require('path');
const { LoginPage } = require('../../pages/LoginPage');
const { TakeOrderPage } = require('../../pages/OrderProcessing/TakeOrder');

require('dotenv').config({ path: path.resolve(__dirname, '../../utils/.env') });

test('User places order from Take Orders', async ({ page }) => {
  test.setTimeout(120000);
  const login = new LoginPage(page);
  const takeOrder = new TakeOrderPage(page);
  const itemName =
    process.env.TAWLA_ITEM || 'Strawberry chocolate/KinderBueno kunafa';

  await login.navigate();
  await login.login(process.env.EMAIL, process.env.PASSWORD);

  await expect(page).toHaveURL(/\/merchant\/dashboard/);

  await takeOrder.open();
  await expect(takeOrder.searchInput()).toBeVisible();
  await takeOrder.searchForItem(itemName);
  await expect(takeOrder.searchInput()).toHaveValue(itemName);
  await expect(takeOrder.resultAddButtons()).toHaveCount(1);
  await expect(takeOrder.addButton()).toBeVisible();
  await takeOrder.addFirstResult();
});
//importing the necessary modules
const { test, expect } = require('@playwright/test');
const path = require('path');
const { LoginPage } = require('../../pages/LoginPage');
const { TakeOrderPage } = require('../../pages/OrderProcessing/TakeOrder');

require('dotenv').config({ path: path.resolve(__dirname, '../../utils/.env') });

test('User places order from Take Orders', async ({ page }) => {
  test.setTimeout(120000);
  const login = new LoginPage(page);
  const takeOrder = new TakeOrderPage(page);
  const itemName =
    process.env.TAWLA_ITEM || 'Strawberry chocolate/KinderBueno kunafa';

  await login.navigate();
  await login.login(process.env.EMAIL, process.env.PASSWORD);

  await expect(page).toHaveURL(/\/merchant\/dashboard/);

  await takeOrder.open();
  await expect(takeOrder.searchInput()).toBeVisible();
  await takeOrder.searchForItem(itemName);
  await expect(takeOrder.searchInput()).toHaveValue(itemName);
  await expect(takeOrder.resultAddButtons()).toHaveCount(1);
  await expect(takeOrder.addButton()).toBeVisible();
  await takeOrder.addFirstResult();
});