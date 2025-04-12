import Base from "./base";


  
class LoginPage extends Base {
    constructor(page) {
        super(page);
    }
  
    get fullnameInput() {
      return this.page.locator('//input[@id="full_name"]');
    }
  
    get emailInput() {
      return this.page.locator('//input[@id="email"]');
    }

    get passwordInput() {
      return this.page.locator('//input[@id="password"]');
    }

  
    get cityInput() {
        return this.page.locator('//input[@id="city"]');
      }


      get dropdownPhoneInput() {
        return this.page.locator('//span[@id="select2-phone_code-8y-container"]'); // Укажите корректный селектор для dropdown
    }

        async selectOption(optionValue) {
        await this.dropdownPhoneInput.selectOption(BY); // Выбор значения из dropdown
    }

        async getSelectedOption() {
        return await this.dropdownPhoneInput.inputValue(); // Получение выбранного значения
    }


    get phoneInput() {
        return this.page.locator('//input[@id="phone"]');
      }

    get messageInput() {
        return this.page.locator('//textarea[@id="message"]');
      }

      get submitButton() {
        return this.page.locator('//div[@class="col-md-8 offset-md-4"]//button[@class="btn btn-success"]');
      }
      
  
    async sellYourProduct(fullname, email, city, phone, message) {
      await this.fullnameInput.fill(fullname);
      await this.emailInput.fill(email);
      await this.cityInput.fill(city);
      await this.phoneInput.fill(phone);
      await this.messageInput.fill(message);
      //await this.submitButton.click();
    }


    async loginToSite(email, password) {
      await this.emailInput.fill(email);
      await this.passwordInput.fill(password);
      await this.submitButton.click();

    }

  }
  
  export {LoginPage}


