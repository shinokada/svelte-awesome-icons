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
    d="M400 16c17.7 0 32 14.3 32 32l0 16 16 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-48.9 0c-26 0-47.1 21.1-47.1 47.1 0 22.5 15.9 41.8 37.9 46.2l32.8 6.6c51.9 10.4 89.3 56 89.3 109 0 50.6-33.8 93.3-80 106.7l0 20.4c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-16-32 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64.9 0c26 0 47.1-21.1 47.1-47.1 0-22.5-15.9-41.8-37.9-46.2l-32.8-6.6c-51.9-10.4-89.3-56-89.3-109 0-50.6 33.8-93.2 80-106.7L368 48c0-17.7 14.3-32 32-32zM0 64C0 46.3 14.3 32 32 32l80 0c79.5 0 144 64.5 144 144 0 54.3-30 101.5-74.4 126.1l41 136.7c5.1 16.9-4.5 34.8-21.5 39.8s-34.8-4.5-39.8-21.5L120.1 319.8c-2.7 .1-5.4 .2-8.1 .2l-48 0 0 128c0 17.7-14.3 32-32 32S0 465.7 0 448L0 64zM64 256l48 0c44.2 0 80-35.8 80-80s-35.8-80-80-80l-48 0 0 160z"
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
