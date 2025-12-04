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
    d="M241.3-13c-11.4-2.3-23.1-2.3-34.5 0L19.3 24.5C8.1 26.7 0 36.6 0 48 0 58.3 6.5 67.3 16 70.6L16 144 .3 222.6c-.2 .9-.3 1.9-.3 2.9 0 8 6.5 14.6 14.6 14.6l34.9 0c8 0 14.6-6.5 14.6-14.6 0-1-.1-1.9-.3-2.9L48 144 48 77.3 96 86.9 96 144c0 70.7 57.3 128 128 128s128-57.3 128-128l0-57.1 76.7-15.3C439.9 69.3 448 59.4 448 48s-8.1-21.3-19.3-23.5L241.3-13zM224 224c-44.2 0-80-35.8-80-80l160 0c0 44.2-35.8 80-80 80zM120.1 320.1C58.7 348.3 16 410.3 16 482.3 16 498.7 29.3 512 45.7 512l154.3 0 0-146-57.4-43c-6.5-4.9-15.2-6.2-22.6-2.8zM248 512l154.3 0c16.4 0 29.7-13.3 29.7-29.7 0-72-42.7-134-104.1-162.1-7.4-3.4-16.1-2.1-22.6 2.8l-57.4 43 0 146z"
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
