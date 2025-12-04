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
    d="M447.6 175c-31.6-74.6-105.5-127-191.6-127-22.1 0-43.4 3.5-63.4 9.8-.4 2-.6 4.1-.6 6.2l0 73.4c0 12.5 10.1 22.6 22.6 22.6 6 0 11.8-2.4 16-6.6l16-16c6-6 14.1-9.4 22.6-9.4l5.5 0c28.5 0 42.8 34.5 22.6 54.6-6 6-14.1 9.4-22.6 9.4l-61.5 0c-8.5 0-16.6 3.4-22.6 9.4l-21.3 21.3c-6 6-9.4 14.1-9.4 22.6l0 42.7c0 17.7 14.3 32 32 32l32 0c17.7 0 32 14.3 32 32l0 32c0 17.7 14.3 32 32 32l2.7 0c8.5 0 16.6-3.4 22.6-9.4l29.3-29.3c6-6 9.4-14.1 9.4-22.6l0-18.7c0-8.8 7.2-16 16-16s16-7.2 16-16l0-34.7c0-8.5-3.4-16.6-9.4-22.6l-16-16c-4.2-4.2-6.6-10-6.6-16 0-12.5 10.1-22.6 22.6-22.6l45 0c12.4 0 22.7-7.1 28-17zM0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0z"
  />
</svg>
