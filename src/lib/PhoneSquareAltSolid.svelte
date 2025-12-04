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
    d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zm232 96.7l2.8 .8c32.3 8.8 59.9 40.1 51.8 78.2-18.5 87.5-87.4 156.3-174.9 174.9-38.1 8.1-69.4-19.5-78.2-51.8l-.8-2.8c-2.7-9.8 2.4-20.1 11.8-24l48.7-20.3c8.3-3.4 17.8-1.1 23.5 5.9l19.3 23.6c35.1-17.4 63.4-46.6 79.6-82.4l-22.1-18c-6.9-5.7-9.3-15.2-5.9-23.5l20.3-48.7c3.9-9.4 14.2-14.4 24-11.8z"
  />
</svg>
