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
    d="M256 0c-139.9 0-254 112.7-256 252.1-2 141.5 112.9 258.7 254.5 259.5 43.7 .3 85.9-10.4 123.3-30.7 3.6-2 4.2-7 1.1-9.7l-24-21.2c-4.9-4.3-11.8-5.5-17.8-3-26.1 11.1-54.5 16.8-83.7 16.4-114.4-1.5-206.9-96.6-205.1-211 1.8-112.9 94.3-204.2 207.7-204.2l207.7 0 0 369-117.8-104.7c-3.8-3.4-9.7-2.7-12.7 1.3-18.9 25-49.7 40.6-83.9 38.2-47.5-3.3-85.9-41.5-89.5-88.9-4.2-56.6 40.6-103.9 96.3-103.9 50.4 0 91.9 38.8 96.2 88 .4 4.4 2.4 8.5 5.7 11.4l30.7 27.2c3.5 3.1 9 1.2 9.9-3.4 2.2-11.8 3-24.2 2.1-36.8-4.9-72-63.3-130-135.4-134.4-82.7-5.1-151.8 59.5-154 140.6-2.1 78.9 62.6 147 141.6 148.7 33 .7 63.6-9.6 88.3-27.6L495 509.4c6.6 5.8 17 1.2 17-7.7l0-492c0-5.4-4.4-9.7-9.7-9.7L256 0z"
  />
</svg>
