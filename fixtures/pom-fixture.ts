import {test as baseTest} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import { DashboardPage } from '../pages/DashboardPage';
import { UserPage } from '../pages/UserPage';

//poti crea aceste tipuri de fixture pe care le poti folosii in scripturile tale de test
type PomFixtureType = {
    loginPage: LoginPage;
    dashboardPage: DashboardPage;
    userPage: UserPage;
}

export const test = baseTest.extend<PomFixtureType>({
    loginPage: async({page}, use) => {
        //const loginPageObj = new LoginPage(page);
        await use(new LoginPage(page))
    },
    dashboardPage: async({page}, use) => {
        //const loginPageObj = new LoginPage(page);
        await use(new DashboardPage(page))
    },
    userPage: async({page}, use) => {
        //const loginPageObj = new LoginPage(page);
        await use(new UserPage(page))
    }
})