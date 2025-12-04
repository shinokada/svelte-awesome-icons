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
    d="M88-32c13.3 0 24 10.7 24 24l0 72 48 0c0-17.7 14.3-32 32-32s32 14.3 32 32l32 0c0-17.7 14.3-32 32-32s32 14.3 32 32l16 0c26.5 0 48 21.5 48 48l0 160.9c0 9.9-2.3 19.7-6.8 28.6l-20.2 40.4c-3.3 6.7-5.1 14-5.1 21.5l0 84.7c0 35.3-28.7 64-64 64L96 512c-35.3 0-64-28.7-64-64l0-84.7c0-7.5-1.7-14.8-5.1-21.5L6.8 301.5C2.3 292.6 0 282.8 0 272.9L0 112C0 85.5 21.5 64 48 64l16 0 0-72c0-13.3 10.7-24 24-24zm32 176c-13.3 0-24 10.7-24 24s10.7 24 24 24l144 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-144 0zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24l144 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-144 0z"
  />
</svg>
