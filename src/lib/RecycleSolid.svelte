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
    d="M152.3 60C198.5-20 314-20 360.2 60l37.3 64.6 27.7-16c8.4-4.9 18.9-4.2 26.6 1.7s11.1 15.9 8.6 25.3L436.9 223c-3.4 12.8-16.6 20.4-29.4 17l-87.4-23.4c-9.4-2.5-16.3-10.4-17.6-20s3.4-19.1 11.8-23.9l27.7-16-37.3-64.6c-21.6-37.3-75.4-37.3-97 0l-5.3 9.1c-8.8 15.3-28.4 20.5-43.7 11.7S138.2 84.5 147 69.1l5.3-9.1zM449.7 279.1c15.3-8.8 34.9-3.6 43.7 11.7l5.3 9.1c46.2 80-11.5 180-103.9 180l-74.6 0 0 32c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-64-64c-9.4-9.4-9.4-24.6 0-33.9l64-64c6.9-6.9 17.2-8.9 26.2-5.2s14.8 12.5 14.8 22.2l0 32 74.6 0c43.1 0 70.1-46.7 48.5-84l-5.3-9.1c-8.8-15.3-3.6-34.9 11.7-43.7zM51 235.4l-27.7-16c-8.4-4.9-13.1-14.3-11.8-23.9s8.2-17.5 17.6-20L116.5 152c12.8-3.4 26 4.2 29.4 17l23.4 87.4c2.5 9.4-.9 19.3-8.6 25.3s-18.2 6.6-26.6 1.7l-27.7-16-37.3 64.6c-21.6 37.3 5.4 84 48.5 84l10.6 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-10.6 0C25.3 480-32.4 380 13.8 300L51 235.4z"
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
