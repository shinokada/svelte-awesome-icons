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
    d="M464 256a208 208 0 1 0 -416 0 208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zm176.5 64.3C196.1 302.1 223.8 288 256 288s59.9 14.1 79.5 32.3c19 17.8 32.5 41.7 32.5 63.7 0 5.4-2.7 10.4-7.2 13.4s-10.2 3.4-15.2 1.3l-17.2-7.5c-22.8-10-47.5-15.1-72.4-15.1s-49.6 5.2-72.4 15.1l-17.2 7.5c-4.9 2.2-10.7 1.7-15.2-1.3s-7.2-8-7.2-13.4c0-22 13.5-45.9 32.5-63.7zM122.6 159.2c4.5-6.8 13.3-9.2 20.6-5.5l79.6 40c5.4 2.7 8.8 8.2 8.8 14.3s-3.4 11.6-8.8 14.3l-79.6 40c-7.3 3.6-16.1 1.3-20.6-5.5s-3.1-15.9 3.1-21.1L159 208 125.8 180.3c-6.2-5.2-7.6-14.3-3.1-21.1zm263.6 21.1L353 208 386.2 235.7c6.2 5.2 7.6 14.3 3.1 21.1s-13.3 9.2-20.6 5.5l-79.6-40c-5.4-2.7-8.8-8.2-8.8-14.3s3.4-11.6 8.8-14.3l79.6-40c7.3-3.6 16.1-1.3 20.6 5.5s3.1 15.9-3.1 21.1z"
  />
</svg>
