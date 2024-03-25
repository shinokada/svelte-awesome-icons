---
layout: mainLayout
title: Svelte Awesome Icons v1 Props
subtitle: Version 1 Props
path: svelte-4/props
description: Learn how to use props for style, color, size, HEX, dark mode, accessibility, events, and passing attributes.
---

# Props: v1

```markdown export { className as class };
- size: string = ctx.size || '24';
- role: string = ctx.role || 'img';
- color: string = ctx.color || 'currentColor';
- withEvents = ctx.withEvents || false;
- ariaLabel: string = '0 solid';
- title: TitleType = {};
- desc: DescType = {};
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

You can apply CSS framework color and other attributes directly to the icon component or its parent tag using the `class` prop.

### Tailwind CSS example:

```html
<CalendarCheckRegular size="md" class="text-red-700 dark:text-green-300 inline m-1" />

<div class="text-red-700 dark:text-green-300 inline m-1">
  <CalendarCheckRegular size="md" />
</div>
```

### Bootstrap examples:

```html
<CalendarCheckRegular class="position-absolute top-0 px-1" />
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

## A11y (New)

All icons have aria-label. For example `BxAbacus` has `aria-label="bx abacus"`.
Use `ariaLabel` prop to modify the `aria-label` value.

```html
<CalendarCheckRegular ariaLabel="address card outline" />
```

Use `title`, `desc`, and `ariaLabel` props to make your icons accessible.

```html
<BellRegular
  title={{ id: 'my-title', title: 'Red heart' }}
  desc={{ id: 'my-descrip', desc: 'The shape of a red heart' }}
  ariaLabel="red heart"
  color="red"
/>
```

## withEvents (New)

As default all icons are unfocusable. However you can add `withEvents` prop to make your icons focusable.

```html
<CalendarCheckRegular withEvents /> <ArchiveSolid withEvents />
```

It is possible to add `tabindex="0"`, but it is not recommended for A11y.
If you want to use it add `withEvents` prop as well.

```html
<CalendarCheckRegular tabindex="0" withEvents />
```

## Events

Use `withEvents` prop to use the following events:

```markdown
- on:click
- on:keydown
- on:keyup
- on:focus
- on:blur
- on:mouseenter
- on:mouseleave
- on:mouseover
- on:mouseout
```

```html
<CalendarCheckRegular withEvents on:click="{handleClick}" />
```

## Passing down other attributes

Since all icons have `{...$$restProps}`, you can pass other attibutes as well.

```html
<CalendarCheckRegular id="my-svg" transform="rotate(45)" />
```
