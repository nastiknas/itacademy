// Тестирую добавление рандомного товара в корзину 


const { test, expect } = require('@playwright/test');

test('adding random item to cart', async ({ page }) => {
    // Открываем главную страницу
    await page.goto('https://ecogrcn.com/');
    await page.evaluate(() => window.scrollBy(0, window.innerHeight));
    // Переходим в каталог товаров
    await page.locator('//body[@class="d-flex flex-column min-vh-100 navbar--scrolled"]//button[@class="btn btn-brand header-catalog-btn catalog-btn rounded-1"]').click();
    await page.locator('//a[@id="v-pills-16-tab"]').click();
    // Создаем локатор на основе картинки товара (картинка - кликабельна)
    const products = await page.locator('//div[@class="col-1 product__image"]');
    const randomProductIndex = Math.floor(Math.random() * await products.count());

    // Выбираем случайный товар
    await products.nth(randomProductIndex).click();
 
    // Проверяем, что страница товара загрузилась
    await expect(page.locator('//h1[@class="product__title mb-3"]')).toBeVisible();
    await page.locator('//button[@class="btn btn-brand cart__btn-add"]').click();
    // Проверяем, что товар добавился в корзину
    await expect(await page.locator('//div[@class="alert alert-success fade show mb-0"]')).toHaveText('There are 1 pcs. in the cart')
    
    
});


