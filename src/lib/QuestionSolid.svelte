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
    d="M64 160c0-53 43-96 96-96s96 43 96 96c0 42.7-27.9 78.9-66.5 91.4-28.4 9.2-61.5 35.3-61.5 76.6l0 24c0 17.7 14.3 32 32 32s32-14.3 32-32l0-24c0-1.7 .6-4.1 3.5-7.3 3-3.3 7.9-6.5 13.7-8.4 64.3-20.7 110.8-81 110.8-152.3 0-88.4-71.6-160-160-160S0 71.6 0 160c0 17.7 14.3 32 32 32s32-14.3 32-32zm96 352c22.1 0 40-17.9 40-40s-17.9-40-40-40-40 17.9-40 40 17.9 40 40 40z"
  />
</svg>
