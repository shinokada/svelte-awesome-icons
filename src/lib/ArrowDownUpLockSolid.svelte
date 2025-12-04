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
    d="M262.6 422.6l-80 80c-12.5 12.5-32.8 12.5-45.3 0l-80-80c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l25.4 25.4 0-114.7-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l256 0 0-114.7-25.4 25.4c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l80-80c12.5-12.5 32.8-12.5 45.3 0l80 80c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0l-25.4-25.4 0 94.8c-25.3 20.3-42.8 50.1-47 83.9l-145 0 0 114.7 25.4-25.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3zM192 32l0 144-64 0 0-144c0-17.7 14.3-32 32-32s32 14.3 32 32zM496 304.1c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 47.9 64 0 0-47.9zM352 400c0-20.9 13.4-38.7 32-45.3l0-50.6c0-44.2 35.8-80 80-80s80 35.8 80 80l0 50.6c18.6 6.6 32 24.4 32 45.3l0 96c0 26.5-21.5 48-48 48l-128 0c-26.5 0-48-21.5-48-48l0-96z"
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
