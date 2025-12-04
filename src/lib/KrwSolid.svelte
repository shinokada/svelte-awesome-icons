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
    d="M62.4 53.9C56.8 37.1 38.7 28.1 21.9 33.6S-3.9 57.4 1.7 74.1L56.9 240 32 240c-13.3 0-24 10.7-24 24s10.7 24 24 24l40.9 0 56.7 170.1c4.5 13.5 17.4 22.4 31.6 21.9s26.4-10.4 29.8-24.2L233 288 279 288 321 455.8c3.4 13.8 15.6 23.7 29.8 24.2s27.1-8.4 31.6-21.9L439.1 288 480 288c13.3 0 24-10.7 24-24s-10.7-24-24-24l-24.9 0 55.3-165.9c5.6-16.8-3.5-34.9-20.2-40.5s-34.9 3.5-40.5 20.2l-62 186.1-54.6 0-45.9-183.8C283.5 42 270.7 32 256 32s-27.5 10-31 24.2L179 240 124.4 240 62.4 53.9zm78 234.1l26.6 0-11.4 45.6-15.2-45.6zM245 240l11-44.1 11 44.1-22 0zm100 48l26.6 0-15.2 45.6-11.4-45.6z"
  />
</svg>
