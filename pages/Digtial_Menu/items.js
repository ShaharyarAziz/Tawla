const {
  generateRandomPrice,
  generateFoodDescription,
} = require("../../utils/testData");

class items {
  constructor(page) {
    this.page = page;
    this.createItemBtn = page.getByText("+ Create Item");
    this.item_name = page.locator("input#item_name");
    this.foodtypeDropdown = page.locator("span#food-type-label");
    this.vegeterian = page.locator('input[value="vegetarian"]');
    this.nonVegeterian = page.locator('input[value="non-vegetarian"]');
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
    this.spicyFries = page
      .locator("#subcategory-options")
      .getByText("Spicy Fries");
    this.fileInput = page.locator("#item_image");
    this.itemDescription = page.locator("#description");
  }

  async openCreateItemModal() {
    await this.createItemBtn.click();
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
    // await this.subCategoryDropdown.waitFor({ state: "visible" });
    await this.subCategoryDropdown.click();
    await this.spicyFries.scrollIntoViewIfNeeded();
    await this.spicyFries.click();
    await this.fileInput.setInputFiles(
      "E:/Automation_Testing/Tawla_Automation/utils/png-transparent-full-breakfast-british-cuisine-english-cuisine-breakfast-sausage-woodbury-commons-outlet-food-breakfast-recipe-thumbnail.png",
    );
    await this.itemDescription.fill(generateFoodDescription());
    await this.page.getByRole("button", { name: "Save Item" }).click();
  }
}
module.exports = { items };
