
const { test, expect } = require('@playwright/test');
const { LoginPageClass } = require('../POM/LoginPageClass.js');
const {HomepageClass} = require('../POM/HomepageClass.js');
const exp = require('constants');
const { verify } = require('crypto');
test.use({viewport:{width:1920,height:1080}});

let loginpageclass;
let Homepageclass;

test.describe('Framework for Order Point 2.0',() =>{
    test.beforeEach('Declar Variable', async({page})=>{
        loginpageclass = new LoginPageClass(page);
        Homepageclass = new HomepageClass(page);
        await loginpageclass.visitwebsite();

    });

    test('Login to the application using invalid credentials',async({page})=>{
   
        await loginpageclass.InvalidLogin();
        await expect(loginpageclass.assertinvlaidlogin).toBeVisible();
    });

    test('Login to the application using valid credentials',async({page})=>{
        await loginpageclass.Validlogin();
        await expect(page).toHaveURL('https://orderpoint.qpharmasit.com/#/en/users/dashboard');
        await expect(loginpageclass.assettionlogin).toBeVisible();
  
    });

    test('Verify that user can add the product to the cart and application allow user to delete the product form Cart', async({page})=>{
        await loginpageclass.Validlogin();
        await Homepageclass.AddproducttoCart();
        await expect(Homepageclass.getproduct).toBeVisible();
    });

});
