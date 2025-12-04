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
    d="M448 75.2l0 361.7c0 24.3-19 43.2-43.2 43.2l-361.6 0C19.3 480 0 461.4 0 436.8L0 75.2C0 51.1 18.8 32 43.2 32l361.7 0c24 0 43.1 18.8 43.1 43.2zM410.7 436.8l0-361.6c0-3-2.6-5.8-5.8-5.8l-9.3 0-110.3 74.6-61.3-49.9-61.2 49.9-110.3-74.7-9.3 0c-3.2 0-5.8 2.8-5.8 5.8l0 361.7c0 3 2.6 5.8 5.8 5.8l361.7 0c3.2 .1 5.8-2.7 5.8-5.8zM150.2 186l0 37-73.5 0 0-37 73.5 0zm0 74.4l0 37.3-73.5 0 0-37.3 73.5 0zm11.1-147.3l54-43.7-118.5 0 64.5 43.7zm210 72.9l0 37-196 0 0-37 196 0zm0 74.4l0 37.3-196 0 0-37.3 196 0zM286.7 113.1l64.5-43.7-118.4 0 53.9 43.7zM371.3 335l0 37.3-99.4 0 0-37.3 99.4 0z"
  />
</svg>
