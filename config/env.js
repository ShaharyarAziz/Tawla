const env = {
  baseUrl: process.env.BASE_URL || 'https://example.com',
  username: process.env.TEST_USERNAME || 'demo.user@example.com',
  password: process.env.TEST_PASSWORD || 'ChangeMe123!',
  headless: process.env.HEADLESS !== 'false',
  actionTimeout: Number(process.env.ACTION_TIMEOUT || 15000),
  navigationTimeout: Number(process.env.NAVIGATION_TIMEOUT || 30000),
};

module.exports = { env };
