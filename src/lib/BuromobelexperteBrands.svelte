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
    d="M0 32l0 128 128 0 0-128-128 0zM120 152l-112 0 0-112 112 0 0 112zM160 32l0 128 128 0 0-128-128 0zM280 152l-112 0 0-112 112 0 0 112zM320 32l0 128 128 0 0-128-128 0zM440 152l-112 0 0-112 112 0 0 112zM0 192l0 128 128 0 0-128-128 0zM120 312l-112 0 0-112 112 0 0 112zm40-120l0 128 128 0 0-128-128 0zM280 312l-112 0 0-112 112 0 0 112zm40-120l0 128 128 0 0-128-128 0zM440 312l-112 0 0-112 112 0 0 112zM0 352l0 128 128 0 0-128-128 0zM120 472l-112 0 0-112 112 0 0 112zm40-120l0 128 128 0 0-128-128 0zM280 472l-112 0 0-112 112 0 0 112zm40-120l0 128 128 0 0-128-128 0z"
  />
</svg>
