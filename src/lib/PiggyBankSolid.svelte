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
    d="M288-32a96 96 0 1 1 0 192 96 96 0 1 1 0-192zM48 304c0-70.1 47-131.4 117.1-164.9 25.3 41.3 70.9 68.9 122.9 68.9 55.7 0 104.1-31.7 128-78 15.8-11.3 35.1-18 56-18l19.5 0c10.4 0 18 9.8 15.5 19.9l-17.1 68.3c9.9 12.4 18.2 25.7 24.4 39.8l21.7 0c13.3 0 24 10.7 24 24l0 112c0 13.3-10.7 24-24 24l-40 0c-16.5 22-38.5 39.6-64 50.7l0 29.3c0 17.7-14.3 32-32 32l-33 0c-14.3 0-26.8-9.5-30.8-23.2l-7.1-24.8-82.3 0-7.1 24.8C235.8 502.5 223.3 512 209 512l-33 0c-17.7 0-32-14.3-32-32l0-29.3C87.5 426 48 369.6 48 304zm376 16a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"
  />
</svg>
