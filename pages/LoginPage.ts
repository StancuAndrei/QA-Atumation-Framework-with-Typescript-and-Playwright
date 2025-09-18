import {Locator, Page} from '@playwright/test'

export class LoginPage {
    readonly page:Page;
    readonly userNameInput:Locator;
    readonly passwordInput:Locator;
    readonly loginButton:Locator;
    readonly invalidCredentialsErrorPopup: Locator;

    constructor(page: Page){ 
        this.page = page;
        this.userNameInput = page.getByRole('textbox', { name: 'username' });
        this.passwordInput = page.getByRole('textbox', { name: 'password' });
        this.loginButton = page.getByRole('button', { name: 'Login' });
        this.invalidCredentialsErrorPopup = page.getByRole('alert');
    }

    async goToOrageHRM(){
        await this.page.goto(`${process.env.BASE_URL}/web/index.php/auth/login`);
    }

    async loginOrageHRM(user: string, password: string){
        await this.userNameInput.fill(user);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

}