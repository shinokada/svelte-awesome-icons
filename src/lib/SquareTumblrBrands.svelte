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
    d="M448 96c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320zM256.8 416c-75.5 0-91.9-55.5-91.9-87.9l0-90-29.7 0c-3.4 0-6.2-2.8-6.2-6.2l0-42.5c0-4.5 2.8-8.5 7.1-10 38.8-13.7 50.9-47.5 52.7-73.2 .5-6.9 4.1-10.2 10-10.2l44.3 0c3.4 0 6.2 2.8 6.2 6.2l0 72 51.9 0c3.4 0 6.2 2.8 6.2 6.2l0 51.1c0 3.4-2.8 6.2-6.2 6.2l-52.1 0 0 83.3c0 21.4 14.8 33.5 42.5 22.4 3-1.2 5.6-2 8-1.4 2.2 .5 3.6 2.1 4.6 4.9L318 387.1c1 3.2 2 6.7-.3 9.1-8.5 9.1-31.2 19.8-60.9 19.8z"
  />
</svg>
