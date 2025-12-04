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
    d="M64 32C28.7 32 0 60.7 0 96l0 80c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-80c0-35.3-28.7-64-64-64L64 32zm0 272c-35.3 0-64 28.7-64 64l0 48c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-48c0-35.3-28.7-64-64-64L64 304zm80-160c0-26.5 21.5-48 48-48s48 21.5 48 48l0 24c0 13.3-10.7 24-24 24l-48 0c-13.3 0-24-10.7-24-24l0-24zm128 0c0-26.5 21.5-48 48-48s48 21.5 48 48l0 24c0 13.3-10.7 24-24 24l-48 0c-13.3 0-24-10.7-24-24l0-24zM80 112c17.7 0 32 14.3 32 32l0 24c0 13.3-10.7 24-24 24l-16 0c-13.3 0-24-10.7-24-24l0-24c0-17.7 14.3-32 32-32zm320 32c0-17.7 14.3-32 32-32s32 14.3 32 32l0 24c0 13.3-10.7 24-24 24l-16 0c-13.3 0-24-10.7-24-24l0-24zM48 384l0-16c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 16c0 17.7-14.3 32-32 32s-32-14.3-32-32zm144 48c-26.5 0-48-21.5-48-48l0-16c0-8.8 7.2-16 16-16l64 0c8.8 0 16 7.2 16 16l0 16c0 26.5-21.5 48-48 48zm128 0c-26.5 0-48-21.5-48-48l0-16c0-8.8 7.2-16 16-16l64 0c8.8 0 16 7.2 16 16l0 16c0 26.5-21.5 48-48 48zm112-16c-17.7 0-32-14.3-32-32l0-16c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 16c0 17.7-14.3 32-32 32z"
  />
</svg>
