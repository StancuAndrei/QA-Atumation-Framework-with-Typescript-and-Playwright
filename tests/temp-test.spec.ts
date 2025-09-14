import { test } from '../fixtures/pom-fixture';


test("temp test", async({page, loginPage}) => {

    console.log(process.env.BASE_URL);

    await loginPage.goToOrageHRM();
    await loginPage.loginOrageHRM('Admin','admin123');
})

