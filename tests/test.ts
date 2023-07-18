import { expect, test } from '@playwright/test';

test('index page has expected h1', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: 'Svelte Awesome Icons' })).toBeVisible();
});

test('All icons page has expected h1', async ({ page }) => {
  await page.goto('/all');
  await expect(page.getByRole('heading', { name: 'Svelte Awesome Icons: All icons' })).toBeVisible();
});

test('Brand page has expected h1', async ({ page }) => {
  await page.goto('/brand');
  await expect(page.getByRole('heading', { name: 'Svelte Awesome Icons: Brand' })).toBeVisible();
});

test('Regular page has expected h1', async ({ page }) => {
  await page.goto('/regular');
  await expect(page.getByRole('heading', { name: 'Svelte Awesome Icons: Regular' })).toBeVisible();
});

test('Solid page has expected h1', async ({ page }) => {
  await page.goto('/solid');
  await expect(page.getByRole('heading', { name: 'Svelte Awesome Icons: Solid' })).toBeVisible();
});