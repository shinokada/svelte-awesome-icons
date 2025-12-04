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
  viewBox="0 0 384 512"
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <path
    d="M208 0c17.7 0 32 14.3 32 32l0 25.4c43.6 5.2 83 24.5 113.3 53.1 12.9 12.1 13.4 32.4 1.3 45.2s-32.4 13.4-45.2 1.3c-24.4-23-57.2-37.1-93.3-37.1-75.1 0-136 60.9-136 136s60.9 136 136 136c36.2 0 69-14.1 93.3-37.1 12.9-12.1 33.1-11.5 45.2 1.3s11.5 33.1-1.3 45.2C323 430.1 283.6 449.4 240 454.6l0 25.4c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-28C84.7 433.5 16 352.8 16 256S84.7 78.5 176 60l0-28c0-17.7 14.3-32 32-32z"
  />
</svg>
