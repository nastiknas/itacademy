const { test, expect } = require('@playwright/test');

test('enter text into the search bar (negative)', async ({ page }) => {
    // Открываем главную страницу
    await page.goto('https://ecogrcn.com/');
    await page.evaluate(() => window.scrollBy(0, window.innerHeight));
    await page.locator('//body[@class="d-flex flex-column min-vh-100 navbar--scrolled"]//input[@id="search"]').fill('шуруповерт');
    await page.locator('//body[@class="d-flex flex-column min-vh-100 navbar--scrolled"]//button[@id="search-btn"]').click();
    await expect(await page.locator('//div[@class="col-md-12 text-center"]')).toHaveText('There are no products with the specified filter')
});

test('enter text into the search bar', async ({ page }) => {
    // Открываем главную страницу
    await page.goto('https://ecogrcn.com/');
    await page.evaluate(() => window.scrollBy(0, window.innerHeight));
    await page.locator('//body[@class="d-flex flex-column min-vh-100 navbar--scrolled"]//input[@id="search"]').fill('STARTUL');
    await page.locator('//body[@class="d-flex flex-column min-vh-100 navbar--scrolled"]//button[@id="search-btn"]').click();
    await expect(await page.locator('//h1[@class="title search"]')).toHaveText('Search "STARTUL" - NINGBO ECO GROUP')
});



// Здесь два теста (негативный и позитивный), которыми тестирую строку поиска