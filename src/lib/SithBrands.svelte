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
  viewBox="0 0 448 512"
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <path
    d="M0 32l69.7 118.8-58.9-11.5 69.8 91c-3 17-3 34.4 0 51.4l-69.8 91 58.9-11.5-69.7 118.8 118.8-69.7-11.5 58.9 91-69.8c17 3 34.5 3 51.5 0l91 69.8-11.5-58.9 118.7 69.7-69.7-118.8 58.9 11.5-69.8-91c3-17 3-34.4 0-51.4l69.8-91-58.9 11.5 69.7-118.8-118.7 69.7 11.5-58.9-91.1 69.9c-8.5-1.5-17.1-2.3-25.7-2.3s-17.2 .8-25.7 2.3L107.2 42.8 118.8 101.7 0 32zM224 380.2a124.2 124.2 0 1 1 0-248.4 124.2 124.2 0 1 1 0 248.4zm0-211.8a87.6 87.6 0 1 0 0 175.1 87.6 87.6 0 1 0 0-175.1z"
  />
</svg>
