const { chromium } = require('@playwright/test');
const dotenv = require('dotenv');

dotenv.config();

async function globalSetup() {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  try {
    await page.goto(`${process.env.BASE_URL}/merchant/login`);
    await page.fill('input#email', process.env.EMAIL);
    await page.fill('input#password', process.env.PASSWORD);
    await page.click('button[type="submit"]');
    await page.waitForURL('**/dashboard');
    await page.context().storageState({ path: 'storageState.json' });
  } finally {
    await browser.close();
  }
}

module.exports = globalSetup;
