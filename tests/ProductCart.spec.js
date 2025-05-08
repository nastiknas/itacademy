import { test, expect } from '@playwright/test';
import {Randomizer} from "../page-objects/components/randomizer";
import {CatalogPage} from "../page-objects/catalogPage";
import {ProductPage} from "../page-objects/productPage";



test.describe('Тесты Карточки товара', async () => {


  test('Проверка присутствия основных элементов в карточке товара', async ({page}) => {
    const randomizer = new Randomizer(page);
    const catalogPage = new CatalogPage(page);
    const productPage = new ProductPage(page);
    const response = await 

    await page.goto('/');
    await page.evaluate(() => window.scrollBy(0, window.innerHeight));
    await catalogPage.goTocatalogPage();
    await catalogPage.catalogAllCategoriesPageIsVisible();
    await randomizer.clickRandomCategoryLocator();
    await catalogPage.catalogFiltersBlockIsVisible();
    await randomizer.clickRandomProductImage();
    await productPage.productImageIsVisible();
    await productPage.blockPriceAndBalancesIsVisible();
    await productPage.blockCartIsVisible();
    await productPage.blockLabelIsVisible();
    await productPage.productTitleIsVisible();   
  });


  test('Добавление товара в корзину нажатием кнопки "Добавить в корзину" ', async ({page}) => {
    const randomizer = new Randomizer(page);
    const catalogPage = new CatalogPage(page);
    const productPage = new ProductPage(page);
    const response = await 

    await page.goto('/');
    await page.evaluate(() => window.scrollBy(0, window.innerHeight));
    await catalogPage.goTocatalogPage();
    await catalogPage.catalogAllCategoriesPageIsVisible();
    await randomizer.clickRandomCategoryLocator();
    await randomizer.clickRandomProductImage();
    await productPage.blockCartIsVisible();
    await productPage.productTitleIsVisible();
    await productPage.clickButtonAddToCart();
    await productPage.alertSuccessIsVisible();
  });



  test('Проверка работоспособности кнопок  +- ', async ({page}) => {
    const randomizer = new Randomizer(page);
    const catalogPage = new CatalogPage(page);
    const productPage = new ProductPage(page);
    const response = await 

    await page.goto('/');
    await page.evaluate(() => window.scrollBy(0, window.innerHeight));
    await catalogPage.goTocatalogPage();
    await catalogPage.catalogAllCategoriesPageIsVisible();
    await randomizer.clickRandomCategoryLocator();
    await randomizer.clickRandomProductImage();
    await productPage.blockCartIsVisible();
    await productPage.clickPlusButton();
    await productPage.alertSuccessIsVisible();
    await productPage.clickMinusButton(); 
  });


});
