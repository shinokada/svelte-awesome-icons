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
    d="M256 0C114.6 0 0 114.6 0 256L0 448c0 35.3 28.7 64 64 64l42.8 0c-6.6-5.9-10.8-14.4-10.8-24l0-113.1c0-13.5 3.1-26.8 9-38.9l39.7-80.8c9.4-19.1 28.9-31.3 50.2-31.3L317 224c21.3 0 40.8 12.1 50.2 31.3L407 336c5.9 12.1 9 25.4 9 38.9L416 488c0 9.6-4.2 18.1-10.8 24l42.8 0c35.3 0 64-28.7 64-64l0-192C512 114.6 397.4 0 256 0zM362.8 512c-6.6-5.9-10.8-14.4-10.8-24l0-24-192 0 0 24c0 9.6-4.2 18.1-10.8 24l213.7 0zm-175-235.5l-29.3 59.5 194.9 0-29.3-59.5c-1.3-2.7-4.1-4.5-7.2-4.5L195 272c-3 0-5.8 1.7-7.2 4.5zM176 424a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm184-24a24 24 0 1 0 -48 0 24 24 0 1 0 48 0z"
  />
</svg>
