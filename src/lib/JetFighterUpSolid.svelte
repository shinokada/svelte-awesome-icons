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
    d="M206.8 47.8C202.3 58.5 200 70 200 81.6l0 100.4-152 114 0-48c0-13.3-10.7-24-24-24S0 234.7 0 248L0 392c0 13.3 10.7 24 24 24s24-10.7 24-24l0-8 152 0 0 54.4-66 52.8c-3.8 3-6 7.6-6 12.5l0 24.3c0 8.8 7.2 16 16 16l88 0 0-40c0-13.3 10.7-24 24-24s24 10.7 24 24l0 40 88 0c8.8 0 16-7.2 16-16l0-24.3c0-4.9-2.2-9.5-6-12.5l-66-52.8 0-54.4 152 0 0 8c0 13.3 10.7 24 24 24s24-10.7 24-24l0-144c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 48-152-114 0-100.4c0-11.6-2.3-23.1-6.8-33.8l-27.1-65C274.4-26.2 265.7-32 256-32s-18.4 5.8-22.2 14.8l-27.1 65z"
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
