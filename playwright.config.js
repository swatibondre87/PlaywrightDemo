// @ts-check
import { defineConfig, devices } from '@playwright/test';


/**
 * @see https://playwright.dev/docs/test-configuration
 * 
 */

projects:[
  {
    name: 'chromium',
    use: {
      ...devices['Desktop Chrome'],
      viewport:{width:1680,Height:990},
      
    },
  },
]
const config = ({
  testDir: './tests',
  timeout: 30 * 1000,
  expect: {
    timeout: 5000
  },
 // retries:2,
  fullyParallel: true,
  reporter: [['html'], ['allure-playwright']],
  use: {
  browserName : 'chromium',
 headless: false,
 screenshot: 'only-on-failure',
 trace: 'on-first-retry',
 video:'on'
 
 },
});
module.exports = config

