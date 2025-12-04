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
  viewBox="0 0 576 512"
>
  {#if title?.id && title.title}
    <title id={title.id}>{title.title}</title>
  {/if}
  {#if desc?.id && desc.desc}
    <desc id={desc.id}>{desc.desc}</desc>
  {/if}
  <path
    d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zm224 72a56 56 0 1 1 0 112 56 56 0 1 1 0-112zm0 152c53 0 96 43 96 96l0 24c0 13.3-10.7 24-24 24l-144 0c-13.3 0-24-10.7-24-24l0-24c0-53 43-96 96-96zm96-64a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM168 272.3c-15.2 22.8-24 50.2-24 79.7l0 24c0 8.4 1.4 16.5 4.1 24l-46.8 0C89.6 400 80 390.4 80 378.7L80 368c0-50.3 38.7-91.6 88-95.7zM427.9 400c2.7-7.5 4.1-15.6 4.1-24l0-24c0-29.5-8.8-56.9-24-79.7 49.3 4.1 88 45.3 88 95.7l0 10.7c0 11.8-9.6 21.3-21.3 21.3l-46.8 0zM96 192a48 48 0 1 1 96 0 48 48 0 1 1 -96 0z"
  />
</svg>
