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
    d="M535-24.9c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L41 537.1c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l25-25 0-447.2c0-15 10.5-28.3 25.4-29.8 7.4-.7 14.9-1.1 22.6-1.1 112.7 0 206 83.3 221.7 191.7 .4 3 1.7 5.9 3.6 8.3l2.2 2.6 227.5-227.5zM133.8 512L288 357.8 288 416c0 53-43 96-96 96l-58.2 0zM176 224a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm336 40a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm-88 72a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm-64 48a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm128 0a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm24 72a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm-88-24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"
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
