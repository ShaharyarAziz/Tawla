const { test, expect } = require("@playwright/test");
const { LogOutPage } = require("../pages/Logout");
const { LoginPage } = require("../pages/LoginPage");
const dotenv = require("dotenv");
dotenv.config();

test("User LogOut", async ({ page }) => {
  const logout = new LogOutPage(page);
  const login = new LoginPage(page);
  await logout.navigate();
  await login.loginAndWaitForDashboard(process.env.EMAIL, process.env.PASSWORD);
  await expect(page).toHaveURL(/dashboard/);
  await logout.logout();

  await expect(page).toHaveURL(/login/);
});
