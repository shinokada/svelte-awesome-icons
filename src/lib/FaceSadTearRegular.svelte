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
    d="M464 256c0-114.9-93.1-208-208-208S48 141.1 48 256c0 41.8 12.3 80.7 33.6 113.3 8.2 44.7 47.3 78.6 94.3 78.7 24.7 10.3 51.7 16 80.1 16 114.9 0 208-93.1 208-208zM288 352c-5.5 0-10.9 .6-16 1.8 0-.6 0-1.2 0-1.8 0-16.2-4-31.5-11.1-44.9 8.7-2 17.8-3.1 27.1-3.1 40.2 0 75.7 19.8 97.5 50 7.7 10.8 5.3 25.8-5.5 33.5s-25.8 5.3-33.5-5.5c-13.1-18.2-34.4-30-58.5-30zM0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zm176-80a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm128 32a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM185.4 276.8c6.5 7.8 12.6 16.1 18.3 24.6 9 13.4 20.3 30.2 20.3 47.4 0 28.3-21.5 51.2-48 51.2s-48-22.9-48-51.2c0-17.2 11.2-34 20.3-47.4 5.7-8.5 11.9-16.7 18.3-24.6 2.4-2.9 5.7-4.8 9.4-4.8s7 1.9 9.4 4.8z"
  />
</svg>
