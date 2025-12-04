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
    d="M0 56C0 25.1 25.1 0 56 0L437.6 0c21.3 0 36.6 20.3 30.8 40.8L457.1 80 344 80c-13.3 0-24 10.7-24 24s10.7 24 24 24l99.4 0-18.3 64-81.1 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l67.4 0-27.4 96-256 0-9.1-96-62.9 0c-30.9 0-56-25.1-56-56L0 56zM114.3 192L100.6 48 56 48c-4.4 0-8 3.6-8 8l0 128c0 4.4 3.6 8 8 8l58.3 0zM136 384l240 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-240 0c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40zm120 88a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"
  />
</svg>
