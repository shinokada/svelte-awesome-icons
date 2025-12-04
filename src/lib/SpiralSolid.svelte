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
  viewBox="0 0 512 512"
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <path
    d="M115.5 7.4c13.6-11.3 33.8-9.5 45.1 4.1s9.5 33.8-4.1 45.1C100.2 103.5 64 175.2 64 256 64 362 150 448 256 448s192-86 192-192c0-75.1-60.9-136-136-136S176 180.9 176 256c0 44.2 35.8 80 80 80s80-35.8 80-80c0-13.3-10.7-24-24-24s-24 10.7-24 24c0 17.7-14.3 32-32 32s-32-14.3-32-32c0-48.6 39.4-88 88-88s88 39.4 88 88c0 79.5-64.5 144-144 144S112 335.5 112 256c0-110.5 89.5-200 200-200s200 89.5 200 200c0 141.4-114.6 256-256 256S0 397.4 0 256C0 155.8 45 66.1 115.5 7.4z"
  />
</svg>
