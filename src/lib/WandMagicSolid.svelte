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
    d="M398.5 12.2l-88.2 88.2 101.3 101.3 88.2-88.2C507.6 105.6 512 95 512 84s-4.4-21.6-12.2-29.5L457.5 12.2C449.6 4.4 439 0 428 0s-21.6 4.4-29.5 12.2zM276.4 134.3L12.2 398.5C4.4 406.4 0 417 0 428s4.4 21.6 12.2 29.5l42.3 42.3C62.4 507.6 73 512 84 512s21.6-4.4 29.5-12.2L377.7 235.6 276.4 134.3z"
  />
</svg>
