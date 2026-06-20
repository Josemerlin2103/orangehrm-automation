import { test } from '@playwright/test';
import { Eyes, Target, VisualGridRunner } from '@applitools/eyes-playwright';
import { LoginPage } from '../pages/LoginPage';
import { testData } from '../utils/testData';

test.describe('OrangeHRM Visual AI Tests', () => {

  test('TC_013 - Visual check of Login page', async ({ page }) => {
    const runner = new VisualGridRunner({ testConcurrency: 1 });
    const eyes = new Eyes(runner);

    await eyes.open(page, 'OrangeHRM', 'Login Page Visual Test');

    const loginPage = new LoginPage(page);
    await loginPage.goto();

    await eyes.check('Login Page', Target.window().fully());

    await eyes.closeAsync();
    await runner.getAllTestResults();

    console.log('✅ Visual test completed for Login page');
  });

  test('TC_014 - Visual check of Dashboard page', async ({ page }) => {
    const runner = new VisualGridRunner({ testConcurrency: 1 });
    const eyes = new Eyes(runner);

    await eyes.open(page, 'OrangeHRM', 'Dashboard Visual Test');

    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(
      testData.adminUser.username,
      testData.adminUser.password
    );

    await eyes.check('Dashboard', Target.window().fully());

    await eyes.closeAsync();
    await runner.getAllTestResults();

    console.log('✅ Visual test completed for Dashboard page');
  });

});