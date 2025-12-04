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
    d="M464 256a208 208 0 1 0 -416 0 208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zm118.3 58.2c-4.2-13.7 7.1-26.2 21.4-26.2l232.6 0c14.3 0 25.6 12.5 21.4 26.2-18 58.9-72.9 101.8-137.7 101.8S136.3 373.1 118.3 314.2zM176 180c-15.5 0-28 12.5-28 28l0 8c0 11-9 20-20 20s-20-9-20-20l0-8c0-37.6 30.4-68 68-68s68 30.4 68 68l0 8c0 11-9 20-20 20s-20-9-20-20l0-8c0-15.5-12.5-28-28-28zm132 28l0 8c0 11-9 20-20 20s-20-9-20-20l0-8c0-37.6 30.4-68 68-68s68 30.4 68 68l0 8c0 11-9 20-20 20s-20-9-20-20l0-8c0-15.5-12.5-28-28-28s-28 12.5-28 28z"
  />
</svg>
