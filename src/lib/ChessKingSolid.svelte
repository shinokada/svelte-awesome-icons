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
    d="M224-32c17.7 0 32 14.3 32 32l0 32 32 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0 0 64 153.8 0c21.1 0 38.2 17.1 38.2 38.2 0 6.4-1.6 12.7-4.7 18.3L352 384 408.2 454.3c5 6.3 7.8 14.1 7.8 22.2 0 19.6-15.9 35.5-35.5 35.5L67.5 512c-19.6 0-35.5-15.9-35.5-35.5 0-8.1 2.7-15.9 7.8-22.2L96 384 4.7 216.6C1.6 210.9 0 204.6 0 198.2 0 177.1 17.1 160 38.2 160l153.8 0 0-64-32 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l32 0 0-32c0-17.7 14.3-32 32-32z"
  />
</svg>
