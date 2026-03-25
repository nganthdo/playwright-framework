import { Page } from '@playwright/test';

export class UserPage {

    page: Page;
    //add user locator
    userMenuLoc: string = "//div[@class='wp-menu-name' and text()='Users']";
    allUserMenuLoc: string = "//a[@class='wp-first-item current' and text()='All Users']";
    headingLoc: string = "//h1[@class='wp-heading-inline']";
    addUserBtn: string = "//div[@class='wrap']//a[contains(@class,'page-title-action') and normalize-space()='Add User']";
    usernameLoc: string = '#user_login';
    emailLoc: string = '#email';
    firstnameLoc: string = '#first_name';
    lastnameLoc: string = '#last_name';
    passwordLoc: string = '#pass1';
    roleLoc: string = '#role';
    submitBntLoc: string = '#createusersub';
    //search locator
    keywordLoc: string = '#user-search-input';
    searchBtnLoc: string = '#search-submit';
    //delete user locator
    rowUserLoc = "//td[@data-colname='Email']";
    submitDeleleBtnLoc: string = "//a[@class='submitdelete']";
    deleteOptionLoc: string = "#delete_option0";
    confirmDeleteBtnLoc: string = "//input[@value='Confirm Deletion']";

    constructor(page: Page) {
        this.page = page;
    }
    async gotoUserPage() {
        await this.page.locator(this.userMenuLoc).click();
        await this.page.locator(this.allUserMenuLoc).click();
    }
    async addUser(username: string, email: string, firstname: string, lastname: string, password: string, role: string) {
        await this.gotoUserPage();
        await this.page.locator(this.addUserBtn).click();
        await this.page.locator(this.usernameLoc).fill(username);
        await this.page.locator(this.emailLoc).fill(email);
        await this.page.locator(this.firstnameLoc).fill(firstname);
        await this.page.locator(this.lastnameLoc).fill(lastname);
        await this.page.locator(this.passwordLoc).fill(password);
        await this.page.locator(this.roleLoc).selectOption(role);
        await this.page.locator(this.submitBntLoc).click();
    }
    async searchUser(email: string) {
        await this.gotoUserPage();
        await this.page.locator(this.keywordLoc).fill(email);
        await this.page.locator(this.searchBtnLoc).click();
    }
    async deleteUser(email: string) {
        const row = this.page.locator(`${this.rowUserLoc}/a[text()='${email}']`);
        if (await row.count() > 0) {
            await row.hover();
            await this.page.locator("//a[@class='submitdelete']").click();
        }
        // select delete option
        const option = this.page.locator(this.deleteOptionLoc);
        if (await option.isVisible()) {
            await option.click();
            await this.page.locator(this.confirmDeleteBtnLoc).click();
        } else {
            await this.page.locator(this.confirmDeleteBtnLoc).click();
        }
    }
}


