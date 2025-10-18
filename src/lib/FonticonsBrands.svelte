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
  viewBox="0 0 448 512"
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <path
    d="M0 32l0 448 448 0 0-448-448 0zM187 172.9c-18.4 0-19 9.9-19 27.4l0 23.3c0 2.4-3.5 4.4-.6 4.4l67.4 0-11.1 37.3-55.7 0 0 112.9c0 5.8-2 6.7 3.2 7.3l43.5 4.1 0 25.1-130.7 0 0-25.7 21.3-2c5.2-.6 6.7-2.3 6.7-7.9l0-111.4c0-2.3-2.9-2.3-5.8-2.3l-22.2 0 0-37.4 28 0 0-21c0-49.6 26.5-70 77.3-70 34.1 0 64.7 8.2 64.7 52.8l-50.7 6.1c.3-18.7-4.4-23-16.3-23zm74.3 241.8l0-25.1 20.4-2.6c5.2-.6 7.6-1.7 7.6-7.3l0-107.9c0-4.1-2.9-6.7-6.7-7.9l-24.2-6.4 6.7-29.5 80.2 0 0 151.7c0 5.8-2.6 6.4 2.9 7.3l15.7 2.6 0 25.1-102.6 0zm80.8-255.5l9 33.2-7.3 7.3-31.2-16.6-31.2 16.6-7.3-7.3 9-33.2-21.8-24.2 3.5-9.6 27.7 0 15.5-28 9.3 0 15.5 28 27.7 0 3.5 9.6-21.9 24.2z"
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
