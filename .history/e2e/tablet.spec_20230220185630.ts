const { devices, chromium } = require('playwright');

test.describe('iPad Air', () => {
  let browser;
  let page;

  beforeAll(async () => {
    const iPadAir = devices['iPad Air'];
    browser = await chromium.launch({ headless: false });
    page = await browser.newPage({ viewport: iPadAir.viewport });
    await page.emulate(iPadAir);
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
