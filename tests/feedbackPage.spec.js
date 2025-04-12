import { test, expect } from '@playwright/test';
import {Header} from "../page-objects/components/header";
import {MainPage} from "../page-objects/mainPage";

test.describe('Open page Feedback', async () => {

    test('Open page Feedback', async ({page}) => {
      const header = new Header(page);
      const mainPage = new MainPage(page);
      const response = await
  
      await mainPage.navigate('https://tools.by/');
      await page.evaluate(() => window.scrollBy(0, window.innerHeight));
      
      await header.goToFeedbackPage();

      expect(response.status()).toBe(200);

      const h1 = await page.locator('h1');
      await expect(h1).toBeVisible();
  
      const cols = await page.locator('div.col-12.col-md-4');
      const count = await cols.count();
      expect(count).toBeGreaterThan(1);



      });
  
  });

  

//await page.locator('//nav[@class="navbar navbar-expand-sm flex-column navbar-can-transparent navbar-has-shadow"]//a[@class="btn btn-secondary feedback-btn rounded-1"]').click();
//https://playwright.dev/docs/api/class-request