import { test, expect } from '@playwright/test';


test.describe('Ecogr test authorization (error login)', async () => {

  test('should get error notification with wrong credentials', async ({page}) => {
    await page.goto('https://ecogrcn.com/');
    await page.evaluate(() => window.scrollBy(0, window.innerHeight));
    await page.locator('//body[@class="d-flex flex-column min-vh-100 navbar--scrolled"]//div[@class="login dropdown"]').click();
    await page.fill('//input[@id="email"]', 'email@mail.ru');
    await page.locator('//input[@id="password"]').fill('Password')
    await page.locator('//div[@class="card-body shadow-sm"]//button[@class="btn btn-success"]').click();
    await expect(await page.locator('span.invalid-feedback')).toHaveText('These credentials do not match our records.')
  });
});


// проверяем авторизацию с логином, который не зарегистрирован на сайте