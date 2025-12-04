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
  viewBox="0 0 640 512"
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <path
    d="M521.3 128C586.9 128 640 181.1 640 246.6S586.9 365.2 521.3 365.2c-42.5 0-79.7-22.3-100.7-55.8 11.4-18.2 18-39.7 18-62.8s-6.6-44.6-18-62.8l.8-1.2c20.8-32.3 56.8-53.9 97.9-54.6l2 0zM320 128c42.5 0 79.7 22.3 100.7 55.8-11.4 18.2-18 39.7-18 62.8s6.6 44.6 18 62.8l-.8 1.2c-20.8 32.3-56.8 53.9-97.9 54.6l-2 0c-42.5 0-79.7-22.3-100.7-55.8 11.4-18.2 18-39.7 18-62.8s-6.6-44.6-18-62.8l.8-1.2c20.8-32.3 56.8-53.9 97.9-54.6l2 0zm-201.3 0c42.5 0 79.7 22.3 100.7 55.8-11.4 18.2-18 39.7-18 62.8s6.6 44.6 18 62.8l-.8 1.2c-20.8 32.3-56.8 53.9-97.9 54.6l-2 0C53.1 365.1 0 312.1 0 246.6S53.1 128 118.7 128z"
  />
</svg>
