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
  viewBox="0 0 576 512"
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <path
    d="M32 64C19.1 64 7.4 71.8 2.4 83.8S.2 109.5 9.4 118.6L192 301.3 192 416c0 8.5 3.4 16.6 9.4 22.6l64 64c2.5 2.5 5.3 4.5 8.3 6-21.2-30.9-33.6-68.3-33.6-108.6 0-99.4 75.5-181.1 172.3-191l90.4-90.4c9.2-9.2 11.9-22.9 6.9-34.9S492.9 64 480 64L32 64zM576 400a144 144 0 1 0 -288 0 144 144 0 1 0 288 0zM416 320c0-8.8 7.2-16 16-16s16 7.2 16 16l0 8 16 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-45.8 0c-5.6 0-10.2 4.6-10.2 10.2 0 4.9 3.5 9.1 8.3 10l45 8.2c20 3.6 34.6 21.1 34.6 41.5 0 23.3-18.9 42.2-42.2 42.2l-5.8 0 0 8c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-8-16 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l53.8 0c5.6 0 10.2-4.6 10.2-10.2 0-4.9-3.5-9.1-8.3-10l-45-8.2c-20-3.6-34.6-21.1-34.6-41.5 0-22.6 17.7-41 40-42.1l0-8.1z"
  />
</svg>
