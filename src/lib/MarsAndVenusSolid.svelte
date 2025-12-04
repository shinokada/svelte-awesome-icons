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
    d="M368 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l112 0c17.7 0 32 14.3 32 32l0 112c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-34.7-63 63c19.5 28.4 31 62.7 31 99.8 0 86.3-62.1 158.1-144 173.1l0 34.9 32 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0 0 32c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-32-32 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l32 0 0-34.9c-81.9-15-144-86.8-144-173.1 0-97.2 78.8-176 176-176 37 0 71.4 11.4 99.8 31l63-63-34.7 0zM352 208a112 112 0 1 0 -224 0 112 112 0 1 0 224 0z"
  />
</svg>
