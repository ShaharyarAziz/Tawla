class OutdoorQRCodePage {
  constructor(page) {
    this.page = page;
    this.qrCodeTablesLink = page.getByRole('link', { name: /QR Code\s*&\s*Tables/i });
    this.outdoorTab = page.getByText('Outdoor QR Code', { exact: true });
    this.qrRows = page.locator('table tbody tr');
  }

  _normalizeContactNumber(raw) {
    const s = (raw || '').toString().trim();
    if (!s) return s;

    const digits = s.replace(/[^\d]/g, '');
    // Tawla checkout validates UAE-style numbers; if user provides a 10-digit local number,
    // normalize to international format by prefixing 971.
    if (digits.length === 10 && !digits.startsWith('971')) return `971${digits}`;
    return digits || s;
  }

  async openOutdoor() {
    await this.page.waitForLoadState('domcontentloaded');
    await this.qrCodeTablesLink.waitFor({ state: 'visible', timeout: 30000 });
    await this.qrCodeTablesLink.click();
    await this.outdoorTab.waitFor({ state: 'visible', timeout: 30000 });
    await this.outdoorTab.click();
  }

  row(index = 0) {
    return this.qrRows.nth(index);
  }

  async openEdit(index = 0) {
    const row = this.row(index);
    await row.waitFor({ state: 'visible', timeout: 30000 });

    const editLink = row.getByRole('link', { name: /edit/i }).first();
    if (await editLink.isVisible()) {
      await editLink.click();
      return;
    }

    const editBtn = row.getByRole('button', { name: /edit/i }).first();
    if (await editBtn.isVisible()) {
      await editBtn.click();
      return;
    }

    await row.getByText(/edit/i).first().click();
  }

  async getUrl() {
    const input = this.page
      .locator('#shareableLinkInput, input[value^="http"], textarea[value^="http"]')
      .first();
    await input.waitFor({ state: 'attached', timeout: 30000 });
    const url = (await input.inputValue()).trim();
    if (!/^https?:\/\//i.test(url)) throw new Error('QR URL not found');
    return url;
  }

  async openUrl(url) {
    await this.page.goto(url, { waitUntil: 'domcontentloaded' });

    const viewMenu = this.page.getByText('View Menu', { exact: true });
    if (await viewMenu.isVisible().catch(() => false)) {
      const popupPromise = this.page.context().waitForEvent('page').catch(() => null);
      await viewMenu.click();
      const popup = await popupPromise;
      if (popup) {
        await popup.waitForLoadState('domcontentloaded').catch(() => {});
        this.page = popup;
      } else {
        await this.page.waitForLoadState('domcontentloaded').catch(() => {});
      }
    }
  }

  async addItem() {
    const addControl = () =>
      this.page
        .locator(
          [
            'button.cart-add-button',
            'button:has-text("+")',
            'button[aria-label*="add" i]',
            'a:has-text("Add")',
          ].join(", "),
        )
        .first();

    for (let i = 0; i < 8; i++) {
      const plus = addControl();
      if (await plus.isVisible().catch(() => false)) {
        await plus.scrollIntoViewIfNeeded().catch(() => {});
        await plus.click().catch(async () => {
          await plus.evaluate((node) => node.click()).catch(async () => {
            await plus.click({ force: true });
          });
        });
        const continueBtn = this.page
          .locator('button:has-text("Continue"), a:has-text("Continue")')
          .first();
        if (await continueBtn.isVisible().catch(() => false)) {
          await continueBtn.click().catch(() => {});
        }
        return;
      }

      // If current category has no items, try switching categories/tabs.
      const noItems = this.page.getByText(/no items available/i).first();
      if (await noItems.isVisible().catch(() => false)) {
        const categoryTabs = this.page.locator('nav a, [role="tab"], .nav a, ul li a').filter({ hasText: /.+/ });
        const count = await categoryTabs.count().catch(() => 0);
        if (count > 0) {
          await categoryTabs.nth(i % count).click().catch(() => null);
          await this.page.waitForTimeout(500);
          continue;
        }
      }

      // Wait a bit for menu to load and retry.
      await this.page.waitForTimeout(1000);
    }

    // Final attempt with original selector (better error message context).
    const plus = addControl();
    await plus.waitFor({ state: 'visible', timeout: 30000 });
    await plus.scrollIntoViewIfNeeded().catch(() => {});
    await plus.click().catch(async () => {
      await plus.evaluate((node) => node.click()).catch(async () => {
        await plus.click({ force: true });
      });
    });
    const continueBtn = this.page
      .locator('button:has-text("Continue"), a:has-text("Continue")')
      .first();
    if (await continueBtn.isVisible().catch(() => false)) {
      await continueBtn.click().catch(() => {});
    }
  }

  async openCart() {
    const cartBtn = this.page.getByRole('button', { name: /show cart/i }).first();
    if (await cartBtn.isVisible().catch(() => false)) {
      await cartBtn.click();
      return;
    }

    const cartLink = this.page.getByRole('link', { name: /^\d+$/ }).first();
    await cartLink.waitFor({ state: 'visible', timeout: 30000 });
    await cartLink.click();
  }

  async checkout() {
    const checkoutOrPlaceOrder = this.page
      .getByRole('button', { name: /checkout|place order/i })
      .first();
    await checkoutOrPlaceOrder.waitFor({ state: 'visible', timeout: 30000 });
    await checkoutOrPlaceOrder.click();
  }

  async fillForm() {
    const seed = Date.now().toString(36);
    const name = (process.env.Billing_name || `Test User ${seed}`).trim();
    const email = (process.env.Billing_email || `test.user.${seed}@example.com`).trim();
    const phone = this._normalizeContactNumber(process.env.Contact_number || process.env.Contect_number || process.env.Billing_phone || '971501234567');
    const carPlate = (process.env.CAR_PLATE || '').trim();

    const nameInput = this.page
      .locator(
        [
          'input:not([type="hidden"])[placeholder*="name" i]',
          'input:not([type="hidden"])[name*="name" i]',
          'input:not([type="hidden"])[id*="name" i]',
          'input:not([type="hidden"])[autocomplete="name"]',
        ].join(', '),
      )
      .first();
    const phoneInput = this.page
      .locator('input:not([type="hidden"])[placeholder*="phone" i], input:not([type="hidden"])[placeholder*="mobile" i], input[type="tel"], input:not([type="hidden"])[name*="phone" i]')
      .first();
    const emailInput = this.page
      .locator('input:not([type="hidden"])[placeholder*="email" i], input[type="email"], input:not([type="hidden"])[name*="email" i]')
      .first();

    await nameInput.waitFor({ state: 'visible', timeout: 30000 });
    await phoneInput.waitFor({ state: 'visible', timeout: 30000 });
    await emailInput.waitFor({ state: 'visible', timeout: 30000 });

    await nameInput.fill(name);
    await phoneInput.fill(phone);
    await emailInput.fill(email);

    const plateInput = this.page.locator('input[placeholder*="plate" i], input[name*="plate" i], input[id*="plate" i]').first();
    if (await plateInput.isVisible()) {
      await plateInput.fill(carPlate || `TEST-${seed}`.toUpperCase());
    }
  }

  async waitForPaymentGateway(paymentPage) {
    await paymentPage.waitForLoadState('domcontentloaded').catch(() => {});

    const start = Date.now();
    const timeoutMs = 90000;

    // Wait until either URL looks like a gateway OR card fields appear in main page or in any frame.
    while (Date.now() - start < timeoutMs) {
      const url = paymentPage.url();
      if (/ccavenue|cc-avenue|payment|checkout/i.test(url)) return;

      const numberSelector = [
        'input[name*="card" i][name*="number" i]',
        'input[id*="card" i][id*="number" i]',
        'input[placeholder*="card" i][placeholder*="number" i]',
        'input[name="card_number"]',
        'input[name="cardNumber"]',
        'input[name="pan"]',
      ].join(', ');

      if (await paymentPage.locator(numberSelector).first().isVisible().catch(() => false)) return;

      const frames = paymentPage.frames();
      for (const f of frames) {
        if (/ccavenue|payment|checkout|card/i.test(f.url())) return;
        if (await f.locator(numberSelector).first().isVisible().catch(() => false)) return;
      }

      await paymentPage.waitForTimeout(500);
    }

    throw new Error(`Payment gateway did not load within ${timeoutMs}ms. Current url: ${paymentPage.url()}`);
  }

  async placeOrder() {
    if (this.page.isClosed()) {
      const pages = this.page.context().pages().filter((p) => !p.isClosed());
      const last = pages[pages.length - 1];
      if (!last) throw new Error("Active page was closed before payment step");
      this.page = last;
      await this.page.waitForLoadState('domcontentloaded').catch(() => {});
    }

    const placeOrder = this.page.getByRole('button', { name: /place order|confirm|pay/i }).first();
    await placeOrder.waitFor({ state: 'visible', timeout: 30000 });
    const ctx = this.page.context();
    const popupPromise = ctx.waitForEvent('page', { timeout: 90000 }).catch(() => null);
    const navPromise = this.page.waitForNavigation({ timeout: 90000 }).catch(() => null);
    await placeOrder.click();
    const popup = await popupPromise;
    if (popup) {
      await popup.waitForLoadState('domcontentloaded').catch(() => {});
      return popup;
    }

    await navPromise;

    if (this.page.isClosed()) {
      // Some flows close the current tab and open a new one shortly after.
      const latePopup = await ctx.waitForEvent('page', { timeout: 60000 }).catch(() => null);
      if (latePopup) {
        await latePopup.waitForLoadState('domcontentloaded').catch(() => {});
        this.page = latePopup;
        return latePopup;
      }

      const pages = ctx.pages().filter((p) => !p.isClosed());
      const last = pages[pages.length - 1];
      if (!last) throw new Error('Order submit closed the page and no new page was opened');
      await last.waitForLoadState('domcontentloaded').catch(() => {});
      this.page = last;
      return last;
    }

    return this.page;
  }
}

module.exports = { OutdoorQRCodePage };
