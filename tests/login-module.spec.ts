import {test, expect} from '../fixtures/hooks-fixture';
import loginModuleData from '../data/login-module-data.json'


test('[Login] Verify that the user cannot log in with an invalid password', async({goToUrl, loginPage, commonUtils}) => {
    const decryptedUserName = commonUtils.decryptData(process.env.USER_NAME!);
    await loginPage.loginOrageHRM(decryptedUserName, loginModuleData.wong_password);
    await expect(loginPage.invalidCredentialsErrorPopup).toHaveText(loginModuleData.invalid_credentials_text)
    await expect(loginPage.userNameInput).toBeVisible();
})

test('[Login] Verify that the user cannot log in with an invalid username', async({goToUrl, loginPage, commonUtils}) => {
    const decryptedUserName = commonUtils.decryptData(process.env.USER_NAME!);
    await loginPage.loginOrageHRM(decryptedUserName, loginModuleData.wong_password);
    await expect(loginPage.invalidCredentialsErrorPopup).toHaveText(loginModuleData.invalid_credentials_text)
    await expect(loginPage.userNameInput).toBeVisible();
})