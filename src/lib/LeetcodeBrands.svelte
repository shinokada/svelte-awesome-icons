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

  const ariaDescribedby = $derived(desc?.id && desc.desc ? desc.id : undefined);
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
  aria-describedby={ariaDescribedby}
  viewBox="0 0 448 512"
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <path
    d="M235.4 9.3C246.5-2.5 265.1-3.2 277 7.9s12.5 29.8 1.4 41.6l-43 46c21.5 3.3 42.1 11.8 59.1 25.6l74.6 60.3c12.6 10.2 14.6 28.8 4.4 41.4s-28.7 14.6-41.4 4.4l-74.6-60.3c-26.2-21.1-71.9-18.2-94.5 5.9L81 261c-21.5 23-19.1 60 5.6 84.2l91.2 89.4c24.9 24 65.6 24 90.1-.4l51.1-51c11.5-11.5 30.1-11.5 41.6 .1s11.4 30.2-.1 41.7l-51.1 51c-47.1 47.1-124 47.7-171.9 1.6l-92-90.2C-1.4 341.3-6 267.9 38 220.7L235.4 9.3zM411.7 273.2c16.2 0 29.4 13.2 29.4 29.5s-13.2 29.5-29.4 29.5l-216.9 0c-16.2 0-29.4-13.2-29.4-29.5s13.2-29.5 29.4-29.5l216.9 0z"
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
