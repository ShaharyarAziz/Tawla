const { OutdoorQRCodePage } = require("./Outdoor Code");

class DineInQRCodePage extends OutdoorQRCodePage {
  constructor(page) {
    super(page);
    this.dineInTab = page.getByText("Dine-In QR Code", { exact: true });
    this.createQrCodeButton = page.getByRole("link", { name: "Create QR Code" });
    this.searchQrCodeInput = page.getByRole("textbox", { name: /Search QR Code/i });
  }

  async click(locator) {
    await locator.scrollIntoViewIfNeeded().catch(() => {});
    await locator.click().catch(async () => {
      await locator.evaluate((node) => node.click()).catch(async () => {
        await locator.click({ force: true }).catch(() => {});
      });
    });
  }

  async type(locator, value) {
    await locator.waitFor({ state: "visible", timeout: 30000 });
    await locator.click();
    await locator.press("Control+A").catch(() => {});
    await locator.press("Backspace").catch(() => {});
    await locator.pressSequentially(String(value), { delay: 50 }).catch(async () => {
      await locator.fill(String(value));
    });
  }

  async useActivePage(message) {
    if (!this.page.isClosed()) return this.page;
    const pages = this.page.context().pages().filter((page) => !page.isClosed());
    const lastPage = pages[pages.length - 1];
    if (!lastPage) throw new Error(message);
    await lastPage.waitForLoadState("domcontentloaded").catch(() => {});
    this.page = lastPage;
    return lastPage;
  }

  async pick(dialog, name, value) {
    const box = dialog.getByRole("combobox", { name }).first();
    await box.waitFor({ state: "visible", timeout: 30000 });
    await box.click();

    if (!value) {
      await this.page.keyboard.press("ArrowDown");
      await this.page.keyboard.press("Enter");
      await this.page.waitForTimeout(500);
      return;
    }

    const text = String(value);
    const safe = text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    await this.page.keyboard.press("Control+A").catch(() => {});
    await this.page.keyboard.type(text);

    for (const option of [
      this.page.getByRole("option", { name: new RegExp(`^${safe}$`, "i") }).first(),
      this.page.getByText(new RegExp(`^${safe}$`, "i")).last(),
    ]) {
      if (await option.isVisible().catch(() => false)) {
        await this.click(option);
        await this.page.waitForTimeout(500);
        return;
      }
    }

    await this.page.keyboard.press("Enter");
    await this.page.waitForTimeout(500);
  }

  async openDineInAdmin() {
    await this.page.waitForLoadState("domcontentloaded");
    await this.qrCodeTablesLink.waitFor({ state: "visible", timeout: 30000 });
    await this.qrCodeTablesLink.click();
    await this.dineInTab.waitFor({ state: "visible", timeout: 30000 });
    await this.dineInTab.click();
  }

  async openDineIn() {
    await this.openDineInAdmin();
  }

  async createQrCode(tableName, tableNo) {
    await this.createQrCodeButton.waitFor({ state: "visible", timeout: 30000 });
    await this.createQrCodeButton.click();

    const dialog = this.page.getByRole("dialog", { name: /Add QR Code/i });
    await dialog.waitFor({ state: "visible", timeout: 30000 });

    await this.pick(dialog, /Select Pattern/i);
    await this.pick(dialog, /Select Table Name/i, tableName);
    await this.pick(dialog, /Select Table Number/i, parseInt(tableNo, 10));

    const shareable = dialog.getByRole("checkbox", { name: /Create Shareable link for this QR Code/i });
    if (!(await shareable.isChecked().catch(() => false))) await this.click(shareable);

    await this.click(dialog.getByRole("button", { name: /Create QR Code/i }));
    await dialog.waitFor({ state: "hidden", timeout: 15000 }).catch(() => {});
    await this.page.waitForTimeout(1500);
  }

  async findQrRow(tableName, tableNo) {
    const number = String(parseInt(tableNo, 10));

    for (const value of [number, tableName]) {
      await this.type(this.searchQrCodeInput, value);
      await this.page.waitForTimeout(1000);

      const row = this.page.getByRole("row").filter({ hasText: tableName }).filter({ hasText: number }).first();
      if (await row.isVisible().catch(() => false)) return row;
    }

    throw new Error(`QR row not found for ${tableName} / ${number}`);
  }

  async readQrUrl(dialog, timeout = 15000) {
    const input = dialog.locator("#shareableLinkInput, input[value^='http'], textarea[value^='http']").first();
    const start = Date.now();

    while (Date.now() - start < timeout) {
      const url = ((await input.inputValue().catch(() => "")) || "").trim();
      if (/^https?:\/\//i.test(url)) return url;
      await this.page.waitForTimeout(500);
    }

    return "";
  }

  async getUrlForQrCode(tableName, tableNo) {
    let row = await this.findQrRow(tableName, tableNo);
    await this.click(row.getByRole("link", { name: /edit/i }).first());

    let dialog = this.page.getByRole("dialog", { name: /Edit QR Code/i });
    await dialog.waitFor({ state: "visible", timeout: 30000 });

    let url = await this.readQrUrl(dialog, 8000);
    if (url) return url;

    const shareable = dialog.getByRole("checkbox", { name: /Create Shareable link for this QR Code/i });
    if (!(await shareable.isChecked().catch(() => false))) await this.click(shareable);
    await this.click(dialog.getByRole("button", { name: /Update QR Code/i }).first());
    await dialog.waitFor({ state: "hidden", timeout: 15000 }).catch(() => {});
    await this.page.waitForTimeout(1500);

    row = await this.findQrRow(tableName, tableNo);
    await this.click(row.getByRole("link", { name: /edit/i }).first());
    dialog = this.page.getByRole("dialog", { name: /Edit QR Code/i });
    await dialog.waitFor({ state: "visible", timeout: 30000 });

    url = await this.readQrUrl(dialog, 20000);
    if (!url) throw new Error("QR URL not found");
    return url;
  }

  async addItem() {
    const tabs = this.page
      .locator("a[href='javascript:void(0);'], a[href='javascript:void(0)'], nav a, .nav a")
      .filter({ hasText: /.+/ });
    const texts = (await tabs.allTextContents().catch(() => [])).map((text) => text.trim());
    const preferred = ["Biryani", "All Desert", "Drinks"];
    const order = [...new Set([...preferred.map((name) => texts.indexOf(name)).filter((i) => i >= 0), ...texts.map((_, i) => i)])];
    const add = this.page.locator("button:has-text('Add'), a:has-text('Add')").first();
    const option = this.page
      .locator("[role='radio'], [role='checkbox'], input[type='radio'], input[type='checkbox'], label, li")
      .filter({ hasText: /.+/ })
      .first();
    const continueBtn = this.page.locator("button:has-text('Continue'), a:has-text('Continue')").first();
    const cartCount = async () =>
      parseInt(((await this.page.getByRole("link", { name: /^\d+$/ }).first().textContent().catch(() => "0")) || "0").trim(), 10) || 0;

    for (const index of order) {
      await this.click(tabs.nth(index));
      await this.page.waitForTimeout(800);
      if (await this.page.getByText(/no items available/i).first().isVisible().catch(() => false)) continue;
      if (!(await add.isVisible().catch(() => false))) continue;

      await this.click(add);

      if (await this.page.getByRole("heading", { name: /Customise your order/i }).first().isVisible().catch(() => false)) {
        if (await option.isVisible().catch(() => false)) await this.click(option);
        if (await continueBtn.isVisible().catch(() => false)) await this.click(continueBtn);
      }

      for (let i = 0; i < 5; i++) {
        if (await cartCount()) return;
        await this.page.waitForTimeout(800);
      }
    }

    throw new Error("No item was added from Dine-In categories");
  }

  async fillForm() {
    const nameInput = this.page
      .locator(
        [
          'input:not([type="hidden"])[placeholder*="name" i]',
          'input:not([type="hidden"])[name*="name" i]',
          'input:not([type="hidden"])[id*="name" i]',
          'input:not([type="hidden"])[autocomplete="name"]',
        ].join(", "),
      )
      .first();
    if (await nameInput.isVisible().catch(() => false)) await super.fillForm();
  }

  async placeOrder() {
    const page = await this.useActivePage("Active page was closed before payment step");
    const payFully = page.getByRole("button", { name: /Pay Fully|Place Order/i }).first();
    await payFully.waitFor({ state: "visible", timeout: 30000 });

    const popupPromise = page.context().waitForEvent("page", { timeout: 90000 }).catch(() => null);
    const navPromise = page.waitForNavigation({ timeout: 90000 }).catch(() => null);

    await this.click(payFully);

    const popup = await popupPromise;
    await navPromise;

    if (popup) {
      this.page = popup;
      await popup.waitForLoadState("domcontentloaded").catch(() => {});
      return popup;
    }

    return this.useActivePage("Order submit closed the page and no new page was opened");
  }

  async waitForPaymentGateway(paymentPage) {
    await paymentPage.waitForLoadState("domcontentloaded").catch(() => {});
    const cardField = paymentPage
      .locator(
        [
          'input:not([type="hidden"])[placeholder="Card" i]',
          'input:not([type="hidden"])[placeholder*="card" i]',
          'input:not([type="hidden"])[name*="card" i]',
          'input:not([type="hidden"])[id*="card" i]',
        ].join(", "),
      )
      .first();
    const timeoutMs = 90000;
    const start = Date.now();

    while (Date.now() - start < timeoutMs) {
      const payFully = paymentPage.getByRole("button", { name: /Pay Fully|Place Order/i }).first();

      if (await paymentPage.getByRole("heading", { name: /Order Details/i }).first().isVisible().catch(() => false)) {
        if (await payFully.isVisible().catch(() => false) && await payFully.isEnabled().catch(() => false)) {
          await this.click(payFully);
        }
      } else if (
        /ccavenue|cc-avenue|payment|checkout/i.test(paymentPage.url()) ||
        await paymentPage.getByText(/billing information/i).first().isVisible().catch(() => false) ||
        await cardField.isVisible().catch(() => false)
      ) {
        return;
      }

      await paymentPage.waitForTimeout(500);
    }

    throw new Error(`Payment gateway did not load within ${timeoutMs}ms. Current url: ${paymentPage.url()}`);
  }
}

module.exports = { DineInQRCodePage };
