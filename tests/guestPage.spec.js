import { test, expect } from '@playwright/test';
import {GuestMainPage} from "../page-objects/guestMainPage"

test.describe('Тесты главной страницы (без авторизации пользователя)', async () => {

    test('Главная страница возвращает 200 и отсутствует редирект', async ({page}) => {
      const response = await
      
      await page.goto('/');
      expect(response.status()).toBe(200);
      expect(response.request().redirectedFrom()).toBeNull();

    });

    test('Логотип отображается для гостей сайта', async ({page}) => {
      const guestMainPage = new GuestMainPage(page);

        await page.goto('/');
        await page.evaluate(() => window.scrollBy(0, window.innerHeight));
        await guestMainPage.logoImageIsVisible()

    });

});


