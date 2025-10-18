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
    d="M64 32C64 14.3 49.7 0 32 0S0 14.3 0 32L0 213.9c0 14.2 5.1 27.9 14.3 38.7L99.6 352 96 352c-13.3 0-24 10.7-24 24s10.7 24 24 24l384 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-3.6 0 85.3-99.5c9.2-10.8 14.3-24.5 14.3-38.7L576 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112.8-69.3 92.4c-5.7 7.6-16.1 9.6-24.2 4.8-9.7-5.7-12.1-18.7-5.1-27.5L441 180c10.8-13.5 8.9-33.3-4.4-44.5s-33-9.8-44.5 3.2l-46.7 52.5C329 209.7 320 233.4 320 258.1l0 93.9-64 0 0-93.9c0-24.6-9-48.4-25.4-66.8l-46.7-52.5c-11.5-13-31.3-14.4-44.5-3.2S124.2 166.4 135 180l27.6 34.5c7 8.8 4.7 21.8-5.1 27.5-8.1 4.8-18.6 2.7-24.2-4.8L64 144.8 64 32zm64 448l0 32 128 0 0-32 64 0 0 32 128 0 0-32 32 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L96 432c-13.3 0-24 10.7-24 24s10.7 24 24 24l32 0z"
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
