import { expect } from '@playwright/test'
import { test } from '../../fixtures/auth.fixture'
import { invalidUser } from '../../data/auth.data';

test.describe('Login Feature', async () => {
    test('Login with valid credential', async ({ loginAsAdmin }) => {
        // verify login pass
        await test.step("redirect to url /wp-admin", async () => {
            await expect(loginAsAdmin.page).toHaveURL(/.*wp-admin/);
        });
    });
    test('Login with invalid credential', async ({ loginAsUser }) => {
        await loginAsUser.login(invalidUser.email, invalidUser.password);
        // verify login fail
        await test.step("verify error message", async () => {
            await expect(loginAsUser.page.locator('#login_error')).toContainText("Unknown email address. Check again or try your username.");
        });
    });
});