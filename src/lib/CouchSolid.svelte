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
  viewBox="0 0 640 512"
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <path
    d="M144 272C144 224.7 109.8 185.4 64.8 177.5 72 113.6 126.2 64 192 64l256 0c65.8 0 120 49.6 127.2 113.5-45 8-79.2 47.2-79.2 94.5l0 32-352 0 0-32zM0 384L0 272c0-26.5 21.5-48 48-48s48 21.5 48 48l0 80 448 0 0-80c0-26.5 21.5-48 48-48s48 21.5 48 48l0 112c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64z"
  />
</svg>
