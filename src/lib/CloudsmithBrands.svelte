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
    d="M512 227.6L512 284.5 284.4 512 227.6 512 0 284.4 0 227.6 227.6 0 284.5 0 512 227.6zm-256 162c17.8 .5 35.6-2.6 52.2-9.1s31.8-16.2 44.6-28.7 23-27.3 29.9-43.8 10.5-34.1 10.5-52-3.6-35.5-10.5-52-17.1-31.3-29.9-43.8-28-22.2-44.6-28.7-34.4-9.6-52.2-9.1c-17.8-.5-35.6 2.6-52.2 9.1s-31.8 16.3-44.6 28.7-23 27.3-29.9 43.8-10.5 34.1-10.5 52 3.6 35.5 10.5 52 17.1 31.3 29.9 43.8 28 22.2 44.6 28.7 34.4 9.6 52.2 9.1z"
  />
</svg>
