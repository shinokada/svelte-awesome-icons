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
    d="M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512zM134.1 153.9l25.9 25.9 25.9-25.9c7.8-7.8 20.5-7.8 28.3 0s7.8 20.5 0 28.3l-25.9 25.9 25.9 25.9c7.8 7.8 7.8 20.5 0 28.3s-20.5 7.8-28.3 0l-25.9-25.9-25.9 25.9c-7.8 7.8-20.5 7.8-28.3 0s-7.8-20.5 0-28.3l25.9-25.9-25.9-25.9c-7.8-7.8-7.8-20.5 0-28.3s20.5-7.8 28.3 0zm192 0l25.9 25.9 25.9-25.9c7.8-7.8 20.5-7.8 28.3 0s7.8 20.5 0 28.3l-25.9 25.9 25.9 25.9c7.8 7.8 7.8 20.5 0 28.3s-20.5 7.8-28.3 0l-25.9-25.9-25.9 25.9c-7.8 7.8-20.5 7.8-28.3 0s-7.8-20.5 0-28.3l25.9-25.9-25.9-25.9c-7.8-7.8-7.8-20.5 0-28.3s20.5-7.8 28.3 0zM256 304a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"
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
