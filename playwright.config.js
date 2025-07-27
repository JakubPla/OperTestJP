const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  projects: [
    {
      name: 'Delta',
      use: {
        baseURL: 'https://demo-report-delta-self-service.operengineering.com/auth/login',
        headless: false,
        browserName: 'chromium',
        channel: 'chrome',
        viewport: { width: 1280, height: 720 },
        ignoreHTTPSErrors: true,
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
        trace: 'retain-on-failure',
      },
    },
    {
      name: 'Base',
      use: {
        baseURL: 'https://demo-report-base-self-service.operengineering.com/auth/login',
        headless: false,
        browserName: 'chromium',
        channel: 'chrome',
        viewport: { width: 1280, height: 720 },
        ignoreHTTPSErrors: true,
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
        trace: 'retain-on-failure',
      },
    },
  ],

  reporter: [
    ['list'],
    ['html', { open: 'never' }],
  ],
});
