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
    d="M279.2 55.7C263.9 22.8 230.6 0 192 0 139 0 96 43 96 96 60.7 96 32 124.7 32 160s28.7 64 64 64l320 0c35.3 0 64-28.7 64-64s-28.7-64-64-64l-1.6 0c-7.4-36.5-39.7-64-78.4-64-22.2 0-42.3 9.1-56.8 23.7zM410.6 476.1c20.7 15.6 46 30.7 74.2 34.5 13.1 1.8 25.2-7.5 27-20.6s-7.5-25.2-20.6-27c-15.9-2.1-33.2-11.3-51.7-25.2-38.4-29-90.5-29-129 0-24 18.1-40.7 26.3-54.5 26.3s-30.5-8.2-54.5-26.3c-38.4-29-90.5-29-129 0-18.5 13.9-35.8 23.1-51.7 25.2-13.1 1.8-22.4 13.8-20.6 27s13.8 22.4 27 20.6c28.2-3.8 53.6-18.9 74.2-34.5 21.3-16.1 49.9-16.1 71.2 0 24.2 18.3 52.3 35.9 83.4 35.9s59.1-17.7 83.4-35.9c21.3-16.1 49.9-16.1 71.2 0zM100.1 303.6c4.2-12.6-2.6-26.2-15.2-30.4s-26.2 2.6-30.4 15.2l-21.3 64C29 365 35.8 378.6 48.4 382.8s26.2-2.6 30.4-15.2l21.3-64zm120 0c4.2-12.6-2.6-26.2-15.2-30.4s-26.2 2.6-30.4 15.2l-21.3 64c-4.2 12.6 2.6 26.2 15.2 30.4s26.2-2.6 30.4-15.2l21.3-64zm112 0c4.2-12.6-2.6-26.2-15.2-30.4s-26.2 2.6-30.4 15.2l-21.3 64c-4.2 12.6 2.6 26.2 15.2 30.4s26.2-2.6 30.4-15.2l21.3-64zm120 0c4.2-12.6-2.6-26.2-15.2-30.4s-26.2 2.6-30.4 15.2l-21.3 64c-4.2 12.6 2.6 26.2 15.2 30.4s26.2-2.6 30.4-15.2l21.3-64z"
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
