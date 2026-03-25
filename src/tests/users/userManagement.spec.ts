import { expect } from '@playwright/test';
import { test } from '../../fixtures/auth.fixture'
import { LogoutPage } from '../../pages/authentication/logout.page';
import { UserPage } from '../../pages/users/userManagement.page';
import { generateUser } from '../../utils/commonUtils';
import { env } from '../../config/env';
import { LoginPage } from '../../pages/authentication/login.page';

test.describe('User Management Feature', () => {
    type User = {
        email: string;
        username: string;
        firstname: string;
        lastname: string;
        password: string;
        role: string;
    };
    let user: User;
    test.beforeEach(async () => {
        user = generateUser();
    });
    test.afterEach(async ({ loginAsAdmin }) => {
        const page = loginAsAdmin.page;
        const login = new LoginPage(page);
        await login.navigateLoginPage();
        await login.login(env.adminEmail!, env.adminPassword!);
        const deletedUser = new UserPage(page);
        console.log('Deleting user:', user.email);
        await deletedUser.searchUser(user.email);
        await deletedUser.deleteUser(user.email);
        // Verify user is deleted
        await deletedUser.searchUser(user.email);
        await expect(page.locator('text = No users found.')).toBeVisible();
    });
    test('Add User successfully', async ({ loginAsAdmin }) => {
        const page = loginAsAdmin.page;
        const addUser = new UserPage(page);
        const logout = new LogoutPage(page);
        const login = new LoginPage(page);
        await test.step("Add user", async () => {
            await addUser.addUser(user.username, user.email, user.firstname, user.lastname, user.password, user.role);
            console.log('Adding user:', user.email);
        });
        await test.step("verify creating user successfully", async () => {
            await expect(page.locator('text = New user created. ')).toBeVisible();
        });
        await test.step("logout", async () => {
            await logout.logout();
            await expect(page.getByText('You are now logged out.')).toBeVisible();
        });
        await test.step("login with new account", async () => {
            await login.login(user.email, user.password);
            await expect(page).toHaveURL(/.*wp-admin/);
        });
    });
})


