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
    d="M384 348c-1.8 10.7-13.8 110-15.5 132-117.9-4.3-219.9-4.7-368.5 0l0-25.5c45.5-8.9 60.6-8 61-35.2 1.8-72.3 3.5-244.1 0-322-1-28.5-12.1-26.8-61-36L0 35.8c73.9 2.4 255.9 8.6 363-3.8-3.5 38.2-7.8 126.5-7.8 126.5l-23.2 0C320.9 115.7 313.2 68 277.3 68l-137 0c-10.2 0-10.7 3.5-10.7 9.8l0 163.8c58 .5 88.5-2.5 88.5-2.5 29.8-1 27.6-8.5 40.7-65.3l25.8 0c-4.4 101.4-3.9 61.8-1.8 160.3L257 334c-9.2-40.1-9.1-61-39.5-61.5 0 0-21.5-2-88-2l0 139c0 26 14.3 38.3 44.3 38.3l89.3 0c63.6 0 66.6-25 98.7-99.8l22.2 0z"
  />
</svg>
