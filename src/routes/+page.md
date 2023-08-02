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
  import { Icon } from 'svelte-awesome-icons';
</script>

<Icon name="amazon" />
<Icon name="calendar-regular" />
<Icon name="calendar-solid"/>
```

## Props

- @prop name;
- @prop width = "24";
- @prop height = "24";
- @prop role = 'img';
- @prop color = 'currentColor'
- @prop ariaLabel='icon name'

## IDE support

If you are using an LSP-compatible editor, such as VSCode, Atom, Sublime Text, or Neovim, hovering over a component name will display a documentation link, props, and events.

## Size

Use the `width` and `height` props to change the size of icons.

```html
<Icon name="calendar-regular" width="100" height="100" />
```

If you are using Tailwind CSS, you can add a custom size using Tailwind CSS by including the desired classes in the class prop. For example:

```html
<Icon name="calendar-regular" class="shrink-0 h-20 w-20" />
```

## CSS HEX Colors

Use the `color` prop to change colors with HEX color code.

```html
<Icon name="calendar-regular" color="#c61515" />
```

## CSS frameworks suport

You can apply CSS framework color and other attributes directly to the icon component or its parent tag using the `class` prop.

Tailwind CSS example:

```html
<Icon name="calendar-regular" class="text-red-700 inline m-1" />
```

Bootstrap examples:

```html
<Icon name="calendar-regular" class="position-absolute top-0 px-1" />
```

## Dark mode

If you are using the dark mode on your website with Tailwind CSS, add your dark mode class to the `class` prop.

Let's use `dark` for the dark mode class as an example.

```html
<Icon name="calendar-regular" class="text-blue-700 dark:text-red-500" />
```

## aria-label

All icons have aria-label. For example `calendar-regular` has `aria-label="calendar-regular"`.
Use `ariaLabel` prop to modify the `aria-label` value.

```html
<Icon name="calendar-regular" ariaLabel="red calendar" color="#c61515"/>
```

## Unfocusable icon

If you want to make an icon unfocusable, add `tabindex="-1"`.

```html
<Icon name="calendar-regular"  tabindex="-1" />
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
<Icon name="calendar-regular"  tabindex="0" />
```

## Using svelte:component

```html
<svelte:component this="{Icon}" name="calendar-regular" />
```

## Using onMount

```html
<script>
  import {Icon} from 'svelte-awesome-icons';
  import { onMount } from 'svelte';
  const props = {
    name: 'calendar-regular',
    size: '50',
    color: '#ff0000'
  };
  onMount(() => {
    const icon = new Icon({ target: document.body, props });
  });
</script>
```


## Import all

Use `import {Icon, icons} from 'svelte-awesome-icons';`.

```html
<script>
  import {Icon, icons} from 'svelte-awesome-icons';
</script>

{#each Object.keys(icons) as name}
<div class="flex gap-4 items-center text-lg">
  <Icon name={name} bind:width={size} bind:height={size} class="shrink-0"/>
  {name}
</div>
{/each}
```

## Other icons

[Svelte-Icon-Sets](https://svelte-svg-icons.vercel.app/)