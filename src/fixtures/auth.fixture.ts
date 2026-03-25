import { test as base} from '@playwright/test'
import { LoginPage } from '../pages/authentication/login.page'
//login admin account
const test = base.extend<{ loginAsAdmin: LoginPage, loginAsUser: LoginPage }>
    ({
        loginAsAdmin: async ({ page }, use) => {
            const loginPage = new LoginPage(page);
            await loginPage.navigateLoginPage();
            await loginPage.login(process.env.ADMIN_EMAIL!, process.env.ADMIN_PASSWORD!);
            await use(loginPage);
        },
        loginAsUser: async ({ page }, use) => {
            const loginPage = new LoginPage(page);
            await loginPage.navigateLoginPage();
            await use(loginPage);
        },
    });
export { test };