class OrderManagementPage {
  constructor(page) {
    this.page = page;
    this.orderManagementLink = page.getByRole('link', { name: 'Order Management' });
    this.dismissButton = page.getByRole('button', { name: 'Dismiss' });
    this.pageTitle = page.getByText('Order Management', { exact: true }).last();
    this.allOrdersTab = page.getByText('All Orders', { exact: true });
    this.orderDetailsTitle = page.getByText('Order Details', { exact: true }).first();
    this.orderCards = page.locator('.order-management-card');
    this.payForOrderButton = page.getByRole('button', { name: 'Pay For Order' });
    this.paymentDrawer = page.locator('.payment-slide-modal.show');
    this.googlePayOption = page.locator('.payment-slide-modal.show label').filter({ hasText: 'Google Pay' }).first();
    this.fullPaymentOption = page.locator('.payment-slide-modal.show label').filter({ hasText: 'Full Payment' }).first();
    this.confirmPaymentButton = page.getByRole('button', { name: 'Confirm Payment' });
  }

  async dismissAlerts() {
    if (await this.dismissButton.isVisible().catch(() => false)) {
      await this.dismissButton.click();
    }
  }

  title() {
    return this.pageTitle;
  }

  allOrders() {
    return this.allOrdersTab;
  }

  detailsTitle() {
    return this.orderDetailsTitle;
  }

  firstPendingOrder() {
    return this.orderCards.filter({ hasText: 'Unpaid' }).filter({ hasText: 'Not Served' }).first();
  }

  orderCard(orderNumber) {
    return this.orderCards.filter({ hasText: orderNumber }).first();
  }

  paymentBadge(orderNumber) {
    return this.orderCard(orderNumber).locator('.payment-badge').first();
  }

  servingStatus(orderNumber) {
    return this.orderCard(orderNumber).locator('.status-text').first();
  }

  async orderNumber(card) {
    return (await card.locator('.order-number').innerText()).trim();
  }

  async open() {
    if (await this.pageTitle.isVisible().catch(() => false)) {
      await this.dismissAlerts();
      return;
    }

    await this.page.waitForLoadState('domcontentloaded');
    await this.orderManagementLink.waitFor({ state: 'visible' });
    await this.orderManagementLink.scrollIntoViewIfNeeded();
    await this.dismissAlerts();
    await this.orderManagementLink.click();
    await this.page.waitForURL('**/merchant/order**', { timeout: 30000 });
    await this.pageTitle.waitFor({ state: 'visible', timeout: 30000 });
    await this.allOrdersTab.waitFor({ state: 'visible', timeout: 30000 });
  }

  async openDetails(card) {
    await card.getByRole('button', { name: 'View Details' }).click({ force: true });
    await this.orderDetailsTitle.waitFor({ state: 'visible', timeout: 30000 });
  }

  async payWithGooglePay() {
    await this.payForOrderButton.click({ force: true });
    await this.paymentDrawer.waitFor({ state: 'visible', timeout: 30000 });
    await this.googlePayOption.click({ force: true });
    await this.fullPaymentOption.click({ force: true });
    await this.confirmPaymentButton.click({ force: true });
    await this.page.waitForLoadState('domcontentloaded', { timeout: 30000 }).catch(() => {});
    await this.page.waitForTimeout(2000);
  }

  async markServed(orderNumber) {
    const card = this.orderCard(orderNumber);
    await card.getByRole('button', { name: 'Change Status' }).click({ force: true });
    await card.locator('.status-option[data-action="served"]').click({ force: true });
  }
}

module.exports = { OrderManagementPage };
