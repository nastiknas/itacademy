import Base from "../base";

class Navbar extends Base {
  constructor(page) {
    super(page);
    
  }

  async getNavBarItemByName(itemName) {
    const items = {
      main: '//div[@class="navbar__menu d-none d-lg-block py-1"]//li[@class="menu-item first"]',
      company: '//div[@class="navbar__menu d-none d-lg-block py-1"]//a[@href="https://tools.by/company"]',
      brands: '//div[@class="navbar__menu d-none d-lg-block py-1"]//a[@href="https://tools.by/brands"]',
      dealers: '//div[@class="navbar__menu d-none d-lg-block py-1"]//a[@href="https://tools.by/dealers"]',
      node: '//div[@class="navbar__menu d-none d-lg-block py-1"]//a[@href="https://tools.by/node"]',
      map: '//div[@class="navbar__menu d-none d-lg-block py-1"]//a[@href="https://tools.by/delivery/map"]',
      contacts: '//div[@class="navbar__menu d-none d-lg-block py-1"]//a[@href="https://tools.by/contacts"]',
      
    }
    console.log(items[itemName])
    return items[itemName]
  }

  async goToPageByName(itemName) {
    await this.page.locator(await this.getNavBarItemByName(itemName)).click();
  }


}


export  { Navbar };