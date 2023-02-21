const { chromium } = require('playwright');

let urlHome = "http://localhost:3000";

describe('Colours of Van Gogh', () => {
  test('Page title is correct', async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto(urlHome);

    const title = await page.title();
    expect(title).toBe('Colours of Van Gogh');

    await browser.close();
  });
});


