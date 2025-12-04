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
    d="M160 32c17.7 0 32 14.3 32 32l0 43.6 121.4-34.7c12.7-3.6 26 3.7 29.7 16.5s-3.7 26-16.5 29.7l-134.6 38.5 0 46.1 121.4-34.7c12.7-3.6 26 3.7 29.7 16.5s-3.7 26-16.5 29.7l-134.6 38.5 0 162.5 72 0c53 0 96-43 96-96 0-17.7 14.3-32 32-32s32 14.3 32 32c0 88.4-71.6 160-160 160l-104 0c-17.7 0-32-14.3-32-32l0-176.2-25.4 7.3c-12.7 3.6-26-3.7-29.7-16.5s3.7-26 16.5-29.7l38.6-11 0-46.1-25.4 7.3c-12.7 3.6-26-3.7-29.7-16.5s3.7-26 16.5-29.7l38.6-11 0-61.9c0-17.7 14.3-32 32-32z"
  />
</svg>
