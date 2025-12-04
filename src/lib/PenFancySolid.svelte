<script lang="ts">
  import { getContext } from 'svelte';
  import type { BaseProps, Props } from './types';

  const ctx: BaseProps = getContext('iconCtx') ?? {};

  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    color = ctx.color || 'currentColor',
    title,
    desc,
    focusable = 'false',
    ariaLabel,
    ...restProps
  }: Props = $props();

  const ariaDescribedby = $derived(`${title?.id || ''} ${desc?.id || ''}`.trim());
  const hasDescription = $derived(!!(title?.id || desc?.id));
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  {...restProps}
  {role}
  width={size}
  height={size}
  fill={color}
  {focusable}
  aria-label={title?.id ? undefined : ariaLabel}
  aria-labelledby={title?.id || undefined}
  aria-describedby={hasDescription ? ariaDescribedby : undefined}
  viewBox="0 0 512 512"
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <path
    d="M373.5 27.1c15-17.2 36.7-27.1 59.6-27.1 43.6 0 79 35.4 79 79 0 22.8-9.9 44.6-27.1 59.6L283.7 313.8 273 303 209 239 198.2 228.3 373.5 27.1zM161.1 259C162 260 188 286 239 337l13.9 13.9-17.1 74.2c-3.9 17.1-16.9 30.7-33.8 35.4l-169.8 47.5 92.3-92.3c1.2 .1 2.3 .2 3.5 .2 17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32c0 1.2 .1 2.4 .2 3.5L3.9 479.8 51.5 310c4.7-16.9 18.3-29.9 35.4-33.8L161.1 259z"
  />
</svg>
