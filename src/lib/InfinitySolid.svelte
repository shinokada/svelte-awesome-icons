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
  viewBox="0 0 640 512"
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <path
    d="M0 256c0-88.4 71.6-160 160-160 50.4 0 97.8 23.7 128 64l32 42.7 32-42.7c30.2-40.3 77.6-64 128-64 88.4 0 160 71.6 160 160S568.4 416 480 416c-50.4 0-97.8-23.7-128-64l-32-42.7-32 42.7c-30.2 40.3-77.6 64-128 64-88.4 0-160-71.6-160-160zm280 0l-43.2-57.6c-18.1-24.2-46.6-38.4-76.8-38.4-53 0-96 43-96 96s43 96 96 96c30.2 0 58.7-14.2 76.8-38.4L280 256zm80 0l43.2 57.6c18.1 24.2 46.6 38.4 76.8 38.4 53 0 96-43 96-96s-43-96-96-96c-30.2 0-58.7 14.2-76.8 38.4L360 256z"
  />
</svg>
