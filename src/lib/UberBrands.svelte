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
    d="M414.1 32L33.9 32C15.2 32 0 47.2 0 65.9L0 446c0 18.8 15.2 34 33.9 34L414 480c18.7 0 33.9-15.2 33.9-33.9l0-380.2C448 47.2 432.8 32 414.1 32zM237.6 391.1C163 398.6 96.4 344.2 88.9 269.6l94.4 0 0 20.4c0 3.7 3 6.8 6.8 6.8l67.9 0c3.7 0 6.8-3 6.8-6.8l0-67.9c0-3.7-3-6.8-6.8-6.8l-67.9 0c-3.7 0-6.8 3-6.8 6.8l0 20.4-94.4 0c7-69.4 65.4-122.2 135.1-122.2s128.1 52.8 135.1 122.2c7.5 74.5-46.9 141.1-121.5 148.6z"
  />
</svg>
