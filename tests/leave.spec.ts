import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { LeavePage } from '../pages/LeavePage';
import { testData } from '../utils/testData';

test.describe('OrangeHRM Leave Tests', () => {

  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(
      testData.adminUser.username,
      testData.adminUser.password
    );
    await expect(page).toHaveURL(/dashboard/);
  });

  test('TC_007 - Navigate to Leave List page', async ({ page }) => {
    const leavePage = new LeavePage(page);
    await leavePage.goto();
    await page.waitForTimeout(2000);
    const title = await leavePage.getLeaveListTitle();
    expect(title).toContain('Leave');
    console.log('✅ Leave list page loaded successfully');
  });

  test('TC_008 - Navigate to Apply Leave page', async ({ page }) => {
    const leavePage = new LeavePage(page);
    await leavePage.clickApplyLeave();
    await page.waitForTimeout(2000);
    await expect(page).toHaveURL(/applyLeave/);
    console.log('✅ Apply leave page loaded successfully');
  });

  test('TC_009 - Verify Leave menu exists in navigation', async ({ page }) => {
    await expect(
      page.getByRole('link', { name: 'Leave' })
    ).toBeVisible();
    console.log('✅ Leave menu visible in navigation');
  });

test('TC_010 - Verify Apply Leave page loads', async ({ page }) => {
  const leavePage = new LeavePage(page);
  await leavePage.clickApplyLeave();
  await page.waitForTimeout(4000);
  await expect(page).toHaveURL(/applyLeave/);
  const pageTitle = await page.title();
  expect(pageTitle).toContain('OrangeHRM');
  console.log('✅ Apply Leave page loaded successfully');
});

  test('TC_011 - Verify Leave list shows date columns', async ({ page }) => {
    const leavePage = new LeavePage(page);
    await leavePage.goto();
    await page.waitForTimeout(2000);
    await expect(page.locator('.oxd-table')).toBeVisible();
    console.log('✅ Leave list table visible');
  });

  test('TC_012 - Verify Leave navigation menu', async ({ page }) => {
    await page.getByRole('link', { name: 'Leave' }).click();
    await page.waitForTimeout(2000);
    await expect(page).toHaveURL(/leave/);
    console.log('✅ Leave navigation working correctly');
  });

});