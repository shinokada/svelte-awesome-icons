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
    d="M232.4 1.1c-122.2 11.4-219.5 108.7-230.9 230.9 16.2-.1 32-1.8 47.2-5 13-2.7 25.7 5.5 28.4 18.5s-5.5 25.7-18.5 28.4c-18.4 3.9-37.6 6-57.1 6.1 11.4 122.2 108.7 219.5 230.9 230.9 .1-19.5 2.2-38.7 6.1-57.1 2.7-13 15.5-21.3 28.4-18.5s21.3 15.5 18.5 28.4c-3.2 15.2-4.9 31-5 47.2 122.2-11.4 219.5-108.7 230.9-230.9-16.2 .1-32 1.8-47.2 5-13 2.7-25.7-5.5-28.4-18.5s5.5-25.7 18.5-28.4c18.4-3.9 37.6-6 57.1-6.1-11.4-122.2-108.7-219.5-230.9-230.9-.1 19.5-2.2 38.7-6.1 57.1-2.7 13-15.5 21.3-28.4 18.5s-21.3-15.5-18.5-28.4c3.2-15.2 4.9-31 5-47.2zm2.8 151.4c-21.4 32.9-49.5 60.9-82.3 82.3-11.1 7.2-26 4.1-33.2-7s-4.1-26 7-33.2c27.2-17.7 50.5-41 68.3-68.3 7.2-11.1 22.1-14.3 33.2-7s14.3 22.1 7 33.2zM393.1 284.2c7.2 11.1 4.1 26-7 33.2-27.2 17.7-50.5 41-68.3 68.3-7.2 11.1-22.1 14.3-33.2 7s-14.3-22.1-7-33.2c21.4-32.9 49.5-60.9 82.3-82.3 11.1-7.2 26-4.1 33.2 7z"
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
