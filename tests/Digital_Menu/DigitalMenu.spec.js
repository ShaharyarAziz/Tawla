const { test, expect } = require("@playwright/test");
const { LoginPage } = require("../../pages/LoginPage");
const { DigitalMenuPage } = require("../../pages/Digtial_Menu/Digital_Menu");
const dotenv = require("dotenv");
const {
  getRandomFoodCategory,
  generateSubCategoryName,
  generateRandomPrice,
} = require("../../utils/testData");
const { Category } = require("../../pages/Digtial_Menu/Category.js");
const { SubCategory } = require("../../pages/Digtial_Menu/SubCategory.js");
const { items } = require("../../pages/Digtial_Menu/items.js");
dotenv.config();

test.only("User adds Categories in Digital Menu", async ({ page }) => {
  const login = new LoginPage(page);
  const digitalMenu = new DigitalMenuPage(page);
  const category = new Category(page);
  const subcategory = new SubCategory(page);
  const item = new items(page);
  await login.navigate();
  await login.login(process.env.EMAIL, process.env.PASSWORD);
  await expect(page).toHaveURL(/\/merchant\/dashboard/);
  await digitalMenu.goToDigitalMenu();
  await expect(page).toHaveURL(
    /\/merchant\/digitalmenu\/menu\/digitalMenuSection/,
  );
  await category.openCategoryModal();
  await category.saveCategory(getRandomFoodCategory());
});
test.only("User adds SubCategories in Digital Menu", async ({ page }) => {
  const login = new LoginPage(page);
  const digitalMenu = new DigitalMenuPage(page);
  const subcategory = new SubCategory(page);
  await login.navigate();
  await login.login(process.env.EMAIL, process.env.PASSWORD);

  await expect(page).toHaveURL(/\/merchant\/dashboard/);

  await digitalMenu.goToDigitalMenu();
  await expect(page).toHaveURL(
    /\/merchant\/digitalmenu\/menu\/digitalMenuSection/,
  );
  await subcategory.openSubCategoryModal();
  await subcategory.saveSubCategory(getRandomFoodCategory());
});
test.only("User adds Items in Digital Menu", async ({ page }) => {
  const login = new LoginPage(page);
  const digitalMenu = new DigitalMenuPage(page);
  const item = new items(page);
  await login.navigate();
  await login.login(process.env.EMAIL, process.env.PASSWORD);
  await expect(page).toHaveURL(/\/merchant\/dashboard/);
  await digitalMenu.goToDigitalMenu();
  await item.openCreateItemModal();
  await item.saveItem(generateSubCategoryName(), generateRandomPrice());
});
