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
  viewBox="0 0 320 512"
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <path
    d="M80 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l112 0c35.3 0 64-28.7 64-64s-28.7-64-64-64L32 96C14.3 96 0 81.7 0 64S14.3 32 32 32l160 0c70.7 0 128 57.3 128 128 0 38.2-16.8 72.5-43.3 96 26.6 23.5 43.3 57.8 43.3 96 0 70.7-57.3 128-128 128L32 480c-17.7 0-32-14.3-32-32s14.3-32 32-32l160 0c35.3 0 64-28.7 64-64s-28.7-64-64-64L80 288z"
  />
</svg>
