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
    d="M512 48c0-8.3-4.3-16-11.3-20.4s-15.9-4.8-23.3-1.1L352.5 88.1 180 29.4c-13.7-4.7-28.7-3.8-41.9 2.3L13.8 90.3C5.4 94.2 0 102.7 0 112L0 464c0 8.2 4.2 15.9 11.1 20.3s15.6 4.9 23.1 1.4l127.3-59.9 170.7 56.9c13.7 4.6 28.5 3.7 41.6-2.5l124.4-58.5c8.4-4 13.8-12.4 13.8-21.7l0-352zM144 82.1l0 299-96 45.2 0-299 96-45.2zm48 303.3l0-301.1 128 43.5 0 300.3-128-42.7zM368 134l96-47.4 0 298.2-96 45.2 0-296z"
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
