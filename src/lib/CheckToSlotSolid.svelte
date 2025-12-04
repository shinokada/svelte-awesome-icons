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
    d="M552 288c13.3 0 24 10.7 24 24l0 104c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 312c0-13.3 10.7-24 24-24s24 10.7 24 24l0 104c0 8.8 7.2 16 16 16l448 0c8.8 0 16-7.2 16-16l0-104c0-13.3 10.7-24 24-24zM416 32c35.3 0 64 28.7 64 64l0 224c0 35.3-28.7 64-64 64l-256 0c-35.3 0-64-28.7-64-64L96 96c0-35.3 28.7-64 64-64l256 0zm-37.1 84.6c-10.7-7.8-25.7-5.4-33.5 5.3l-85.6 117.7-26.5-27.4c-9.2-9.5-24.4-9.8-33.9-.6-9.5 9.2-9.8 24.4-.6 33.9l46.4 48c4.9 5.1 11.8 7.8 18.9 7.3s13.6-4.1 17.8-9.8L384.2 150.1c7.8-10.7 5.4-25.7-5.3-33.5z"
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
