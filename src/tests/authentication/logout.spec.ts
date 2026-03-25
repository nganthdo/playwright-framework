import { expect } from '@playwright/test';
import { LogoutPage } from '../../pages/authentication/logout.page';
import { test } from '../../fixtures/auth.fixture'

test.describe('Logout Feature', async () => {
    test('Logout successfully', async ({loginAsAdmin}) => {
        const page = loginAsAdmin.page;
        const logout = new LogoutPage(page);
        logout.logout();
        await test.step('verify logout successfully', async () => {
            await expect(page.getByText('You are now logged out.')).toBeVisible();
        });
    });
});