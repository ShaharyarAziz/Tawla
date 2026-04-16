# 🚀 Tawla Automation Framework

End-to-end test automation framework built using **Playwright** with a scalable and maintainable architecture based on the **Page Object Model (POM)**.

---

## 📌 Overview

This framework is designed to support reliable and efficient UI automation for the Tawla platform. It focuses on:

- Maintainability
- Reusability
- Scalability
- Clean test design

The project follows industry best practices to ensure long-term usability and easy collaboration across teams.

---

## 🏗️ Project Structure
playwright-automation/
│
├── tests/ # Test specifications
│ ├── login.spec.js
│ └── order.spec.js
│
├── pages/ # Page Object Models
│ ├── LoginPage.js
│ ├── DashboardPage.js
│ └── OrderPage.js
│
├── fixtures/ # Custom test fixtures
│ └── baseTest.js
│
├── utils/ # Utilities and test data
│ ├── testData.js
│ └── helpers.js
│
├── config/ # Environment configuration
│ └── env.js
│
├── playwright.config.js # Playwright configuration
├── package.json
└── README.md
---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository

```bash
git clone <repository-url>
cd playwright-automation
npm install
npx playwright install
npx playwright test
npx playwright test tests/login.spec.js
npx playwright test --headed
npx playwright test --debug
npx playwright show-report
config/env.js

🧩 Framework Highlights
Page Object Model (POM) for separation of concerns
Centralized configuration management
Reusable fixtures for consistent test setup
Modular utilities for common operations
Clean and scalable folder structure
Parallel execution support

👨‍💻 Maintained By

Automation Team
