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
    d="M99.5 144.8l79.2 79.2-50.7 0c-17.7 0-32 14.3-32 32l0 32c0 17.7 14.3 32 32 32l146.7 0 92.5 92.5c-31.4 22.4-69.8 35.5-111.2 35.5-106 0-192-86-192-192 0-41.5 13.1-79.9 35.5-111.2zM333.3 288l-32-32 82.7 0 0 32-50.7 0zm32 32l18.7 0c17.7 0 32-14.3 32-32l0-32c0-17.7-14.3-32-32-32L269.3 224 144.8 99.5c31.4-22.4 69.8-35.5 111.2-35.5 106 0 192 86 192 192 0 41.5-13.1 79.9-35.5 111.2L365.3 320zM256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512zM272 96c-8.8 0-16 7.2-16 16 0 26.5 21.5 48 48 48l32 0c8.8 0 16 7.2 16 16s7.2 16 16 16 16-7.2 16-16c0-26.5-21.5-48-48-48l-32 0c-8.8 0-16-7.2-16-16s-7.2-16-16-16z"
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
