import { expect, test } from '@playwright/test';

test('svelte-4/getting-started page has expected h1', async ({ page }) => {
  await page.goto('/guide/svelte-4/getting-started');
  await expect(page.locator('h1')).toHaveText('Svelte Awesome Icons: v1');
});

test('Brand Icons page has expected h1', async ({ page }) => {
  await page.goto('/brand-icons');
  await expect(page.locator('h1')).toHaveText('Brand Icons - Svelte Awesome Icons');
});

test('Regular Icons page has expected h1', async ({ page }) => {
  await page.goto('/regular-icons');
  await expect(page.locator('h1')).toHaveText('Regular Icons - Svelte Awesome Icons');
});

test('Solid Icons page has expected h1', async ({ page }) => {
  await page.goto('/solid-icons');
  await expect(page.locator('h1')).toHaveText('Solid Icons - Svelte Awesome Icons');
});


