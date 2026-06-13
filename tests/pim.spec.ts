import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { PIMPage } from '../pages/PIMPage';
import { testData } from '../utils/testData';

test.describe('OrangeHRM PIM Tests', () => {

  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(
      testData.adminUser.username,
      testData.adminUser.password
    );
    await expect(page).toHaveURL(/dashboard/);
  });

  test('TC_004 - Add new employee', async ({ page }) => {
    const pimPage = new PIMPage(page);
    await pimPage.goto();
    await pimPage.clickAddEmployee();
    await pimPage.addEmployee(
      testData.newEmployee.firstName,
      testData.newEmployee.middleName,
      testData.newEmployee.lastName
    );
    await expect(page).toHaveURL(/viewPersonalDetails/);
    console.log('✅ Employee added successfully');
  });

  test('TC_005 - Search existing employee', async ({ page }) => {
    const pimPage = new PIMPage(page);
    await pimPage.goto();
    await page.locator('.oxd-input').nth(1).fill(testData.searchEmployee.validName);
    await page.getByRole('button', { name: 'Search' }).click();
    await page.waitForTimeout(3000);
    await expect(page.locator('.oxd-table')).toBeVisible();
    console.log('✅ Search completed and results table visible');
  });

  test('TC_006 - Verify employee list loads', async ({ page }) => {
    const pimPage = new PIMPage(page);
    await pimPage.goto();
    await page.waitForTimeout(2000);
    const recordsText = await page.locator('.orangehrm-horizontal-padding').innerText();
    expect(recordsText).toContain('Records Found');
    console.log('✅ Employee list loaded with records');
  });

  test('TC_007 - Verify Add Employee page loads', async ({ page }) => {
    const pimPage = new PIMPage(page);
    await pimPage.goto();
    await pimPage.clickAddEmployee();
    await expect(page).toHaveURL(/addEmployee/);
    await expect(
      page.getByRole('button', { name: 'Save' })
    ).toBeVisible();
    console.log('✅ Add Employee page loaded with Save button');
  });

  test('TC_008 - Verify employee list has records', async ({ page }) => {
    const pimPage = new PIMPage(page);
    await pimPage.goto();
    await page.waitForTimeout(2000);
    const recordsText = await page.locator(
      '.orangehrm-horizontal-padding'
    ).innerText();
    expect(recordsText).toContain('Records Found');
    console.log('✅ Employee list has records');
  });

});