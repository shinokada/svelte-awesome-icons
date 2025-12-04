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
    d="M232 16.1l0-48c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 48c0 13.3 10.7 24 24 24s24-10.7 24-24zM32 168.1l48 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-48 0c-13.3 0-24 10.7-24 24s10.7 24 24 24zM281.5 70.6c9.4 9.4 24.6 9.4 33.9 0l33.9-33.9c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0L281.5 36.6c-9.4 9.4-9.4 24.6 0 33.9zm-181 215l33.9-33.9c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0L66.6 251.6c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0zM66.6 2.7c-9.4 9.4-9.4 24.6 0 33.9l33.9 33.9c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L100.5 2.7C91.1-6.7 76-6.7 66.6 2.7zM352.9 175.4L505 216.2c6.4 1.7 11.1 7.3 11.8 13.9l7.2 74-231.5-62 43.2-60.5c3.9-5.4 10.7-7.9 17.2-6.2zM223.6 228.5l-2.1 2.9c-21.7 5.5-39.9 22.3-46.1 45.5-4.1 15.5-12.4 46.4-24.8 92.7l-8.3 30.9c-4.6 17.1 5.6 34.6 22.6 39.2l15.5 4.1c17.1 4.6 34.6-5.6 39.2-22.6l8.3-30.9 278.2 74.5-8.3 30.9c-4.6 17.1 5.6 34.6 22.6 39.2l15.5 4.1c17.1 4.6 34.6-5.6 39.2-22.6 4.1-15.5 12.4-46.4 24.8-92.7l8.3-30.9c6.2-23.2-1.1-46.8-17.2-62.5l-.3-3.6-10-103c-3.2-33.2-26.7-60.9-58.9-69.5L369.5 113.6c-32.2-8.6-66.4 3.6-85.8 30.8l-60.2 84.2zm48.7 57.8a32 32 0 1 1 -16.6 61.8 32 32 0 1 1 16.6-61.8zm208.1 88.9a32 32 0 1 1 61.8 16.6 32 32 0 1 1 -61.8-16.6z"
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
