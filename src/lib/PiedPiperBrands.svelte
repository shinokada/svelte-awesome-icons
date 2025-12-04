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
    d="M440.2 23.2c-26.7 6.8-68.1 28.5-114.6 67.5-30.9-17.5-65.8-26.7-101.4-26.7-114.9 0-208 93.1-208 208s93.1 208 208 208 208-93.1 208-208c.1-54.1-21-106.1-58.7-144.8-6.6 8.5-12.3 17.7-17 27.4 28.9 32.3 44.8 74.1 44.9 117.4 0 97.7-79.4 177.1-177.1 177.1-30.8 0-61-8.1-87.6-23.4 82.9-107.3 150.8-37.8 184.3-226.6 5.8-32.6 28-94.3 126.2-160.2 8.1-5.4 2.4-18.1-7-15.7zM109.3 406.4C89.8 389.8 74.2 369.2 63.5 346s-16.3-48.5-16.3-74c0-97.7 79.4-177.1 177.1-177.1 26.6 0 52.8 6.1 76.6 17.8-66 62.1-126.9 152.9-191.6 293.8z"
  />
</svg>
