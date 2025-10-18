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
  viewBox="0 0 384 512"
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <path
    d="M298.5 384.1c12.1 1.2 21.5 11.5 21.5 23.9s-9.4 22.6-21.5 23.9l-2.5 .1-80 0 0 88c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-88-80 0c-13.3 0-24-10.7-24-24 0-12.4 9.4-22.6 21.5-23.9l2.5-.1 208 0 2.5 .1zM192 0c106 0 192 86 192 192 0 57.4-25.2 108.8-65.1 144L65.1 336C25.2 300.8 0 249.4 0 192 0 86 86 0 192 0zm32 240c-7.7 0-14.2 5.5-15.7 12.8l-.6 6.4c-1.3 6.3-6.2 11.2-12.5 12.5l-6.4 .6c-7.3 1.5-12.8 8-12.8 15.7 0 8.8 7.2 16 16 16 26.5 0 48-21.5 48-48 0-8.8-7.2-16-16-16zm64-64c-7.7 0-14.2 5.5-15.7 12.8l-.6 6.4c-1.3 6.3-6.2 11.2-12.5 12.5l-6.4 .6c-7.3 1.5-12.8 8-12.8 15.7 0 8.8 7.2 16 16 16 26.5 0 48-21.5 48-48 0-8.8-7.2-16-16-16zm-80-16c-7.7 0-14.2 5.5-15.7 12.8l-.6 6.4c-1.3 6.3-6.2 11.2-12.5 12.5l-6.4 .6c-7.3 1.5-12.8 8-12.8 15.7 0 8.8 7.2 16 16 16 26.5 0 48-21.5 48-48 0-8.8-7.2-16-16-16z"
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
