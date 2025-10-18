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
    d="M446.2 34.5c-14.2-10.1-33.5-4.6-42.2 10.5L331.6 170.3c31.3 15.8 52.8 48.3 52.8 85.7l144 0c17.7 0 32.2-14.4 30.1-31.9-9.1-78.1-51.4-146.1-112.3-189.6zM172.7 44.9C164 29.8 144.7 24.3 130.5 34.5 69.6 77.9 27.3 145.9 18.2 224.1 16.1 241.6 30.7 256 48.3 256l144 0c0-37.5 21.5-69.9 52.8-85.7L172.7 44.9zm-9.4 416.8c-8.7 15.1-3.8 34.5 12 41.8 34.4 15.7 72.7 24.5 113 24.5s78.6-8.8 113-24.5c15.8-7.2 20.7-26.7 12-41.8L341 336.3c-15.1 9.9-33.2 15.7-52.6 15.7s-37.5-5.8-52.6-15.7L163.3 461.7zM288.3 304a48 48 0 1 0 -.7-96 48 48 0 1 0 .7 96z"
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
