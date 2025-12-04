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
    d="M122.6 46.3c-7.8-11.7-22.4-17-35.9-12.9S64 49.9 64 64l0 192-32 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l32 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 89.5 0 107.8 161.8c7.8 11.7 22.4 17 35.9 12.9S384 462.1 384 448l0-144 32 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-32 0 0-192c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 192-57.5 0-139.8-209.7zM294.5 304l25.5 0 0 38.3-25.5-38.3zM185.5 256l-57.5 0 0-86.3 57.5 86.3z"
  />
</svg>
