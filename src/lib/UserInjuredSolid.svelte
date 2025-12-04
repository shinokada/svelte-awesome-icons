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
    d="M242.7 80L334 80c-10.7-24.6-29.5-44.9-52.9-57.6L242.7 80zm-.9-70.7C236 8.4 230 8 224 8 174.8 8 132.5 37.6 114 80l80.6 0 47.1-70.7zM224 248c66.3 0 120-53.7 120-120l-240 0c0 66.3 53.7 120 120 120zM98.7 341.8C49.3 370.2 16 423.5 16 484.6 16 499.7 28.3 512 43.4 512l151 0-95.8-170.2zm45.1-17.7l42.7 75.9 85.5 0c44.2 0 80 35.8 80 80 0 11.4-2.4 22.2-6.7 32l59.2 0c15.1 0 27.4-12.3 27.4-27.4 0-90.9-73.7-164.6-164.6-164.6l-86.9 0c-12.6 0-24.9 1.4-36.7 4.1zM213.5 448l36 64 22.5 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-58.5 0z"
  />
</svg>
