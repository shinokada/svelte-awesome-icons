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

  const ariaDescribedby = $derived(desc?.id && desc.desc ? desc.id : undefined);
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
  aria-describedby={ariaDescribedby}
  viewBox="0 0 512 512"
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <path
    d="M256 512a256 256 0 1 1 0-512 256 256 0 1 1 0 512zM385.6 113.8l0 0-177 0c-52.4 0-94.8 42.4-94.8 94.8l0 177c0 7 5.7 12.6 12.6 12.6l186.5 0c47.1 0 85.3-38.2 85.3-85.3l0-72.7c0-7-5.7-12.6-12.6-12.6l-145.4 0c-7 0-12.6 5.7-12.6 12.6l0 31.6c0 6.6 5.1 12.1 11.6 12.6l1 0 88.5 0c6.6 0 12.1 5.1 12.6 11.6l0 1 0 6.3c0 20.9-17 37.9-37.9 37.9l-120.1 0c-7 0-12.6-5.7-12.6-12.6l0-120.1c0-20.4 16.1-37.1 36.4-37.9l1.6 0 177 0c7 0 12.6-5.7 12.6-12.6l0-31.6c0-7-5.6-12.6-12.6-12.6z"
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
