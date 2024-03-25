---
layout: mainLayout
title: Svelte Awesome Icons v2
subtitle: Getting Started with v2
path: svelte-5/getting-started
description: Get started with version 2 for your Svelte 5 Runes projects.
---

<script>
  import { Banner } from 'flowbite-svelte';
  import { removeHyphensAndCapitalize } from '../utils/utils';
</script>

# Svelte Awesome Icons: v2

<div class="flex gap-2 my-8">
<a href="https://github.com/sponsors/shinokada" target="_blank"><img src="https://img.shields.io/static/v1?label=Sponsor&message=%E2%9D%A4&logo=GitHub&color=%23fe8e86" alt="sponsor" ></a>
<a href="https://www.npmjs.com/package/svelte-awesome-icons" rel="nofollow" target="_blank"><img src="https://img.shields.io/npm/v/svelte-awesome-icons/next" alt="npm" ></a>
<a href="https://opensource.org/licenses/MIT" rel="nofollow" target="_blank"><img src="https://img.shields.io/github/license/shinokada/svelte-awesome-icons" alt="License" ></a>
<a href="https://www.npmjs.com/package/svelte-awesome-icons" rel="nofollow" target="_blank"><img src="https://img.shields.io/npm/dw/svelte-awesome-icons.svg" alt="npm" ></a>
</div>

## Requirements

```markdown
- Svelte 5:Runes
```

## Installation

Install Svelte:

```sh
// install Svelte 5
npm create svelte@latest my-project
cd my-project
pnpm i
```

Install `svelte-awesome-icons v2`:

```sh
pnpm i -D svelte-awesome-icons@2.0.0-next.x
```

Replace `2.0.0-next.x` with the latest `v2` version.
Check the latest version at the [GitHub Releases](https://github.com/shinokada/svelte-awesome-icons/releases).

Enable Runes in `svelte.config.js`:

```js
import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: [vitePreprocess({})],
  compilerOptions: {
    runes: true
  },
  kit: {
    adapter: adapter()
  }
};

export default config;
```

## Basic Usages

In a svelte file:

```html
<script>
  import { CalendarCheckRegular } from 'svelte-awesome-icons';
</script>

<CalendarCheckRegular />
```

## Faster compiling

If you need only a few icons from this library in your Svelte app, import them directly. This can optimize compilation speed and improve performance by reducing the amount of code processed during compilation.

```html
<script>
  import CalendarCheckRegular from 'svelte-awesome-icons/CalendarCheckRegular.svelte';
</script>

<CalendarCheckRegular />
```

## Passing down other attributes

Since all icons have `{...$$restProps}`, you can pass other attibutes as well.

```html
<CalendarCheckRegular id="my-svg" transform="rotate(45)" />
```

## Using svelte:component

```html
<script>
  import { CalendarCheckRegular } from 'svelte-awesome-icons';
</script>

<svelte:component this="{CalendarCheckRegular}" />
```

## Using onMount

```html
<script>
  import { CalendarCheckRegular } from 'svelte-awesome-icons';
  import { onMount } from 'svelte';
  const props = {
    size: '50',
    color: '#ff0000'
  };
  onMount(() => {
    const icon = new CalendarCheckRegular({ target: document.body, props });
  });
</script>
```

## Import all

Use `import * as Icon from 'svelte-awesome-icons`.

```html
<script>
  import * as Icon from 'svelte-awesome-icons';
</script>

<Icon.CalendarCheckRegular />

<h1>Size</h1>
<Icon.CalendarCheckRegular size="30" />

<h1>Tailwind CSS</h1>
<Icon.CalendarCheckRegular class="text-blue-500" />
```
