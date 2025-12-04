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
    d="M214 169.1C214 279.5 153 374.5 66.4 416.5 30 373.2 8 317.7 8 256.6 8 133.9 97.1 32.2 214 12.5l0 156.6zM255 504c-42.9 0-83.3-11-118.5-30.4 57.2-36.1 103.4-90.7 118.5-154.6 15.5 63.9 61.7 118.5 118.8 154.7-35.1 19.3-75.5 30.3-118.8 30.3zm190.6-87.5C359 374.5 298 279.6 298 169.1l0-156.6c116.9 19.7 206 121.4 206 244.1 0 61.1-22 116.6-58.4 159.9z"
  />
</svg>
