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
    d="M296 192c-21.1-12.1-42.3-24.2-72-29.3l0-140.3C257.7 13 311.4 0 352 0 448 0 576 48 576 128s-119.6 96-176 96c-48 0-76-16-104-32zM128 32l48 0 0 128-48 0c-35.3 0-64-28.7-64-64s28.7-64 64-64zM232 320c28-16 56-32 104-32 56.4 0 176 16 176 96S384 512 288 512c-40.5 0-94.3-13-128-22.4l0-140.3c29.7-5.2 50.9-17.3 72-29.4zM64 480c-35.3 0-64-28.7-64-64s28.7-64 64-64l48 0 0 128-48 0z"
  />
</svg>
