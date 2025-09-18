import { Page, Locator, expect } from "@playwright/test";


export class UserPage{
    readonly page: Page;
    readonly userMenuButton: Locator;
    readonly logoutButton: Locator;
    readonly logoutConfirmation: Locator;

    constructor(page: Page){
        this.page = page;
        this. userMenuButton = page.getByRole('listitem').filter({ hasText: 'Avada god' }).locator('i');
        this.logoutButton = page.getByRole('menuitem', { name: 'Logout' });
        this.logoutConfirmation = page.getByRole('heading', { name: 'Login' });
    }

    async logout(){
        await this.userMenuButton.click();
        await this.logoutButton.click();
        await expect(this.logoutConfirmation).toBeVisible();
    }

}