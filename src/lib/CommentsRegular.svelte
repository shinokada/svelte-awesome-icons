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
  viewBox="0 0 576 512"
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <path
    d="M76.2 258.7c6.1-15.2 4-32.6-5.6-45.9-14.5-20.1-22.6-43.7-22.6-68.8 0-66.8 60.5-128 144-128s144 61.2 144 128-60.5 128-144 128c-15.9 0-31.1-2.3-45.3-6.5-10.3-3.1-21.4-2.5-31.4 1.5l-50.4 20.2 11.4-28.5zM0 144c0 35.8 11.6 69.1 31.7 96.8L1.9 315.2c-1.3 3.2-1.9 6.6-1.9 10 0 14.8 12 26.8 26.8 26.8 3.4 0 6.8-.7 10-1.9l96.3-38.5c18.6 5.5 38.4 8.4 58.9 8.4 106 0 192-78.8 192-176S298-32 192-32 0 46.8 0 144zM384 512c20.6 0 40.3-3 58.9-8.4l96.3 38.5c3.2 1.3 6.6 1.9 10 1.9 14.8 0 26.8-12 26.8-26.8 0-3.4-.7-6.8-1.9-10l-29.7-74.4c20-27.8 31.7-61.1 31.7-96.8 0-82.4-61.7-151.5-145-170.7-1.6 16.3-5.1 31.9-10.1 46.9 63.9 14.8 107.2 67.3 107.2 123.9 0 25.1-8.1 48.7-22.6 68.8-9.6 13.3-11.7 30.6-5.6 45.9l11.4 28.5-50.4-20.2c-10-4-21.1-4.5-31.4-1.5-14.2 4.2-29.4 6.5-45.3 6.5-72.2 0-127.1-45.7-140.7-101.2-15.6 3.2-31.7 5-48.1 5.2 16.4 81.9 94.7 144 188.8 144z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-awesome-icons.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop color = ctx.color || 'currentColor'
@prop title
@prop desc
@prop focusable = 'false'
@prop ariaLabel
@prop ...restProps
-->
