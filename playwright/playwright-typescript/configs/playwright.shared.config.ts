import { defineConfig } from '@playwright/test';


export const sharedConfig = defineConfig({
    timeout: 60000,
    retries: 1,
    expect: {
        timeout: 5000
    },
    reporter: [['html', { open: 'never' }], ['allure-playwright']],
    use: {
        headless: true,
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
        trace: 'retain-on-failure',
        viewport: { width: 1920, height: 1080 },
        actionTimeout: 10000,
    },
});