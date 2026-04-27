# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Digital_Menu\DigitalMenu.spec.js >> User adds SubCategories in Digital Menu
- Location: tests\Digital_Menu\DigitalMenu.spec.js:35:6

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for locator('span[role="combobox"]').locator('span').first()

```

# Test source

```ts
  1  | class SubCategory {
  2  |   constructor(page) {
  3  |     this.page = page;
  4  |     this.createSubCategoryBtn = page.getByText("+ Create Sub Category");
  5  |     this.selectCategoryDropdown = this.page
  6  |       .locator('span[role="combobox"]')
  7  |       .locator("span")
  8  |       .first();
  9  |     this.dropdownOptions = this.page.getByRole("option", {
  10 |       name: "Recycled Cotton Cheese",
  11 |     });
  12 |     this.enterSubCategoryNameInput = page.locator("input#sub_category_name");
  13 |     this.imageUploadInput = page.locator("#subcat_image");
  14 |     this.saveSubCategoryBtn = page.locator(".submitSubCategory");
  15 |   }
  16 |   async openSubCategoryModal() {
  17 |     await this.createSubCategoryBtn.click();
  18 |   }
  19 |   async saveSubCategory(name) {
> 20 |     await this.selectCategoryDropdown.click();
     |                                       ^ Error: locator.click: Target page, context or browser has been closed
  21 |     await this.dropdownOptions.click();
  22 |     await this.enterSubCategoryNameInput.fill(name);
  23 |     await this.imageUploadInput.setInputFiles(
  24 |       "E:/Automation_Testing/Tawla_Automation/utils/1764155658-ARUGULA%20STEAK.webp",
  25 |     );
  26 |     await this.saveSubCategoryBtn.click();
  27 |   }
  28 | }
  29 | module.exports = { SubCategory };
  30 | 
```