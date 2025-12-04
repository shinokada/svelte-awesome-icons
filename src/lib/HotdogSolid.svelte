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
    d="M288 0c-20.5 0-40.1 8.1-54.6 22.6L22.6 233.4C8.1 247.9 0 267.5 0 288 0 300.2 2.9 312.1 8.2 322.7L322.7 8.2C312.1 2.9 300.2 0 288 0zM224 512c20.5 0 40.1-8.1 54.6-22.6L489.4 278.6c14.5-14.5 22.6-34.1 22.6-54.6 0-12.2-2.9-24.1-8.2-34.7L189.3 503.8c10.7 5.4 22.6 8.2 34.7 8.2zM456.6 168.6c31.2-31.2 31.2-81.9 0-113.1s-81.9-31.2-113.1 0l-288 288c-31.2 31.2-31.2 81.9 0 113.1s81.9 31.2 113.1 0l288-288z"
  />
</svg>
