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
  viewBox="0 0 384 512"
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <path
    d="M192-32c106 0 192 86 192 192l0 133.5c0 17-6.8 33.2-18.7 45.2L320 384 370.8 434.7c8.5 8.5 13.2 20 13.2 32 0 25-20.3 45.2-45.2 45.3L45.3 512c-25 0-45.2-20.3-45.2-45.3 0-12 4.8-23.5 13.2-32L64 384 64 349.4c0-18.7 8.2-36.4 22.3-48.6l89.7-76.8-48 0-12.1 12.1c-12.7 12.7-30 19.9-48 19.9-37.5 0-67.9-30.4-67.9-67.9l0-8.7c0-22.8 8.2-44.9 23.1-62.3L96 32 96 0c0-17.7 14.3-32 32-32l64 0zM160 72a24 24 0 1 0 0 48 24 24 0 1 0 0-48z"
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
