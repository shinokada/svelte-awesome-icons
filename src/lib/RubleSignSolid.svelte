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
    d="M112 32C94.3 32 80 46.3 80 64l0 208-40 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l40 0 0 48-40 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l40 0 0 32c0 17.7 14.3 32 32 32s32-14.3 32-32l0-32 152 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-152 0 0-48 112 0c79.5 0 144-64.5 144-144S335.5 32 256 32L112 32zM256 256l-112 0 0-160 112 0c44.2 0 80 35.8 80 80s-35.8 80-80 80z"
  />
</svg>
