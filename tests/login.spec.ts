import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

const testData = {
adminUser: {
    username: 'Admin',
    password: 'admin123'
},
invalidUser: {
    username: 'wronguser',
    password: 'wrongpass'
}
};


test.describe('OrangeHRM Login Tests', () => {

test('TC_001 - Login with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(
    testData.adminUser.username,
    testData.adminUser.password
    );
    await expect(page).toHaveURL(/dashboard/);
    console.log('✅ Login successful');
});

test('TC_002 - Login with invalid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(
testData.invalidUser.username,
testData.invalidUser.password
    );
    const error = await loginPage.getErrorMessage();
    expect(error).toContain('Invalid credentials');
    console.log('✅ Error message shown correctly');
});

test('TC_003 - Login with empty credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('', '');
    await expect(
    page.locator('.oxd-input-field-error-message').first()
    ).toBeVisible();
    console.log('✅ Validation message shown');
});

});