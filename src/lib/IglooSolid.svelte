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
    d="M320 33.8l0 126.2-271.5 0c51.7-77.2 139.6-128 239.5-128 10.8 0 21.5 .6 32 1.8zM368 160l0-116.7c66 19 122.2 61 159.5 116.7L368 160zM22.6 208l73.4 0 0 112-96 0c0-39.7 8-77.6 22.6-112zM176 320l-32 0 0-112 288 0 0 112-32 0 0 48 176 0 0 64c0 26.5-21.5 48-48 48L48 480c-26.5 0-48-21.5-48-48l0-64 176 0 0-48zm304 0l0-112 73.4 0C568 242.4 576 280.3 576 320l-96 0zM288 288c-35.3 0-64 28.7-64 64l0 80 128 0 0-80c0-35.3-28.7-64-64-64z"
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
