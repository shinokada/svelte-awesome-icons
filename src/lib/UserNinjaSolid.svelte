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
    d="M352 128c0 70.7-57.3 128-128 128-57.2 0-105.6-37.5-122-89.3-1.1 1.3-2.2 2.6-3.5 3.8-15.8 15.8-38.8 20.7-53.6 22.1-8.1 .8-14.6-5.7-13.8-13.8 1.4-14.7 6.3-37.8 22.1-53.6 5.8-5.8 12.6-10.1 19.6-13.4-7-3.2-13.8-7.6-19.6-13.4-15.8-15.8-20.7-38.8-22.1-53.6-.8-8.1 5.7-14.6 13.8-13.8 14.7 1.4 37.8 6.3 53.6 22.1 4.8 4.8 8.7 10.4 11.7 16.1 21.3-41.2 64.3-69.4 113.8-69.4 70.7 0 128 57.3 128 128zM144 112c0 8.8 7.2 16 16 16l128 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L160 96c-8.8 0-16 7.2-16 16zm-1.4 211l67 50.2c8.5 6.4 20.3 6.4 28.8 0l67-50.2c6.5-4.9 15.2-6.2 22.6-2.8 61.4 28.2 104.1 90.2 104.1 162.1 0 16.4-13.3 29.7-29.7 29.7L45.7 512c-16.4 0-29.7-13.3-29.7-29.7 0-72 42.7-134 104.1-162.1 7.4-3.4 16.1-2.1 22.6 2.8z"
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
