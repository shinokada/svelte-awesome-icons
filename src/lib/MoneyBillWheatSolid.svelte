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
  viewBox="0 0 512 512"
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <path
    d="M176-16c44.2 0 80 35.8 80 80 0 8.8-7.2 16-16 16-44.2 0-80-35.8-80-80 0-8.8 7.2-16 16-16zM56 0l48 0c13.3 0 24 10.7 24 24s-10.7 24-24 24L56 48C42.7 48 32 37.3 32 24S42.7 0 56 0zM24 72l112 0c13.3 0 24 10.7 24 24s-10.7 24-24 24L24 120C10.7 120 0 109.3 0 96S10.7 72 24 72zm8 96c0-13.3 10.7-24 24-24l48 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-48 0c-13.3 0-24-10.7-24-24zM272 0c0-8.8 7.2-16 16-16 44.2 0 80 35.8 80 80 0 8.8-7.2 16-16 16-44.2 0-80-35.8-80-80zM400-16c44.2 0 80 35.8 80 80 0 8.8-7.2 16-16 16-44.2 0-80-35.8-80-80 0-8.8 7.2-16 16-16zm80 144c0 44.2-35.8 80-80 80-8.8 0-16-7.2-16-16 0-44.2 35.8-80 80-80 8.8 0 16 7.2 16 16zM352 112c8.8 0 16 7.2 16 16 0 44.2-35.8 80-80 80-8.8 0-16-7.2-16-16 0-44.2 35.8-80 80-80zm-96 16c0 44.2-35.8 80-80 80-8.8 0-16-7.2-16-16 0-44.2 35.8-80 80-80 8.8 0 16 7.2 16 16zM0 304c0-26.5 21.5-48 48-48l416 0c26.5 0 48 21.5 48 48l0 160c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 304zM48 416l0 48 48 0c0-26.5-21.5-48-48-48zM96 304l-48 0 0 48c26.5 0 48-21.5 48-48zM464 416c-26.5 0-48 21.5-48 48l48 0 0-48zM416 304c0 26.5 21.5 48 48 48l0-48-48 0zm-96 80a64 64 0 1 0 -128 0 64 64 0 1 0 128 0z"
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
