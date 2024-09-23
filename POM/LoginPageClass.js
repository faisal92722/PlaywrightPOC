import { defineConfig } from "@playwright/test";
const data = require ('../Details/details.json');

exports.LoginPageClass = class LoginPageClass{ 
    /** 
* @param {import('@playwright/test').Page} page
*/
   constructor(page){
       this.page = page;
       this.username =page.locator('input[name="field2_username"]');
       this.password =page.locator('input[name=field2_password]');
       this.loginbutton = page.locator('.submit');
       this.assertlogin = page.getByLabel('Login Successful');
       this.searchplace = page.getByPlaceholder('Search');
       this.repname = page.locator('//span[contains(text(),"Sharon Smith")]');
       this.assettionlogin = page.locator('//div[contains(text(),"Order Type")]')
       this.ordertype = page.locator('.head:has-text("Order Type:")');
       this.ellipses = page.locator('.profile-circle');
       this.Logout = page.getByRole('button',{name:'Log Out'});
       this.assertlogout = page.getByText('You have just logged out of OrderPoint');
       this.assertinvlaidlogin = page.getByLabel('Invalid login id / password');
   }
   async visitwebsite(){
    await this.page.goto('/');
   }

   async Validlogin(){
    await this.username.click();
    await this.username.fill(data.username);
    await this.password.click();
    await this.password.fill(data.password);
    //await this.page.pause();
    await this.loginbutton.click();
    }
    
    async InvalidLogin(){
        await this.username.click()
        await this.username.fill(data.invalidusername)
        await this.password.click();
        await this.password.fill(data.invalidpassword);
        await this.loginbutton.click();
    }

    // texttoVerify= async() => {
    //     const txt= await this.assettionlogin();
    //     console.log(txt);
    //     return txt.innerText();
    //     }

}   