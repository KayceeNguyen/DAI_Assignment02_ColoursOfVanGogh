const { devices, chromium } = require('playwright');

describe('iPhone XR', () => {
  let browser;
  let page;

  beforeAll(async () => {
    const iPhoneXR = devices['iPhone XR'];
    browser = await chromium.launch({ headless: false });
    page = await browser.newPage({ viewport: iPhoneXR.viewport });
    await page.emulate(iPhoneXR);
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
    });
});
