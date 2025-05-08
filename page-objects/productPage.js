import Base from "./base";
const { expect } = require('@playwright/test');
class ProductPage extends Base {
  constructor(page) {
    super(page);
  }


get productImage() { 
    return this.page.locator('//div[@class="carousel slide"]');
}

async productImageIsVisible() {
    await expect(this.productImage).toBeVisible(); 
}


get blockPriceAndBalances() { 
    return this.page.locator('//div[@class="js-product-parameters product__parameters mb-3"]');
}

async blockPriceAndBalancesIsVisible() {
    await expect(this.blockPriceAndBalances).toBeVisible(); 
}


get blockCart() { 
    return this.page.locator('//div[@class="product__carts js-product__carts mb-4"]');
}

async blockCartIsVisible() {
    await expect(this.blockCart).toBeVisible(); 
}


get blockLabel() { 
    return this.page.locator('//div[@class="mb-2 d-none d-md-block"]');
}

async blockLabelIsVisible() {
    await expect(this.blockLabel).toBeVisible(); 
}


get productTitle() { 
    return this.page.locator('h1');
}

async productTitleIsVisible() {
    await expect(this.productTitle).toBeVisible(); 
}


get alertSuccess() { 
    return this.page.locator('//div[@class="alert alert-success fade show mb-0"]');
}

async alertSuccessIsVisible() {
    await expect(this.alertSuccess).toBeVisible(); 
}



get buttonAddToCart() {
    return this.page.locator('//button[@class="btn btn-brand cart__btn-add"]');
    }
    async clickButtonAddToCart() {
    await this.buttonAddToCart.click();

}

get plusButton() {
    return this.page.locator('//button[@class="btn btn-outline-secondary choose-quantity__plus"]');
    }
    async clickPlusButton() {
    await this.plusButton.click();

}

get minusButton() {
    return this.page.locator('//button[@class="btn btn-outline-secondary choose-quantity__minus"]');
    }
    async clickMinusButton() {
    await this.minusButton.click();
}

get inputAddToCart() {
    return this.page.locator('//input[@type="number"]');
    }

}

export { ProductPage }


