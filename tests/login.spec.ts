import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { testData } from '../utils/testData';

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

  test('TC_004 - Verify dashboard loads after login', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(
      testData.adminUser.username,
      testData.adminUser.password
    );
    await expect(page).toHaveURL(/dashboard/);
    await expect(page.locator('.oxd-topbar-header-title')).toBeVisible();
    console.log('✅ Dashboard loaded successfully after login');
  });

  test('TC_005 - Verify login page title', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    const title = await page.title();
    expect(title).toContain('OrangeHRM');
    console.log('✅ Login page title verified');
  });

});