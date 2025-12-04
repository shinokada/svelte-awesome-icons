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
    d="M448 0c-68.6 0-127.1 43.1-149.8 103.8 17.1 14.1 29.6 33.5 34.9 55.8 39.9 21.7 66.9 63.9 66.9 112.5 0 13.5-2.1 26.5-5.9 38.7 16.9 6 35 9.3 53.9 9.3 43 0 82.1-17 110.8-44.6 4.6-4.4 5.9-11.2 3.3-17s-8.6-9.3-14.9-8.8c-3 .2-6.1 .4-9.2 .4-63.5 0-115-51.5-115-115 0-45.1 26-84.2 63.8-103 5.7-2.8 9-8.9 8.2-15.2S489.6 5.3 483.4 3.9C472 1.4 460.2 0 448 0zM272 352c44.2 0 80-35.8 80-80 0-39-27.9-71.5-64.8-78.6 .5-3.1 .8-6.2 .8-9.4 0-30.9-25.1-56-56-56-12.4 0-23.9 4-33.1 10.8-13.4-25.5-40.1-42.8-70.9-42.8-44.2 0-80 35.8-80 80 0 7.4 1 14.6 2.9 21.5-29.8 11.6-50.9 40.6-50.9 74.5 0 44.2 35.8 80 80 80l192 0zM69 401.1c-12.6-4.2-26.2 2.6-30.4 15.2L17.2 480.4C13 493 19.8 506.6 32.4 510.8s26.2-2.6 30.4-15.2l21.4-64.1c4.2-12.6-2.6-26.2-15.2-30.4zm120 0c-12.6-4.2-26.2 2.6-30.4 15.2l-21.4 64.1c-4.2 12.6 2.6 26.2 15.2 30.4s26.2-2.6 30.4-15.2l21.4-64.1c4.2-12.6-2.6-26.2-15.2-30.4zm120 0c-12.6-4.2-26.2 2.6-30.4 15.2l-21.4 64.1c-4.2 12.6 2.6 26.2 15.2 30.4s26.2-2.6 30.4-15.2l21.4-64.1c4.2-12.6-2.6-26.2-15.2-30.4z"
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
