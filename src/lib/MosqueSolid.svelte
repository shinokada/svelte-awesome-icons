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
    d="M174.8 224l226.4 0c43.5 0 78.8-35.3 78.8-78.8 0-25.5-12.3-49.4-33.1-64.2L297.3-25.4c-5.6-3.9-13-3.9-18.5 0L129.1 81C108.3 95.8 96 119.7 96 145.2 96 188.7 131.3 224 174.8 224zM512 512c35.3 0 64-28.7 64-64l0-224c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 48-448 0 0-48c0-17.7-14.3-32-32-32S0 206.3 0 224L0 448c0 35.3 28.7 64 64 64l448 0zM240 384c0-26.5 21.5-48 48-48s48 21.5 48 48l0 80-96 0 0-80z"
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
