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
    d="M447.5 174.6c8.8-8.4 22.7-8.9 32.2-.8s11 21.9 4.1 31.9l-1.5 1.9-23 26.7c26.7 13.5 46.3 39.1 51.4 69.6l25.3 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-24 0 0 32 24 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-25.3 0c-7.6 45.4-47.1 80-94.7 80s-87-34.6-94.7-80L296 432c-13.3 0-24-10.7-24-24s10.7-24 24-24l24 0 0-32-24 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l25.3 0c5.1-30.5 24.7-56.1 51.4-69.6l-22.9-26.7c-8.6-10.1-7.5-25.2 2.6-33.8s25.2-7.5 33.8 2.6l29.8 34.8 29.8-34.8 1.7-1.8zm-256-192c8.8-8.4 22.7-8.9 32.2-.8s11 21.9 4.1 31.9l-1.5 1.9-23 26.7C230 55.9 249.5 81.5 254.7 112l25.3 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-24 0 0 32 24 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-25.3 0c-7.6 45.4-47.1 80-94.7 80s-87-34.6-94.7-80L40 240c-13.3 0-24-10.7-24-24s10.7-24 24-24l24 0 0-32-24 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l25.3 0C70.5 81.5 90 55.9 116.7 42.4L93.8 15.6C85.2 5.6 86.3-9.6 96.4-18.2s25.2-7.5 33.8 2.6l29.8 34.8 29.8-34.8 1.7-1.8z"
  />
</svg>
