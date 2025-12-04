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
    d="M481.7 240.1c-17.6-1.2-32.9 12-34.2 29.7-3.3 47-23.6 89.4-54.8 121L361 359c-6.9-6.9-17.2-8.9-26.2-5.2S320 366.3 320 376l0 112c0 13.3 10.7 24 24 24l112 0c9.7 0 18.5-5.8 22.2-14.8s1.7-19.3-5.2-26.2l-35-35c41.7-42.2 68.9-98.8 73.4-161.8 1.2-17.6-12-32.9-29.7-34.2zM39 41L74 76c-41.7 42.2-68.9 98.8-73.4 161.8-1.2 17.6 12 32.9 29.7 34.2s32.9-12 34.2-29.7c3.3-47 23.6-89.4 54.8-121L151 153c6.9 6.9 17.2 8.9 26.2 5.2S192 145.7 192 136l0-112c0-13.3-10.7-24-24-24L56 0C46.3 0 37.5 5.8 33.8 14.8S32.2 34.1 39 41zm201-10.7c-1.2 17.6 12 32.9 29.7 34.2 47 3.3 89.4 23.6 121 54.8L359 151c-6.9 6.9-8.9 17.2-5.2 26.2S366.3 192 376 192l112 0c13.3 0 24-10.7 24-24l0-112c0-9.7-5.8-18.5-14.8-22.2S477.9 32.2 471 39L436 74c-42.2-41.7-98.8-68.9-161.8-73.4-17.6-1.2-32.9 12-34.2 29.7zM41 473l35-35c42.2 41.7 98.8 68.9 161.8 73.4 17.6 1.2 32.9-12 34.2-29.7s-12-32.9-29.7-34.2c-47-3.3-89.4-23.6-121-54.8L153 361c6.9-6.9 8.9-17.2 5.2-26.2S145.7 320 136 320L24 320c-13.3 0-24 10.7-24 24L0 456c0 9.7 5.8 18.5 14.8 22.2S34.1 479.8 41 473z"
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
