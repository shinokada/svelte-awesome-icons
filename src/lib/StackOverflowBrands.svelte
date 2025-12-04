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
  viewBox="0 0 384 512"
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <path
    d="M291 311l-195.7-41.3-8.2 39.3 195.7 41 8.2-39zm51-87L188.5 95.7 163 126.5 316.5 254.8 342 224zm-31.2 39.7L129.5 179 112.8 215.5 294 300 310.8 263.7zM262.3 32l-32 24 119.3 160.3 32-24-119.3-160.3zm20.5 328l-200 0 0 39.7 200 0 0-39.7zm39.7 80l-279.5 0 0-120-40 0 0 160 359.5 0 0-160-40 0 0 120z"
  />
</svg>
