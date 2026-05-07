const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const dotenv = require('dotenv');

dotenv.config();

test.describe('Login Module', () => {
  test('Valid Login', async ({ page }) => {
    const login = new LoginPage(page);
    await login.navigate();
    await login.login(process.env.EMAIL, process.env.PASSWORD);
    await expect(page).toHaveURL("/merchant/dashboard");
  });

  test('Invalid Login', async ({ page }) => {
    const login = new LoginPage(page);
    await login.navigate();
    await login.login(process.env.InvalidEmail, process.env.InvalidPassword);
    await expect(page).toHaveURL(/\/merchant\/login$/);
  });
});
