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
    d="M256 51.3L92.8 112.4 247.5 171.1c5.5 2.1 11.5 2.1 17 0L419.2 112.4 256 51.3zM0 129.3c0-20 12.4-37.9 31.1-44.9l208-78c10.9-4.1 22.8-4.1 33.7 0l208 78c18.7 7 31.1 24.9 31.1 44.9l0 36-253.2 96c-1.8 .7-3.8 .7-5.7 0l-253.2-96 0-36zm0 140l0-52.7 236.1 89.6c12.8 4.9 26.9 4.9 39.7 0l236.1-89.6 0 52.7-128 48.6 0 51.3 128-48.6 0 62.2c0 20-12.4 37.9-31.1 44.9l-208 78c-10.9 4.1-22.8 4.1-33.7 0l-208-78C12.4 420.7 0 402.7 0 382.7l0-62.2 128 48.6 0-51.3-128-48.6zM236.1 410.1c12.8 4.9 26.9 4.9 39.7 0l60.1-22.8 0-51.3-77.2 29.3c-1.8 .7-3.8 .7-5.7 0l-77.2-29.3 0 51.3 60.1 22.8z"
  />
</svg>
