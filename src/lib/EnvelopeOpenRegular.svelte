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
    d="M512 416c0 35.3-28.5 64-63.9 64L64 480c-35.4 0-64-28.7-64-64L0 164c.1-15.5 7.8-30 20.5-38.8L206-2.7c30.1-20.7 69.8-20.7 99.9 0L491.5 125.2c12.8 8.8 20.4 23.3 20.5 38.8l0 252zM64 432l384.1 0c8.8 0 15.9-7.1 15.9-16l0-191.7-154.8 117.4c-31.4 23.9-74.9 23.9-106.4 0L48 224.3 48 416c0 8.9 7.2 16 16 16zM463.6 164.4L278.7 36.8c-13.7-9.4-31.7-9.4-45.4 0L48.4 164.4 231.8 303.5c14.3 10.8 34.1 10.8 48.4 0L463.6 164.4z"
  />
</svg>
