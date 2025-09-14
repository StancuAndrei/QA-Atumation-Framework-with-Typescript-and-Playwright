import {test as baseTest} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'

//poti crea aceste tipuri de fixture pe care le poti folosii in scripturile tale de test
type PomFixtureType = {
    loginPage: LoginPage;
}

export const test = baseTest.extend<PomFixtureType>({
    loginPage: async({page}, use) => {
        const loginPageObj = new LoginPage(page);
        await use(loginPageObj)
    }
})