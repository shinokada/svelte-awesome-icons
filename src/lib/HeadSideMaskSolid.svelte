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
    d="M445.9 193c-.1-.4-.2-.9-.2-1.3-15.7-108.4-108.9-191.7-221.7-191.7-85 0-159 47.4-196.9 117.2L283.3 288 456 288 442.9 336 336 336c-8.8 0-16 7.2-16 16s7.2 16 16 16l98.2 0-8.7 32-89.5 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l80.6 0c-6.7 19.1-24.8 32-45.3 32L288 464c-17.7 0-32-14.3-32-32l0-104.5-247.5-165C3 182.1 0 202.7 0 224 0 278 19.1 327.5 50.9 366.2 58.9 375.9 64 387.8 64 400.4L64 464c0 26.5 21.5 48 48 48l127.3 0 .7 0 131.3 0c44.9 0 83.8-31.1 93.6-74.9l33.9-150.3c3.3-14.4-.3-29.5-9.7-41L445.9 193zM288 192a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"
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
