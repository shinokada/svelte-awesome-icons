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
    d="M312 56a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zM205.4 124.1c-6.4-5.2-15.6-4.7-21.4 1.1l-33.4 33.4c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L138.8 80c29-29 75.2-31.4 107-5.5l81.3 66c21.4 17.4 23.8 49.2 5.2 69.5l-41.8 46 98 0c30.3 0 53 27.7 47.1 57.4L407.4 454.3c-3.5 17.3-20.3 28.6-37.7 25.1s-28.6-20.3-25.1-37.7L369 320 316.8 320c2.1 10.3 3.2 21 3.2 32 0 88.4-71.6 160-160 160S0 440.4 0 352 71.6 192 160 192c6 0 11.9 .3 17.8 1l50.4-50.4-22.7-18.5zM160 448a96 96 0 1 0 0-192 96 96 0 1 0 0 192z"
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
