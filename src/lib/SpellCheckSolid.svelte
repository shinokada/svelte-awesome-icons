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
    d="M120 32c-48.6 0-88 39.4-88 88l0 168c0 17.7 14.3 32 32 32s32-14.3 32-32l0-64 64 0 0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-168c0-48.6-39.4-88-88-88l-16 0zm40 128l-64 0 0-40c0-13.3 10.7-24 24-24l16 0c13.3 0 24 10.7 24 24l0 40zM304 32c-17.7 0-32 14.3-32 32l0 224c0 17.7 14.3 32 32 32l72 0c48.6 0 88-39.4 88-88 0-23.6-9.3-45-24.4-60.8 10.3-14.4 16.4-32.1 16.4-51.2 0-48.6-39.4-88-88-88l-64 0zm64 112l-32 0 0-48 32 0c13.3 0 24 10.7 24 24s-10.7 24-24 24zM336 256l0-48 40 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-40 0zm233 84c11-13.8 8.8-33.9-5-45s-33.9-8.8-45 5l-105.7 132.1-38.7-38.7c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l64 64c6.4 6.4 15.3 9.8 24.4 9.3s17.5-4.9 23.2-12L569 340z"
  />
</svg>

<!--
@component
[Go to docs](https://svelte-awesome-icons.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop color = ctx.color || 'currentColor'
@prop title
@prop desc
@prop focusable = 'false'
@prop ariaLabel
@prop ...restProps
-->
