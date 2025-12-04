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
    d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512zM176 376c0 13.3 10.7 24 24 24l112 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-112 0c-13.3 0-24 10.7-24 24zM160 264c-22.1 0-40-17.9-40-40 0-9.5 3.3-18.1 8.8-25 3.2 14.3 16 25 31.2 25s28-10.7 31.2-25c5.5 6.8 8.8 15.5 8.8 25 0 22.1-17.9 40-40 40zm0 40a80 80 0 1 0 0-160 80 80 0 1 0 0 160zm192-40c-22.1 0-40-17.9-40-40 0-9.5 3.3-18.1 8.8-25 3.2 14.3 16 25 31.2 25s28-10.7 31.2-25c5.5 6.8 8.8 15.5 8.8 25 0 22.1-17.9 40-40 40zm0 40a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"
  />
</svg>
