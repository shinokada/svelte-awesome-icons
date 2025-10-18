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
  viewBox="0 0 640 512"
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <path
    d="M48.2 66.8c-.1-.8-.2-1.7-.2-2.5l0-.2c0-8.8 7.2-16 16-16 .9 0 1.9 .1 2.8 .2 7.5 1.3 13.2 7.9 13.2 15.8 0 8.8-7.2 16-16 16-7.9 0-14.5-5.7-15.8-13.2zM0 64c0 26.9 16.5 49.9 40 59.3l0 105.3c-23.5 9.5-40 32.5-40 59.3 0 35.3 28.7 64 64 64 26.9 0 49.9-16.5 59.3-40l201.3 0c9.5 23.5 32.5 40 59.3 40 35.3 0 64-28.7 64-64 0-26.9-16.5-49.9-40-59.3l0-105.3c23.5-9.5 40-32.5 40-59.3 0-35.3-28.7-64-64-64-26.9 0-49.9 16.5-59.3 40L123.3 40C113.9 16.5 90.9 0 64 0 28.7 0 0 28.7 0 64zm368 0a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zM324.7 88c6.5 16 19.3 28.9 35.3 35.3l0 105.3c-16 6.5-28.9 19.3-35.3 35.3l-201.3 0c-6.5-16-19.3-28.9-35.3-35.3l0-105.3c16-6.5 28.9-19.3 35.3-35.3l201.3 0zM384 272a16 16 0 1 1 0 32 16 16 0 1 1 0-32zM80 288c0 7.9-5.7 14.5-13.2 15.8-.8 .1-1.7 .2-2.5 .2l-.2 0c-8.8 0-16-7.2-16-16 0-.9 .1-1.9 .2-2.8 1.3-7.5 7.9-13.2 15.8-13.2 8.8 0 16 7.2 16 16zm436.7-40c6.5 16 19.3 28.9 35.3 35.3l0 105.3c-16 6.5-28.9 19.3-35.3 35.3l-201.3 0c-6.5-16-19.3-28.9-35.3-35.3l0-20.7-48 0 0 20.7c-23.5 9.5-40 32.5-40 59.3 0 35.3 28.7 64 64 64 26.9 0 49.9-16.5 59.3-40l201.3 0c9.5 23.5 32.5 40 59.3 40 35.3 0 64-28.7 64-64 0-26.9-16.5-49.9-40-59.3l0-105.3c23.5-9.5 40-32.5 40-59.3 0-35.3-28.7-64-64-64-26.9 0-49.9 16.5-59.3 40l-52.7 0 0 9.6c10.7 10.9 19.1 23.9 24.6 38.4l28 0zm59.3-8a16 16 0 1 1 0-32 16 16 0 1 1 0 32zM271.8 450.7a16 16 0 1 1 -31.5-5.5 16 16 0 1 1 31.5 5.5zm301.5 13c-7.5-1.3-13.2-7.9-13.2-15.8 0-8.8 7.2-16 16-16 7.9 0 14.5 5.7 15.8 13.2l0 .1c.1 .9 .2 1.8 .2 2.7 0 8.8-7.2 16-16 16-.9 0-1.9-.1-2.8-.2z"
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
