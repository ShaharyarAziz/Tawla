const path = require('path');
const { defineConfig } = require('@playwright/test');
const dotenv = require('dotenv');

dotenv.config();

const runId = new Date().toISOString().replace(/[:.]/g, '-');

module.exports = defineConfig({
  testDir: './tests',
  testIgnore: ['**/Category.spec.js'],
  timeout: 30000,
  outputDir: path.join('artifacts', runId),
  reporter: [['html', { open: 'never' }], ['list']],
  use: {
    baseURL: process.env.BASE_URL || 'http://13.51.170.24',
    headless: false,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    actionTimeout: 10000,
  },
  projects: [
    {
      name: 'chromium',
      use: { browserName: 'chromium' },
    },
  ],
});
