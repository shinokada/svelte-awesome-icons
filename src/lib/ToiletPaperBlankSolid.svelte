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
    d="M327.1 32c-8.8 11.1-16 23.1-21.9 34.8-21.4 42.7-33.2 98.4-33.2 157.2l0 264c0 30.9-25.1 56-56 56L56 544c-30.9 0-56-25.1-56-56L0 224C0 118 43 32 96 32l231.1 0zM416 416c-53 0-96-86-96-192s43-192 96-192 96 86 96 192-43 192-96 192zm0-128c17.7 0 32-28.7 32-64s-14.3-64-32-64-32 28.7-32 64 14.3 64 32 64z"
  />
</svg>
