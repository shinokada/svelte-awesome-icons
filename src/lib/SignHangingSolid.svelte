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
    d="M96 0c17.7 0 32 14.3 32 32l0 32 352 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-352 0 0 352c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-352-32 0C14.3 128 0 113.7 0 96S14.3 64 32 64l32 0 0-32C64 14.3 78.3 0 96 0zM208 176l240 0c17.7 0 32 14.3 32 32l0 144c0 17.7-14.3 32-32 32l-240 0c-17.7 0-32-14.3-32-32l0-144c0-17.7 14.3-32 32-32z"
  />
</svg>
