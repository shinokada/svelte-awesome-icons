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

  const ariaDescribedby = $derived(desc?.id && desc.desc ? desc.id : undefined);
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
  aria-describedby={ariaDescribedby}
  viewBox="0 0 512 512"
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <path
    d="M0 256c0 48.1 13.5 95.3 39.1 136L252.5 116.1c1.5-2 5.4-2 6.9 0l89.1 115.2-63.8 0 1.4 5.1 66.4 0 18.8 24.3-78.4 0 2.2 8 82.4 0 16.6 21.4-93 0 2.9 10.3 98 0 14.8 19.1-107.5 0 3.5 12.6 113.6 0 13 16.8-122 0 3.9 13.9 128.8 0 12 15.5-136.5 0 3.9 13.9 143.3 0C498.5 351.2 512 304 512 256 512 114.6 397.4 0 256 0S0 114.6 0 256zM333.9 407.5l3.9 13.9 113.6 0c3.7-4.4 7.5-9.2 11-13.9l-128.5 0zm8.2 29.4l3.8 13.9 76 0c5-4.2 10.4-9.1 15.2-13.9l-95 0zm8.2 29.4l3.9 13.8 25.7 0c7.6-4.4 14.6-8.8 22.2-13.8l-51.8 0z"
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
