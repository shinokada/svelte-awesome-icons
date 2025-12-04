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
    d="M378.6 78.9c-2.8-.1-5.6-.2-8.5-.2l-264.1 0 143.2-72c7.4-4.4 18.8-6.7 30.4-6.7 13.5 0 29.4 9.2 37 16.8l62 62 0 .1zM107.3 96.5l262.8 0c16 0 25.4 1.4 35.4 9.3l106.5 106.4 0 208.8-79.3 .7-325.4-325.2zM96.5 373l0-262.2 323.8 323.8 .7 77.4-212.2 0-98.1-98.2C99.4 402.5 96.5 398.5 96.5 373zM78.7 105.3l0 267.7c0 3.3 .1 6.3 .2 9.1l-62-62C6.5 309.3 0 294.3 0 279.6 0 272.8 3.9 262.1 6.7 256l72-150.7z"
  />
</svg>
