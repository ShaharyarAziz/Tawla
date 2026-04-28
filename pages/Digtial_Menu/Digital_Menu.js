class DigitalMenuPage {
  constructor(page) {
    this.page = page;
    this.digitalMenuLink = page.getByRole("link", { name: "Digital Menu" });
  }

  async goToDigitalMenu() {
    await this.digitalMenuLink.waitFor({ state: "visible" });
    await this.digitalMenuLink.scrollIntoViewIfNeeded();
    await Promise.all([
      this.page.waitForResponse(
        (resp) =>
          resp.url().includes("digitalMenuSection") && resp.status() === 200,
      ),
      this.digitalMenuLink.click(),
    ]);
  }
}

module.exports = { DigitalMenuPage };
