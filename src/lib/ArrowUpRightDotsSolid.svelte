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
    d="M96 32C78.3 32 64 46.3 64 64S78.3 96 96 96L114.7 96 9.4 201.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.3 160 160c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96c0-17.7-14.3-32-32-32L96 32zM403.8 70.1a38.1 38.1 0 1 0 76.2 0 38.1 38.1 0 1 0 -76.2 0zM279.7 194.2a38.1 38.1 0 1 0 76.2 0 38.1 38.1 0 1 0 -76.2 0zm162.2-38.1a38.1 38.1 0 1 0 0 76.2 38.1 38.1 0 1 0 0-76.2zM156.2 317.8a38.1 38.1 0 1 0 76.2 0 38.1 38.1 0 1 0 -76.2 0zm161.6-38.1a38.1 38.1 0 1 0 0 76.2 38.1 38.1 0 1 0 0-76.2zm86.1 38.1a38.1 38.1 0 1 0 76.2 0 38.1 38.1 0 1 0 -76.2 0zM70.1 403.8a38.1 38.1 0 1 0 0 76.2 38.1 38.1 0 1 0 0-76.2zm86.1 38.1a38.1 38.1 0 1 0 76.2 0 38.1 38.1 0 1 0 -76.2 0zm161.6-38.1a38.1 38.1 0 1 0 0 76.2 38.1 38.1 0 1 0 0-76.2zm86.1 38.1a38.1 38.1 0 1 0 76.2 0 38.1 38.1 0 1 0 -76.2 0z"
  />
</svg>
