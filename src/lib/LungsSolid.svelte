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
    d="M320 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 141.9-32 19.2 0-116.7c0-24.5-19.9-44.4-44.4-44.4-12.5 0-24.4 5.3-32.8 14.5l-26.4 29C42.9 160.8 0 271.8 0 387l0 30.5c0 52.2 42.3 94.5 94.5 94.5 22 0 43.7-5.1 63.4-15l5-2.5c37.4-18.7 61-56.9 61-98.8l0-128 64-38.4 64 38.4 0 128c0 41.8 23.6 80.1 61 98.8l5 2.5c19.7 9.8 41.4 15 63.4 15 52.2 0 94.5-42.3 94.5-94.5l0-6.2c0-111.1-36.7-219-104.4-307L428.9 48.7c-8.1-10.6-20.7-16.7-34-16.7-23.7 0-42.9 19.2-42.9 42.9l0 118.2-32-19.2 0-141.9z"
  />
</svg>
