import { test } from '../fixtures/common-fixtures';


test.beforeEach('Before each hook', async({loginPage})=>{
    await loginPage.goToOrageHRM();
})

//trebuie setat secret key inainte de execute, in besi avem SECRET_KEY = key npm run `ce vrei tu`
test("temp test", async({page, loginPage, commonUtils}) => {

    //console.log(process.env.BASE_URL);

    //commonUtils.encryptData('admin123');
    //const decryptedUserName = commonUtils.decryptData(process.env.USER_NAME!);
    //const decryptedPassword = commonUtils.decryptData(process.env.PASSWORD!);


    
    //await loginPage.loginOrageHRM(decryptedUserName, decryptedPassword);
    console.log(await page.title());
})

