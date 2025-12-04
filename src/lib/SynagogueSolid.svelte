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
    d="M16 80c0-35.3 28.7-64 64-64s64 28.7 64 64l0 32-128 0 0-32zm0 368l0-288 128 0 126.2-84.2c10.7-7.2 24.8-7.2 35.5 0l126.2 84.2 128 0 0 288c0 35.3-28.7 64-64 64L80 512c-35.3 0-64-28.7-64-64zM560 112l-128 0 0-32c0-35.3 28.7-64 64-64s64 28.7 64 64l0 32zM224 384l0 80 128 0 0-80c0-35.3-28.7-64-64-64s-64 28.7-64 64zm64-152a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"
  />
</svg>
