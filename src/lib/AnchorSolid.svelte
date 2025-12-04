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
    d="M288 64a32 32 0 1 0 0 64 32 32 0 1 0 0-64zM192 96c0-53 43-96 96-96s96 43 96 96c0 41.8-26.7 77.4-64 90.5l0 257.9c62.9-14.3 110.2-69.7 111.9-136.5l-16.1 14.1c-10 8.7-25.1 7.7-33.9-2.3s-7.7-25.1 2.3-33.9l64-56c9-7.9 22.6-7.9 31.6 0l64 56c10 8.7 11 23.9 2.3 33.9s-23.9 11-33.9 2.3L496 307.9C493.9 421 401.6 512 288 512S82.1 421 80 307.9L63.8 322.1c-10 8.7-25.1 7.7-33.9-2.3s-7.7-25.1 2.3-33.9l64-56c9-7.9 22.6-7.9 31.6 0l64 56c10 8.7 11 23.9 2.3 33.9s-23.9 11-33.9 2.3l-16.1-14.1c1.8 66.8 49.1 122.2 111.9 136.5l0-257.9c-37.3-13.2-64-48.7-64-90.5z"
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
