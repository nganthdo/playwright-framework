import { expect, Page } from '@playwright/test';
import { env } from '../../config/env';
export class LogoutPage {
    page: Page;   
    constructor(page: Page){
        this.page = page;
    }
    async logout(){
        await this.page.goto(`${process.env.BASE_URL}/wp-login.php?action=logout`);
        await this.page.getByText('log out').click();
    }
};