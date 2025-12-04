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
    d="M91.3 76l186 0-7 18.9-179 0c-39.7 0-71.9 31.6-71.9 70.3l0 205.4c0 35.4 24.9 70.3 84 70.3l0 19.1-12.1 0C41.2 460 0 419.8 0 370.5L0 165.2C0 115.9 40.7 76 91.3 76zM320.4 20l66.5 0c-143.8 378.1-145.7 398.9-184.7 439.3-20.8 21.6-49.3 31.7-78.3 32.7l0-51.1c49.2-7.7 64.6-49.9 64.6-75.3 0-20.1 .6-12.6-82.1-223.2l61.4 0 50.4 156.6 102.2-279zM448 161.5l0 298.5-214 0c6.6-9.6 10.7-16.3 12.1-19.4l182.5 0 0-279.1c0-32.5-17.1-51.9-48.2-62.9L387.1 81c41.7 13.6 60.9 43.1 60.9 80.5z"
  />
</svg>
