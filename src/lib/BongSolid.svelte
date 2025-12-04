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
    d="M448.5 384c0 41.5-13.1 79.9-35.5 111.3-7.9 11.1-21.2 16.7-34.8 16.7l-243.3 0c-13.7 0-26.9-5.6-34.8-16.7-22.4-31.4-35.5-69.8-35.5-111.3 0-71.1 38.6-133.1 96-166.3l0-153.7c-17.7 0-32-14.3-32-32s14.3-32 32-32l192 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l0 153.7c14.2 8.2 27.2 18.2 38.8 29.6l39.3-39.3-7-7c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0c16 16 32 32 48 48 9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-7-7-43.3 43.3c17.3 28.9 27.3 62.6 27.3 98.8zM288.5 64l-64 0 0 190.6-32 18.5c-19.5 11.3-35.7 27.5-46.9 46.9l221.8 0c-11.2-19.4-27.4-35.6-46.9-46.9l-32-18.5 0-190.6z"
  />
</svg>
