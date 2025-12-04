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
  viewBox="0 0 640 512"
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <path
    d="M73-24.9c-9.4-9.4-24.6-9.4-33.9 0S29.7-.3 39 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L321.8 224c56.6-1 102.2-47.2 102.2-104 0-57.4-46.6-104-104-104-56.8 0-103 45.6-104 102.2L73-24.9zM512 288c-17.2 0-33.7 3.4-48.7 9.6l170 170c4.2-5.4 6.7-12.2 6.7-19.6l0-32c0-70.7-57.3-128-128-128zM59.9 97.7c-21.5 12.5-35.9 35.7-35.9 62.3 0 39.8 32.2 72 72 72 26.6 0 49.8-14.4 62.3-35.9L59.9 97.7zM250.2 288C196.8 313.9 160 368.7 160 432l0 16c0 17.7 14.3 32 32 32l250.2 0-192-192zM128 288C57.3 288 0 345.3 0 416l0 32c0 17.7 14.3 32 32 32l86.7 0c-4.3-9.8-6.7-20.6-6.7-32l0-16c0-53.2 20-101.8 52.9-138.6-11.7-3.5-24.1-5.4-36.9-5.4zM616 160a72 72 0 1 0 -144 0 72 72 0 1 0 144 0z"
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
