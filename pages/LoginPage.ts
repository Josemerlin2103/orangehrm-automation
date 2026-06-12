import { Page } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('/web/index.php/auth/login');
  }

  async login(username: string, password: string) {
    await this.page.fill('input[name="username"]', username);
    await this.page.fill('input[name="password"]', password);
    await this.page.getByRole('button', { name: 'Login' }).click();
  }

  async getErrorMessage() {
    return await this.page.locator('.oxd-alert-content-text').textContent();
  }

  async getDashboardTitle() {
    return await this.page.locator('.oxd-topbar-header-title').textContent();
  }
}