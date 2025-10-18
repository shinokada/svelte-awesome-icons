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
    d="M43.9 48C19.7 48 0 67.7 0 91.9L0 420.1c0 24.3 19.7 43.9 43.9 43.9 5.5 0 10.7-1 15.7-2.9 12.9-4.9 103.4-37.1 228.4-37.1s215.5 32.3 228.4 37.1c5 1.9 10.2 2.9 15.7 2.9 24.3 0 43.9-19.7 43.9-43.9l0-328.2c0-24.3-19.7-43.9-43.9-43.9-5.5 0-10.7 1-15.7 2.9-12.9 4.9-103.4 37.1-228.4 37.1S72.5 55.7 59.6 50.9C54.6 49 49.4 48 43.9 48zM72 176a40 40 0 1 1 80 0 40 40 0 1 1 -80 0zm264.1-16c7.5 0 14.6 3.6 19.1 9.6L479.7 336.2c5.9 7.9 6.4 18.5 1.3 26.9s-14.8 12.8-24.5 11.1c-45.8-7.8-103.3-14.2-168.4-14.2-65.6 0-123.4 6.5-169.3 14.4-9.8 1.7-19.7-2.9-24.7-11.5s-4.3-19.4 1.9-27.2L165.3 249c4.6-5.7 11.5-9 18.7-9s14.2 3.3 18.7 9l27.5 34.4 86.7-113.9c4.6-6 11.7-9.5 19.2-9.5z"
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
