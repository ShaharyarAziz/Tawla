const {
  generateRandomPrice,
  generateFoodDescription,
} = require("../../utils/testData");

class items {
  constructor(page) {
    this.page = page;
    this.createItemBtn = page.getByText("+ Create Item");
    this.item_name = page.locator("input#item_name");

    this.foodtypeDropdown = page.locator(
      '[data-dropdown="food-type-dropdown"]',
    );

    this.vegeterian = page.getByText("Vegetarian", { exact: true });
    this.nonVegeterian = page.getByText("Non-Vegetarian", { exact: true });
    this.item_price = page.locator("input#item_price");

    this.categoryNameDropdown = page.locator("span#category-label");

    this.Marblehat = page
      .locator("#category-dropdown")
      .getByText("Modern Marble Hat");

    this.RecycledCottonCheese = page
      .locator("#category-dropdown")
      .getByText("Recycled Cotton Cheese");

    this.subCategoryDropdown = page.locator(
      '[data-dropdown="subcategory-dropdown"]',
    );

    this.fileInput = page.locator("#item_image");
    this.itemDescription = page.locator("#description");
  }

  async openCreateItemModal() {
    await this.createItemBtn.click();
  }

  // 🔥 NEW: reusable scroll function
  async scrollAndSelectSubCategory(text) {
    const container = this.page.locator("#subcategory-dropdown");

    await container.waitFor({ state: "visible" });

    let found = false;

    for (let i = 0; i < 15; i++) {
      const item = container.locator("span", { hasText: text });

      if ((await item.count()) > 0) {
        await item.first().click();
        found = true;
        break;
      }

      // 🔽 scroll inside dropdown
      await container.evaluate((el) => el.scrollBy(0, 200));
      await this.page.waitForTimeout(200);
    }

    if (!found) {
      throw new Error(`❌ ${text} not found in subcategory dropdown`);
    }
  }

  async saveItem(name, price) {
    await this.item_name.fill(name);

    await this.foodtypeDropdown.click();
    await this.vegeterian.click();
    await this.nonVegeterian.click();
    await this.item_price.click();
    await this.item_price.fill(price);

    await this.categoryNameDropdown.click();
    await this.RecycledCottonCheese.click();

    await this.Marblehat.scrollIntoViewIfNeeded();
    await this.Marblehat.click();

    // ✅ Open subcategory dropdown
    await this.subCategoryDropdown.click();

    // 🔥 USE SCROLL FUNCTION HERE
    await this.scrollAndSelectSubCategory("Spicy Fries");

    await this.fileInput.setInputFiles(
      "E:/Automation_Testing/Tawla_Automation/utils/png-transparent-full-breakfast-british-cuisine-english-cuisine-breakfast-sausage-woodbury-commons-outlet-food-breakfast-recipe-thumbnail.png",
    );

    await this.itemDescription.fill(generateFoodDescription());

    await this.page.getByRole("button", { name: "Save Item" }).click();

    // await this.page.pause();
  }
}

module.exports = { items };
