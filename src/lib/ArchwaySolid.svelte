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
    ariaLabel = 'archway solid',
    ...restProps
  }: Props = $props();

  let ariaDescribedby = `${title?.id || ''} ${desc?.id || ''}`;
  const hasDescription = $derived(!!(title?.id || desc?.id));
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  {...restProps}
  {role}
  width={size}
  height={size}
  fill={color}
  aria-label={ariaLabel}
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
    d="M32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l448 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 32zm0 384c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0 64 0 0-128c0-53 43-96 96-96s96 43 96 96l0 128 64 0 64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-288L32 128l0 288z"
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
@prop ariaLabel = 'archway solid'
@prop ...restProps
-->
