const { test, expect } = require("@playwright/test");
const { LoginPage } = require("../../pages/LoginPage");
const { TablesPage } = require("../../pages/QRCode & Tables/TablesPage");
const { saveLatestTable } = require("../../utils/latestTable");

test("creates table from Table Management", async ({ page }) => {
  test.setTimeout(120000);
  expect(process.env.EMAIL).toBe("angels.tawla@gmail.com");

  const login = new LoginPage(page);
  const tables = new TablesPage(page);

  await login.navigate();
  await login.login(process.env.EMAIL, process.env.PASSWORD);
  await expect(page).toHaveURL(/\/merchant\/dashboard/);

  await tables.goToTableManagement();
  await expect(page).toHaveURL(/\/merchant\/qrcode\/table/);

  const table = await tables.createTable();
  saveLatestTable(table);
  expect(table.tableName).toBeTruthy();
  expect(table.tableNo).toMatch(/^\d{2}$/);
});
