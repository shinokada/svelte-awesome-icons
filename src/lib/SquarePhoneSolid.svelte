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
  viewBox="0 0 448 512"
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <path
    d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zm88 96.7c9.8-2.7 20.1 2.4 24 11.8l20.3 48.7c3.4 8.3 1.1 17.8-5.9 23.5l-22.1 18c16.2 35.8 44.5 65 79.6 82.4l19.3-23.6c5.7-6.9 15.2-9.3 23.5-5.9l48.7 20.3c9.4 3.9 14.4 14.2 11.8 24l-.8 2.8c-8.8 32.3-40.1 59.9-78.2 51.8-87.5-18.5-156.3-87.4-174.9-174.9-8.1-38.1 19.5-69.4 51.8-78.2l2.8-.8z"
  />
</svg>
