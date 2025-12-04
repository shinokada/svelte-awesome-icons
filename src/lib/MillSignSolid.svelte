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
  viewBox="0 0 384 512"
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <path
    d="M297-22.2c12.3 5 18.2 19 13.2 31.3l-29 71.3C338.8 85.1 384 133.3 384 192l0 208c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-208c0-26.5-21.5-48-48-48-6.4 0-12.5 1.2-18 3.5l-30 73.8 0 178.7c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-21.2-57.8 142.2c-5 12.3-19 18.2-31.3 13.2s-18.2-19-13.2-31.3L160 251.3 160 192c0-26.5-21.5-48-48-48s-48 21.5-48 48l0 208c0 17.7-14.3 32-32 32S0 417.7 0 400L0 112c0-17.7 14.3-32 32-32 10.9 0 20.5 5.4 26.3 13.7 16-8.7 34.3-13.7 53.7-13.7 31.3 0 59.7 12.9 80 33.6 9.6-9.8 20.9-17.8 33.5-23.5L265.8-9c5-12.3 19-18.2 31.3-13.2z"
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
