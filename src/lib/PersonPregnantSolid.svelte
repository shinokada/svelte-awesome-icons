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
  viewBox="0 0 384 512"
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <path
    d="M192 80a56 56 0 1 0 0-112 56 56 0 1 0 0 112zm80 321.2c8.6-4.5 16.8-10 24.3-16.5l4-3.4c22.6-19.4 35.7-47.7 35.7-77.6 0-35.9-18.8-69.1-49.6-87.6l-30.4-18.2 0-1.8c0-46.5-37.7-84.1-84.1-84.1-28.1 0-54.4 14.1-70 37.5L21.4 270.2c-9.8 14.7-5.8 34.6 8.9 44.4s34.6 5.8 44.4-8.9l29-43.5-30.5 113.5c-2.6 9.6-.6 19.9 5.5 27.8S94 416 104 416l8 0 0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96 32 0 0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-110.8z"
  />
</svg>
