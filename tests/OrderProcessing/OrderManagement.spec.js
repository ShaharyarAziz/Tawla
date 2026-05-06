const { test, expect } = require('@playwright/test');
const path = require('path');
const { LoginPage } = require('../../pages/LoginPage');
const { OrderManagementPage } = require('../../pages/OrderProcessing/OrderManagement');

require('dotenv').config({ path: path.resolve(__dirname, '../../utils/.env') });

test('Order Management: Orders', async ({ page }) => {
  test.setTimeout(120000);
  const login = new LoginPage(page);
  const orderManagement = new OrderManagementPage(page);

  await login.navigate();
  await login.login(process.env.EMAIL, process.env.PASSWORD);

  await expect(page).toHaveURL(/\/merchant\/dashboard/);

  await orderManagement.open();

  const allCards = page.locator('.order-management-card');
  await expect(allCards.first()).toBeVisible({ timeout: 30000 });

  const withDetails = allCards.filter({ has: page.getByRole('button', { name: 'View Details' }) });
  await expect(withDetails.first()).toBeVisible({ timeout: 30000 });
  const unpaidCards = withDetails.filter({ has: page.getByText('Unpaid', { exact: true }) });
  const unpaidCount = await unpaidCards.count();

  const paidCards = withDetails.filter({ has: page.getByText('Paid', { exact: true }) });
  const paidCount = await paidCards.count();

  const chosenCards = unpaidCount > 0 ? unpaidCards : paidCards;
  const chosenCount = unpaidCount > 0 ? unpaidCount : paidCount;
  expect(chosenCount, 'Expected at least 1 Unpaid or Paid order card').toBeGreaterThan(0);

  const randomIndex = Date.now() % chosenCount;
  const card = chosenCards.nth(randomIndex);
  await card.scrollIntoViewIfNeeded();

  const viewDetails = card.getByRole('button', { name: 'View Details' });
  await viewDetails.waitFor({ state: 'visible', timeout: 30000 });
  await viewDetails.click();

  await orderManagement.detailsTitle.waitFor({ state: 'visible', timeout: 30000 });
  await expect(orderManagement.orderDetailsHeader).toBeVisible({ timeout: 30000 });

  const isPaid = await orderManagement.paidText.isVisible().catch(() => false);
  const payVisible = await orderManagement.payForOrderButton.isVisible().catch(() => false);
  const canPay = payVisible ? await orderManagement.payForOrderButton.isEnabled().catch(() => false) : false;
  let paidByTest = false;

  if (!isPaid && canPay) {
    await orderManagement.payOrder();
    await expect(orderManagement.paidText).toBeVisible({ timeout: 30000 });
    paidByTest = true;
  } else if (isPaid) {
    await expect(orderManagement.paidText).toBeVisible({ timeout: 30000 });
  }
  const orderNumber = await orderManagement.getOrderNumberFromDetails();
  expect(orderNumber, 'Order number should be readable in details header').toBeTruthy();

  if (paidByTest) {
    await orderManagement.backToList();
    const orderCard = orderManagement.order(orderNumber);
    await expect(orderCard).toBeVisible({ timeout: 30000 });

    const alreadyServed = orderCard.getByText('Served', { exact: true });
    if (!(await alreadyServed.isVisible().catch(() => false))) {
      await orderManagement.serveOrder(orderNumber);
    }
    await expect(orderManagement.order(orderNumber)).toContainText('Served', { timeout: 30000 });
  }

  await page.waitForTimeout(2000);
});
