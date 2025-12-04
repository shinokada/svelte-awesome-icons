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
  viewBox="0 0 384 512"
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <path
    d="M192 0c-13.3 0-24 10.7-24 24l0 41.5C73.3 77.3 0 158.1 0 256S73.3 434.7 168 446.5l0 41.5c0 13.3 10.7 24 24 24s24-10.7 24-24l0-41.5c94.7-11.8 168-92.6 168-190.5 0-17.7-14.3-32-32-32l-136 0 0-93.8c25.3 4.8 47.9 17 65.6 34.3 12.6 12.4 32.9 12.2 45.3-.4s12.2-32.9-.5-45.3C297.2 90.2 258.8 70.8 216 65.5L216 24c0-13.3-10.7-24-24-24zM168 130.2l0 251.5C108.8 370.5 64 318.5 64 256s44.8-114.5 104-125.8zm48 251.5l0-93.8 100 0c-12.3 47.6-51.2 84.5-100 93.8z"
  />
</svg>
