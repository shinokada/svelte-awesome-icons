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
    d="M448 112c8.8 0 16 7.2 16 16l0 256c0 8.8-7.2 16-16 16L64 400c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l384 0zM64 64C28.7 64 0 92.7 0 128L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64L64 64zm88 144l32 0c4.4 0 8 3.6 8 8 0 13.3 10.7 24 24 24s24-10.7 24-24c0-30.9-25.1-56-56-56l-32 0c-30.9 0-56 25.1-56 56l0 80c0 30.9 25.1 56 56 56l32 0c30.9 0 56-25.1 56-56 0-13.3-10.7-24-24-24s-24 10.7-24 24c0 4.4-3.6 8-8 8l-32 0c-4.4 0-8-3.6-8-8l0-80c0-4.4 3.6-8 8-8zm168 8c0-4.4 3.6-8 8-8l32 0c4.4 0 8 3.6 8 8 0 13.3 10.7 24 24 24s24-10.7 24-24c0-30.9-25.1-56-56-56l-32 0c-30.9 0-56 25.1-56 56l0 80c0 30.9 25.1 56 56 56l32 0c30.9 0 56-25.1 56-56 0-13.3-10.7-24-24-24s-24 10.7-24 24c0 4.4-3.6 8-8 8l-32 0c-4.4 0-8-3.6-8-8l0-80z"
  />
</svg>
