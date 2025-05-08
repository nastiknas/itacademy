import { test, expect } from '@playwright/test';
import {Header} from "../page-objects/components/header";
import {Search} from "../page-objects/components/search";
import {CatalogPage} from "../page-objects/catalogPage";
import {Navbar} from "../page-objects/components/navbar";


test.describe('Тесты формы поиска', async () => {

    test('По клику разворачивается/открывается блок search', async ({page}) => {
      const header = new Header(page);
      const response = await
  
      await page.goto('/');
      await page.evaluate(() => window.scrollBy(0, window.innerHeight));   
      await header.clickToSearchForm();
      await header.searchContainerIsVisible();
    });  


    test('Ввод и нажатие на кнопку "Поиск"', async ({page}) => {
      const search = new Search(page);
      const catalogPage = new CatalogPage(page);
      const response = await

      await page.goto('/');
      await page.evaluate(() => window.scrollBy(0, window.innerHeight));
      await search.search('WORTEX');
      await search.clickSearchButton();
      await catalogPage.catalogFiltersBlockIsVisible();
      await search.searchResultsBreadCrumbIsVisible();
    });  
    
    
  test('Ввод и нажатие на ENTER', async ({page}) => {
    const search = new Search(page);
    const response = await

    await page.goto('/');
    await page.evaluate(() => window.scrollBy(0, window.innerHeight));
    await search.search('WORTEX');
    await search.pressEnter();
    await search.searchResultsBreadCrumbIsVisible();
  });


  test('Поиск с пустым запросом', async ({page}) => {
    const search = new Search(page);
    const navbar = new Navbar(page);
    const response = await

    await page.goto('/');
    await page.evaluate(() => window.scrollBy(0, window.innerHeight));
    await search.search('       ');
    await search.clickSearchButton();
    const h1 = await page.locator('h1');
    await expect(h1).toBeVisible();
    await navbar.checkBrandElementsCountGreaterThanOne();
  });  


  test('Поиск с пробелами в начале и в конце', async ({page}) => {
    const search = new Search(page);
    const catalogPage = new CatalogPage(page);
    const response = await

    await page.goto('/');
    await page.evaluate(() => window.scrollBy(0, window.innerHeight));
    await search.search('  WORTEX  ');
    await search.clickSearchButton();
    await catalogPage.catalogFiltersBlockIsVisible();
    await search.searchResultsBreadCrumbIsVisible();
  }); 


  test('Поиск с невалидным запросом', async ({page}) => {
    const search = new Search(page);
    const catalogPage = new CatalogPage(page);
    const response = await

    await page.goto('/');
    await page.evaluate(() => window.scrollBy(0, window.innerHeight));
    await search.search('ghbdtn vbh');
    await search.clickSearchButton();
    await catalogPage.noProductsBlockIsVisible()
  }); 


  test('Ввод и нажатие на кнопку "Все результаты поиска"', async ({page}) => {
    const search = new Search(page);
    const header = new Header(page);
    const response = await

    await page.goto('/');
    await page.evaluate(() => window.scrollBy(0, window.innerHeight));
    await search.search('Bull');
    await header.searchContainerIsVisible();
    await search.clickbuttonAllSearchResalt();
  }); 
 

  test('Крестик очищает поле ввода', async ({page}) => {
    const search = new Search(page);
    const response = await

    await page.goto('/');
    await page.evaluate(() => window.scrollBy(0, window.innerHeight));
    await search.search('Bull');
    await search.clearSearchButton(); 
    const inputValue = await search.getSearchInputValue();
    expect(inputValue).toBe(''); 
  }); 


  test('Результат поиска верно отображается в хлебных крошках', async ({ page }) => {
    const search = new Search(page);
    const header = new Header(page);
    const response = await
    
    await page.goto('/');
    await page.evaluate(() => window.scrollBy(0, window.innerHeight));
    await header.clickToSearchForm();
    const searchTerm = 'WorTex';
    await header.clickToSearchForm();
    await search.searchBreadCrumb(searchTerm);
    await search.checkSearchResultsBreadCrumbContainText(searchTerm);
  });


  test('Результат поиска верно отображается в блоке search', async ({page}) => {
    const search = new Search(page);
    const header = new Header(page);
    const response = await

    await page.goto('/');
    await page.evaluate(() => window.scrollBy(0, window.innerHeight));
    await header.clickToSearchForm();
    const SearchTerm = 'first';
    await header.clickToSearchForm();
    await search.search(SearchTerm);
    await search.checksearchResultsInContainerContainText(SearchTerm);
  });
 

  test('Строка поиска содержит Placeholder', async ({page}) => {
    const search = new Search(page);
    const header = new Header(page);
    const response = await

    await page.goto('/');
    await page.evaluate(() => window.scrollBy(0, window.innerHeight));
    const placeholderTextSearch = await search.searchInputPlaceholder();
    expect(placeholderTextSearch).toBe('Поиск товаров');
  });
});