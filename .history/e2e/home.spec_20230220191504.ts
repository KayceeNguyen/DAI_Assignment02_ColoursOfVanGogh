import { test, expect } from '@playwright/test';

let urlHome = "http://localhost:3000";

test.describe('Header area', () => {
    test('The title tag', async({ page }) => {
        await page.goto(urlHome)

        await expect(page).toHaveTitle('Colours of Van Gogh');
    })

    test('The meta tag', async ({ page }) => { 
        await page.goto(urlHome)
        
        const metaDescriptionOne = page.locator('meta[name="description"]')
        await expect(metaDescriptionOne).toHaveAttribute("content", "Welcome to Colours of Van Gogh, a website dedicated to exploring the vibrant and expressive world of Vincent Van Gogh's drawings.")
    })
})

test('should display header', async ({ page }) => {
    const header = await page.waitForSelector('#header');
    expect(header).toBeTruthy();
  });

  test('should display main content', async ({ page }) => {
    const mainContent = await page.waitForSelector('#main');
    expect(mainContent).toBeTruthy();
  });

  test('should display "View Gallery" button', async ({ page }) => {
    const viewGalleryButton = await page.waitForSelector('#viewGalleryBtn');
    expect(viewGalleryButton).toBeTruthy();
  });

  test('should navigate to gallery page when "View Gallery" button is clicked', async ({ page }) => {
    const galleryPageUrl = 'http://localhost:3000/gallery';
    await page.click('#viewGalleryBtn');
    await page.waitForNavigation({ url: galleryPageUrl });
    expect(page.url()).toEqual(galleryPageUrl);
  });