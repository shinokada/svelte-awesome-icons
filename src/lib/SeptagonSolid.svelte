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
    d="M267.4-31.5c15.9-5.5 33.5-4.6 48.8 2.7l172.4 83 6.3 3.5c14.2 9 24.5 23.3 28.3 39.9l42.6 186.5 1.2 7.2c1.6 14.3-1.7 28.8-9.4 41.1l-4.2 5.9-119.3 149.6c-12.1 15.2-30.6 24.1-50 24.1l-191.3 0c-19.5 0-37.9-8.9-50-24.1L23.5 338.4c-12.1-15.2-16.7-35.2-12.3-54.2l42.6-186.5 2-7c5.6-15.9 17.2-29 32.6-36.4l172.4-83 6.7-2.7z"
  />
</svg>
