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
    d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zm80 0l64.3 0c8.7 0 15.7-7.1 17.3-15.6 4.4-24.4 18.1-45.5 37.2-59.7 7.4-5.5 10.6-15.6 6-23.6l-32.5-56.3c-4.3-7.5-13.9-10.3-21.2-5.5-48.2 31.5-81.3 84.2-86.3 144.8-.7 8.8 6.5 16 15.3 16zm137.9 89.8c-8.5-3.7-18.8-1.4-23.5 6.6l-31 53.8c-4.3 7.5-1.9 17.2 5.8 21.1 26.1 13.2 55.5 20.7 86.8 20.7s60.7-7.5 86.8-20.7c7.7-3.9 10.1-13.6 5.8-21.1l-31-53.8c-4.6-8-15-10.3-23.5-6.6-11.7 5-24.5 7.8-38.1 7.8s-26.4-2.8-38.1-7.8zM350.4 240.4c1.6 8.6 8.5 15.6 17.3 15.6l64.3 0c8.8 0 16.1-7.2 15.3-16-5-60.6-38.1-113.2-86.3-144.8-7.3-4.8-16.8-2-21.2 5.5L307.3 157c-4.6 8-1.4 18.1 6 23.6 19.1 14.2 32.7 35.4 37.2 59.7zM256 305.7a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"
  />
</svg>
