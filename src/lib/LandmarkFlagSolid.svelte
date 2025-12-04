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
    d="M352-32L240-32c-8.8 0-16 7.2-16 16l0 144-176 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l16 0 0 224-51.2 38.4C4.7 460.4 0 469.9 0 480 0 497.7 14.3 512 32 512l448 0c17.7 0 32-14.3 32-32 0-10.1-4.7-19.6-12.8-25.6l-51.2-38.4 0-224 16 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-192 0 0-64 80 0c8.8 0 16-7.2 16-16l0-64c0-8.8-7.2-16-16-16zm48 224l0 224-64 0 0-224 64 0zm-112 0l0 224-64 0 0-224 64 0zm-112 0l0 224-64 0 0-224 64 0z"
  />
</svg>
