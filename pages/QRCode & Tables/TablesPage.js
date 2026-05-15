class TablesPage {
  constructor(page) {
    this.page = page;
    this.qrCodeTablesLink = page.getByRole("link", { name: /QR Code\s*&\s*Tables/i });
    this.tableManagementTab = page.getByText("Table Management", { exact: true });
    this.openCreateTable = page
      .getByRole("heading", { level: 1 })
      .filter({ hasText: "QR Code" })
      .first()
      .getByRole("link", { name: "Create Table" });
    this.tableBodyRows = page
      .getByRole("grid")
      .getByRole("row")
      .filter({ has: page.getByRole("gridcell") });
  }

  async goToTableManagement() {
    await this.page.waitForLoadState("domcontentloaded");
    await this.qrCodeTablesLink.waitFor({ state: "visible", timeout: 30000 });
    await this.qrCodeTablesLink.scrollIntoViewIfNeeded();
    await this.qrCodeTablesLink.click();
    await this.tableManagementTab.waitFor({ state: "visible", timeout: 30000 });
    await this.tableManagementTab.click();
  }

  async _gridNamesAndNumbers() {
    const names = new Set();
    const numbers = new Set();
    const n = await this.tableBodyRows.count();
    for (let i = 0; i < n; i++) {
      const cells = this.tableBodyRows.nth(i).getByRole("gridcell");
      if ((await cells.count()) < 2) continue;
      names.add((await cells.nth(0).innerText()).trim());
      numbers.add((await cells.nth(1).innerText()).trim());
    }
    return { names, numbers };
  }

  async createTable() {
    const { names, numbers } = await this._gridNamesAndNumbers();
    const letters = (n) =>
      Array.from({ length: n }, () =>
        String.fromCharCode(97 + Math.floor(Math.random() * 26)),
      ).join("");
    const usedNumbers = new Set(
      [...numbers]
        .map((value) => String(parseInt(value, 10)))
        .filter((value) => value !== "NaN"),
    );
    const availableNumbers = Array.from(
      { length: 90 },
      (_, i) => String(i + 10).padStart(2, "0"),
    ).filter((value) => !usedNumbers.has(String(parseInt(value, 10))));
    let tableName;
    let tableNo;
    if (!availableNumbers.length) throw new Error("No 2-digit table numbers available");
    do {
      tableName = `Auto ${letters(5)}`;
      tableNo =
        availableNumbers[Math.floor(Math.random() * availableNumbers.length)];
    } while (names.has(tableName));

    await this.page.waitForURL(/\/merchant\/qrcode\/table/, { timeout: 30000 }).catch(() => {});
    await this.openCreateTable.waitFor({ state: "visible", timeout: 30000 });
    await this.openCreateTable.scrollIntoViewIfNeeded();
    const dialog = this.page.getByRole("dialog");
    for (let attempt = 0; attempt < 3; attempt++) {
      await this.openCreateTable.click();
      try {
        await dialog.waitFor({ state: "visible", timeout: 8000 });
        break;
      } catch {
        if (attempt === 2) throw new Error("Add Table modal did not open");
      }
    }
    await dialog.getByRole("textbox", { name: /Table Name/i }).fill(tableName);
    await dialog.getByRole("spinbutton", { name: /Table No|Number/i }).fill(tableNo);
    await dialog.getByRole("button", { name: "Create Table" }).click();
    await dialog.waitFor({ state: "hidden", timeout: 10000 }).catch(() => {});
    await this.page.waitForTimeout(1000);
    this.lastCreatedTable = { tableName, tableNo };
    return this.lastCreatedTable;
  }
}

module.exports = { TablesPage };
