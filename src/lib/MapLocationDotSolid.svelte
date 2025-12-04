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
  viewBox="0 0 640 512"
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <path
    d="M576 48c0-11.1-5.7-21.4-15.2-27.2s-21.2-6.4-31.1-1.4L413.5 77.5 234.1 17.6c-8.1-2.7-16.8-2.1-24.4 1.7l-128 64C70.8 88.8 64 99.9 64 112l0 352c0 11.1 5.7 21.4 15.2 27.2s21.2 6.4 31.1 1.4l116.1-58.1 173.3 57.8c-4.3-6.4-8.5-13.1-12.6-19.9-11-18.3-21.9-39.3-30-61.8l-101.2-33.7 0-284.5 128 42.7 0 99.3c31-35.8 77-58.4 128-58.4 22.6 0 44.2 4.4 64 12.5L576 48zM512 224c-66.3 0-120 52.8-120 117.9 0 68.9 64.1 150.4 98.6 189.3 11.6 13 31.3 13 42.9 0 34.5-38.9 98.6-120.4 98.6-189.3 0-65.1-53.7-117.9-120-117.9zM472 344a40 40 0 1 1 80 0 40 40 0 1 1 -80 0z"
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
