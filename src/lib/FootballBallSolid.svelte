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
    d="M261.1 22.6c-89 18-150.5 63.4-190 123.9-23.3 35.6-38.1 75.3-46.7 115.5L251.9 489.4c89-18 150.5-63.4 190.1-123.9 23.3-35.6 38.1-75.3 46.7-115.5L261.1 22.6zm236 168.1c3.2-42.3 .7-83.3-4.8-118.7-4.4-27.8-26.8-48-53.1-51.6-43-5.9-82.2-7.5-117.8-5.4L497.1 190.6zM191.7 497.1L15.9 321.4c-3.2 42.3-.7 83.3 4.8 118.7 4.4 27.8 26.8 48 53.1 51.6 43 5.9 82.2 7.5 117.8 5.4zM271.5 143c9.4-9.4 24.6-9.4 33.9 0l64 64c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9zm-64 64c9.4-9.4 24.6-9.4 33.9 0l64 64c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9zm-64 64c9.4-9.4 24.6-9.4 33.9 0l64 64c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9z"
  />
</svg>
