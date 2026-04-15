const { test, expect } = require("@playwright/test");
const { LogOutPage } = require("../pages/Logout");
const { LoginPage } = require("../pages/LoginPage");
const dotenv = require("dotenv");

dotenv.config();

test.describe("LogOut Module", () => {
  test("User LogOut", async ({ page }) => {
    const logout = new LogOutPage(page);
    const login = new LoginPage(page);

    await logout.navigate();

    await login.login(process.env.EMAIL, process.env.PASSWORD);

    // ✅ wait for dashboard
    await expect(page).toHaveURL(/dashboard/);

    await logout.avatar.click();

    await logout.logout_btn.waitFor({ state: "visible" });
    await logout.logout_btn.click();

    await expect(page).toHaveURL("merchant/login");
  });
});
