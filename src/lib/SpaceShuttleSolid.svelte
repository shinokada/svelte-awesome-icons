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
    d="M0 368l0 64c0 26.5 21.5 48 48 48l50 0c40.6 0 80.4-11 115.2-31.9l133.5-80.1-93.3 0-64.9 38.9c-14 8.4-28.9 14.7-44.5 19l0-66.4c9.7-5.6 17.8-13.7 23.4-23.4l198.8 0c67.1 0 127.8-20.6 170.3-70.6 4.6-5.4 4.6-13.3 0-18.8-42.5-50.1-103.2-70.6-170.3-70.6l-198.8 0c-5.6-9.7-13.7-17.8-23.4-23.4l0-66.4c15.6 4.2 30.6 10.6 44.5 19l64.9 38.9 93.3 0-133.5-80.1C178.4 43 138.6 32 98 32L48 32C21.5 32 0 53.5 0 80L0 368zm96 0l0 64-48 0 0-64 48 0zM96 80l0 64-48 0 0-64 48 0zM416 224c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16z"
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
