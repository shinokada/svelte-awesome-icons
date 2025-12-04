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
    d="M416-32c-17.7 0-32 14.3-32 32s14.3 32 32 32l50.7 0-58.7 58.7-17.4-17.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l17.4 17.4-23 23c-28.4-19.5-62.7-31-99.8-31-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176c0-37-11.4-71.4-31-99.8l23-23 17.4 17.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L453.3 136 512 77.3 512 128c0 17.7 14.3 32 32 32s32-14.3 32-32L576 0c0-17.7-14.3-32-32-32L416-32zM128 304a112 112 0 1 1 224 0 112 112 0 1 1 -224 0z"
  />
</svg>
