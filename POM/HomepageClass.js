import { defineConfig } from "@playwright/test";

exports.HomepageClass = class HomepageClass{ 
 /** 
* @param {import('@playwright/test').Page} page
*/
constructor(page){
    this.page = page;
    this.getproduct = page.getByText('OXR Safety Flashcard Marker');
    this.addtocart = page.getByRole('button', { name: 'Add to cart' });
    this.closemodalcart = page.getByLabel('Close').getByRole('img');
    this.navcart = page.getByRole('button', { name: 'Proceed to Checkout (1 Items)' });
    this.removeproductfromcart = page.getByRole('link', { name: 'Remove Form Cart' });
    this.deletecartpopup = page.getByRole('button', { name: 'Yes' });
    this.continueshop = page.getByRole('link', { name: 'Continue shopping' })
}

async AddproducttoCart(){
    await this.getproduct.click();
    await this.addtocart.click();
    await this.closemodalcart.click();
    await this.navcart.click();
    await this.removeproductfromcart.click();
    await this.deletecartpopup.click();
    await this.continueshop.click();
}
}
