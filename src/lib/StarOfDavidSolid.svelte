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
    d="M415.9 311.9l-27.8 48.1 55.7 0-27.8-48.1zM383.6 256l-60.2-104-134.8 0-60.2 104 60.2 104 134.8 0 60.2-104zm64.7 0l58.4 100.9c3.5 6 5.3 12.8 5.3 19.7 0 21.7-17.6 39.4-39.4 39.4l-117 0-61.3 105.8C286.5 535.6 271.8 544 256 544s-30.5-8.4-38.4-22.2l-61.3-105.8-117 0c-21.7 0-39.4-17.6-39.4-39.4 0-6.9 1.8-13.7 5.3-19.7L63.7 256 5.3 155.1C1.8 149.1 0 142.3 0 135.4 0 113.6 17.6 96 39.4 96l117 0 61.3-105.8C225.5-23.6 240.2-32 256-32s30.5 8.4 38.4 22.2l61.3 105.8 117 0c21.7 0 39.4 17.6 39.4 39.4 0 6.9-1.8 13.7-5.3 19.7L448.3 256zM388.1 152l27.8 48.1 27.8-48.1-55.7 0zM291 96l-35-60.4-35 60.4 70 0zM123.9 152l-55.7 0 27.8 48.1 27.8-48.1zM96.1 311.9l-27.8 48.1 55.7 0-27.8-48.1zM221 416l35 60.4 35-60.4-70 0z"
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
