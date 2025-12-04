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
    d="M192 64c0-17.7 14.3-32 32-32s32 14.3 32 32l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-96 0 0 64 18.7 0c8.5 0 16.6 3.4 22.6 9.4l22.6 22.6 32 0c88.4 0 160 71.6 160 160 0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32s-14.3-32-32-32l-36.1 0c-20.2 29-53.9 48-91.9 48s-71.7-19-91.9-48L32 352c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l96 0 22.6-22.6c6-6 14.1-9.4 22.6-9.4l18.7 0 0-64-96 0c-17.7 0-32-14.3-32-32S78.3 64 96 64l96 0z"
  />
</svg>
