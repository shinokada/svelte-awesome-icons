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
    d="M408.8 0c-27.4 0-53.6 10.9-73 30.2L318.1 48 305 34.9c-28.1-28.1-73.7-28.1-101.8 0L103 135c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0L237.1 68.9c9.4-9.4 24.6-9.4 33.9 0L284.1 81.9 184 182.1 329.9 328 481.8 176.2c19.4-19.4 30.2-45.6 30.2-73 0-57-46.2-103.2-103.2-103.2zM102.4 263.7c-49.9 49.9-83.3 114-95.5 183.5L.4 483.8C-1 491.6 1.5 499.4 7 505s13.4 8 21.1 6.7l36.7-6.5c69.5-12.3 133.6-45.6 183.5-95.5L296 361.9 150.1 216 102.4 263.7z"
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
