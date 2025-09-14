import {Locator, Page} from '@playwright/test'

export class LoginPage {
    readonly page:Page;
    readonly userNameInput:Locator;
    readonly passwordInput:Locator;
    readonly loginButton:Locator;

    constructor(page: Page){
        this.page = page;
        this.userNameInput = page.getByRole('textbox', {name: 'Username'});
        this.passwordInput = page.getByRole('textbox', {name: 'Password'});
        this.loginButton = page.getByRole('button', { name: 'Login' });
    }

    async goToOrageHRM(){
        await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    }

    async loginOrageHRM(user: string, password: string){
        await this.userNameInput.fill(user);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

}