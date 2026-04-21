class Category {
  constructor(page) {
    this.page = page;

    this.createCategoryBtn = page.getByText("+ Create Category");
    this.categoryInput = page.locator("#category_name_create");
    this.saveCategoryBtn = page.getByRole("button", { name: "Save Category" });
    this.modal = page.locator("#categoryModel");
  }

  async openCategoryModal() {
    await this.createCategoryBtn.waitFor({ state: "visible" });
    await this.createCategoryBtn.click();

    // wait for modal
    await this.modal.waitFor({ state: "visible" });
  }

  async saveCategory(name) {
    await this.categoryInput.fill(name);
    await this.saveCategoryBtn.click();
  }

  async addCategory(name) {
    await this.openCategoryModal();
    await this.saveCategory(name);
  }
}

module.exports = { Category };
