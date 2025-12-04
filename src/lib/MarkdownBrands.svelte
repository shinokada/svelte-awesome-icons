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
  viewBox="0 0 640 512"
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <path
    d="M593.8 59.1l-547.6 0C20.7 59.1 0 79.8 0 105.2L0 406.7c0 25.5 20.7 46.2 46.2 46.2l547.7 0c25.5 0 46.2-20.7 46.1-46.1l0-301.6c0-25.4-20.7-46.1-46.2-46.1zM338.5 360.6l-61.5 0 0-120-61.5 76.9-61.5-76.9 0 120-61.7 0 0-209.2 61.5 0 61.5 76.9 61.5-76.9 61.5 0 0 209.2 .2 0zm135.3 3.1l-92.3-107.7 61.5 0 0-104.6 61.5 0 0 104.6 61.5 0-92.2 107.7z"
  />
</svg>
