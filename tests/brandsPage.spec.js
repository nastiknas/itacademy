import { test, expect } from '@playwright/test';
import {Navbar} from "../page-objects/components/navbar";
import {MainPage} from "../page-objects/mainPage";

test.describe('Open page brands', async () => {



  test('Open page brands', async ({page}) => {
    const navbar = new Navbar(page);
    const mainPage = new MainPage(page);
    const response = await 

    await mainPage.navigate('https://tools.by/');
    await navbar.goToPageByName('brands')

    expect(response.status()).toBe(200);
    expect(response.request().redirectedFrom());
   

    const h1 = await page.locator('h1');
    await expect(h1).toBeVisible();

    const cols = await page.locator('div.col');
        const count = await cols.count();
        expect(count).toBeGreaterThan(1);
      
    });
     
    });;
  
//const response = await page.goto('https://google.com');
//console.log(response.request().redirectedFrom()); // null