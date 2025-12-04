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
    d="M192-32a56 56 0 1 1 0 112 56 56 0 1 1 0-112zM128 173.6c0-34 27.6-61.6 61.6-61.6 20.3 0 39.7 8.1 54 22.4l48.2 48.2c6 6 14.1 9.4 22.6 9.4l37.5 0c5.8 0 11.3 1.6 16 4.3l0-76.3c0-13.3 10.7-24 24-24s24 10.7 24 24l0 400c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-268.3c-4.7 2.7-10.2 4.3-16 4.3l-37.5 0c-25.5 0-49.9-10.1-67.9-28.1l-6.6-6.6 0 109.2 34.5 29.6c17.7 15.2 29.3 36.2 32.6 59.3l12.6 88.1c2.5 17.5-9.7 33.7-27.2 36.2s-33.7-9.7-36.2-27.2l-12.6-88.1c-1.1-7.7-5-14.7-10.9-19.8l-71.4-61.2c-21.3-18.2-33.5-44.9-33.5-72.9l0-101zm-4.8 203.7c2.3 2.3 4.7 4.4 7.1 6.5l44.9 38.5c-3.6 8.4-8.5 16.3-14.4 23.4L88.6 532.5c-11.3 13.6-31.5 15.4-45.1 4.1s-15.4-31.5-4.1-45.1l72.3-86.7c2.6-3.1 4.5-6.6 5.8-10.4l5.7-17.1zM0 160c0-35.3 28.7-64 64-64 17.7 0 32 14.3 32 32l0 128c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-96z"
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
