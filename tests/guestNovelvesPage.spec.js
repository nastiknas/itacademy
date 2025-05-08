import { test, expect } from '@playwright/test';
import {CatalogPage} from "../page-objects/catalogPage";
import {Randomizer} from "../page-objects/components/randomizer"
import {ProductPage} from "../page-objects/productPage";



test.describe('Тесты страницы каталог новинки', async () => {

    test('Открыть страницу каталог новинки и посмотреть карточку рандомного товара', async ({page}) => {
      const catalogPage = new CatalogPage(page);
      const randomizer = new Randomizer(page);
      const productPage = new ProductPage(page);
      const response = await
  
      await page.goto('/');
      await page.evaluate(() => window.scrollBy(0, window.innerHeight));
      //await page.waitForTimeout(10000)
      await catalogPage.goTocatalogPage();
      await catalogPage.goToMainCatalogPage();
      await catalogPage.isH1Visible();
      expect(response.status()).toBe(200);
      await catalogPage.goToCatalogNovelvesPage()
      expect(response.status()).toBe(200);
      await randomizer.clickRandomProductImage();
      await productPage.blockPriceAndBalancesIsVisible();
      });

});
