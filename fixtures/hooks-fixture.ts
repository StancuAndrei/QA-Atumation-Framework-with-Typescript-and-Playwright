import {test as baseTest} from './common-fixtures';


type HooksFixtureType = {
    goToUrl: any;
    logOut: any;
}

export const test = baseTest.extend<HooksFixtureType>({
    goToUrl: async({loginPage} : {loginPage: any}, use : any) => {
        await loginPage.goToOrageHRM();
        await use();
    },
    logOut: async({ userPage } : {userPage: any}, use : any) => {
        await use();
        await userPage.logout();
    }
})


export {expect} from '@playwright/test';

