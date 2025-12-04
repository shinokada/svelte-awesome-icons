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
  viewBox="0 0 384 512"
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <path
    d="M192 256a112 112 0 1 0 0 224 112 112 0 1 0 0-224zM16 368c0-86.3 62.1-158.1 144.1-173.1-.1-.9-.1-1.9-.1-2.9l0-16-32 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l32 0 0-61.4-28 22.4c-13.8 11-33.9 8.8-45-5s-8.8-33.9 5-45l80-64c11.7-9.3 28.3-9.3 40 0l80 64c13.8 11 16 31.2 5 45s-31.2 16-45 5l-28-22.4 0 61.4 32 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0 0 16c0 1 0 1.9-.1 2.9 82 15 144.1 86.8 144.1 173.1 0 97.2-78.8 176-176 176S16 465.2 16 368z"
  />
</svg>
