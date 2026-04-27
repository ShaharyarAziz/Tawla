class TakeOrderPage {
  constructor(page) {
    this.page = page;
    this.takeOrderLink = page.getByRole('link', { name: 'Take Orders' });
    this.dismissButton = page.getByRole('button', { name: 'Dismiss' });
    this.firstItemAddButton = page.locator('button.cart-add-button').first();
    this.showCartButton = page.getByRole('button', { name: /show cart/i }).first();
    this.noteInput = page.locator('#addItemModal textarea, #addItemModal .note-input').first();
    this.plusButton = page.locator('#addItemModal .quantity-btn.plus-btn').first();
    this.addItemButton = page.locator('#addItemModal button.btn-add-item').first();
    this.tableNameDropdown = page.getByRole('combobox').nth(1);
    this.tableNameOption = page.getByRole('option', { name: 'Test Table' });
    this.tableNumberDropdown = page.getByRole('combobox').nth(2);
    this.tableNumberOption = page.getByRole('option', { name: '5' });
    this.placeOrderButton = page.getByRole('button', { name: 'Place Order' });
  }

  async dismissPopup() {
    if (await this.dismissButton.isVisible().catch(() => false)) {
      await this.dismissButton.click();
    }
  }

  orderPlacedSuccessMessage() {
    return this.page.getByText('Order Placed Successfully!', { exact: true });
  }

  async open() {
    await this.page.waitForLoadState('domcontentloaded');
    await this.takeOrderLink.waitFor({ state: 'visible' });
    await this.takeOrderLink.scrollIntoViewIfNeeded();
    await this.dismissPopup();
    await this.takeOrderLink.click();
    await this.firstItemAddButton.waitFor({ state: 'visible', timeout: 30000 });
    await this.dismissPopup();
  }

  async addItem(note) {
    await this.firstItemAddButton.waitFor({ state: 'visible', timeout: 30000 });
    await this.firstItemAddButton.click({ force: true });
    await this.noteInput.waitFor({ state: 'visible', timeout: 30000 });
    await this.plusButton.click({ force: true });
    await this.noteInput.fill(note);
    await this.addItemButton.click({ force: true });
  }

  async showCart() {
    await this.showCartButton.waitFor({ state: 'visible', timeout: 30000 });
    await this.showCartButton.click({ force: true });
  }

  async selectTable() {
    await this.tableNameDropdown.click();
    await this.tableNameOption.click();
    await this.tableNumberDropdown.click();
    await this.tableNumberOption.click();
  }

  async placeOrder() {
    await this.placeOrderButton.click();
  }
}

module.exports = { TakeOrderPage };
