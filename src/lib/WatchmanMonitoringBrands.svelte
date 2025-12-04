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
    d="M256 16a240 240 0 1 0 0 480 240 240 0 1 0 0-480zM121.7 429.1c-51.6-40.2-84.9-102.8-84.9-173.1 0-21.7 3.2-43.3 9.6-64.1l102.9-17.9-.1 11-13.9 2s-.1 12.5-.1 19.5c0 2 .4 4 1.2 5.8s2.1 3.4 3.7 4.6l9.5 7.4-27.7 204.9zM227.4 145.9l8.5-7.6s6.9-5.4-.1-9.3c-7.2-4-39.5-34.5-39.5-34.5-5.3-5.5-8.3-7.3-15.5 0 0 0-32.3 30.5-39.5 34.5-7.1 4-.1 9.3-.1 9.3l8.5 7.6 0 4.4-73.5-19.2c39.6-56.9 105.5-94.3 180-94.3 31.3 0 62.2 6.7 90.6 19.6s53.8 31.8 74.3 55.4l-193.5 37.7 0-3.6zm34.1 329.3l-33.9-250.9 9.5-7.4c1.6-1.2 2.8-2.8 3.7-4.6s1.3-3.8 1.2-5.8c0-7-.1-19.5-.1-19.5l-13.9-2-.1-10.5 241.7 31.4c3.9 16.4 5.8 33.3 5.8 50.1 0 119.1-95.4 216.2-213.8 219.1z"
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
