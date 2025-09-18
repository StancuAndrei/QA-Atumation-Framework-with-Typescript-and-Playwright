import { expect } from '@playwright/test';
import { test } from '../fixtures/hooks-fixture';


// test.beforeEach('Before each hook', async({loginPage})=>{
//     await loginPage.goToOrageHRM();
// })

// test.afterEach("After each hook", async({userPage}) => {
//     await userPage.logout();
// })


//trebuie setat secret key inainte de execute, in besi avem SECRET_KEY = key npm run `ce vrei tu`
test("temp test", async({page, goToUrl}) => {

    //console.log(process.env.BASE_URL);

    //commonUtils.encryptData('admin123');
    //const decryptedUserName = commonUtils.decryptData(process.env.USER_NAME!);
    //const decryptedPassword = commonUtils.decryptData(process.env.PASSWORD!);


    
    //await loginPage.loginOrageHRM(decryptedUserName, decryptedPassword);
    console.log(await page.title());
})


test("temp test 2", async({page, goToUrl, logOut}) => {
    await expect(page).toHaveTitle('OrangeHRM');
})


