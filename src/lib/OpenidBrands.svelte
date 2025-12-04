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
    d="M271.5 432l-68 32C88.5 453.7 0 392.5 0 318.2 0 246.7 82.5 187.2 191.7 173.9l0 43c-71.5 12.5-124 53-124 101.3 0 51 58.5 93.3 135.7 103l0-340 68-33.2 0 384 .1 0zM448 291l-131.3-28.5 36.8-20.7c-19.5-11.5-43.5-20-70-24.8l0-43c46.2 5.5 87.7 19.5 120.3 39.3l35-19.8 9.2 97.5z"
  />
</svg>
