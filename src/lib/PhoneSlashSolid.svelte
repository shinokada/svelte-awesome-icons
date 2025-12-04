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
    d="M535-24.9c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L41 537.1c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9L141.5 368.6C89.2 310.5 51.6 238.8 34.8 159.4 18.7 83.1 73.9 20.6 138.5 2.9l5.5-1.5c19.7-5.4 40.3 4.7 48.1 23.5l40.5 97.3c6.9 16.5 2.1 35.6-11.8 47l-44.1 36.1c12.9 28.5 29.6 54.8 49.5 78.5L535-24.9zm-150.4 534c-63-13.4-121.3-39.8-171.7-76.3L297.8 348c12.2 8.2 25 15.6 38.3 22.2L374.7 323c11.3-13.9 30.4-18.6 47-11.8L519 351.8c18.8 7.8 28.9 28.4 23.5 48.1l-1.5 5.5c-17.6 64.6-80.2 119.8-156.4 103.7z"
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
