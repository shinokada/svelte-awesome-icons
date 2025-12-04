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
  viewBox="0 0 640 512"
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <path
    d="M288 32c0-17.7 14.3-32 32-32L448 0c17.7 0 32 14.3 32 32l0 128c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-50.7-95 95c19.5 28.4 31 62.7 31 99.8 0 97.2-78.8 176-176 176S0 401.2 0 304 78.8 128 176 128c37 0 71.4 11.4 99.8 31l95-95-50.7 0c-17.7 0-32-14.3-32-32zM176 416a112 112 0 1 0 0-224 112 112 0 1 0 0 224zm160 64c-6.8 0-13.4-.4-20-1.1 23.6-18.9 43.3-42.5 57.6-69.4 43.3-15.5 74.4-56.9 74.4-105.5 0-25.2-8.3-48.5-22.4-67.2 7.1 2.1 14.6 3.2 22.4 3.2 17 0 32.7-5.3 45.7-14.3 11.7 23.6 18.3 50.2 18.3 78.3 0 97.2-78.8 176-176 176zM528 157.3L528 32c0-11.4-2.4-22.2-6.7-32L608 0c17.7 0 32 14.3 32 32l0 128c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-50.7-48 48z"
  />
</svg>
