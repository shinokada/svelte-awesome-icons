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
    d="M14.8 101.1C6.6 101.1 0 127.6 0 160.3s6.6 59.2 14.8 59.2 14.8-26.5 14.8-59.2-6.6-59.2-14.8-59.2zM448.7 40.9c-7.7 0-14.5 17.1-19.4 44.1-7.7-46.7-20.2-77-34.2-77-16.8 0-31.1 42.9-38 105.4-6.6-45.4-16.8-74.2-28.3-74.2-16.1 0-29.6 56.9-34.7 136.2-9.4-40.8-23.2-66.3-38.3-66.3s-28.8 25.5-38.3 66.3c-5.1-79.3-18.6-136.2-34.7-136.2-11.5 0-21.7 28.8-28.3 74.2-6.6-62.5-21.2-105.4-37.8-105.4-14 0-26.5 30.4-34.2 77-4.8-27-11.7-44.1-19.4-44.1-14.3 0-26 59.2-26 132.1S49 305.2 63.3 305.2c5.9 0 11.5-9.9 15.8-26.8 6.9 61.7 21.2 104.1 38 104.1 13 0 24.5-25.5 32.1-65.6 5.4 76.3 18.6 130.4 34.2 130.4 9.7 0 18.6-21.4 25.3-56.4 7.9 72.2 26.3 122.7 47.7 122.7s39.5-50.5 47.7-122.7c6.6 35 15.6 56.4 25.3 56.4 15.6 0 28.8-54.1 34.2-130.4 7.7 40.1 19.4 65.6 32.1 65.6 16.6 0 30.9-42.3 38-104.1 4.3 16.8 9.7 26.8 15.8 26.8 14.3 0 26-59.2 26-132.1S463 40.9 448.7 40.9zm48.5 60.2c-8.2 0-14.8 26.5-14.8 59.2s6.6 59.2 14.8 59.2 14.8-26.5 14.8-59.2-6.6-59.2-14.8-59.2z"
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
