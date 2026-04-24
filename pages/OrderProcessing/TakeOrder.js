class TakeOrderPage {
  constructor(page) {
    this.page = page;
    this.takeOrderLink = page.getByRole('link', { name: 'Take Orders' });
    this.dismissButton = page.getByRole('button', { name: 'Dismiss' });
    this.searchItemInput = page.getByRole('textbox', { name: 'Search by Item Name' });
  }

  async dismissAlerts() {
    if (await this.dismissButton.isVisible().catch(() => false)) {
      await this.dismissButton.click();
    }
  }

  searchInput() {
    return this.searchItemInput;
  }

  resultAddButtons() {
    return this.page.locator('a.btn-add');
  }

  addButton() {
    return this.resultAddButtons().first();
  }

  async open() {
    if (await this.searchItemInput.isVisible().catch(() => false)) {
      await this.dismissAlerts();
      return;
    }

    await this.page.waitForLoadState('domcontentloaded');
    await this.takeOrderLink.waitFor({ state: 'visible' });
    await this.takeOrderLink.scrollIntoViewIfNeeded();
    await this.dismissAlerts();
    await this.takeOrderLink.click();
    await this.searchItemInput.waitFor({ state: 'visible', timeout: 30000 });
    await this.dismissAlerts();
  }

  async goToTakeOrders() {
    return this.open();
  }

  async searchForItem(name) {
    await this.searchItemInput.fill(name);
  }

  async searchItem(name) {
    return this.searchForItem(name);
  }

  async addFirstResult() {
    const addButton = this.addButton();
    await addButton.waitFor({ state: 'visible', timeout: 30000 });
    await addButton.evaluate((element) => {
      element.scrollIntoView({ block: 'center', inline: 'center' });
      element.click();
    });
  }

  async clickAdd() {
    return this.addFirstResult();
  }
}

module.exports = { TakeOrderPage };

