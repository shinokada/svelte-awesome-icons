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
  viewBox="0 0 448 512"
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <path
    d="M224 137.1c-5.4-.3-10.8 .6-15.9 2.4s-9.7 4.8-13.6 8.5-7 8.2-9.2 13.2-3.2 10.3-3.2 15.7 1.1 10.8 3.2 15.7 5.3 9.5 9.2 13.2 8.6 6.6 13.6 8.5 10.5 2.7 15.9 2.4c5.4 .3 10.8-.6 15.9-2.4s9.7-4.8 13.6-8.5 7-8.2 9.2-13.2 3.2-10.3 3.2-15.7-1.1-10.8-3.2-15.7-5.3-9.5-9.2-13.2-8.6-6.6-13.6-8.5-10.5-2.7-15.9-2.4zM384 32L64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64zM224 258a81 81 0 1 1 0-162.1 81 81 0 1 1 0 162.1zm59.3 6.2c16.8-13.2 29.5-5.5 34.1 3.6 7.8 16-1.1 23.7-21.5 37-17.1 10.9-40.7 15.2-56.2 16.8l13 12.9 47.7 47.7c17.4 17.9-11 45.8-28.6 28.6-12-12.2-29.5-29.7-47.7-47.9l-47.7 47.9c-17.7 17.2-46-11-28.4-28.6 3.7-3.7 7.9-7.9 12.5-12.5 10.4-10.4 22.6-22.7 35.2-35.2l12.9-12.9c-15.4-1.6-39.3-5.7-56.6-16.8-20.3-13.3-29.3-20.9-21.4-37 4.6-9.1 17.3-16.8 34.1-3.6 0 0 22.7 18 59.3 18s59.3-18 59.3-18z"
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
