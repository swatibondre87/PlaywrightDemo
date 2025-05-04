import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('admin');
  await page.getByRole('textbox', { name: 'Username' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('heading', { name: 'Login' }).click();
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByText('manda user').click();
  await page.getByRole('menuitem', { name: 'Logout' }).click();
});