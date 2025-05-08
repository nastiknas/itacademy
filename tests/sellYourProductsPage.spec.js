
import { test, expect } from '@playwright/test';
import {Header} from "../page-objects/components/header";
import {LoginPage} from "../page-objects/loginPage";

test.describe('Тесты страницы Sell Your Products Page', async () => {

    test('Open page Sell Your Products Page', async ({page}) => {
      const header = new Header(page);
      const response = await
  
      await page.goto('/');
      await page.evaluate(() => window.scrollBy(0, window.innerHeight));
      await page.waitForTimeout(1000)
      await header.goToFeedbackPage();
      expect(response.status()).toBe(200);
      await header.goToSellYourProductsPage();
      expect(response.status()).toBe(200);
    });


    test('Отправка формы Sell Your Products', async ({page}) => {  
      const loginPage = new LoginPage(page);
      const header = new Header(page);
      
      await page.goto('/');
      await page.evaluate(() => window.scrollBy(0, window.innerHeight));
      await page.waitForTimeout(1000);
      await header.goToFeedbackPage();
      await header.goToSellYourProductsPage();
      await loginPage.sellYourProduct ('fullname', 'email@mail.ru', 'city', '(44)788-996', 'Я хочу продавать товары Вашей компании! I want to sell your company products!');
      await loginPage.clickSubmitButton();
      const isVisible = await loginPage.isAlertVisible();
      expect(isVisible).toBe(true);
   });


  test('Наличие placeholder полей Телефон и Сообщение', async ({page}) => {
    const header = new Header(page);
    const loginPage = new LoginPage(page);
    const response = await
    
    await page.goto('/');
    await page.evaluate(() => window.scrollBy(0, window.innerHeight));
    await header.goToFeedbackPage();
    await header.goToSellYourProductsPage();
    const placeholderTextPhone = await loginPage.phoneInputPlaceholder();
    expect(placeholderTextPhone).toBe('XXYYY-YY-YY'); 
    const placeholderTextMessage = await loginPage.messageInputPlaceholder();
    expect(placeholderTextMessage).toBe('Напишите ваше сообщение здесь');
  });
  
});


