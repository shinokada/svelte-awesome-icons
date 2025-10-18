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
  viewBox="0 0 512 512"
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <path
    d="M48 384c-8.8 0-16 7.2-16 16 0 44.2 35.8 80 80 80l288 0c44.2 0 80-35.8 80-80 0-8.8-7.2-16-16-16L48 384zM32 202c0 12.2 9.9 22 22 22L458 224c12.2 0 22-9.9 22-22 0-17.2-2.6-34.4-10.8-49.5-22.2-40.8-82.3-120.5-213.2-120.5S65 111.6 42.8 152.5C34.6 167.6 32 184.8 32 202zM0 304c0 17.7 14.3 32 32 32l448 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 272c-17.7 0-32 14.3-32 32zM256 72a24 24 0 1 1 0 48 24 24 0 1 1 0-48zM120 128a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm248-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"
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
