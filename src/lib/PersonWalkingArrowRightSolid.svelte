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
    d="M104.5 24a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm-8 181.3L73.9 227.9c-6 6-9.4 14.1-9.4 22.6l0 37.5c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-37.5c0-25.5 10.1-49.9 28.1-67.9l35.1-35.1c22.8-22.8 53.6-35.6 85.8-35.6 36.9 0 71.8 16.8 94.8 45.6L262.3 180c6.1 7.6 15.3 12 25 12l33.2 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-33.2 0c-29.2 0-56.7-13.3-75-36l-3.8-4.7 0 115.2 34.5 29.6c17.7 15.2 29.3 36.2 32.6 59.3l12.6 88.1c2.5 17.5-9.7 33.7-27.2 36.2s-33.7-9.7-36.2-27.2l-12.6-88.1c-1.1-7.7-5-14.7-10.9-19.8L130 347.5c-21.3-18.2-33.5-44.9-33.5-72.9l0-69.3zM96.6 371c2.4 2.3 4.8 4.6 7.4 6.8l46 39.4-2.2 7.6c-4.5 15.7-12.9 30-24.4 41.5L55.1 534.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l68.3-68.3c3.8-3.8 6.6-8.6 8.1-13.8L96.6 371zM505.5 345c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l31-31-102.1 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l102.1 0-31-31c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l72 72c9.4 9.4 9.4 24.6 0 33.9l-72 72z"
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
