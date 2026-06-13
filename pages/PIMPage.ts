import { Page } from '@playwright/test';

export class PIMPage {
constructor(private page: Page) {}

async goto() {
    await this.page.goto('/web/index.php/pim/viewEmployeeList');
}

async clickAddEmployee() {
    await this.page.getByRole('button', { name: 'Add' }).click();
}

async addEmployee(firstName: string, middleName: string, lastName: string) {
    await this.page.locator('input[name="firstName"]').fill(firstName);
    await this.page.locator('input[name="middleName"]').fill(middleName);
    await this.page.locator('input[name="lastName"]').fill(lastName);
    await this.page.getByRole('button', { name: 'Save' }).click();
}

async searchEmployee(name: string) {
  await this.page.locator('.oxd-input').nth(1).fill(name);
  await this.page.getByRole('button', { name: 'Search' }).click();
  await this.page.waitForTimeout(3000);
}

async getSearchResultCount() {
    await this.page.waitForSelector('.oxd-table-body');
    const rows = await this.page.locator('.oxd-table-row--clickable').count();
    return rows;
}
}