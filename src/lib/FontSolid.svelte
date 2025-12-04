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
    d="M285.1 50.7C279.9 39.3 268.5 32 256 32s-23.9 7.3-29.1 18.7L59.5 416 48 416c-17.7 0-32 14.3-32 32s14.3 32 32 32l88 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-6.1 0 22-48 208.3 0 22 48-6.1 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l88 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-11.5 0-167.4-365.3zM330.8 304L181.2 304 256 140.8 330.8 304z"
  />
</svg>
