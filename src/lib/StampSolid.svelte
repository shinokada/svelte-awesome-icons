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
    d="M312 201.8c0-17.4 9.2-33.2 19.9-47 12.6-16.2 20.1-36.6 20.1-58.8 0-53-43-96-96-96s-96 43-96 96c0 22.1 7.5 42.5 20.1 58.8 10.7 13.8 19.9 29.6 19.9 47 0 29.9-24.3 54.2-54.2 54.2L112 256c-61.9 0-112 50.1-112 112 0 26.5 21.5 48 48 48l416 0c26.5 0 48-21.5 48-48 0-61.9-50.1-112-112-112l-33.8 0c-29.9 0-54.2-24.3-54.2-54.2zM56 464c-13.3 0-24 10.7-24 24s10.7 24 24 24l400 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L56 464z"
  />
</svg>
