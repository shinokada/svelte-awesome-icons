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
    d="M91.3 288l-34.8 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l21.4 0C37.3 147.3 105.1 42 207.6 42l8.2 0c33.6 0 66.2 11.3 92.5 32.2l16.1 12.7c13.9 11 16.2 31.1 5.2 45s-31.1 16.2-45 5.2l-16.1-12.7c-15-11.9-33.6-18.4-52.8-18.4l-8.2 0c-57.3 0-94.7 59.9-69.7 111.4 3.6 7.4 6.6 14.9 9.1 22.6l149.5 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-141.2 0c1 35.3-8.7 70.6-28.9 100.9l-18.1 27.1 212.2 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-272 0c-11.8 0-22.6-6.5-28.2-16.9s-5-23 1.6-32.9l51.2-76.8c13.1-19.6 19.2-42.6 18.2-65.4z"
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
