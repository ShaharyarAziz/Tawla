# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Digital_Menu\DigitalMenu.spec.js >> User adds Categories,SubCategories & Items in Digital Menu
- Location: tests\Digital_Menu\DigitalMenu.spec.js:28:1

# Error details

```
Error: page.waitForLoadState: Test ended.
```

# Test source

```ts
  1  | class DigitalMenuPage {
  2  |   constructor(page) {
  3  |     this.page = page;
  4  |     this.digitalMenuLink = page.getByRole("link", { name: "Digital Menu" });
  5  |   }
  6  | 
  7  |   async goToDigitalMenu() {
> 8  |     await this.page.waitForLoadState("domcontentloaded");
     |                     ^ Error: page.waitForLoadState: Test ended.
  9  | 
  10 |     await this.digitalMenuLink.waitFor({ state: "visible" });
  11 |     await this.digitalMenuLink.scrollIntoViewIfNeeded();
  12 | 
  13 |     await Promise.all([
  14 |       // Wait for FINAL API (not 302 one)
  15 |       this.page.waitForResponse(
  16 |         (resp) =>
  17 |           resp.url().includes("digitalMenuSection") && resp.status() === 200,
  18 |       ),
  19 |       this.digitalMenuLink.click(),
  20 |     ]);
  21 |   }
  22 | }
  23 | 
  24 | module.exports = { DigitalMenuPage };
  25 | 
```