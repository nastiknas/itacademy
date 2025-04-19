
import { test, expect } from '@playwright/test';
import {Header} from "../page-objects/components/header";
import {MainPage} from "../page-objects/mainPage";
import {LoginPage} from "../page-objects/loginPage";

test.describe('Open Sell Your Products Page', async () => {

    test('Open page обратная связь', async ({page}) => {
      const header = new Header(page);
      const mainPage = new MainPage(page);
      const response = await
  
      await mainPage.navigate('https://tools.by/');
      await page.evaluate(() => {
        window.scrollBy(0, 300); 
    });

      await page.waitForTimeout(1000)
      await header.goToFeedbackPage();

      expect(response.status()).toBe(200);

      await header.goToSellYourProductsPage();
      expect(response.status()).toBe(200);

      const loginPage = new LoginPage(page);
      await loginPage.sellYourProduct ('fullname', 'email', 'city', 'phone', 'message');
      //await page.waitForTimeout(10000) - здесь не отправляю форму, так как тест проходит на проде. для версии dev доработаю отправку формы.

    });

      
  
  });