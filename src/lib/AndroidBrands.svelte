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
    d="M420.5 253.9a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm-265.1 0a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm273.7-96.5l47.9-83c.8-1.1 1.3-2.4 1.5-3.8s.2-2.7-.1-4.1-.9-2.6-1.7-3.7-1.8-2-3-2.7-2.5-1.1-3.9-1.3-2.7 0-4 .4-2.5 1.1-3.6 1.9-1.9 2-2.5 3.2l-48.5 84.1c-38.8-17.4-80.8-26.4-123.3-26.4s-84.5 9-123.3 26.4L116.2 64.4c-.6-1.2-1.5-2.3-2.5-3.2s-2.3-1.5-3.6-1.9-2.7-.5-4-.4-2.7 .6-3.9 1.3-2.2 1.6-3 2.7-1.4 2.4-1.7 3.7-.3 2.7-.1 4.1 .8 2.6 1.5 3.8l47.9 83C64.5 202.2 8.2 285.5 0 384l576 0c-8.2-98.5-64.5-181.8-146.9-226.6z"
  />
</svg>
