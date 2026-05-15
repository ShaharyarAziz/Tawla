const { test, expect } = require("@playwright/test");
const { LoginPage } = require("../../pages/LoginPage");
const { DineInQRCodePage } = require("../../pages/QRCode & Tables/Dine In");
const { loadLatestTable } = require("../../utils/latestTable");

test.use({ launchOptions: { slowMo: 300 } });

async function click(locator) {
  await locator.click().catch(async () => {
    await locator.evaluate((node) => node.click()).catch(() => {});
  });
}

async function selectCreatedTableOnPublicPage(page, table) {
  const number = String(parseInt(table.tableNo, 10));
  const searchInput = page
    .locator(
      [
        'input[placeholder*="search table" i]',
        'input[placeholder*="table" i]',
        'input[name*="table" i]',
        'input[id*="table" i]',
      ].join(", "),
    )
    .first();

  if (await searchInput.isVisible().catch(() => false)) {
    await searchInput.click();
    await searchInput.press("Control+A").catch(() => {});
    await searchInput.press("Backspace").catch(() => {});
    await searchInput.pressSequentially(table.tableName, { delay: 50 }).catch(async () => {
      await searchInput.fill(table.tableName);
    });
    await page.waitForTimeout(1000);
  }

  for (const candidate of [
    page.getByRole("row").filter({ hasText: table.tableName }).filter({ hasText: number }).first(),
    page.getByRole("option").filter({ hasText: table.tableName }).first(),
    page.getByRole("button", { name: new RegExp(table.tableName, "i") }).first(),
    page.getByText(new RegExp(table.tableName, "i")).first(),
  ]) {
    if (await candidate.isVisible().catch(() => false)) {
      await click(candidate);
      break;
    }
  }

  const confirmButton = page.getByRole("button", { name: /continue|confirm|select|view menu|done/i }).first();
  if (await confirmButton.isVisible().catch(() => false)) await click(confirmButton);
}

test("Dine-In QR Code: opens CC Avenue payment page", async ({ page }) => {
  test.setTimeout(420000);
  expect(process.env.EMAIL).toBe("angels.tawla@gmail.com");

  const login = new LoginPage(page);
  const dineIn = new DineInQRCodePage(page);
  const table = loadLatestTable();

  await login.navigate();
  await login.login(process.env.EMAIL, process.env.PASSWORD);
  await expect(page).toHaveURL(/\/merchant\/dashboard/);

  await dineIn.openDineInAdmin();
  await expect(page).toHaveURL(/\/merchant\/qrcode\/index/);
  await dineIn.createQrCode(table.tableName, table.tableNo);
  const url = await dineIn.getUrlForQrCode(table.tableName, table.tableNo);

  await dineIn.openUrl(url);
  await selectCreatedTableOnPublicPage(dineIn.page, table);
  await dineIn.addItem();

  const paymentPage = await dineIn.placeOrder();
  await dineIn.waitForPaymentGateway(paymentPage);
  await expect(paymentPage).toHaveURL(/ccavenue|cc-avenue|payment|checkout/i);
});
