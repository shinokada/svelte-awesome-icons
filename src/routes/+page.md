# Svelte Awesome Icons

<div class="flex gap-2 my-8">
<a href="https://github.com/sponsors/shinokada" target="_blank" rel="noreferrer"><img src="https://img.shields.io/static/v1?label=Sponsor&message=%E2%9D%A4&logo=GitHub&color=%23fe8e86" alt="sponsor" height="25" style="height: 25px !important;"></a>
<a href="https://www.npmjs.com/package/svelte-awesome-icons"  rel="noreferrer" target="_blank"><img src="https://img.shields.io/npm/v/svelte-awesome-icons" alt="npm" height="25" style="height: 25px !important;"></a>
<a href="https://twitter.com/shinokada"  rel="noreferrer" target="_blank"><img src="https://img.shields.io/badge/created%20by-@shinokada-4BBAAB.svg" alt="Created by Shin Okada" height="25" style="height: 25px !important;"></a>
<a href="https://opensource.org/licenses/MIT"  rel="noreferrer" target="_blank"><img src="https://img.shields.io/github/license/shinokada/svelte-awesome-icons" alt="License" height="25" style="height: 25px !important;"></a>
<a href="https://www.npmjs.com/package/svelte-awesome-icons" rel="noreferrer" target="_blank"><img src="https://img.shields.io/npm/dw/svelte-awesome-icons.svg" alt="npm" height="25" style="height: 25px !important;"></a>
</div>

2020+ Font Awesome SVG icon components for Svelte.

Thank you for considering my open-source package. If you use it in a commercial project, please support me by sponsoring me on GitHub: https://github.com/sponsors/shinokada. Your support helps me maintain and improve this package for the benefit of the community.

## Repo

[GitHub Repo](https://github.com/shinokada/svelte-awesome-icons)

## Original source

[FontAwesome/Font-Awesome v6.2.1](https://github.com/FortAwesome/Font-Awesome/tree/6.x/svgs)

## License

[Svelte-Awesome-Icons License](https://github.com/shinokada/svelte-awesome-icons/LICENSE)

[Font-Awesome LICENSE](https://github.com/FortAwesome/Font-Awesome/blob/6.x/LICENSE.txt)

## Installation

```bash
pnpm i -D svelte-awesome-icons
```

## Usages

In a svelte file:

```html
<script>
  import { ToiletsPortableSolid, StarHalfRegular, AppleBrand } from 'svelte-awesome-icons';
</script>

<ToiletsPortableSolid />
<StarHalfRegular />
<AppleBrand />
```

## Faster compiling

If you need only a few icons from this library in your Svelte app, import them directly. This can optimize compilation speed and improve performance by reducing the amount of code processed during compilation.

```html
<script>
  import AppleBrand from 'svelte-awesome-icons/AppleBrand.svelte';
</script>

<AppleBrand />
```

If you are a TypeScript user, **install typescript version 5.0.0 or above.**

```sh
pnpm i -D typescript@beta
```

To avoid any complaints from the editor, add `node16` or `nodenext` to `moduleResolution` in your tsconfig.json file.

```json
{
  //...
  "compilerOptions": {
    // ...
    "moduleResolution": "nodenext"
  }
}
```

## Props

- size = '24';
- role = 'img';
- color = 'currentColor';
- ariaLabel = 'window minimize';

## IDE support

If you are using an LSP-compatible editor, such as VSCode, Atom, Sublime Text, or Neovim, hovering over a component name will display a documentation link, props, and events.

## Size

Use the `size` prop to change the size of icons.

```html
<ToiletsPortableSolid size="40" />
<StarHalfRegular size="50" />
<AppleBrand size="60" />
```

If you are using Tailwind CSS, you can add a custom size using Tailwind CSS by including the desired classes in the class prop. For example:

```html
<ToiletsPortableSolid class="shrink-0 h-20 w-20" />
```

## Creating a Default Global Icon Setting in Svelte

You can create a config file, `/src/lib/icon.config.json`.

The `Icon` component serves as a wrapper for svelte:component, allowing you to establish a global default setting or expand the capabilities of a component.

To create a default global icon setting, follow these steps:

### Configuration File

Start by creating a configuration file named `/src/lib/icon.config.json` with the following structure:

```json
{
  "config1": {
    "size": 40,
    "color": "#FF5733"
  },
  "config2": {
    "size": 50,
    "color": "#445533"
  }
}
```

In this JSON file, you can define different configurations (config1 and config2 in this case) for your icons, specifying attributes like size, variation, and color.

### Implementation

In your Svelte page file, make use of the configurations from the JSON file:

```html
<script lang="ts">
  type IconConfig = {
    config1: {
      size: number;
      color: string;
    };
    config2: {
      size: number;
      color: string;
    };
  };
  import config from '$lib/icon.config.json';
  import { Icon, AmazonBrand, CalendarCheckRegular } from 'svelte-awesome-icons';

  const iconConfig: IconConfig = config;
  const config1 = iconConfig.config1;
  const config2 = iconConfig.config2;
</script>

<Icon {...config1} icon="{AmazonBrand}" />
<Icon {...config2} icon="{CalendarCheckRegular}" />
```

We import the configurations from the JSON file and assign them to config1 and config2. We then utilize the Icon component with the spread attributes to apply the respective configurations to each icon.

### Custom Default Icon

If you wish to create a custom default icon, you can follow these steps:

Create a Svelte component named `src/lib/MyIcon.svelte`:

```html
<script lang="ts">
  import type { ComponentType } from 'svelte';
  const config = {
    size: 30,
    color: '#FF5733'
  };
  import { Icon } from 'svelte-awesome-icons';
  export let icon: ComponentType;
</script>

<Icon {...config} {icon} />
```

This component, `MyIcon.svelte`, accepts an `icon` prop which you can use to pass in the specific icon component you want to display. The default configuration is also applied to the icon.

### Implementation in a Page

To use your custom default icon in a Svelte page, do the following:

```html
<script>
  import MyIcon from '$lib/MyIcon.svelte';
  import { AmazonBrand } from 'svelte-awesome-icons';
</script>

<MyIcon icon="{AmazonBrand}" />
```

Here, we import the `MyIcon` component and the `AmazonBrand` icon. By passing the `AmazonBrand` icon to the `icon` prop of MyIcon, you apply the default configuration to the icon.

## CSS HEX Colors

Use the `color` prop to change colors with HEX color code.

```html
<ToiletsPortableSolid color="#c61515" />
<StarHalfRegular color="#3759e5" />
<AppleBrand color="#3fe537" />
```

## CSS framworks suport

You can apply CSS framework **color** and other attributes directly to the icon component or its parent tag using the `class` prop.

Tailwind CSS example:

```html
<ToiletsPortableSolid class="h-24 w-24 text-blue-700 mr-4" />
<StarHalfRegular class="h-24 w-24 text-red-700" />
<AppleBrand class="h-24 w-24 text-green-500" />
```

Bootstrap examples:

```html
<ToiletsPortableSolid class="position-absolute top-0 px-1" />
```

## Dark mode

If you are using the dark mode on your website with Tailwind CSS, add your dark mode class to the `class` prop.

Let's use `dark` for the dark mode class as an example.

```html
<ToiletsPortableSolid class="text-blue-700 dark:text-red-500" />
<StarHalfRegular class="text-red-700 dark:text-green-500" />
<AppleBrand class="text-green-500 dark:text-blue-500" />
```

## aria-label

All icons have aria-label. For example `ToiletsPortableSolid` has `aria-label="toilets portable"`.
Use `ariaLabel` prop to modify the `aria-label` value.

```html
<ToiletsPortableSolid ariaLabel="Toilet" />
```

## Unfocusable icon

If you want to make an icon unfocusable, add `tabindex="-1"`.

```html
<ToiletsPortableSolid tabindex="-1" />
```

## Events

All icons have the following events:

- on:click
- on:keydown
- on:keyup
- on:focus
- on:blur
- on:mouseenter
- on:mouseleave
- on:mouseover
- on:mouseout

## Passing down other attributes

You can pass other attibutes as well.

```html
<ToiletsPortableSolid tabindex="0" />
```

# Using svelte:component

```html
<script>
  import { ToiletsPortableSolid } from 'svelte-awesome-icons';
</script>

<svelte:component this="{ToiletsPortableSolid}" />
```

# Using onMount

```html
<script>
  import { ToiletsPortableSolid } from 'svelte-awesome-icons';
  import { onMount } from 'svelte';
  const props = {
    size: '50',
    color: '#ff0000'
  };
  onMount(() => {
    const icon = new ToiletsPortableSolid({ target: document.body, props });
  });
</script>
```

## Import all

Use `import * as Icon from 'svelte-awesome-icons`.

```html
<script>
  import * as Icon from 'svelte-awesome-icons';
</script>

<Icon.AppStoreBrand />
<Icon.ArrowRightToBracketSolid />

<h1>Size</h1>
<Icon.AppStoreBrand size="30" />
<Icon.ArrowRightToBracketSolid size="40" />

<h1>CSS HEX color</h1>
<Icon.ArrowRightToBracketSolid color="#c61515" size="40" />

<h1>Tailwind CSS</h1>
<Icon.AppStoreBrand class="text-blue-500" />
<Icon.ArrowRightToBracketSolid class="text-pink-700" />
```

## Other icons

- [Svelte-Icon-Sets](https://svelte-svg-icons.vercel.app/)
