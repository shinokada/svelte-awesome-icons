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
    d="M176 56c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 38.1-63-63c-9.4-9.4-24.6-9.4-33.9 0S21.7 55.6 31 65l63 63-38.1 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l96 0c13.3 0 24-10.7 24-24l0-96zm0 400l0-96c0-13.3-10.7-24-24-24l-96 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l38.1 0-63 63c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l63-63 0 38.1c0 13.3 10.7 24 24 24s24-10.7 24-24zm312 24c13.3 0 24-10.7 24-24l0-38.1 63 63c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-63-63 38.1 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-96 0c-13.3 0-24 10.7-24 24l0 96c0 13.3 10.7 24 24 24zM464 56l0 96c0 13.3 10.7 24 24 24l96 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-38.1 0 63-63c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-63 63 0-38.1c0-13.3-10.7-24-24-24s-24 10.7-24 24zM320 120c-57.3 0-99.4 34-125.6 64.3-20 23.1-32.4 45.8-37.6 56.1-2.5 5-4.9 9.7-4.9 15.6s2.3 10.6 4.9 15.6c5.2 10.3 17.6 33 37.6 56.1 26.2 30.3 68.2 64.3 125.6 64.3s99.4-34 125.6-64.3c20-23.1 32.4-45.8 37.6-56.1 2.5-5 4.9-9.7 4.9-15.6s-2.3-10.6-4.9-15.6c-5.2-10.3-17.6-33-37.6-56.1-26.2-30.3-68.2-64.3-125.6-64.3zM256 256a64 64 0 1 1 128 0 64 64 0 1 1 -128 0z"
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
