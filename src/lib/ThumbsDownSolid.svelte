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
    d="M384 32c26.5 0 48 21.5 48 48 0 6.3-1.3 12.2-3.4 17.7 20.4 5.5 35.4 24.1 35.4 46.3 0 9.1-2.6 17.6-7 24.9 22.2 4.2 39 23.7 39 47.1 0 19.7-11.9 36.6-28.9 44 17 7.4 28.9 24.3 28.9 44 0 26.5-21.5 48-48 48l-160 0 28.2 70.4c2.5 6.3 3.8 13.1 3.8 19.9l0 4.2c0 27.3-22.1 49.4-49.4 49.4-18.7 0-35.8-10.6-44.2-27.3L170.1 356.3c-6.7-13.3-10.1-28-10.1-42.9l0-186.6c0-19.4 8.9-37.8 24-50l12.2-9.7C224.6 44.4 259.8 32 296.1 32L384 32zM80 96c17.7 0 32 14.3 32 32l0 256c0 17.7-14.3 32-32 32l-48 0c-17.7 0-32-14.3-32-32L0 128c0-17.7 14.3-32 32-32l48 0z"
  />
</svg>
