import { test, expect } from '@playwright/test';
import {Navbar} from "../page-objects/components/navbar";
import {MainPage} from "../page-objects/mainPage";

test.describe('Open page contacts', async () => {




  test('Open page contacts', async ({page}) => {
    const navbar = new Navbar(page);
    const mainPage = new MainPage(page);
    const response = await 

    await mainPage.navigate('https://tools.by/');
    await navbar.goToPageByName('contacts');

    expect(response.status()).toBe(200);
    expect(response.request().redirectedFrom());


    const h1 = await page.locator('h1');
        await expect(h1).toBeVisible();
    });

});