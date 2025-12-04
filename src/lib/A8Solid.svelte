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
    d="M304 160c0-70.7-57.3-128-128-128l-32 0c-70.7 0-128 57.3-128 128 0 34.6 13.7 66 36 89-31.5 23.3-52 60.8-52 103 0 70.7 57.3 128 128 128l64 0c70.7 0 128-57.3 128-128 0-42.2-20.5-79.7-52-103 22.3-23 36-54.4 36-89zM176.1 288l15.9 0c35.3 0 64 28.7 64 64s-28.7 64-64 64l-64 0c-35.3 0-64-28.7-64-64s28.7-64 64-64l48.1 0zm0-64L144 224c-35.3 0-64-28.7-64-64 0-35.3 28.7-64 64-64l32 0c35.3 0 64 28.7 64 64 0 35.3-28.6 64-64 64z"
  />
</svg>
