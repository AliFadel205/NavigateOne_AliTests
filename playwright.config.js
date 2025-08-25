// @ts-check
import { defineConfig, devices } from '@playwright/test';

//@see https://playwright.dev/docs/test-configuration

const Config = ({
  testDir: './E2E_Tests',
  timeout: 40*1000, // override the 30s default timeout foe the overall test
  expect: {
    timeout: 50000,//timeout for assertions valdiation - default 5000
  },

  reporter: 'html',

  use: {

    browserName: 'chromium',
    headless: process.env.CI ? true : false, // run headless in CI

  }
 
});

module.exports = Config
