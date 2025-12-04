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
    d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM209.1 267.9L108.4 207.4c-7.7-4.6-12.4-12.9-12.4-21.9 0-14.1 11.4-25.5 25.5-25.5l204.9 0c14.1 0 25.5 11.4 25.5 25.5 0 9-4.7 17.3-12.4 21.9L238.9 267.9c-4.5 2.7-9.6 4.1-14.9 4.1s-10.4-1.4-14.9-4.1zM352 237.3l0 82.7c0 17.7-14.3 32-32 32l-192 0c-17.7 0-32-14.3-32-32l0-82.7 96.7 58C202.1 301 213 304 224 304s21.9-3 31.3-8.7l96.7-58z"
  />
</svg>
