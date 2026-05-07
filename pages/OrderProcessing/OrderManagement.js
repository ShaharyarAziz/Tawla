const { expect } = require('@playwright/test');

class OrderManagementPage {
  constructor(page) {
    this.page = page; 
    this.orderManagementLink = page
      .locator('a')
      .filter({ hasText: 'Order Management' })
      .filter({ hasNot: page.locator('.breadcrumb-link') })
      .first();
    this.dismissButton = page.getByRole('button', { name: 'Dismiss' });
    this.title = page.getByText('Order Management', { exact: true }).last();
    this.allOrdersTab = page.getByText('All Orders', { exact: true });
    this.pendingOrder = page
      .locator('.order-management-card')
      .filter({ has: page.getByRole('button', { name: 'View Details' }) })
      .first();
    this.detailsTitle = page.getByText('Order Details', { exact: true }).first();
    this.payForOrderButton = page.getByRole('button', { name: /pay\s*for\s*order/i });
    this.paymentDialog = page.getByRole('dialog', { name: 'Payment' });
    this.applePayButton = this.paymentDialog.getByText('Card/Apple Pay', { exact: true });
    this.confirmPaymentButton = this.paymentDialog.getByRole('button', { name: 'Confirm Payment' });
    this.paidText = page.getByText('Paid', { exact: true }).first();
    this.orderDetailsHeader = page.getByText(/Order\s*#\s*/i).first();
    this.breadcrumbOrderManagement = page.getByRole('link', { name: 'Order Management', exact: true });
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

  async backToList() {
    if (await this.breadcrumbOrderManagement.isVisible().catch(() => false)) {
      await this.breadcrumbOrderManagement.click();
      await this.title.waitFor({ state: 'visible', timeout: 30000 });
      return;
    }
    await this.open();
  }

  async getOrderNumberFromDetails() {
    const headerText = (await this.orderDetailsHeader.innerText()).trim();
    const match = headerText.match(/Order\s*#\s*([A-Za-z0-9-]+)/i);
    return match ? match[1] : null;
  }

  async openDetails() {
    await this.pendingOrder.waitFor({ state: 'visible', timeout: 30000 });
    const viewDetails = this.pendingOrder.getByRole('button', { name: 'View Details' });
    await viewDetails.waitFor({ state: 'visible', timeout: 30000 });
    await viewDetails.click();
    await this.detailsTitle.waitFor({ state: 'visible', timeout: 30000 });
  }

  async getOrderNumber() {
    return (await this.pendingOrder.locator('.order-number').innerText()).trim();
  }

  async payOrder() {
    await this.payForOrderButton.waitFor({ state: 'visible', timeout: 30000 });
    await expect
      .poll(async () => this.payForOrderButton.isEnabled().catch(() => false), { timeout: 30000 })
      .toBeTruthy();
    await this.payForOrderButton.click();
    await this.paymentDialog.waitFor({ state: 'visible', timeout: 30000 });
    await this.applePayButton.evaluate((button) => button.click());
    await this.confirmPaymentButton.evaluate((button) => button.click());
    await this.page.waitForTimeout(2000);
  }

  async serveOrder(orderNumber) {
    const card = this.order(orderNumber);
    await card.waitFor({ state: 'visible', timeout: 30000 });
    await card.scrollIntoViewIfNeeded();

    const changeStatus = card.getByRole('button', { name: /change status/i });
    await changeStatus.waitFor({ state: 'visible', timeout: 30000 });
    await changeStatus.click();
    const servedOption = this.page.locator('.status-option[data-action="served"]:visible').first();
    await servedOption.waitFor({ state: 'visible', timeout: 30000 });
    await servedOption.click();
  }
}

module.exports = { OrderManagementPage };
