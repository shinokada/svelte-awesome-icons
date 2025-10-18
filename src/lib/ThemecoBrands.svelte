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

  let ariaDescribedby = $derived(`${title?.id || ''} ${desc?.id || ''}`.trim());
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
    d="M202.9 8.4c9.9-5.7 26-5.8 36-.2L430 115.9c10 5.6 18 19.4 18 30.9L448 364c0 11.4-8.1 25.3-18 31L238.8 503.7c-9.9 5.7-26 5.6-35.8-.2L17.9 395.1C8 389.3 0 375.4 0 364L0 146.7c0-11.4 8-25.4 17.9-31.1L202.9 8.4zM125.5 208.3c-15.9 0-31.9 .1-47.8 .1l0 101.4 19.1 0 0-29.8 28.7 0c49.7 0 49.6-71.7 0-71.7zM265.6 308.6l-30.7-34.6c37-7.5 34.8-65.2-10.9-65.5-16.1 0-32.2-.1-48.3-.1l0 101.6 19.1 0 0-33.9 18.4 0 29.6 33.9 22.8 0 0-1.3zm-41.6-82.3c23.3 0 23.3 32.5 0 32.5l-29.1 0 0-32.5 29.1 0zm-95.6-1.6c21.2 0 21.1 38.9 0 38.9l-32.3 0 0-38.8 32.3 0zm192.6-18.2c-68.5 0-71 105.8 0 105.8 69.5 0 69.4-105.8 0-105.8zm0 17.4c44.1 0 44.8 70.9 0 70.9s-44.4-70.9 0-70.9z"
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
