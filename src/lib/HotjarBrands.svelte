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
    d="M361.8 0c0 131.6-80.7 176.8-140.2 209.4-.6 .3-1.1 .6-1.6 .9-53.8 30.2-88.7 49.8-89.6 122l-98.1 0c0-131.5 80.7-176.7 140.2-209.3 54.8-29.8 90.3-50 90.3-123l99 0zM301.3 302.6c54.8-29.8 90.3-50 90.3-123l98 0c0 131.6-80.7 176.7-140.2 209.4-54.8 29.8-90.3 50-90.3 123l-98 0c0-131.6 80.7-176.8 140.2-209.4z"
  />
</svg>
