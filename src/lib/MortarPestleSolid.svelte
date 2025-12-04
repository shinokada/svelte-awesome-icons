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
    d="M504.3 11.1C493.3-1.6 474.5-3.7 461 6.2L252.3 160 397.3 160 502.6 54.6c11.8-11.8 12.6-30.8 1.6-43.5zM32 192c-17.7 0-32 14.3-32 32s14.3 32 32 32c0 82.5 43.4 147.7 123.9 176.2-11.1 13.9-19.4 30.3-23.9 48.1-4.4 17.1 10.4 31.7 28.1 31.7l192 0c17.7 0 32.4-14.6 28.1-31.7-4.5-17.8-12.8-34.1-23.9-48.1 80.5-28.6 123.9-93.7 123.9-176.2 17.7 0 32-14.3 32-32s-14.3-32-32-32L32 192z"
  />
</svg>
