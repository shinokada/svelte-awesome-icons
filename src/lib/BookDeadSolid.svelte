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
    d="M96 512l320 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-66.7c18.6-6.6 32-24.4 32-45.3l0-288c0-26.5-21.5-48-48-48L96 0C43 0 0 43 0 96L0 416c0 53 43 96 96 96zM64 416c0-17.7 14.3-32 32-32l256 0 0 64-256 0c-17.7 0-32-14.3-32-32zM272 163.2l0 12.8c0 8.8-7.2 16-16 16l-64 0c-8.8 0-16-7.2-16-16l0-12.8c-19.4-11.7-32-30.3-32-51.2 0-35.3 35.8-64 80-64s80 28.7 80 64c0 20.9-12.6 39.5-32 51.2zM208 112a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm48 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32zm74.2 95.7c4.6 10.1 .1 21.9-9.9 26.5l-47.9 21.8 47.9 21.8c10.1 4.6 14.5 16.4 9.9 26.5s-16.4 14.5-26.5 9.9L224 294 144.3 330.2c-10.1 4.6-21.9 .1-26.5-9.9s-.1-21.9 9.9-26.5l47.9-21.8-47.9-21.8c-10.1-4.6-14.5-16.4-9.9-26.5s16.4-14.5 26.5-9.9L224 250 303.7 213.8c10.1-4.6 21.9-.1 26.5 9.9z"
  />
</svg>
