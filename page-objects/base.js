const { expect } = require('@playwright/test');
class Base {
    constructor(page) {
      this.page = page;
    }
    async navigate(url) {
      return this.page.goto(url);
    }
    get h1Locator() {
      return this.page.locator('h1');
  }

  async isH1Visible() {
      await expect(this.h1Locator).toBeVisible(); 
  }
}
  
export default Base;