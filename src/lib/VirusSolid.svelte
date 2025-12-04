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
    d="M296 40c0-22.1-17.9-40-40-40s-40 17.9-40 40c0 44.1-53.3 66.1-84.5 35-15.6-15.6-40.9-15.6-56.6 0s-15.6 40.9 0 56.6c31.2 31.2 9.1 84.5-35 84.5-22.1 0-40 17.9-40 40s17.9 40 40 40c44.1 0 66.1 53.3 35 84.5-15.6 15.6-15.6 40.9 0 56.6s40.9 15.6 56.6 0c31.2-31.2 84.5-9.1 84.5 35 0 22.1 17.9 40 40 40s40-17.9 40-40c0-44.1 53.3-66.1 84.5-35 15.6 15.6 40.9 15.6 56.6 0s15.6-40.9 0-56.6c-31.2-31.2-9.1-84.5 35-84.5 22.1 0 40-17.9 40-40s-17.9-40-40-40c-44.1 0-66.1-53.3-35-84.5 15.6-15.6 15.6-40.9 0-56.6s-40.9-15.6-56.6 0C349.3 106.1 296 84.1 296 40zM160 224a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm160 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"
  />
</svg>
