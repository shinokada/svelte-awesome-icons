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
    d="M297.4 9.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0l-1.4-1.4-158.6 158.6c-18 18-42.4 28.1-67.9 28.1l-59 0c-8.5 0-16.6 3.4-22.6 9.4-61.7 61.7-92.8 92.8-93.3 93.3-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l16-16 0 0 77.3-77.3c6-6 9.4-14.1 9.4-22.6l0-59c0-25.5 10.1-49.9 28.1-67.9L298.7 56 297.4 54.6c-12.5-12.5-12.5-32.8 0-45.3zM344 101.3L261.3 184 328 250.7 410.7 168 344 101.3zm-128 128l-30.6 30.6c-6 6-9.4 14.1-9.4 22.6l0 53.5 53.5 0c8.5 0 16.6-3.4 22.6-9.4L282.7 296 216 229.3z"
  />
</svg>
