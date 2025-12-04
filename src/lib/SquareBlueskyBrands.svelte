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
    d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM224 247.4c14.5-30 54-85.8 90.7-113.3 26.5-19.9 69.3-35.2 69.3 13.7 0 9.8-5.6 82.1-8.9 93.8-11.4 40.8-53 51.2-90 44.9 64.7 11 81.2 47.5 45.6 84-67.5 69.3-97-17.4-104.6-39.6l-.3-.9c-.9-2.6-1.4-4.1-1.8-4.1s-.9 1.5-1.8 4.1c-.1 .3-.2 .6-.3 .9-7.6 22.2-37.1 108.8-104.6 39.6-35.5-36.5-19.1-73 45.6-84-37 6.3-78.6-4.1-90-44.9-3.3-11.7-8.9-84-8.9-93.8 0-48.9 42.9-33.5 69.3-13.7 36.7 27.5 76.2 83.4 90.7 113.3z"
  />
</svg>
