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
    d="M128-32c17.7 0 32 14.3 32 32s-14.3 32-32 32L97.9 32 136 70.1 151 55c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-15 15 14.2 14.2c27.9-23.8 64.2-38.2 103.8-38.2 36.7 0 70.6 12.4 97.6 33.2L466.7 32 448 32c-17.7 0-32-14.3-32-32s14.3-32 32-32l96 0c17.7 0 32 14.3 32 32l0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-18.7-84.4 84.4c13 23.1 20.4 49.9 20.4 78.3 0 77.4-55 142-128 156.8l0 35.2 32 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0 0 16c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-16-32 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l32 0 0-35.2c-73-14.8-128-79.4-128-156.8 0-31.4 9-60.7 24.7-85.4l-16.7-16.7-15 15c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l15-15-38.1-38.1 0 30.1c0 17.7-14.3 32-32 32S0 113.7 0 96L0 0C0-17.7 14.3-32 32-32l96 0zM288 336a96 96 0 1 0 0-192 96 96 0 1 0 0 192z"
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
