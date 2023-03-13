<h1 align="center">Svelte Awesome Icons</h1>
<p align="center">
<a href="https://svelte-awesome-icons.codewithshin.com/" rel="nofollow">Svelte-Awesome-Icons</a>
</p>

<p align="center">
<a href="https://github.com/sponsors/shinokada" target="_blank"><img src="https://img.shields.io/static/v1?label=Sponsor&message=%E2%9D%A4&logo=GitHub&color=%23fe8e86" height="25"></a>
<a href="https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps" target="_blank"><img src="https://img.shields.io/badge/PWA-enabled-brightgreen" alt="PWA Shield" height="25">
</a>
<a href="https://www.npmjs.com/package/svelte-awesome-icons" rel="nofollow" target="_blank"><img src="https://img.shields.io/npm/v/svelte-awesome-icons" alt="npm" height="25"></a>
<a href="https://twitter.com/shinokada" rel="nofollow" target="_blank"><img src="https://img.shields.io/badge/created%20by-@shinokada-4BBAAB.svg" alt="Created by Shin Okada" height="25"></a>
<a href="https://opensource.org/licenses/MIT" rel="nofollow" target="_blank"><img src="https://img.shields.io/github/license/shinokada/svelte-awesome-icons" alt="License" height="25"></a>
<a href="https://www.npmjs.com/package/svelte-awesome-icons" rel="nofollow" target="_blank"><img src="https://img.shields.io/npm/dw/svelte-awesome-icons.svg" alt="npm" height="25"></a>
</p>


2010+ Font Awesome SVG icon components for Svelte. Svelte-Awesome-Icons support major CSS frameworks using the `class` props.

Thank you for considering my open-source package. If you use it in a commercial project, please support me by sponsoring me on GitHub: https://github.com/sponsors/shinokada. Your support helps me maintain and improve this package for the benefit of the community.

<p align="center">
<img width="650" src="/static/images/awesome-optimized-650-1050.png" />
</p>


## Installation

```bash
npm i -D svelte-awesome-icons
```

## REPL

[Demo 1](https://svelte.dev/repl/901754e21a0a4c97ab49832fce77619d)

## Icon names

[Icon names](/icon-list.md)

## Icon images

[Icon images](/icon-images.md)

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
  import AppleBrand from 'svelte-awesome-icons/AppleBrand.svelte'
</script>

<AppleBrand />
```

If you are a TypeScript user, **install typescript version 5.0.0 or above.**

As of March 2023, the `typescript@beta` version is now available:

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

## Size

Use the `size` prop to change the size of icons.

```html
<ToiletsPortableSolid size="40" />
<StarHalfRegular size="50" />
<AppleBrand size="60" />
```

## CSS HEX Colors

Use the `color` prop to change colors with HEX color code.

```html
<ToiletsPortableSolid color="#c61515" />
<StarHalfRegular color="#3759e5" />
<AppleBrand color="#3fe537" />
```

## CSS framworks suport

Use the `class` prop to change size, colors and add additional css.

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
<ToiletsPortableSolid ariaLabel="Toilet"></ToiletsPortableSolid>
```

## Passing down other attributes

You can pass other attibutes as well.

```html
<ToiletsPortableSolid tabindex="0"></ToiletsPortableSolid>
```

## Unfocusable icon

If you want to make an icon unfocusable, add `tabindex="-1"`.

```html
<ToiletsPortableSolid tabindex="-1" />
```


## Import all

[REPL](https://svelte.dev/repl/c0045886b264408fba13f1de70c42932?version=3.48.0)

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

## Original source

[FortAwesome/Font-Awesome v6.2.1](https://github.com/FortAwesome/Font-Awesome/tree/6.x/svgs)

## Other icons

- [Svelte-Icon-Sets](https://svelte-svg-icons.vercel.app/)

## PWA: Fast & Offline

This website can be downloaded and installed on your device for offline access as a Progressive Web App.

To install a PWA, look for the "Add to Home Screen" option in the browser's menu or settings. On most mobile devices, this option can be found by visiting the website, then selecting the "Options" or "Menu" button in the browser, and looking for the "Add to Home Screen" option. On some desktop browsers, right-click on the page and select "Install".
