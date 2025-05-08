import { test, expect } from '@playwright/test';
import {Header} from "../page-objects/components/header";
import {LoginPage} from "../page-objects/loginPage";
import {MainPage} from "../page-objects/mainPage";

test.describe('Тесты страницы login To Site', async () => {

    test('Вход на сайт с незарегистрированным email', async ({page}) => {
      const header = new Header(page);
      const loginPage = new LoginPage(page);
      const response = await
  
      await page.goto('/');
      await page.evaluate(() => window.scrollBy(0, window.innerHeight));
      await header.goTologinEntrancePage();
      expect(response.status()).toBe(200);
      await loginPage.loginToSite('email@mail.ru', 'password');
      await loginPage.invalidFeedbackLocatorIsVisible();
      await loginPage.invalidFeedbackAlertIsVisible();
  });



  test('Вход на сайт с неправильным паролем', async ({page}) => {
    const header = new Header(page);
    const loginPage = new LoginPage(page);
    const response = await

    await page.goto('/');
    await page.evaluate(() => window.scrollBy(0, window.innerHeight));
    await header.goTologinEntrancePage();
    expect(response.status()).toBe(200);
    await loginPage.loginToSite('lady-nastia@mail.ru', 'password');
    await loginPage.invalidFeedbackLocatorIsVisible();
    await loginPage.invalidFeedbackAlertIsVisible();
});

    test('Вход на сайт с валидными данными', async ({page}) => {
    const header = new Header(page);
    const loginPage = new LoginPage(page);
    const mainPage = new MainPage(page);
    const response = await

    await page.goto('/');
    await page.evaluate(() => window.scrollBy(0, window.innerHeight));
    await header.goTologinEntrancePage();
    expect(response.status()).toBe(200);
    await loginPage.loginToSite('lady-nastia@mail.ru', 'Gh65eiVJs');
    await mainPage.bannerModuleIsVisible();
});

});