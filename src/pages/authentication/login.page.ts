import { Page } from '@playwright/test'
import { env } from '../../config/env';

export class LoginPage {
    page: Page;
    BASE_URL: string =  process.env.BASE_URL as string;
    emailLoc: string = '#user_login';
    passwordLoc: string = '#user_pass';
    loginLoc: string = '#wp-submit';
    constructor(page: Page){
        this.page = page;
    }
    async navigateLoginPage(){
        await this.page.goto(`${this.BASE_URL}/wp-login.php`);
    }
    async login(email: string, password: string){
        await this.page.locator(this.emailLoc).fill(email);
        await this.page.locator(this.passwordLoc).fill(password);
        await this.page.locator(this.loginLoc).click();
    }
};