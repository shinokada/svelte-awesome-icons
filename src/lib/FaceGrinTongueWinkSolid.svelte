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
    d="M152.2 490.1C62.5 450.2 0 360.4 0 256 0 114.6 114.6 0 256 0S512 114.6 512 256c0 104.4-62.5 194.2-152.2 234.1 5.3-13 8.2-27.2 8.2-42.1l0-61.7c16.9-16.5 30.1-36.7 38.3-59.3 4.3-11.8-7.7-21.8-19.6-18.1-39.2 12.2-83.7 19.1-130.7 19.1s-91.5-6.9-130.7-19.1c-11.9-3.7-23.9 6.3-19.6 18.1 8.3 22.6 21.5 42.8 38.3 59.3l0 61.7c0 14.9 2.9 29.1 8.2 42.1zM152 212l16 0c11 0 20 9 20 20s9 20 20 20 20-9 20-20c0-33.1-26.9-60-60-60l-16 0c-33.1 0-60 26.9-60 60 0 11 9 20 20 20s20-9 20-20 9-20 20-20zm184 60a64 64 0 1 0 0-128 64 64 0 1 0 0 128zM320 402.6l0 45.4c0 35.3-28.7 64-64 64s-64-28.7-64-64l0-45.4c0-14.7 11.9-26.6 26.6-26.6l2 0c11.3 0 21.1 7.9 23.6 18.9 2.8 12.6 20.8 12.6 23.6 0 2.5-11.1 12.3-18.9 23.6-18.9l2 0c14.7 0 26.6 11.9 26.6 26.6zM336 184a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"
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
