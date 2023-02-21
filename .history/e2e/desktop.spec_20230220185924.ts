import { test, expect } from '@playwright/test'
const { chromium } = require('playwright');

test.use({
    browserName: 'chromium',
    ...devices['Desktop Chromium'],
    viewport: { width: 1280, height: 720 },
})

  beforeAll(async () => {
    browser = await chromium.launch({ headless: false });
    page = await browser.newPage();
    await page.goto('http://localhost:3000/');
  });

  afterAll(async () => {
    await browser.close();
  });

  test('should display header', async () => {
    const header = await page.waitForSelector('#header');
    expect(header).toBeTruthy();
  });

  test('should display main content', async () => {
    const mainContent = await page.waitForSelector('#main');
    expect(mainContent).toBeTruthy();
  });

  test('should display "View Gallery" button', async () => {
    const viewGalleryButton = await page.waitForSelector('#viewGalleryBtn');
    expect(viewGalleryButton).toBeTruthy();
  });

  test('should navigate to gallery page when "View Gallery" button is clicked', async () => {
    const galleryPageUrl = 'http://localhost:3000/gallery';
    await page.click('#viewGalleryBtn');
    await page.waitForNavigation({ url: galleryPageUrl });
    expect(page.url()).toEqual(galleryPageUrl);
  });
});


