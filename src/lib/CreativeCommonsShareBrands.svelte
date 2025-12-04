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
    d="M255.6 8C397.4 8 504 118.1 504 256 504 403.1 385.5 504 255.6 504 121.6 504 8 394.5 8 256 8 123.1 112.7 8 255.6 8zm.8 44.7c-118.2 0-203.7 97.9-203.7 203.3 0 109.8 91.2 202.8 203.7 202.8 103.2 0 202.8-81.1 202.8-202.8 .1-113.8-90.2-203.3-202.8-203.3zm101 132.4c7.8 0 13.7 6.1 13.7 13.7l0 182.5c0 7.7-6.1 13.7-13.7 13.7l-135.1 0c-7.7 0-13.7-6-13.7-13.7l0-54-54 0c-7.8 0-13.7-6-13.7-13.7l0-182.5c0-8.2 6.6-12.7 12.4-13.7l136.4 0c7.7 0 13.7 6 13.7 13.7l0 54 54 0zM167.9 300.3l40.7 0 0-101.4c0-7.4 5.8-12.6 12-13.7l55.8 0 0-40.3-108.5 0 0 155.4zm176.2-88.1l-108.5 0 0 155.4 108.5 0 0-155.4z"
  />
</svg>
