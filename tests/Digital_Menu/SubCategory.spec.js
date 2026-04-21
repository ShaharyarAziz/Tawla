class SubCategory {
  constructor(page) {
    this.page = page;
    this.createSubCategoryBtn = page.getByText("+ Create Sub Category");
    this.selectCategoryDropdown = this.page
      .locator('span[role="combobox"]')
      .locator("span")
      .first();
    this.dropdownOptions = this.page.getByRole("option", {
      name: "Recycled Cotton Cheese",
    });
    this.enterSubCategoryNameInput = page.locator("input#sub_category_name");
    this.imageUploadInput = page.locator("#subcat_image");
    this.saveSubCategoryBtn = page.locator(".submitSubCategory");
  }
  async openSubCategoryModal() {
    await this.createSubCategoryBtn.click();
  }
  async saveSubCategory(name) {
    await this.selectCategoryDropdown.click();
    await this.dropdownOptions.click();
    await this.enterSubCategoryNameInput.fill(name);
    await this.imageUploadInput.setInputFiles(
      "E:/Automation_Testing/Tawla_Automation/utils/1764155658-ARUGULA%20STEAK.webp",
    );
    await this.saveSubCategoryBtn.click();
  }
}
module.exports = { SubCategory };
