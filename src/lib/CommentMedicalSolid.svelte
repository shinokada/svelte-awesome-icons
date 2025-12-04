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
    d="M256 480c141.4 0 256-107.5 256-240S397.4 0 256 0 0 107.5 0 240c0 54.3 19.2 104.3 51.6 144.5L2.8 476.8c-4.8 9-3.3 20 3.6 27.5s17.8 9.8 27.1 5.8l118.4-50.7C183.7 472.6 218.9 480 256 480zM217.6 153.6c0-10.6 8.6-19.2 19.2-19.2l38.4 0c10.6 0 19.2 8.6 19.2 19.2l0 48 48 0c10.6 0 19.2 8.6 19.2 19.2l0 38.4c0 10.6-8.6 19.2-19.2 19.2l-48 0 0 48c0 10.6-8.6 19.2-19.2 19.2l-38.4 0c-10.6 0-19.2-8.6-19.2-19.2l0-48-48 0c-10.6 0-19.2-8.6-19.2-19.2l0-38.4c0-10.6 8.6-19.2 19.2-19.2l48 0 0-48z"
  />
</svg>
