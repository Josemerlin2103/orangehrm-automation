import { Page } from '@playwright/test';

export class LeavePage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('/web/index.php/leave/viewLeaveList');
  }

  async clickApplyLeave() {
    await this.page.goto('/web/index.php/leave/applyLeave');
  }

  async selectLeaveType(leaveType: string) {
    await this.page.locator('.oxd-select-text').first().click();
    await this.page.getByRole('option', { name: leaveType }).click();
  }

  async selectFromDate(date: string) {
    await this.page.locator('input.oxd-input').nth(1).fill(date);
  }

  async selectToDate(date: string) {
    await this.page.locator('input.oxd-input').nth(2).fill(date);
  }

  async clickApply() {
    await this.page.getByRole('button', { name: 'Apply' }).click();
  }

  async getLeaveListTitle() {
    return await this.page.locator('.oxd-topbar-header-title').textContent();
  }

  async verifyLeavePageLoaded() {
    await this.page.waitForURL(/leaveList|applyLeave/);
    return true;
  }
}