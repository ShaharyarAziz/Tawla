const {
  generateRandomPrice,
  generateFoodDescription,
} = require("../../utils/testData");

class items {
  constructor(page) {
    this.page = page;
    this.createItemBtn = page.getByText("+ Create Item");
    this.item_name = page.locator("input#item_name");

    // this.foodtypeDropdown = page.locator(
    //   'div.custom-dropdown-trigger[data-dropdown="food-type-dropdown"]',
    // );
    this.foodTypeArrow = page.locator(
      'div.custom-dropdown-trigger[data-dropdown="food-type-dropdown"] svg.dropdown-arrow',
    );
    this.foodtypeMenu = page.locator("#food-type-dropdown");

    this.vegeterian = this.foodtypeMenu.getByText("Vegetarian", {
      exact: true,
    });
    this.nonVegeterian = this.foodtypeMenu.getByText("Non-Vegetarian", {
      exact: true,
    });
    this.item_price = page.locator("input#item_price");

    this.categoryNameDropdown = page.locator("span#category-label");
    this.categoryDropdown = page.locator(
      'div.custom-dropdown-trigger[data-dropdown="category-dropdown"]',
    );
    this.categoryMenu = page.locator("#category-dropdown");

    this.Spicy_Biryani = this.categoryMenu.getByText("All Desert", {
      exact: true,
    });

    this.RecycledCottonCheese = this.categoryMenu.getByText("Drinks", {
      exact: true,
    });
    this.subCategoryDropdown = page.locator(
      '[data-dropdown="subcategory-dropdown"]',
    );
    this.subCategoryMenu = page.locator("#subcategory-dropdown");

    this.fileInput = page.locator("#item_image");
    this.itemDescription = page.locator("#description");
  }

  async openCreateItemModal() {
    await this.createItemBtn.click();
  }

  // 🔥 NEW: reusable scroll function
  async scrollAndSelectSubCategory(text) {
    const container = this.subCategoryMenu;

    await container.waitFor({ state: "visible" });

    let found = false;

    for (let i = 0; i < 15; i++) {
      const item = container.getByText(text, { exact: true });

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
      throw new Error(`${text} not found in subcategory dropdown`);
    }
  }

  async saveItem(name, price) {
    await this.item_name.fill(name);
    await this.page.waitForTimeout(5000);
    await this.foodTypeArrow.click({ force: true });
    await this.vegeterian.click();
    await this.nonVegeterian.click();
    await this.item_price.click();
    await this.item_price.fill(price);

    await this.categoryDropdown.click();
    await this.categoryMenu.waitFor({ state: "visible" });
    await this.RecycledCottonCheese.click();

    await this.Spicy_Biryani.scrollIntoViewIfNeeded();
    await this.Spicy_Biryani.click();

    // ✅ Open subcategory dropdown
    await this.subCategoryDropdown.click();

    // 🔥 USE SCROLL FUNCTION HERE
    await this.scrollAndSelectSubCategory("Strawberry with Belgian chocolate");
    await this.scrollAndSelectSubCategory("Milkshakes");

    await this.fileInput.setInputFiles(
      "E:/Automation_Testing/Tawla_Automation/utils/png-transparent-full-breakfast-british-cuisine-english-cuisine-breakfast-sausage-woodbury-commons-outlet-food-breakfast-recipe-thumbnail.png",
    );

    await this.itemDescription.fill(generateFoodDescription());

    await this.page.getByRole("button", { name: "Save Item" }).click();

    // await this.page.pause();
  }
}

module.exports = { items };
