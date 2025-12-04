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
    d="M288 16C155.5 16 48 123.5 48 256S155.5 496 288 496c7.4 0 19.7-2.3 33.7-7.3 13.8-4.9 27.1-11.7 36.7-18.9 38.4-29 90.5-29 129 0 15.4 11.6 35.3 21.1 55 24.4 19.5 3.3 37 .4 51.1-10.2 10.6-8 25.6-5.9 33.6 4.7s5.9 25.6-4.7 33.6c-27.3 20.5-59.2 24-87.9 19.2-28.5-4.8-55.4-18-75.9-33.4-21.3-16.1-49.9-16.1-71.2 0-14.5 10.9-32.4 19.7-49.5 25.8-16.8 6-34.9 10.1-49.9 10.1l-.1 0C128.9 543.9 0 415 0 256 0 96.9 128.9-32 288-32 301.3-32 312-21.3 312-8s-10.7 24-24 24zm44.8 166.4l96-72c11.4-8.5 27.1-8.5 38.5 0l95.5 72c8 6 12.7 15.5 12.7 25.5l.3 121.5c-2.2 1.3-4.3 2.6-6.4 4.2-4.3 3.1-8.7 .8-13.2-1.5l-1.2-.6-.7-.3c-5.4-2.7-11.7-6.6-18.9-11.7-29.5-21.1-64.3-31.6-99.1-31.4-34.1 .2-68.1 10.7-97 31.4-7.8 5.6-13.8 9.3-19.3 11.2L320 208c0-10.1 4.7-19.6 12.8-25.6zm54.6 229.7c-14.5 10.9-32.4 19.7-49.5 25.8-16.8 6-34.9 10.1-49.9 10.1-106 0-192-86-192-192S182 64 288 64c13.3 0 24 10.7 24 24s-10.7 24-24 24c-79.5 0-144 64.5-144 144s64.5 144 144 144c7.4 0 19.7-2.3 33.7-7.3 13.8-4.9 27.1-11.7 36.7-18.9 38.4-29 90.5-29 129 0 15.4 11.6 35.3 21.1 55 24.4 19.5 3.3 37 .4 51.1-10.2 10.6-8 25.6-5.9 33.6 4.7s5.9 25.6-4.7 33.6c-27.3 20.5-59.2 24-87.9 19.2-28.5-4.8-55.4-18-75.9-33.4-21.3-16.1-49.9-16.1-71.2 0z"
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
