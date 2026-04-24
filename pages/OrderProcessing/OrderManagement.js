class OrderManagementPage {
  constructor(page) {
    this.page = page;
    this.orderManagementLink = page.getByRole('link', { name: 'Order Management' });
    this.dismissButton = page.getByRole('button', { name: 'Dismiss' });
    this.pageTitle = page.getByText('Order Management', { exact: true }).last();
    this.allOrdersTab = page.getByText('All Orders', { exact: true });
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
}

module.exports = { OrderManagementPage };
