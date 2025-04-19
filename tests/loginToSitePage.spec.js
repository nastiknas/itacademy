import { test, expect } from '@playwright/test';
import {Header} from "../page-objects/components/header";
import {MainPage} from "../page-objects/mainPage";
import {LoginPage} from "../page-objects/loginPage";
test.describe('Open page login To Site', async () => {

    test('login To Site', async ({page}) => {
      const header = new Header(page);
      const mainPage = new MainPage(page);
      const loginPage = new LoginPage(page);
      const response = await
  
      await mainPage.navigate('https://tools.by/');
      await page.evaluate(() => window.scrollBy(0, window.innerHeight));
      
      await header.goToregisterPage();

      expect(response.status()).toBe(200);

      await loginPage.loginToSite('email@mail.ru', 'password')

      await expect(await page.locator('//div[@class="alert alert-danger fade show mb-0 alert-dismissible mb-2"]')).toBeVisible();
      await expect(await page.locator('//span[@class="invalid-feedback"]')).toBeVisible();
      });
      
  
  });