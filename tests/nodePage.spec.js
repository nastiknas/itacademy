import { test, expect } from '@playwright/test';
import {Navbar} from "../page-objects/components/navbar";
import {MainPage} from "../page-objects/mainPage";

test.describe('Open page node', async () => {

  test('Open page node', async ({page}) => {
    const navbar = new Navbar(page);
    const mainPage = new MainPage(page);
    const response = await

    await mainPage.navigate('https://tools.by/');
    await navbar.goToPageByName('node');

    expect(response.status()).toBe(200);

    const h1 = await page.locator('h1');
    await expect(h1).toBeVisible();

    const cols = await page.locator('//a[@class="text-sm-center nav-link "]');
    const count = await cols.count();
    expect(count).toBeGreaterThan(1);

    const colsactive = await page.locator('//a[@class="text-sm-center nav-link active"]');
    const countactive = await cols.count();
    expect(countactive).toBeGreaterThan(1);

    });

});


