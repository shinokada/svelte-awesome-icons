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
    d="M208 0l80 0 0 56c0 13.3 10.7 24 24 24l80 0c13.3 0 24-10.7 24-24l0-56 80 0c26.5 0 48 21.5 48 48l0 416c0 26.5-21.5 48-48 48l-108.8 0c8.2-14.1 12.8-30.5 12.8-48l0-160c10-13.4 16-30 16-48l0-32c0-44.2-35.8-80-80-80l-176 0 0-96c0-26.5 21.5-48 48-48zM32 336l320 0 0 128c0 26.5-21.5 48-48 48L80 512c-26.5 0-48-21.5-48-48l0-128zM48 192l288 0c17.7 0 32 14.3 32 32l0 32c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32l0-32c0-17.7 14.3-32 32-32z"
  />
</svg>
