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
    d="M64 32C64 14.3 78.3 0 96 0L320 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l0 151.7c-18.5 0-37 7-51.1 21.1-21.6 21.6-26.6 53.6-15 79.9-26.9 10.4-45.9 36.6-45.9 67.1s19 56.7 45.9 67.1c-7.3 16.5-8 35.2-2.3 52.2-13.4 5.7-28.2 8.8-43.6 8.8-61.9 0-112-50.1-112-112L96 64C78.3 64 64 49.7 64 32zm96 32l0 128 96 0 0-128-96 0zM280 408c-13.3 0-24-10.7-24-24s10.7-24 24-24c28.8 0 43.2-34.8 22.9-55.2-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0c20.4 20.4 55.2 5.9 55.2-22.9 0-13.3 10.7-24 24-24s24 10.7 24 24c0 28.8 34.8 43.2 55.2 22.9 9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9c-20.4 20.4-5.9 55.2 22.9 55.2 13.3 0 24 10.7 24 24s-10.7 24-24 24c-28.8 0-43.2 34.8-22.9 55.2 9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0c-20.4-20.4-55.2-5.9-55.2 22.9 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-28.8-34.8-43.2-55.2-22.9-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9c20.4-20.4 5.9-55.2-22.9-55.2zm104-32a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm88 40a24 24 0 1 0 -48 0 24 24 0 1 0 48 0z"
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
