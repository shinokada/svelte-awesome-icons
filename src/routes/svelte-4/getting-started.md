---
layout: mainLayout
title: Svelte Awesome Icons v1
subtitle: Getting started with v1
path: svelte-4/getting-started
description: Accessible SVG icons for your Svelte 4 and 5 projects.
---

<script>
  import { Banner } from 'flowbite-svelte';
  import { MetaTags } from 'svelte-meta-tags';
  import { BellRegular } from '$lib';
  import { removeHyphensAndCapitalize } from '../utils/utils';
</script>

# Svelte Awesome Icons: v1

<div class="flex gap-2 my-8">
<a href="https://github.com/sponsors/shinokada" target="_blank"><img src="https://img.shields.io/static/v1?label=Sponsor&message=%E2%9D%A4&logo=GitHub&color=%23fe8e86" alt="sponsor" ></a>
<a href="https://www.npmjs.com/package/svelte-awesome-icons" rel="nofollow" target="_blank"><img src="https://img.shields.io/npm/v/svelte-awesome-icons" alt="npm" ></a>
<a href="https://opensource.org/licenses/MIT" rel="nofollow" target="_blank"><img src="https://img.shields.io/github/license/shinokada/svelte-awesome-icons" alt="License" ></a>
<a href="https://www.npmjs.com/package/svelte-awesome-icons" rel="nofollow" target="_blank"><img src="https://img.shields.io/npm/dw/svelte-awesome-icons.svg" alt="npm" ></a>
</div>

## Requirements

```markdown
- Svelte 4 or 5 (without Runes)
```

## Installation

Install Svelte and TailwindCSS:

```sh
npm create svelte@latest my-project
cd my-project
pnpm i -D svelte-awesome-icons
```

## Basic Usages

In a svelte file:

```html
<script>
  import { CalendarCheckRegular } from 'svelte-awesome-icons';
</script>

<CalendarCheckRegular />
```

## A11y friendly

Use `title`, `desc`, and `ariaLabel` props to make your icons accessible.

```html
<BellRegular
  title={{ id: 'my-title', title: 'Red bell' }}
  desc={{ id: 'my-descrip', desc: 'The shape of a red bell' }}
  ariaLabel="red bell"
  color="red"
/>
```

Check out this icon in the console:
<BellRegular
title={{ id: 'my-title', title: 'Red bell' }}
desc={{ id: 'my-descrip', desc: 'The shape of a red bell' }}
ariaLabel="red bell"
color="red"
/>

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
```
