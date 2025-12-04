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
    d="M0 256c0-46.6 12.5-90.4 34.3-128.9L144.1 318.3c21.9 39.2 63.8 65.7 111.9 65.7 14.3 0 27.1-2.3 40.8-6.6L220.5 509.6C95.9 492.3 0 385.3 0 256zm365.1 65.6c12.3-19.2 18.9-42.5 18.9-65.6 0-38.2-16.8-72.5-43.3-96l152.7 0c12 29.6 18.6 62.1 18.6 96 0 141.4-114.6 255.1-256 256L365.1 321.6zM477.8 128L256 128c-62.9 0-113.7 44.1-125.5 102.7L54.2 98.5C101 38.5 174 0 256 0 350.8 0 433.5 51.5 477.8 128zM344 256a88 88 0 1 1 -176 0 88 88 0 1 1 176 0z"
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
