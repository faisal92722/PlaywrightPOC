
const { test, expect } = require('@playwright/test');
const { LoginPageClass } = require('../POM/LoginPageClass.js');
const {HomepageClass} = require('../POM/HomepageClass.js');
const exp = require('constants');
test.use({viewport:{width:1920,height:1080}});

let Loginpageclass;
let Homepageclass;

test.describe('Framework for Order Point 2.0',() =>{
    test.beforeEach('Declar Variable', async({page})=>{
        Loginpageclass = new LoginPageClass(page);
        Homepageclass = new HomepageClass(page);
        await Loginpageclass.visitwebsite();
       

    });

    test('Login to the application using invalid credentials',async({page})=>{
   
        await Loginpageclass.InvalidLogin();
        await expect(Loginpageclass.assertinvlaidlogin).toBeVisible();
    });

    test('Login to the application using valid credentials',async({page})=>{
        await Loginpageclass.Validlogin();
       // await page.waitForTimeout(6000);
        //await expect(LoginPageClass.searchplace).toBeEnabled()
      //  await expect(LoginPageClass.ordertype).toBeEnabled();
        await expect(LoginPageClass.repname).toBe();
        //await expect(Loginpageclass.ellipses).toBeEnabled();
    });

    test('Verify that user can add the product to the cart and application allow user to delete the product form Cart', async({page})=>{
        await Loginpageclass.Validlogin();
        await Homepageclass.AddproducttoCart();
        //await page.waitForTimeout(30000);
        await expect(LoginPageClass.ordertype).toBeTruthy();
        //await expect(Homepageclass.getproduct).toBeVisible();
    });

});
