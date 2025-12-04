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
    d="M136.5 294.2l58.8 22.9c9.1-36.8 25.4-61.1 55-61.1 49.4 0 71.4 63.6 142.4 63.6 15.6 0 35.9-2.8 55.3-13.3l0 61.7c0 61.8-50.4 112-112.3 112L0 480 41.8 424 0 368 41.7 312 0 256.1 41.8 200.1 0 144.1 41.8 88 0 32 335.7 32C397.6 32 448 82.3 448 144.1l0 51.3c-9.2 36.3-25.9 60.6-55 60.6-49.6 0-71.6-63.5-142.4-63.5-35.9 0-95.2 14.6-114.1 101.6l0 .1z"
  />
</svg>
