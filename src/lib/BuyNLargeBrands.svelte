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
    d="M288.2 32C133.5 32 8 132.3 8 256S133.5 480 288.2 480 568.4 379.7 568.4 256 442.9 32 288.2 32zM202.8 389.2l-138.5 1.4 77.2-290.7 133.4 0c63.2 0 84.9 28.6 78 72.8-.4 2.3-.9 4.6-1.5 6.9-5.6-1.3-11.4-1.9-17.2-1.9-42.3 0-76.7 33.9-76.7 75.7 0 37.1 27.1 68 62.9 74.5-18.2 37.2-56.2 60.9-117.7 61.5zM358.2 207.1l32 0-22.2 90.3-35.4 0-11.2-35.6-7.8 35.6-37.8 0 26.6-90.3 31.3 0 15 36.8 9.4-36.8zM504.1 389.2l-197.1 0 15.8-61.2c3.8 .6 7.6 .8 11.5 .8 42.3 0 76.7-33.9 76.7-75.6 0-32.6-21-60.5-50.4-71.1l21.3-82.4 92.5 0-53 205.4 103.9 0-21.2 84.1zM211.9 269.4l-24.7 0-13.8 56.5 24.7 0c16.1 0 32.1-3.2 37.9-26.6 5.6-22.3-8-29.8-24.1-29.8zM233.2 170l-21.3 0-11.7 47.7 21.4 0c18 0 35.4-14.6 39.2-30.1 4.6-18.9-9.5-17.6-27.6-17.6z"
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
