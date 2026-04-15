# Tawla Automation

Playwright automation starter framework organized with Page Object Model, shared fixtures, helpers, and sample tests.

## Project Structure

```text
playwright-automation/
|
|-- tests/                 # Test files
|   |-- login.spec.js
|   `-- order.spec.js
|
|-- pages/                 # Page Object Model
|   |-- LoginPage.js
|   |-- DashboardPage.js
|   `-- OrderPage.js
|
|-- fixtures/              # Base test setup
|   `-- baseTest.js
|
|-- utils/                 # Helpers & test data
|   |-- testData.js
|   `-- helpers.js
|
|-- config/
|   `-- env.js
|
|-- playwright.config.js
|-- package.json
`-- README.md
```

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Install Playwright browsers:

```bash
npx playwright install
```

3. Set environment variables before running tests:

```powershell
$env:BASE_URL="https://your-app-url.com"
$env:TEST_USERNAME="your-user"
$env:TEST_PASSWORD="your-password"
```

## Run Tests

```bash
npm test
```

Useful variants:

- `npm run test:headed`
- `npm run test:ui`
- `npm run test:debug`
- `npm run report`

## Notes

- The page locators are starter placeholders based on `data-testid` attributes.
- Update the selectors and route paths to match the real Tawla application.
- Sample credentials in `config/env.js` and `utils/testData.js` are only defaults for local scaffolding.
