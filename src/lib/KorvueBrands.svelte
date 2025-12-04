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
    d="M387.6 34l-327 0C27.9 34 1.1 60.8 1.1 93.5l0 327.1c0 32.6 26.8 59.4 59.5 59.4l327.1 0c33 0 59.5-26.8 59.5-59.5l0-327C447.1 60.8 420.3 34 387.6 34zM88.2 120.8l96 0 0 116 61.8-116 110.9 0-81.2 132-187.5 0 0-132zM250 392.9l-65.7-113.6 0 113.6-96 0 0-130.8 191.5 0 88.6 130.8-118.4 0z"
  />
</svg>
