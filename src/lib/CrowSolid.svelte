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
    d="M456.5 0c-48.6 0-88 39.4-88 88l0 36-355.2 266.4C-.8 401-3.7 421 6.9 435.2s30.6 17 44.8 6.4l76.8-57.6 131.3 0 46.6 113.1 1 2.2c5.7 10.7 18.8 15.5 30.3 10.8s17.3-17.3 13.9-29l-.8-2.3-39.1-94.9 40.9 0c1.1 0 2.2 0 3.2 0l46.6 113.2 1 2.2c5.7 10.7 18.8 15.5 30.3 10.8s17.3-17.3 13.9-29l-.8-2.3-42-102C485.3 354.1 544.5 280 544.5 192l0-72 80.5-20.1c8.6-2.1 13.8-10.8 11.6-19.4-7.1-28.5-32.7-48.5-62.1-48.5l-50.1 0C508.2 12.5 483.8 0 456.5 0zm0 64a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"
  />
</svg>
