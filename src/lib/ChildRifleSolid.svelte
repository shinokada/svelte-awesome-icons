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
    d="M176.5 128a64 64 0 1 0 0-128 64 64 0 1 0 0 128zm-16 352l0-96 32 0 0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-192.2 20.9 33.2c9.4 15 29.2 19.4 44.1 10s19.4-29.2 10-44.1l-39.9-63.3C266.8 184 223.3 160 176.5 160S86.2 184 61.3 223.6L21.4 287c-9.4 15-4.9 34.7 10 44.1s34.7 4.9 44.1-10l20.9-33.2 0 192.2c0 17.7 14.3 32 32 32s32-14.3 32-32zM448.5 0l-32 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l0 100.3c-9.6 5.5-16 15.9-16 27.7l0 32c-17.7 0-32 14.3-32 32l0 144c0 17.7 14.3 32 32 32l16 0 0 96c0 8.8 7.2 16 16 16l59.5 0c10.4 0 18-9.8 15.5-19.9l-23-92.1 44 0c8.8 0 16-7.2 16-16l0-16c0-8.8-7.2-16-16-16l-48 0 0-26.7 53.1-17.7c6.5-2.2 10.9-8.3 10.9-15.2l0-84.5c0-8.8-7.2-16-16-16l-16 0c-8.8 0-16 7.2-16 16l0 56-16 5.3 0-109.3c0-11.8-6.4-22.2-16-27.7l0-116.3c0-8.8-7.2-16-16-16z"
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
