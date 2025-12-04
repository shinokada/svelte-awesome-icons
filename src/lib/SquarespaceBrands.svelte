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
    d="M186.1 343.3c-9.7 9.7-9.7 25.3 0 34.9s25.3 9.6 34.9 0L378.3 221.1c19.3-19.3 50.6-19.3 69.9 0s19.3 50.6 0 69.9L294 445.1c19.3 19.3 50.5 19.3 69.8 0l0 0 119.3-119.2c38.6-38.6 38.6-101.1 0-139.7-38.6-38.6-101.2-38.6-139.7 0L186.1 343.3zM430.7 238.5c-9.7-9.7-25.3-9.7-34.9 0L238.5 395.7c-19.3 19.3-50.5 19.3-69.8 0l0 0c-9.6-9.6-25.3-9.7-34.9 0l0 0c-9.7 9.6-9.7 25.3 0 34.9l0 0c38.6 38.6 101.1 38.6 139.7 0L430.7 273.5c9.6-9.7 9.6-25.3 0-34.9zm-262 87.3L325.9 168.7c9.6-9.6 9.6-25.3 0-34.9-9.6-9.6-25.3-9.6-34.9 0L133.7 290.9c-19.3 19.3-50.6 19.3-69.9 0l0 0c-19.3-19.3-19.3-50.5 0-69.8l0 0 154.2-154.2c-19.3-19.3-50.5-19.3-69.8 0l0 0-119.2 119.3c-38.6 38.6-38.6 101.1 0 139.7 38.6 38.6 101.1 38.6 139.7 0zM81.3 273.5c9.6 9.6 25.3 9.6 34.9 0L273.5 116.3c19.3-19.3 50.6-19.3 69.8 0l0 0c9.7 9.6 25.3 9.6 34.9 0s9.6-25.3 0-34.9c-38.6-38.6-101.1-38.6-139.7 0L81.3 238.5c-9.6 9.6-9.6 25.3 0 34.9l0 0z"
  />
</svg>
