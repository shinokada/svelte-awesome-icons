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
    d="M73.2 512l0-73.1 292.5 0 0-73.2 73.2 0 0-146.3 73.1 0 0-219.4-219.4 0 0 73.1-146.3 0 0 73.2-73.1 0 0 292.6-73.2 0 0 73.1 73.2 0zm73.1-219.4l73.2 0 0 73.1-73.2 0 0-73.1zm73.2-73.1l73.1 0 0 73.1-73.2 0 0-73.2 .1 .1zm73.1 0l0-73.2 73.2 0 0 73.1-73.2 0 0 .1zM365.7 73.1l73.2 0 0 73.2-73.2 0 0-73.2z"
  />
</svg>
