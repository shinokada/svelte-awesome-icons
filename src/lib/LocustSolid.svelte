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
    d="M328 32c137 0 248 111 248 248l0 40-.4 8.2C571.5 368.5 537.4 400 496 400l-12.3 0 25.2 44.1c6.6 11.5 2.6 26.2-8.9 32.8s-26.2 2.6-32.7-8.9l-38.8-67.9-80.4 0-48.2 69.7c-7.5 10.9-22.5 13.6-33.4 6.1s-13.6-22.5-6.1-33.4l29.3-42.3-74.5 0-51.7 70.2c-7.9 10.7-22.9 12.9-33.6 5.1s-12.9-22.9-5.1-33.6l40.5-55-43-16.4-79.3 100.5c-8.2 10.4-23.3 12.2-33.7 4s-12.2-23.3-4-33.7l240-304 2.1-2.3c5.2-5.1 12.5-7.5 19.9-6.6 8.4 1.1 15.6 6.5 18.9 14.3l21.7 50.7 40.9-55.5 2.1-2.4c5.1-5.3 12.5-8 20-7.2 8.5 1 15.9 6.5 19.3 14.4l41.8 97.5 64.2 0c10.2 0 20 2 29 5.5-16.4-94-98.3-165.5-197-165.5l-16 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l16 0zM488 296a24 24 0 1 0 0 48 24 24 0 1 0 0-48zM43.5 331.1C36.2 321.4 32 309.5 32 296.8 32 265.5 57.5 240 88.9 240l27.6 0-72.9 91.1zM225.1 240l48.2 0 1.4-1.9-16.9-39.5-32.7 41.5zm107.8 0l46.7 0-17.2-40-29.5 40z"
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
