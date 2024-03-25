---
layout: mainLayout
title: Svelte Awesome Icons v2 Props
subtitle: Version 2 Props
path: svelte-5/props
description: Learn how to use props for color, size, HEX, dark mode, accessibility, and passing attributes.
---

# Props: v2

```markdown
- size = ctx.size || '24'
- role = ctx.role || 'img'
- color = ctx.color || 'currentColor'
- ariaLabel = '<icon file name>'
- class
- ...restProps
```

## Size

To change the size of an icon, use the `size` prop and specify the desired size. For example:

```html
<CalendarCheckRegular size="40" />
```

If you want to override the preconfigured size, you can add a custom size using Tailwind CSS by including the desired classes in the `class` prop. For example:

```html
<CalendarCheckRegular class="h-24 w-24 text-blue-700 mr-4" />
```

## Color

You can apply Tailwind CSS color directly to the icon component or its parent tag using the `class` prop.

```html
<CalendarCheckRegular size="40" class="text-red-700 dark:text-green-300 inline m-1" />

<div class="text-red-700 dark:text-green-300 inline m-1">
  <CalendarCheckRegular size="40" />
</div>
```

## CSS HEX Colors

Use the color attribute to change colors with HEX color code for Filled and Outlined components.

```html
<CalendarCheckRegular color="#ff0000" size="md" />
```

## Dark mode

If you are using the dark mode on your website with Tailwind CSS, add your dark mode class to the `class` prop.

Let's use `dark` for the dark mode class as an example.

```html
<CalendarCheckRegular class="text-blue-700 dark:text-red-500" />
```

## aria-label

All icons have aria-label. For example `AnglesRightSolid` has `aria-label="angles right solid"`.
Use `ariaLabel` prop to modify the `aria-label` value.

```html
<CalendarCheckRegular ariaLabel="my weekly calendar" />
```

## Passing down other attributes

Since all icons have `{...restProps}`, you can pass other attibutes as well.

```html
<CalendarCheckRegular id="my-svg" transform="rotate(45)" />
```
