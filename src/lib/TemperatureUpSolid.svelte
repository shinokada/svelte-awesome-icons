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
    d="M64.5 96c0-53 43-96 96-96s96 43 96 96l0 164.7c29.5 26.4 48 64.7 48 107.3 0 79.5-64.5 144-144 144s-144-64.5-144-144c0-42.6 18.5-81 48-107.3L64.5 96zm96 336c35.3 0 64-28.7 64-64 0-26.9-16.5-49.9-40-59.3l0-212.7c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 212.7c-23.5 9.5-40 32.5-40 59.3 0 35.3 28.7 64 64 64zM439.1 9.4l64 64c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0l-9.4-9.4 0 178.7c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-178.7-9.4 9.4c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l64-64c6-6 14.1-9.4 22.6-9.4s16.6 3.4 22.6 9.4z"
  />
</svg>
