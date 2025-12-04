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
    d="M17.4 160.4l-10.4 191.6 43.9 0 5.6-79.8 27.9 79.8 44.7 0 25.5-77.4 4.8 77.4 45.5 0-12.8-191.6-45.5 0-40.7 117.3-42.3-117.3-46.3 0zm281 0l-47.9 0 0 191.6 47.9 0s95 .8 94.2-95.8c-.8-94.2-94.2-95.8-94.2-95.8l0 0zm-1.2 146.5l0-102.1s46 4.3 46.8 50.6-46.8 51.5-46.8 51.5l0 0zm238.3-74.2c7.2-11.4 10-25 8-38.3-5.3-35.8-55.1-34.3-55.1-34.3l-51.9 0 0 191.6 45.5 0s87 4.8 87-63.8c0-43.1-33.5-55.1-33.5-55.1l0 0zm-51.9-31.9s13.6-1.6 16 9.6c1.4 6.7-4 12-4 12l-12 0 0-21.6zm-.1 109.5l.1-24.9 0-18.2 .1 0s41.6-4.7 41.2 22.4c-.3 25.7-41.3 20.7-41.3 20.7l0 0z"
  />
</svg>
