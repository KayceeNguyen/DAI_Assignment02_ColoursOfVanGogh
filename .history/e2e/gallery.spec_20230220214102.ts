const { chromium } = require('playwright');
import { test, expect } from '@playwright/test';

let urlHome = "http://localhost:3000";

test.describe('Colours of Van Gogh Gallery Page', () => {
  test('Page title is correct', async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto(urlHome);

    const title = await page.title();
    expect(title).toBe('Colours of Van Gogh');

    await browser.close();
  });

  test('Header bar is visible', async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto(urlHome);

    const header = await page.$('header');
    expect(header).not.toBeNull();

    await browser.close();
  });

  test('Landscape drawing is displayed and clickable', async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto('https://www.coloursofvangogh.com/');

    const landscapeDrawing = await page.$('img[class="drawing"][alt="A drawing of a landscape by Vincent Van Gogh"]');
    expect(landscapeDrawing).not.toBeNull();

    const landscapeDrawingLink = await page.$('div[class="contentContainer"] > div > div > img[class="drawing"]');
    await landscapeDrawingLink.click();

    const flippedCard = await page.$('div[class*="flipCard flipped"] > div[class="colourCont"]');
    expect(flippedCard).not.toBeNull();

    await browser.close();
  });
});







