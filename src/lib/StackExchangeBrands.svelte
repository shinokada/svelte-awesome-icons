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
    d="M18.1 332.3l412.7 0 0 22c0 37.7-29.3 68-65.3 68l-19 0-86.8 89.7 0-89.7-176.3 0c-36 0-65.3-30.3-65.3-68l0-22zm0-23.6l412.7 0 0-85-412.7 0 0 85zm0-109.4l412.7 0 0-85-412.7 0 0 85zM365.4 0L83.4 0c-36 0-65.3 30.3-65.3 67.7l0 22.3 412.7 0 0-22.3C430.7 30.3 401.4 0 365.4 0z"
  />
</svg>
