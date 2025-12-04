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
    d="M64 32C28.7 32 0 60.7 0 96L0 384c0 35.3 28.7 64 64 64l3.3 0c10.4 36.9 44.4 64 84.7 64s74.2-27.1 84.7-64l102.6 0c10.4 36.9 44.4 64 84.7 64s74.2-27.1 84.7-64l3.3 0c35.3 0 64-28.7 64-64l0-146.7c0-17-6.7-33.3-18.7-45.3L512 146.7c-12-12-28.3-18.7-45.3-18.7l-50.7 0 0-32c0-35.3-28.7-64-64-64L64 32zM512 237.3l0 50.7-96 0 0-96 50.7 0 45.3 45.3zM152 384a40 40 0 1 1 0 80 40 40 0 1 1 0-80zm232 40a40 40 0 1 1 80 0 40 40 0 1 1 -80 0zM305 225l-72 72c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l31-31-102.1 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l102.1 0-31-31c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l72 72c9.4 9.4 9.4 24.6 0 33.9z"
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
