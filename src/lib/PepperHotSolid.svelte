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
    d="M545 65c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0L478.9 63.2C452.3 43.6 419.5 32 384 32 348.9 32 316.5 43.3 290.1 62.4 274.1 74.1 284.2 96 304 96l24 0c13.3 0 24 10.7 24 24l0 80c0 13.3 10.7 24 24 24l80 0c13.3 0 24 10.7 24 24l0 24c0 19.8 21.9 29.9 33.6 13.9 19.1-26.4 30.4-58.8 30.4-93.9 0-35.5-11.6-68.3-31.2-94.9L545 65zM270 135.5l-159.6 228C101.3 376.4 86.7 384 71 384l-7 0c-26.5 0-48 21.5-48 48s21.5 48 48 48l27.1 0c65.7 0 129.7-20.2 183.5-57.8L440.5 306.1C435 295.9 432 284.2 432 272l-56 0c-39.8 0-72-32.2-72-72l0-56c-12.2 0-23.9-3-34-8.5z"
  />
</svg>
