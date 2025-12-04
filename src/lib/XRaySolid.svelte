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
    d="M0 64C0 46.3 14.3 32 32 32l448 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l0 320c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 480c-17.7 0-32-14.3-32-32s14.3-32 32-32L32 96C14.3 96 0 81.7 0 64zm280 56c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 16-64 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l64 0 0 48-80 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l80 0 0 48-64 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l64 0 0 16c0 13.3 10.7 24 24 24s24-10.7 24-24l0-16 64 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-64 0 0-48 80 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-80 0 0-48 64 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-64 0 0-16z"
  />
</svg>
