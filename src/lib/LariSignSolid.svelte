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
  viewBox="0 0 384 512"
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <path
    d="M144 0c13.3 0 24 10.7 24 24l0 41.5c7.9-1 15.9-1.5 24-1.5s16.1 .5 24 1.5L216 24c0-13.3 10.7-24 24-24s24 10.7 24 24l0 54c58.9 23.8 103.2 76 116.2 139.7 3.5 17.3-7.7 34.2-25 37.7s-34.2-7.7-37.7-25c-6.7-33.2-26.4-61.8-53.4-80.2l0 81.8c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-101.8c-7.8-1.5-15.8-2.2-24-2.2s-16.2 .8-24 2.2L168 232c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-81.8c-33.8 23-56 61.9-56 105.8 0 70.7 57.3 128 128 128l160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l16.9 0C18.5 350 0 305.2 0 256 0 175.4 49.6 106.4 120 78l0-54c0-13.3 10.7-24 24-24z"
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
