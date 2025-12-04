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
    d="M240 96c-88.4 0-160 71.6-160 160 0 71.6 47.1 132.3 112 152.7L192 256c0-13.3 10.7-24 24-24 12.8 0 23.3 10.1 24 22.7 15.5-9.5 33.5-14.7 52.3-14.7l11.8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-11.8 0c-18.8 0-36.1 10-45.4 26.3-4.5 7.9-6.9 16.8-6.9 25.9l0 75.8c42.5 0 81.1-16.6 109.8-43.6 12.9-12.1 33.1-11.5 45.2 1.3s11.5 33.1-1.3 45.2C353.7 456.8 299.5 480 240 480 116.3 480 16 379.7 16 256S116.3 32 240 32c59.5 0 113.7 23.2 153.7 61.1 12.9 12.1 13.4 32.4 1.3 45.2s-32.4 13.4-45.2 1.3C321.1 112.6 282.5 96 240 96z"
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
