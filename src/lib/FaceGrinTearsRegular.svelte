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
    d="M504.1 353C512.9 367.2 525.3 379 539.8 387.2 495.1 462 413.4 512 320 512S144.9 462 100.2 387.2c14.6-8.2 26.9-20 35.8-34.3 34.9 66 104.2 111 184.1 111s149.2-45 184.1-111zm16.4-152.5C496.2 112.6 415.7 48 320 48S143.8 112.6 119.5 200.5c-10.6-4.8-22.7-6.8-35.4-5l-13.4 1.9C97.2 84.3 198.8 0 320 0S542.8 84.3 569.3 197.4l-13.4-1.9c-12.7-1.8-24.8 .2-35.4 5zM455.8 320c-19.8 55.9-73.1 96-135.8 96-62.7 0-116-40-135.8-95.9-4.1-11.6 7.8-21.4 19.6-17.8 34.7 10.6 74.2 16.5 116.1 16.5 42 0 81.5-6 116.3-16.6 11.8-3.6 23.7 6.1 19.6 17.8zM212 208l0 8c0 11-9 20-20 20s-20-9-20-20l0-8c0-37.6 30.4-68 68-68s68 30.4 68 68l0 8c0 11-9 20-20 20s-20-9-20-20l0-8c0-15.5-12.5-28-28-28s-28 12.5-28 28zm188-28c-15.5 0-28 12.5-28 28l0 8c0 11-9 20-20 20s-20-9-20-20l0-8c0-37.6 30.4-68 68-68s68 30.4 68 68l0 8c0 11-9 20-20 20s-20-9-20-20l0-8c0-15.5-12.5-28-28-28zM640 300.6c0 28.4-23 51.4-51.4 51.4-25.6 0-47.3-18.8-50.9-44.1L531 261.1c-1.5-10.6 7.5-19.6 18.1-18.1l46.7 6.7c25.3 3.6 44.1 25.3 44.1 50.9zm-640 0c0-25.6 18.8-47.3 44.1-50.9L90.9 243c10.6-1.5 19.6 7.5 18.1 18.1l-6.7 46.7C98.7 333.2 77 352 51.4 352 23 352 0 329 0 300.6z"
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
