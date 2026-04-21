# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Digital_Menu\DigitalMenu.spec.js >> User adds Categories,SubCategories & Items in Digital Menu
- Location: tests\Digital_Menu\DigitalMenu.spec.js:9:1

# Error details

```
Error: locator.waitFor: Test ended.
Call log:
  - waiting for getByText('+ Create Category') to be visible

```

# Test source

```ts
  1  | class Category {
  2  |   constructor(page) {
  3  |     this.page = page;
  4  | 
  5  |     this.createCategoryBtn = page.getByText("+ Create Category");
  6  |     this.categoryInput = page.locator("#category_name_create");
  7  |     this.saveCategoryBtn = page.getByRole("button", { name: "Save Category" });
  8  |     this.modal = page.locator("#categoryModel");
  9  |   }
  10 | 
  11 |   async openCategoryModal() {
> 12 |     await this.createCategoryBtn.waitFor({ state: "visible" });
     |                                  ^ Error: locator.waitFor: Test ended.
  13 |     await this.createCategoryBtn.click();
  14 | 
  15 |     // wait for modal
  16 |     await this.modal.waitFor({ state: "visible" });
  17 |   }
  18 | 
  19 |   async saveCategory(name) {
  20 |     await this.categoryInput.fill(name);
  21 |     await this.saveCategoryBtn.click();
  22 |   }
  23 | 
  24 |   async addCategory(name) {
  25 |     await this.openCategoryModal();
  26 |     await this.saveCategory(name);
  27 |   }
  28 | }
  29 | 
  30 | module.exports = { Category };
  31 | 
```