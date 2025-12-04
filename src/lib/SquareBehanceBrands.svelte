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
    d="M155.3 318.4c17.2 0 31.2-6.1 31.2-25.4 0-19.7-11.7-27.4-30.3-27.5l-46 0 0 52.9 45.1 0zm-5.4-129.6l-39.6 0 0 44.8 42.7 0c15.1 0 25.8-6.6 25.8-22.9 0-17.7-13.7-21.9-28.9-21.9zm129.5 74.8l62.2 0c-1.7-18.5-11.3-29.7-30.5-29.7-18.3 0-30.5 11.4-31.7 29.7zM384 32L64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64zM349.5 185l-77.8 0 0-18.9 77.8 0 0 18.9zM193.7 243.7c23.6 6.7 35 27.5 35 51.6 0 39-32.7 55.7-67.6 55.9l-93.1 0 0-192 90.5 0c32.9 0 61.4 9.3 61.4 47.5 0 19.3-9 28.8-26.2 37zm118.7-38.6c43.5 0 67.6 34.3 67.6 75.4 0 1.6-.1 3.3-.2 5 0 .8-.1 1.5-.1 2.2l-100.2 0c0 22.2 11.7 35.3 34.1 35.3 11.6 0 26.5-6.2 30.2-18.1l33.7 0c-10.4 31.9-31.9 46.8-65.1 46.8-43.8 0-71.1-29.7-71.1-73 0-41.8 28.7-73.6 71.1-73.6z"
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
