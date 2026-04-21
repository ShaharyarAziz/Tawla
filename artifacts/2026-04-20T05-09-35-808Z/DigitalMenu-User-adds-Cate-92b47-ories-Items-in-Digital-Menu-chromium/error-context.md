# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: DigitalMenu.spec.js >> User adds Categories,SubCategories & Items in Digital Menu
- Location: tests\DigitalMenu.spec.js:7:1

# Error details

```
Error: page.waitForURL: Test ended.
=========================== logs ===========================
waiting for navigation to "**/merchant/digitalmenu" until "load"
============================================================
```

# Test source

```ts
  1  | export class DigitalMenuPage {
  2  |   constructor(page) {
  3  |     this.page = page;
  4  | 
  5  |     // Most stable locator (recommended)
  6  |     this.digitalMenuLink = page.getByRole("link", { name: "Digital Menu" });
  7  |   }
  8  | 
  9  |   async goToDigitalMenu() {
  10 |     // Wait for sidebar to be visible (important after login)
  11 |     await this.page.waitForLoadState("networkidle");
  12 | 
  13 |     // Ensure element is visible
  14 |     await this.digitalMenuLink.waitFor({ state: "visible" });
  15 | 
  16 |     // Scroll (in case sidebar has overflow)
  17 |     await this.digitalMenuLink.scrollIntoViewIfNeeded();
  18 | 
  19 |     // Click
  20 |     await this.digitalMenuLink.click();
  21 | 
  22 |     // Optional: verify navigation
> 23 |     await this.page.waitForURL("**/merchant/digitalmenu");
     |                     ^ Error: page.waitForURL: Test ended.
  24 |   }
  25 | }
  26 | 
```