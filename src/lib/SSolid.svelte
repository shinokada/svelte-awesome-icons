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
    d="M0 157.5C0 88.2 56.2 32 125.5 32L272 32c17.7 0 32 14.3 32 32s-14.3 32-32 32L125.5 96c-34 0-61.5 27.5-61.5 61.5 0 31 23.1 57.2 53.9 61L210.1 230C272.9 237.9 320 291.2 320 354.5 320 423.8 263.8 480 194.5 480L48 480c-17.7 0-32-14.3-32-32s14.3-32 32-32l146.5 0c34 0 61.5-27.5 61.5-61.5 0-31-23.1-57.2-53.9-61L109.9 282C47.1 274.1 0 220.8 0 157.5z"
  />
</svg>
