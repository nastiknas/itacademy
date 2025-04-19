import { test, expect } from '@playwright/test';
import {Navbar} from "../page-objects/components/navbar";
import {MainPage} from "../page-objects/mainPage";

test.describe('Open page about dealers', async () => {

  test('Open page about dealers', async ({page}) => {
    const navbar = new Navbar(page);
    const mainPage = new MainPage(page);
    const response = await


    await mainPage.navigate('https://tools.by/');
    await navbar.goToPageByName('dealers');

    expect(response.status()).toBe(200);

    const h1 = await page.locator('h1');
    await expect(h1).toBeVisible();
  });

});