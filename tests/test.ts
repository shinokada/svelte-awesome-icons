import { expect, test } from '@playwright/test';

test('index page has expected h1, meta title', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: 'Svelte Awesome Icons' })).toBeVisible();
  await expect(page).toHaveTitle('Accessible SVG Icons - Svelte Awesome Icons');
});

test('Outline page has expected h1, meta title', async ({ page }) => {
  await page.goto('/brands');
  await expect(page.getByRole('heading', { name: 'Svelte Awesome Icons: Brands' })).toBeVisible();
  await expect(page).toHaveTitle('Svelte Awesome Icons: Brands');
});

test('Regular page has expected h1, meta title', async ({ page }) => {
  await page.goto('/regular');
  await expect(page.getByRole('heading', { name: 'Svelte Awesome Icons: Regular' })).toBeVisible();
  await expect(page).toHaveTitle('Svelte Awesome Icons: Regular');
});

test('Solid page has expected h1, meta title', async ({ page }) => {
  await page.goto('/solid');
  await expect(page.getByRole('heading', { name: 'Svelte Awesome Icons: Solid' })).toBeVisible();
  await expect(page).toHaveTitle('Svelte Awesome Icons: Solid');
});

test('Svelte 4 getting started page has expected h1, meta title', async ({ page }) => {
  await page.goto('/svelte-4/getting-started');
  await expect(page.getByRole('heading', { name: 'Svelte Awesome Icons: v1' })).toBeVisible();
  await expect(page).toHaveTitle('Svelte Awesome Icons v1');
});

test('Svelte 4 props page has expected h1, meta title', async ({ page }) => {
  await page.goto('/svelte-4/props');
  await expect(page.getByRole('heading', { name: 'Props: v1' })).toBeVisible();
  await expect(page).toHaveTitle('Svelte Awesome Icons v1 Props');
});

test('Svelte 5 getting started page has expected h1, meta title', async ({ page }) => {
  await page.goto('/svelte-5/getting-started');
  await expect(page.getByRole('heading', { name: 'Svelte Awesome Icons: v2' })).toBeVisible();
  await expect(page).toHaveTitle('Svelte Awesome Icons v2');
});

test('Svelte 5 props page has expected h1, meta title', async ({ page }) => {
  await page.goto('/svelte-5/props');
  await expect(page.getByRole('heading', { name: 'Props: v2' })).toBeVisible();
  await expect(page).toHaveTitle('Svelte Awesome Icons v2 Props');
});

test('Global icons page has expected h1, meta title', async ({ page }) => {
  await page.goto('/guide/global-icons');
  await expect(
    page.getByRole('heading', { name: 'Setting Global Icon using setContext' })
  ).toBeVisible();
  await expect(page).toHaveTitle('Svelte Awesome Icons - Global Icons');
});

test('Custom default icons props page has expected h1, meta title', async ({ page }) => {
  await page.goto('/guide/custom-icons');
  await expect(page.getByRole('heading', { name: 'Custom Default Icons' })).toBeVisible();
  await expect(page).toHaveTitle('Svelte Awesome Icons - Custom Default Icons');
});
