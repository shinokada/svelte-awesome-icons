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
  viewBox="0 0 576 512"
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <path
    d="M80 192c0-88.4 71.6-160 160-160 47.1 0 89.4 20.4 118.7 52.7 10.6-3.1 21.8-4.7 33.3-4.7 66.3 0 120 53.7 120 120 0 13.2-2.1 25.9-6.1 37.8 41.6 21.1 70.1 64.3 70.1 114.2 0 70.7-57.3 128-128 128l-304 0c-79.5 0-144-64.5-144-144 0-56.8 32.9-105.9 80.7-129.4-.4-4.8-.7-9.7-.7-14.6zM240 80c-61.9 0-112 50.1-112 112 0 8.4 .9 16.6 2.7 24.5 2.7 12.1-4.3 24.3-16.1 28.1-38.7 12.4-66.6 48.7-66.6 91.4 0 53 43 96 96 96l304 0c44.2 0 80-35.8 80-80 0-37.4-25.7-68.9-60.5-77.6-7.5-1.9-13.6-7.2-16.5-14.3s-2.1-15.2 2-21.7c7-11.1 11-24.2 11-38.3 0-39.8-32.2-72-72-72-11.1 0-21.5 2.5-30.8 6.9-10.5 5-23.1 1.7-29.8-7.8-20.3-28.6-53.7-47.1-91.3-47.1z"
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
