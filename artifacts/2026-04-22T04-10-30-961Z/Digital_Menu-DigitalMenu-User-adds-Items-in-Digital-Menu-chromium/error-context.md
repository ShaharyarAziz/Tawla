# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Digital_Menu\DigitalMenu.spec.js >> User adds Items in Digital Menu
- Location: tests\Digital_Menu\DigitalMenu.spec.js:51:1

# Error details

```
ReferenceError: name is not defined
```

# Test source

```ts
  1  | class items {
  2  |   constructor(page) {
  3  |     this.page = page;
  4  |     this.createItemBtn = page.getByText("+ Create Item");
  5  | 
> 6  |     this.item_name = name;
     |                      ^ ReferenceError: name is not defined
  7  |     this.price = price;
  8  |     this.description = description;
  9  |   }
  10 |   async openCreateItemModal() {
  11 |     await this.createItemBtn.click();
  12 |   }
  13 | }
  14 | module.exports = { items };
  15 | 
```