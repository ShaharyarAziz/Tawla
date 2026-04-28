# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Digital_Menu\DigitalMenu.spec.js >> User adds Items in Digital Menu
- Location: tests\Digital_Menu\DigitalMenu.spec.js:54:6

# Error details

```
Test timeout of 30000ms exceeded.
```

```
TimeoutError: locator.waitFor: Timeout 10000ms exceeded.
Call log:
  - waiting for getByRole('link', { name: 'Digital Menu' }) to be visible

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
> 8  |     await this.digitalMenuLink.waitFor({ state: "visible" });
     |                                ^ TimeoutError: locator.waitFor: Timeout 10000ms exceeded.
  9  |     await this.digitalMenuLink.scrollIntoViewIfNeeded();
  10 | 
  11 |     await Promise.all([
  12 |       // Wait for FINAL API (not 302 one)
  13 |       this.page.waitForResponse(
  14 |         (resp) =>
  15 |           resp.url().includes("digitalMenuSection") && resp.status() === 200,
  16 |       ),
  17 |       this.digitalMenuLink.click(),
  18 |     ]);
  19 |   }
  20 | }
  21 | 
  22 | module.exports = { DigitalMenuPage };
  23 | 
```