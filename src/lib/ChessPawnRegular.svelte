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
  viewBox="0 0 384 512"
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <path
    d="M192-32c66.3 0 120 53.7 120 120 0 27.6-9.3 52.9-24.9 73.2 9.8 3 16.9 12.1 16.9 22.8 0 13.3-10.7 24-24 24l-.6 0 24.6 160 53.6 67c6.7 8.4 10.4 18.8 10.4 29.6 0 26.2-21.2 47.4-47.4 47.4L63.4 512c-26.2 0-47.4-21.2-47.4-47.4 0-10.8 3.7-21.2 10.4-29.6l53.6-67 24.6-160-.6 0c-13.3 0-24-10.7-24-24 0-10.8 7.1-19.8 16.9-22.8-15.6-20.3-24.9-45.6-24.9-73.2 0-66.3 53.7-120 120-120zM115.9 400l-51.2 64 254.7 0-51.2-64-152.2 0zm36.2-184.7l-21 136.7 121.9 0-21-136.7-1.1-7.3-77.6 0-1.1 7.3zM192 16a72 72 0 1 0 0 144 72 72 0 1 0 0-144z"
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
