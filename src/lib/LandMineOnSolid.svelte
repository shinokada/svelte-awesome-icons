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
    d="M312 0l0 128c0 13.3-10.7 24-24 24s-24-10.7-24-24L264 0c0-13.3 10.7-24 24-24s24 10.7 24 24zM160 288c0-17.7 14.3-32 32-32l192 0c17.7 0 32 14.3 32 32l0 32 80 0c26.5 0 48 21.5 48 48l0 96c0 26.5-21.5 48-48 48L80 512c-26.5 0-48-21.5-48-48l0-96c0-26.5 21.5-48 48-48l80 0 0-32zM12 114.7c7.4-11 22.3-14 33.3-6.7l96 64c11 7.4 14 22.3 6.7 33.3s-22.3 14-33.3 6.7l-96-64c-11-7.4-14-22.3-6.7-33.3zM530.7 108c11-7.4 25.9-4.4 33.3 6.7s4.4 25.9-6.7 33.3l-96 64c-11 7.4-25.9 4.4-33.3-6.7s-4.4-25.9 6.7-33.3l96-64z"
  />
</svg>
