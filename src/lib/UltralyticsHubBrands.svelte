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
    d="M130.4 16c60.9 0 110.4 49.5 110.4 110.4l0 24.9c4.8-.7 9.7-1 14.6-1 88.1-.2 165.1 49 205.4 121.2-22.8-16.2-50.7-25.4-80.4-25.3-77.1 .2-139.5 62.6-139.6 139.4-.1 60.9-49.5 110.3-110.7 110.5-60.6 .2-110.2-49.5-110.2-110.5 .2-2.6 0 0 .1-3.2l0-256C20.1 65.5 69.5 16 130.4 16zM380.3 496a110.4 110.4 0 1 1 0-220.9 110.4 110.4 0 1 1 0 220.9z"
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
