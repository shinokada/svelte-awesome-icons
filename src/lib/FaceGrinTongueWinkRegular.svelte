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
    d="M366.9 432c.8-5.2 1.1-10.6 1.1-16l0-53.5c10.2-12.6 18.3-26.9 23.8-42.5 4.1-11.6-7.8-21.4-19.6-17.8-34.8 10.6-74.3 16.6-116.3 16.6-41.9 0-81.4-6-116.1-16.5-11.8-3.6-23.7 6.1-19.6 17.8 5.5 15.5 13.6 29.9 23.8 42.4l0 53.5c0 5.4 .4 10.8 1.1 16-58.4-36.8-97.1-101.9-97.1-176 0-114.9 93.1-208 208-208s208 93.1 208 208c0 74.1-38.8 139.2-97.1 176zm-38.8 69.7C434.4 470.6 512 372.3 512 256 512 114.6 397.4 0 256 0S0 114.6 0 256C0 372.3 77.6 470.6 183.9 501.7 203.4 518.1 228.5 528 256 528s52.6-9.9 72.1-26.3zM320 378.6l0 37.4c0 35.3-28.7 64-64 64s-64-28.7-64-64l0-37.4c0-14.7 11.9-26.6 26.6-26.6l2 0c11.3 0 21.1 7.9 23.6 18.9 2.8 12.6 20.8 12.6 23.6 0 2.5-11.1 12.3-18.9 23.6-18.9l2 0c14.7 0 26.6 11.9 26.6 26.6zM132 232c0-11 9-20 20-20l16 0c11 0 20 9 20 20s9 20 20 20 20-9 20-20c0-33.1-26.9-60-60-60l-16 0c-33.1 0-60 26.9-60 60 0 11 9 20 20 20s20-9 20-20zm228.4-24a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zM288 208a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm128 0a80 80 0 1 0 -160 0 80 80 0 1 0 160 0z"
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
