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
  viewBox="0 0 576 512"
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <path
    d="M400 32c-44.2 0-80 35.8-80 80l0 248.2-297.2 89.2C5.9 454.4-3.7 472.3 1.4 489.2s22.9 26.5 39.8 21.5l315.5-94.6 43.7 0c-.2 2.6-.4 5.3-.4 8 0 48.6 39.4 88 88 88s88-39.4 88-88l0-392-176 0zM528 424c0 22.1-17.9 40-40 40s-40-17.9-40-40 17.9-40 40-40c22.1 0 39.9 17.9 40 39.9l0 .1zM51.9 149.5C18.1 159.8-.9 195.6 9.4 229.4l28.1 91.8C47.8 355 83.6 374 117.4 363.7l91.8-28.1c33.8-10.3 52.8-46.1 42.5-79.9l-28.1-91.8c-10.3-33.8-46.1-52.8-79.9-42.5L51.9 149.5z"
  />
</svg>
