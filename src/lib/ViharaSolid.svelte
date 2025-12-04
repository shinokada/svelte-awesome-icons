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
    d="M273.6-3.2c8.5-6.4 20.3-6.4 28.8 0L443.2 102.4c8.3 6.2 18.4 9.6 28.8 9.6 13.3 0 24 10.7 24 24s-10.7 24-24 24l-24 0 0 48 58.7 64 13.3 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-8 0 0 48 24.4 32 15.6 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-40 0 0 32c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-32-128 0 0 32c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-32-128 0 0 32c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-32-40 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l22.1 0 17.9-32 0-48-8 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l13.3 0 58.7-64 0-48-24 0c-13.3 0-24-10.7-24-24s10.7-24 24-24c10.4 0 20.5-3.4 28.8-9.6L273.6-3.2zM128 368l320 0 0-48-320 0 0 48zM384 160l-192 0 0 48 192 0 0-48z"
  />
</svg>
