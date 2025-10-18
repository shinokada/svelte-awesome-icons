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
  viewBox="0 0 384 512"
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <path
    d="M7.4 253.6C2.6 245.9 0 237.1 0 228l0-36c0-26.5 21.5-48 48-48l16 0 0-80c0-26.5 21.5-48 48-48 17.3 0 32.4 9.1 40.9 22.8 4.3-22.1 23.8-38.8 47.1-38.8 23.4 0 42.9 16.8 47.1 38.9 7.3-4.4 15.8-6.9 24.9-6.9 22.1 0 40.8 15 46.3 35.4 5.5-2.2 11.4-3.4 17.7-3.4 26.5 0 48 21.5 48 48l0 96.9c0 9.9-2.3 19.7-6.8 28.6l-39.6 79.1c-10.8 21.7-33 35.4-57.2 35.4L96 352c-16.5 0-31.8-8.4-40.6-22.4l-48-76zM32 480l0-48c0-17.7 14.3-32 32-32l256 0c17.7 0 32 14.3 32 32l0 48c0 17.7-14.3 32-32 32L64 512c-17.7 0-32-14.3-32-32z"
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
