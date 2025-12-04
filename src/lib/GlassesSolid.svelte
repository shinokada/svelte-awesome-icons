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
    d="M143.3 96c-14 0-26.5 9.2-30.6 22.6L70.4 256 224 256c17.7 0 32 14.3 32 32l64 0c0-17.7 14.3-32 32-32l153.6 0-42.3-137.4C459.2 105.2 446.8 96 432.7 96L400 96c-17.7 0-32-14.3-32-32s14.3-32 32-32l32.7 0c42.1 0 79.4 27.5 91.8 67.8l45.4 147.5c4.1 13.2 6.1 26.9 6.1 40.7l0 96c0 53-43 96-96 96l-64 0c-53 0-96-43-96-96l0-32-64 0 0 32c0 53-43 96-96 96l-64 0c-53 0-96-43-96-96l0-96c0-13.8 2.1-27.5 6.1-40.7L51.5 99.8C63.9 59.5 101.1 32 143.3 32L176 32c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32.7 0zM64 320l0 64c0 17.7 14.3 32 32 32l64 0c17.7 0 32-14.3 32-32l0-64-128 0zm416 96c17.7 0 32-14.3 32-32l0-64-128 0 0 64c0 17.7 14.3 32 32 32l64 0z"
  />
</svg>
