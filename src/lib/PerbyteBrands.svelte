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
    d="M305.3 284.6l-58.7 0 0 98.7 58.7 0c16.3 0 29-4.6 38.2-13.8s13.8-21.2 13.8-36.1c0-14.6-4.7-26.3-14-35.3s-22-13.5-37.9-13.5zM149.4 128.7l-58.7 0 0 98.7 58.7 0c16.3 0 29-4.6 38.2-13.8s13.8-21.2 13.8-36.1c0-14.6-4.7-26.3-14-35.3s-22-13.5-37.9-13.5zM366.6 32L81.4 32c-21.6 0-42.2 8.6-57.5 23.9S0 91.8 0 113.4L0 398.6c0 21.6 8.6 42.2 23.9 57.5S59.8 480 81.4 480l285.3 0c21.6 0 42.2-8.6 57.5-23.9S448 420.2 448 398.6l0-285.3c0-21.6-8.6-42.2-23.9-57.5S388.2 32 366.6 32zm63.6 366.6c0 16.9-6.7 33-18.7 45s-28.1 18.6-45 18.7l-285.3 0c-16.9 0-33-6.7-45-18.7s-18.6-28.1-18.7-45l0-285.3c0-16.9 6.7-33 18.7-45s28.1-18.6 45-18.7l285.3 0c16.9 0 33 6.7 45 18.7s18.6 28.1 18.7 45l0 285.3zm-125-269.9l-58.7 0 0 98.7 58.7 0c16.3 0 29-4.6 38.2-13.8s13.8-21.2 13.8-36.1c0-14.6-4.7-26.3-14-35.3s-22-13.5-37.9-13.5z"
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
