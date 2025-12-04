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
    d="M256 8a248 248 0 1 0 0 496 248 248 0 1 0 0-496zm0 7.8a240.2 240.2 0 1 1 0 480.4 240.2 240.2 0 1 1 0-480.4zm0 20.5a219.7 219.7 0 1 0 0 439.4 219.7 219.7 0 1 0 0-439.4zm0 8.2a211.5 211.5 0 1 1 0 423 211.5 211.5 0 1 1 0-423zm186.2 260c-4.4 17.1-11.2 33.5-20.1 48.7l-74.1-35.9 61.5 54.8c-10.6 14.1-23.2 26.6-37.2 37.3l-54.8-61.6 35.9 74.3c-15.2 9-31.6 15.8-48.6 20.2l-27.3-78.5 4.8 82.9c-8.6 1.2-17.4 1.8-26.3 1.8s-17.7-.6-26.3-1.8l4.8-82.5-27.2 78c-17.1-4.5-33.4-11.3-48.7-20.2l35.9-74.3-54.9 61.6c-14-10.7-26.6-23.2-37.2-37.3l61.6-54.9-74.3 35.9C80.7 338 74 321.7 69.5 304.6l77.8-27.1-82.2 4.8c-1.2-8.6-1.8-17.3-1.8-26.2 0-9 .6-17.8 1.8-26.5l82.4 4.8-77.9-27.2c4.5-17.1 11.3-33.5 20.2-48.7l74.2 35.9-61.5-54.9c10.7-14 23.2-26.6 37.3-37.2l54.8 61.5-35.8-74.2c15.2-8.9 31.6-15.7 48.6-20.1l26.9 77.2-4.7-81.6c8.6-1.2 17.4-1.8 26.3-1.8s17.7 .6 26.3 1.8l-4.7 82.2 27-77.8c17.3 4.5 33.6 11.4 48.6 20.2l-35.8 74.1 54.7-61.5c14.1 10.7 26.6 23.2 37.2 37.2l-61.4 54.8 74.1-35.9c8.9 15.2 15.7 31.6 20.2 48.6l-77.8 27.1 82.2-4.7c1.2 8.7 1.8 17.5 1.8 26.5 0 8.9-.6 17.6-1.8 26.2l-82.1-4.7 77.7 27.1z"
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
