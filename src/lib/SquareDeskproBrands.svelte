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
    d="M408.8 32C430.4 32 448 49.6 448 71.2l0 369.6c0 21.6-17.6 39.2-39.2 39.2L39.2 480C17.6 480 0 462.4 0 440.8L0 71.2C0 49.6 17.6 32 39.2 32l369.6 0zM110.9 274.1l0 114.4 89.1-.1c20.6 0 39.4-3.2 56.3-9.5s31.3-15.4 43.2-27c12.2-11.9 21.6-26 28.2-42.1 4.6-11.1 7.7-23 9.2-35.7l-43.8 0c-1.1 6.4-2.8 12.4-5.1 18.2-4.2 10.9-10.3 20.3-18.2 28.2-7.9 7.7-17.4 13.7-28.6 17.9-11.1 4.3-23.5 6.4-37.3 6.4l-50 0 0-70.6-43 .1zm0-151.4l0 114.4 43-.1 0-70.7 50 0c13.7 0 26.2 2.1 37.3 6.4 11.1 4.3 20.6 10.3 28.6 18.3 7.9 7.7 14 17.1 18.2 28.2 2.3 5.6 4 11.5 5.1 17.8l43.9 .1c-1.4-12.6-4.4-24.4-8.9-35.3-6.6-16.4-16-30.5-28.1-42.2-12.1-11.9-26.7-21.1-43.6-27.5-16.9-6.4-35.7-9.5-56.3-9.5l-89 .1z"
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
