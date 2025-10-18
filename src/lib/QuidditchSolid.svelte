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

  let ariaDescribedby = $derived(`${title?.id || ''} ${desc?.id || ''}`.trim());
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
    d="M496 544a80 80 0 1 1 0-160 80 80 0 1 1 0 160zM106.8 277.2c30.6-30.6 73.1-45.9 115.8-42.2L341 353.3c3.7 42.8-11.6 85.2-42.2 115.9-27.4 27.4-64.6 42.8-103.3 42.8L22.1 512c-12.2 0-22.1-9.9-22.1-22.1 0-6.3 2.7-12.3 7.3-16.5L133.7 359.7c4.2-3.7-.4-10.4-5.4-7.9L77.2 377.4c-6.1 3-13.2-1.4-13.2-8.2 0-31.5 12.5-61.8 34.8-84l8-8zm417-270c12.6-10.3 31.1-9.5 42.8 2.2s12.4 30.2 2.2 42.8l-2.2 2.4-192 192 34.8 34.7c4.2 4.2 6.6 10 6.6 16 0 12.5-10.1 22.6-22.6 22.6l-29.1 0-108.3-108.3 0-29.1c0-12.5 10.1-22.6 22.6-22.6 6 0 11.8 2.4 16 6.6l34.8 34.7 192-192 2.4-2.2z"
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
