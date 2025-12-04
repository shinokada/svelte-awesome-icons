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
    d="M64 112c0-26.5 21.5-48 48-48s48 21.5 48 48l0 112-96 0 0-112zM176 368c0-48.7 18.1-93.2 48-127l0-129C224 50.1 173.9 0 112 0S0 50.1 0 112L0 400c0 61.9 50.1 112 112 112 37.3 0 70.3-18.2 90.7-46.3-17-28.6-26.7-62-26.7-97.7zm64.7 67.4c4.6 8.7 16.3 9.7 23.3 2.7L438.1 264c7-7 6-18.7-2.7-23.3-20.1-10.7-43-16.7-67.4-16.7-79.5 0-144 64.5-144 144 0 24.3 6 47.3 16.7 67.4zM297.9 472c-7 7-6 18.7 2.7 23.3 20.1 10.7 43 16.7 67.4 16.7 79.5 0 144-64.5 144-144 0-24.3-6-47.3-16.7-67.4-4.6-8.7-16.3-9.7-23.3-2.7L297.9 472z"
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
