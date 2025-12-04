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
    d="M412.2 32L35.8 32C16 32 0 48 0 67.8L0 444.2C0 464 16 480 35.8 480l376.4 0c19.8 0 35.8-16 35.8-35.8l0-376.4C448 48 432 32 412.2 32zM378.6 333.7c0 40.2-32.6 72.8-72.8 72.8l-235.6 0c0-40.2 32.6-72.8 72.8-72.8l235.6 0zm0-113.9c0 40.2-32.6 72.8-72.8 72.8l-235.6 0c0-40.2 32.6-72.8 72.8-72.8l235.6 0zm0-113.9c0 40.2-32.6 72.8-72.8 72.8l-235.6 0c0-40.2 32.6-72.8 72.8-72.8l235.6 0z"
  />
</svg>
