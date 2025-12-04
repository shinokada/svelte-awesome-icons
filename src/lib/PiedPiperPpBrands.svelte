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
    d="M205.3 174.6c0 21.1-14.2 38.1-31.7 38.1-7.1 0-12.8-1.2-17.2-3.7l0-68c4.4-2.7 10.1-4.2 17.2-4.2 17.5 0 31.7 16.9 31.7 37.8zm52.6 67c-7.1 0-12.8 1.5-17.2 4.2l0 68c4.4 2.5 10.1 3.7 17.2 3.7 17.4 0 31.7-16.9 31.7-37.8 0-21.1-14.3-38.1-31.7-38.1zM448 80l0 352c0 26.5-21.5 48-48 48L48 480c-26.5 0-48-21.5-48-48L0 80C0 53.5 21.5 32 48 32l352 0c26.5 0 48 21.5 48 48zM185 255.1c41 0 74.2-35.6 74.2-79.6S226 95.9 185 95.9c-12 0-24.1 3.2-34.6 8.8l-45.7 0 0 206.3 51.8-10.1 0-50.6c8.6 3.1 18.1 4.8 28.5 4.8zm158.4 25.3c0-44-33.2-79.6-73.9-79.6-3.2 0-6.4 .2-9.6 .7-3.7 12.5-10.1 23.8-19.2 33.4-13.8 15-32.2 23.8-51.8 24.8l0 156.3 51.8-10.1 0-50.6c8.6 3.2 18.2 4.7 28.7 4.7 40.8 0 74-35.6 74-79.6z"
  />
</svg>
