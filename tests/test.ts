import { expect, test } from '@playwright/test';

test('index page has expected h1', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: 'Svelte Awesome Icons' })).toBeVisible();
});

test('Brand page has expected h1', async ({ page }) => {
  await page.goto('/brands');
  await expect(page.getByRole('heading', { name: 'Svelte Awesome Icons: Brands' })).toBeVisible();
});

test('Regular page has expected h1', async ({ page }) => {
  await page.goto('/regular');
  await expect(page.getByRole('heading', { name: 'Svelte Awesome Icons: Regular' })).toBeVisible();
});

test('Solid page has expected h1', async ({ page }) => {
  await page.goto('/solid');
  await expect(page.getByRole('heading', { name: 'Svelte Awesome Icons: Solid' })).toBeVisible();
});