class OrderManagementPage {
  constructor(page) {
    this.page = page;
    this.orderManagementLink = page.getByRole('link', { name: 'Order Management' });
    this.dismissButton = page.getByRole('button', { name: 'Dismiss' });
    this.title = page.getByText('Order Management', { exact: true }).last();
    this.allOrdersTab = page.getByText('All Orders', { exact: true });
    this.pendingOrder = page.locator('.order-management-card').filter({ hasText: 'Unpaid' }).filter({ hasText: 'Not Served' }).first();
    this.detailsTitle = page.getByText('Order Details', { exact: true }).first();
    this.payForOrderButton = page.getByRole('button', { name: 'Pay For Order' });
    this.paymentDialog = page.getByRole('dialog', { name: 'Payment' });
    this.applePayButton = this.paymentDialog.getByText('Card/Apple Pay', { exact: true });
    this.confirmPaymentButton = this.paymentDialog.getByRole('button', { name: 'Confirm Payment' });
    this.paidText = page.getByText('Paid', { exact: true }).first();
  }

  async dismissPopup() {
    if (await this.dismissButton.isVisible().catch(() => false)) {
      await this.dismissButton.click();
    }
  }

  order(orderNumber) {
    return this.page.locator('.order-management-card').filter({ hasText: orderNumber }).first();
  }

  async open() {
    await this.page.waitForLoadState('domcontentloaded');
    await this.orderManagementLink.waitFor({ state: 'visible' });
    await this.orderManagementLink.scrollIntoViewIfNeeded();
    await this.dismissPopup();
    await this.orderManagementLink.click();
    await this.page.waitForURL('**/merchant/order**', { timeout: 30000 });
    await this.title.waitFor({ state: 'visible', timeout: 30000 });
    await this.allOrdersTab.waitFor({ state: 'visible', timeout: 30000 });
  }

  async openDetails() {
    await this.pendingOrder.getByRole('button', { name: 'View Details' }).click({ force: true });
    await this.detailsTitle.waitFor({ state: 'visible', timeout: 30000 });
  }

  async getOrderNumber() {
    return (await this.pendingOrder.locator('.order-number').innerText()).trim();
  }

  async payOrder() {
    await this.payForOrderButton.click({ force: true });
    await this.paymentDialog.waitFor({ state: 'visible', timeout: 30000 });
    await this.applePayButton.evaluate((button) => button.click());
    await this.confirmPaymentButton.evaluate((button) => button.click());
    await this.page.waitForTimeout(2000);
  }

  async serveOrder(orderNumber) {
    await this.order(orderNumber).getByRole('button', { name: 'Change Status' }).click({ force: true });
    await this.order(orderNumber).getByText('Served', { exact: true }).click({ force: true });
  }
}

module.exports = { OrderManagementPage };
