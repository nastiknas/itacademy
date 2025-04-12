//col-12 col-md-4
import Base from "../base";

class Header extends Base {
  constructor(page) {
    super(page);
 }

get FeedbackPage() {
   return this.page.locator('//body[@class="d-flex flex-column min-vh-100 navbar--scrolled"]//header[@class="sticky-top site-header"]//nav[@id="navbar"]//i[@class="fas fa-comment"]'); 
}
    async goToFeedbackPage() {
    await this.FeedbackPage.click();
}


get sellYourProductsPage() {
    return this.page.locator('//div[@class="col-12 col-md-4"][1]'); 
}
    async goToSellYourProductsPage() {
    await this.sellYourProductsPage.click();
}

get supplierOfGoodsPage() {
    return this.page.locator('//a[@href="https://tools.by/feedback/supplier-of-goods"]'); 
}
    async goToSupplierOfGoodsPage() {
    await this.supplierOfGoodsPage.click();
}

get questionServiceSparePage() {
    return this.page.locator('//a[@href="https://tools.by/feedback/question-service-spare"]'); 
}
    async goToquestionServiceSparePage() {
    await this.questionServiceSparePage.click();
}

get registerPage() {
    return this.page.locator('//body[@class="d-flex flex-column min-vh-100 navbar--scrolled"]//div[@class="login dropdown"]'); 
 }
     async goToregisterPage() {
     await this.registerPage.click();
 }


}


export  {Header};


