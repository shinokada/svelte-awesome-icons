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
  viewBox="0 0 448 512"
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <path
    d="M416 32L32 32C14.4 32 0 46.4 0 64L0 448c0 17.6 14.4 32 32 32l384 0c17.6 0 32-14.4 32-32l0-384c0-17.6-14.4-32-32-32zM352 289.4c0 49.4-11.4 82.6-103.8 82.6l-16.9 0c-44.1 0-62.4-14.9-70.4-38.8l-.9 0 0 34.8-64 0 0-232 64 0 0 74.7 1.1 0c4.6-30.5 39.7-38.8 69.7-38.8l17.3 0c92.4 0 103.8 33.1 103.8 82.5l0 35 .1 0zm-64-28.9l0 22.9c0 21.7-3.4 33.8-38.4 33.8l-45.3 0c-28.9 0-44.1-6.5-44.1-35.7l0-19c0-29.3 15.2-35.7 44.1-35.7l45.3 0c35-.2 38.4 12 38.4 33.7z"
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
