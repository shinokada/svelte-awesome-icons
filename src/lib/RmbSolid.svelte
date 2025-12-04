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
  viewBox="0 0 384 512"
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <path
    d="M74.9 46.7c-9.6-14.9-29.4-19.2-44.2-9.6S11.5 66.4 21.1 81.3L143.7 272 88 272c-13.3 0-24 10.7-24 24s10.7 24 24 24l72 0 0 32-72 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l72 0 0 48c0 17.7 14.3 32 32 32s32-14.3 32-32l0-48 72 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-72 0 0-32 72 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-55.7 0 122.6-190.7c9.6-14.9 5.3-34.7-9.6-44.2s-34.7-5.3-44.2 9.6L192 228.8 74.9 46.7z"
  />
</svg>
