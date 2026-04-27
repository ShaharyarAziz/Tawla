class TakeOrderPage {
  constructor(page) {
    this.page = page;
    this.takeOrderLink = page.getByRole('link', { name: 'Take Orders' });
    this.dismissButton = page.getByRole('button', { name: 'Dismiss' });
    this.searchItemInput = page.getByRole('textbox', { name: 'Search by Item Name' });
    this.noteInput = page.locator('#addItemModal textarea, #addItemModal .note-input').first();
    this.plusButton = page.locator('#addItemModal .quantity-btn.plus-btn').first();
    this.addItemButton = page.locator('#addItemModal button.btn-add-item').first();
    this.showCartButton = page.getByRole('button', { name: 'Show Cart' });
    this.tableNameSelect = page.locator('#bottomTableName');
    this.tableNumberSelect = page.locator('#bottomTableNumber');
    this.placeOrderButton = page
      .locator('button.bottombar-action.bottombar-action-place, button.btn-submit.btn-primary.btn-placeorder')
      .first();
  }

  async dismissPopup() {
    if (await this.dismissButton.isVisible().catch(() => false)) {
      await this.dismissButton.click();
    }
  }

  searchInput() {
    return this.searchItemInput;
  }

  itemAddButton(name) {
    return this.page
      .locator('div.product-card', {
        has: this.page.locator('h3.product-title', { hasText: name }),
      })
      .locator('button.cart-add-button')
      .first();
  }

  async open() {
    await this.page.waitForLoadState('domcontentloaded');
    await this.takeOrderLink.waitFor({ state: 'visible' });
    await this.takeOrderLink.scrollIntoViewIfNeeded();
    await this.dismissPopup();
    await this.takeOrderLink.click();
    await this.searchItemInput.waitFor({ state: 'visible', timeout: 30000 });
    await this.dismissPopup();
  }

  async goToTakeOrders() {
    return this.open();
  }

  async searchForItem(itemName) {
    await this.searchItemInput.fill(itemName);
  }

  async addItem(itemName) {
    await this.itemAddButton(itemName).click({ force: true });
    await this.noteInput.waitFor({ state: 'visible', timeout: 30000 });
  }

  async increaseQuantity() {
    await this.plusButton.click({ force: true });
  }

  async addNote(note) {
    await this.noteInput.fill(note);
  }

  async addItemToCart() {
    await this.addItemButton.click({ force: true });
  }

  async selectTable(tableName, tableNumber) {
    if (await this.showCartButton.isVisible().catch(() => false)) {
      await this.showCartButton.click({ force: true });
    }
    await this.page.waitForTimeout(1000);
    await this.tableNameSelect.selectOption({ label: tableName }, { force: true });
    await this.page.waitForTimeout(1000);
    await this.tableNumberSelect.selectOption({ label: String(tableNumber) }, { force: true });
  }

  async placeOrder() {
    await this.placeOrderButton.click({ force: true });
  }
}

module.exports = { TakeOrderPage };
